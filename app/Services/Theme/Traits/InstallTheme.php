<?php

namespace App\Services\Theme\Traits;

use App\Helpers\Classes\Helper;
use App\Models\Extension;
use Exception;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use ZipArchive;

trait InstallTheme
{

    public function install(string $extensionSlug): bool|array
    {
        if ($extensionSlug === 'default') {
            setting([
                'front_theme' => 'default',
                'dash_theme'  => 'default',
            ])->save();

            Artisan::call('optimize:clear');

            return [
                'success' => true,
                'status'  => true,
                'message' => trans('Theme installed successfully'),
            ];
        }

        $apiToken = env('THEME_API_TOKEN');

        if (empty($apiToken)) {
        throw new Exception('Theme API token is missing. Please set THEME_API_TOKEN in your .env file.');
        }

        
        // First, list files to check if theme exists
        $listUrl = "https://magic.zoomnearby.com/git-magic.php?api_token={$apiToken}&path=magic-ai-themes&format=json&action=list";

        // Check if the theme zip exists
        $zipFileName = $extensionSlug . '.zip';
        $fileExists = $this->checkThemeFileExists($listUrl, $zipFileName);
        
        if (!$fileExists) {
            return [
                'status'  => false,
                'message' => trans("Theme zip '{$zipFileName}' not found remotely for slug {$extensionSlug}"),
            ];
        }

        // Download the theme using the secure API
        $downloadUrl = "https://magic.zoomnearby.com/git-magic.php?api_token={$apiToken}&path=magic-ai-themes&format=json&action=download&file=" . urlencode($zipFileName);
        
        $tmpZipPath = storage_path("app/{$extensionSlug}.zip");

        try {
            $response = Http::timeout(120)->get($downloadUrl);
            
            if (!$response->ok()) {
                Log::error("Theme download failed with status: " . $response->status());
                return [
                    'status'  => false,
                    'message' => trans("Failed to download theme. HTTP Status: ") . $response->status(),
                ];
            }

            // Check if we got a valid zip file
            $content = $response->body();
            if (empty($content) || strlen($content) < 100) {
                return [
                    'status'  => false,
                    'message' => trans("Downloaded theme file is empty or too small"),
                ];
            }

            // Validate it's a zip file by checking first bytes
            if (strlen($content) > 4) {
                $header = unpack('H*', substr($content, 0, 4));
                if ($header[1] !== '504b0304') { // ZIP file signature
                    // Maybe it's a JSON error response instead of a zip file
                    $jsonResponse = json_decode($content, true);
                    if ($jsonResponse && isset($jsonResponse['error'])) {
                        return [
                            'status'  => false,
                            'message' => trans("Download error: ") . $jsonResponse['error'],
                        ];
                    }
                    return [
                        'status'  => false,
                        'message' => trans("Downloaded file is not a valid theme ZIP archive"),
                    ];
                }
            }

            file_put_contents($tmpZipPath, $content);
            Log::info("Theme [{$extensionSlug}] downloaded from {$downloadUrl} -> saved as {$tmpZipPath}");

        } catch (Exception $e) {
            Log::error("Theme download exception: " . $e->getMessage());
            return [
                'status'  => false,
                'message' => trans("Download error: ") . $e->getMessage(),
            ];
        }

        // Verify the zip file is valid
        if (!file_exists($tmpZipPath) || filesize($tmpZipPath) === 0) {
            return [
                'status'  => false,
                'message' => trans('Downloaded theme zip file is empty or missing'),
            ];
        }

        $zip = new ZipArchive();
        $zipOpenResult = $zip->open($tmpZipPath);
        
        if ($zipOpenResult !== true) {
            $errorMessages = [
                ZipArchive::ER_EXISTS => 'File already exists',
                ZipArchive::ER_INCONS => 'Zip archive inconsistent',
                ZipArchive::ER_INVAL => 'Invalid argument',
                ZipArchive::ER_MEMORY => 'Malloc failure',
                ZipArchive::ER_NOENT => 'No such file',
                ZipArchive::ER_NOZIP => 'Not a zip archive',
                ZipArchive::ER_OPEN => 'Can\'t open file',
                ZipArchive::ER_READ => 'Read error',
                ZipArchive::ER_SEEK => 'Seek error',
            ];
            
            $errorMessage = $errorMessages[$zipOpenResult] ?? "Unknown error ({$zipOpenResult})";
            
            // Clean up invalid file
            if (file_exists($tmpZipPath)) {
                unlink($tmpZipPath);
            }
            
            return [
                'status'  => false,
                'message' => trans('Failed to open downloaded theme zip file: ') . $errorMessage,
            ];
        }

        $this->zipExtractPath = storage_path('app/zip-extract');

        // Clean up existing extraction directory
        if (is_dir($this->zipExtractPath)) {
            (new Filesystem)->deleteDirectory($this->zipExtractPath);
        }

        // Create extraction directory
        if (!is_dir($this->zipExtractPath)) {
            mkdir($this->zipExtractPath, 0755, true);
        }

        // Extract zip file
        if (!$zip->extractTo($this->zipExtractPath)) {
            $zip->close();
            if (file_exists($tmpZipPath)) {
                unlink($tmpZipPath);
            }
            return [
                'status'  => false,
                'message' => trans('Failed to extract theme zip file'),
            ];
        }
        
        $zip->close();

        try {
            // Load index.json
            $this->getIndexJson();
            if (empty($this->indexJsonArray)) {
                throw new Exception(trans('index.json not found in the theme'));
            }

            $theme = data_get($this->indexJsonArray, 'slug');
            if (!$theme) {
                throw new Exception(trans('Theme slug not found in index.json'));
            }

            // Copy files
            $files = Storage::disk('local')->allFiles('zip-extract');
            foreach ($files as $file) {
                $replaceDirName = "/$theme/";

                if (Str::contains($file, 'zip-extract/public/assets')) {
                    $this->copyThemeFile($file, $replaceDirName, 'themes');
                } elseif (Str::contains($file, 'zip-extract/public/build')) {
                    $this->copyThemeFile($file, '', 'build');
                } else {
                    $this->copyThemeFile($file, $replaceDirName);
                }
            }

            // Cleanup temporary files
            if (file_exists($tmpZipPath)) {
                unlink($tmpZipPath);
            }
            if (is_dir($this->zipExtractPath)) {
                (new Filesystem)->deleteDirectory($this->zipExtractPath);
            }

            // Update database
            Extension::query()->where('slug', $extensionSlug)
                ->update([
                    'installed' => 1,
                    'version'   => data_get($this->indexJsonArray, 'version', '1.0'),
                ]);

            $item = $this->extensionRepository->find($extensionSlug);
            $folderName = data_get($this->indexJsonArray, 'slug');

            if ($item['theme_type'] === 'Frontend') {
                setting(['front_theme' => $folderName])->save();
            } elseif ($item['theme_type'] === 'Dashboard') {
                setting(['dash_theme' => $folderName])->save();
            } else {
                setting(['front_theme' => $folderName, 'dash_theme' => $folderName])->save();
            }

            Artisan::call('optimize:clear');

            return [
                'success' => true,
                'status'  => true,
                'message' => trans('Theme installed successfully'),
            ];

        } catch (Exception $e) {
            // Cleanup on error
            if (file_exists($tmpZipPath)) {
                unlink($tmpZipPath);
            }
            if (is_dir($this->zipExtractPath)) {
                (new Filesystem)->deleteDirectory($this->zipExtractPath);
            }
            
            Log::error("Theme installation error for {$extensionSlug}: " . $e->getMessage());
            return [
                'status'  => false,
                'message' => trans('Theme installation failed: ') . $e->getMessage(),
            ];
        }
    }

    /**
     * Check if theme file exists by listing directory contents
     */
    protected function checkThemeFileExists(string $listUrl, string $fileName): bool
    {
        try {
            $response = Http::timeout(30)->get($listUrl);
            
            if (!$response->ok()) {
                Log::error("Theme file list request failed: " . $response->status());
                return false;
            }

            $data = $response->json();
            
            if (!isset($data['status']) || !$data['status'] || !isset($data['files'])) {
                Log::error("Invalid response format from theme file list");
                return false;
            }

            // Check if our file exists in the list
            foreach ($data['files'] as $file) {
                if (isset($file['name']) && $file['name'] === $fileName) {
                    Log::info("Theme file found: {$fileName}");
                    return true;
                }
            }

            Log::error("Theme file not found in list: {$fileName}");
            return false;

        } catch (Exception $e) {
            Log::error("Theme file existence check failed: " . $e->getMessage());
            return false;
        }
    }

    /**
     * Fallback method for direct GitHub URL (if needed)
     */
    protected function downloadFromGitHub(string $extensionSlug): string|false
    {
        $githubUrl = "https://raw.githubusercontent.com/prakash111/magic-ai/magicai/magic-ai-themes/{$extensionSlug}.zip";
        
        try {
            $response = Http::timeout(60)->get($githubUrl);
            if ($response->ok()) {
                $tmpPath = storage_path("app/{$extensionSlug}.zip");
                file_put_contents($tmpPath, $response->body());
                return $tmpPath;
            }
        } catch (Exception $e) {
            Log::warning("GitHub fallback download failed: " . $e->getMessage());
        }
        
        return false;
    }

    public function copyThemeFile(string $path = '', string $replace = '', string $disk = 'views'): void
    {
        $newPath = str_replace(['zip-extract/theme/', 'zip-extract/public/', 'zip-extract/'], $replace, $path);

        if ($disk === 'build') {
            $newPath = str_replace('build', '', $newPath);
        }

        $content = Storage::disk('local')->get($path);
        Storage::disk($disk)->put($newPath, $content);
    }

    protected function getIndexJson(): void
    {
        $indexJsonPath = $this->zipExtractPath . '/index.json';
        
        // Try multiple possible locations for index.json
        $possiblePaths = [
            $indexJsonPath,
            $this->zipExtractPath . '/theme/index.json',
            $this->zipExtractPath . '/public/index.json',
        ];
        
        foreach ($possiblePaths as $path) {
            if (file_exists($path)) {
                $jsonContent = file_get_contents($path);
                $this->indexJsonArray = json_decode($jsonContent, true) ?: [];
                return;
            }
        }
        
        // If not found in any location, check all files
        $files = Storage::disk('local')->allFiles('zip-extract');
        foreach ($files as $file) {
            if (str_contains($file, 'index.json')) {
                $content = Storage::disk('local')->get($file);
                $this->indexJsonArray = json_decode($content, true) ?: [];
                if (!empty($this->indexJsonArray)) {
                    return;
                }
            }
        }
        
        $this->indexJsonArray = [];
    }
}
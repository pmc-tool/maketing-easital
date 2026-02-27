<?php

namespace App\Services\Extension\Traits;

use App\Models\Extension;
use Exception;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;
use ZipArchive;

trait InstallExtension
{
    /**
     * Install or update extension
     */
    public function install(string $extensionSlug): array
    {
        $this->extensionSlug = $extensionSlug;
        $apiToken = env('EXTENSION_API_TOKEN');

        if (empty($apiToken)) {
            throw new Exception('Theme API token is missing. Please set EXTENSION_API_TOKEN in your .env file.');
        }

        $listUrl = "https://magic.zoomnearby.com/git-magic.php?api_token={$apiToken}&path=extensions_zip&format=json&action=list";

        try {
            $listResponse = Http::timeout(30)->get($listUrl);

            if (!$listResponse->ok()) {
                return [
                    'status' => false,
                    'message' => "Failed to fetch remote extension list. HTTP Status: {$listResponse->status()}, Response: " . $listResponse->body()
                ];
            }

            $listData = json_decode($listResponse->body(), true);

            if (isset($listData['error'])) {
                return [
                    'status' => false,
                    'message' => "Remote API error: " . $listData['error']
                ];
            }

            if (!is_array($listData)) {
                return [
                    'status' => false,
                    'message' => "Unexpected response from API while listing extensions: " . $listResponse->body()
                ];
            }

            $zipFileName = $extensionSlug . '.zip';
            $fileExists = in_array($zipFileName, $listData);

            if (!$fileExists) {
                return [
                    'status' => false,
                    'message' => "Extension zip '{$zipFileName}' not found remotely for slug {$extensionSlug}"
                ];
            }
        } catch (Exception $e) {
            return [
                'status' => false,
                'message' => "Error connecting to remote API: " . $e->getMessage()
            ];
        }

        // --- Download Step ---
        $downloadUrl = "https://magic.zoomnearby.com/git-magic.php?api_token={$apiToken}&path=extensions_zip&format=json&action=download&file=" . urlencode($zipFileName);
        $tmpZipPath = storage_path("app/" . $extensionSlug . ".zip");

        try {
    $response = Http::timeout(120)->get($downloadUrl);

    if (!$response->ok()) {
        return array(
            'status' => false,
            'message' => "Failed to download extension. HTTP Status: {$response->status()}, Response: " . $response->body()
        );
    }

    $content = $response->body();

    $jsonCheck = json_decode($content, true);
    if (is_array($jsonCheck) && isset($jsonCheck['error'])) {
        return array(
            'status' => false,
            'message' => "Download error: " . $jsonCheck['error']
        );
    }

    if (empty($content) || strlen($content) < 100) {
        return array(
            'status' => false,
            'message' => "Downloaded file is empty or too small"
        );
    }

    File::put($tmpZipPath, $content);
    Log::info("Extension [{$extensionSlug}] downloaded from {$downloadUrl} -> saved as {$tmpZipPath}");
} catch (Exception $e) {
    return array(
        'status' => false,
        'message' => "Download error: " . $e->getMessage()
    );
}

// --- Validate & Extract Zip ---
if (!File::exists($tmpZipPath) || File::size($tmpZipPath) === 0) {
    return array(
        'status' => false,
        'message' => 'Downloaded zip file is empty or missing'
    );
}

$zipArchive = new ZipArchive();
$zipOpenResult = $zipArchive->open($tmpZipPath);


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

            return [
                'status' => false,
                'message' => 'Failed to open downloaded zip file: ' . $errorMessage
            ];
        }

        $zipExtractBase = storage_path('app/zip-extract/' . $extensionSlug);

// Clean previous extraction
if (File::isDirectory($zipExtractBase)) {
    File::deleteDirectory($zipExtractBase);
}
File::makeDirectory($zipExtractBase, 0755, true);

// Extract zip
if (!$zipArchive->extractTo($zipExtractBase)) {
    return [
        'status' => false,
        'message' => 'Failed to extract zip file'
    ];
}

$zipArchive->close();

// --- Automatically fix top-level folder name ---
$folders = File::directories($zipExtractBase);

if (count($folders) === 1) {
    $originalFolder = $folders[0];
    $correctFolder = $zipExtractBase . DIRECTORY_SEPARATOR . Str::studly($extensionSlug);

    // Rename folder if it doesn't match the correct case
    if (basename($originalFolder) !== basename($correctFolder)) {
        File::move($originalFolder, $correctFolder);
    }

    // Update path for later usage
    $zipExtractPath = $correctFolder;
} else {
    // If no folders or multiple folders exist, use base extraction path
    $zipExtractPath = $zipExtractBase;
}

// --- Now load extension.json safely ---
$extensionJsonPath = $zipExtractPath . DIRECTORY_SEPARATOR . 'extension.json';
$indexJsonArray = File::exists($extensionJsonPath) ? json_decode(File::get($extensionJsonPath), true) : [];

if (empty($indexJsonArray)) {
    return [
        'status' => false,
        'message' => 'extension.json not found in downloaded zip'
    ];
}

Log::info("Extension JSON loaded: " . json_encode($indexJsonArray));


        try {
            // Load extension.json first and store it in a local variable
            $extensionJsonPath = $zipExtractPath . DIRECTORY_SEPARATOR . 'extension.json';
            $indexJsonArray = File::exists($extensionJsonPath) ? json_decode(File::get($extensionJsonPath), true) : [];
            
            if (empty($indexJsonArray)) {
                return [
                    'status' => false,
                    'message' => 'extension.json not found in downloaded zip'
                ];
            }

            Log::info("Extension JSON loaded: " . json_encode($indexJsonArray));

            // Initialize the class property safely
            if (property_exists($this, 'indexJsonArray')) {
                $this->indexJsonArray = $indexJsonArray;
            }

            // Delete old version files
            $this->deleteOldVersionFiles($extensionSlug);

            // Copy extension files
            $extensionDir = app_path('Extensions/' . Str::studly($extensionSlug));
            if (!File::isDirectory($extensionDir)) {
                File::makeDirectory($extensionDir, 0755, true);
            }

            File::copyDirectory($zipExtractPath, $extensionDir);

            // Create resource directory
            $this->makeDir($extensionSlug);

            // Run install queries
            $this->runInstallQuery($zipExtractPath, $indexJsonArray);

            // Copy resources
            $this->copyResource($zipExtractPath, $extensionSlug, $indexJsonArray);

            // Copy route
            $this->copyRoute($zipExtractPath, $indexJsonArray);

            // Copy controllers
            $this->copyControllers($zipExtractPath, $indexJsonArray);

            // Copy files
            $this->copyFiles($zipExtractPath, $indexJsonArray);

            // FIXED: Run migrations using the same approach as /update-manual
            $this->runMigrationsProperly();

            // Cleanup
            File::deleteDirectory($zipExtractPath);
            File::delete($tmpZipPath);

            // Update extension record
            $normalizedVersion = $this->normalizeVersion($indexJsonArray['version'] ?? '1.0');
            Extension::query()->updateOrCreate(
                ['slug' => $extensionSlug],
                [
                    'installed' => 1,
                    'version'   => $normalizedVersion,
                ]
            );

            // Clear caches using the same approach as /update-manual
            $this->clearCachesLikeUpdateManual();

            return [
                'success' => true,
                'status' => true,
                'message' => 'Extension installed/updated successfully',
                'version' => $normalizedVersion
            ];
        } catch (Exception $e) {
            if (File::exists($tmpZipPath)) File::delete($tmpZipPath);
            if (File::isDirectory($zipExtractPath)) File::deleteDirectory($zipExtractPath);

            return [
                'status' => false,
                'message' => 'Installation failed: ' . $e->getMessage()
            ];
        }
    }

    /**
     * FIXED: Run migrations using the same approach as /update-manual
     */
    protected function runMigrationsProperly(): void
    {
        try {
            Log::info("Running migrations using update-manual approach...");

            // Clear cache files like /update-manual does
            $packageCache = base_path('bootstrap/cache/packages.php');
            $servicesCache = base_path('bootstrap/cache/services.php');

            if (file_exists($packageCache)) {
                unlink($packageCache);
                Log::info("Deleted package cache: {$packageCache}");
            }

            if (file_exists($servicesCache)) {
                unlink($servicesCache);
                Log::info("Deleted services cache: {$servicesCache}");
            }

            // Clear all caches first
            Artisan::call('cache:clear');
            Artisan::call('config:clear');
            Artisan::call('route:clear');
            Artisan::call('view:clear');

            // Run migrations with proper error handling
            $exitCode = Artisan::call('migrate', ['--force' => true]);
            $output = Artisan::output();

            Log::info("Migration exit code: {$exitCode}");
            Log::info("Migration output: " . $output);

            if ($exitCode !== 0) {
                throw new Exception("Migration failed with exit code: {$exitCode}. Output: {$output}");
            }

            Log::info("Migrations completed successfully");

        } catch (Exception $e) {
            Log::error("Migration process failed: " . $e->getMessage());
            throw new Exception("Migration failed: " . $e->getMessage());
        }
    }

    /**
     * FIXED: Clear caches using the same approach as /update-manual
     */
    protected function clearCachesLikeUpdateManual(): void
    {
        try {
            Log::info("Clearing caches like update-manual...");

            // Clear the same cache files as /update-manual
            $packageCache = base_path('bootstrap/cache/packages.php');
            $servicesCache = base_path('bootstrap/cache/services.php');
            $configCache = base_path('bootstrap/cache/config.php');

            $cacheFiles = [$packageCache, $servicesCache, $configCache];
            
            foreach ($cacheFiles as $cacheFile) {
                if (file_exists($cacheFile)) {
                    unlink($cacheFile);
                    Log::info("Deleted cache file: {$cacheFile}");
                }
            }

            // Run artisan cache commands
            Artisan::call('cache:clear');
            Artisan::call('config:clear');
            Artisan::call('route:clear');
            Artisan::call('view:clear');
            Artisan::call('optimize:clear');

            Log::info("All caches cleared successfully using update-manual approach");

        } catch (Exception $e) {
            Log::error("Cache clearing failed: " . $e->getMessage());
        }
    }

    /**
     * Clear all caches (backward compatibility)
     */
    protected function clearAllCaches(): void
    {
        $this->clearCachesLikeUpdateManual();
    }

    /**
     * Run migrations (backward compatibility)
     */
    protected function runMigrations(string $extensionSlug): void
    {
        $this->runMigrationsProperly();
    }

    /**
     * Run install queries
     */
    protected function runInstallQuery(string $zipExtractPath, array $indexJsonArray): void
    {
        $data = data_get($indexJsonArray, 'migrations.install', []);
        
        if (empty($data)) {
            Log::info("No install queries found");
            return;
        }

        foreach ($data as $value) {
            $table = data_get($value, 'condition.table');
            $no_table = data_get($value, 'condition.no_table', false);
            $column = data_get($value, 'condition.column', null);
            $sqlPath = $zipExtractPath . DIRECTORY_SEPARATOR . 'migrations' . DIRECTORY_SEPARATOR . data_get($value, 'path');
            
            if (!$table || !File::exists($sqlPath)) {
                Log::warning("Skipping install query - table not defined or SQL path not found");
                continue;
            }

            try {
                if (!$no_table) {
                    if (Schema::hasTable($table) && File::exists($sqlPath) && is_null($column)) {
                        DB::unprepared(File::get($sqlPath));
                        Log::info("Install query executed: " . basename($sqlPath));
                    } elseif (Schema::hasTable($table) && File::exists($sqlPath) && $column) {
                        if (!Schema::hasColumn($table, $column)) {
                            DB::unprepared(File::get($sqlPath));
                            Log::info("Install query executed: " . basename($sqlPath));
                        }
                    }
                } else {
                    if (!Schema::hasTable($table) && File::exists($sqlPath)) {
                        DB::unprepared(File::get($sqlPath));
                        Log::info("Install query executed: " . basename($sqlPath));
                    }
                }
            } catch (Exception $e) {
                Log::error("Install query failed for {$sqlPath}: " . $e->getMessage());
            }
        }
    }

    /**
     * Normalize version numbers
     */
    protected function normalizeVersion(string $version): string
    {
        $parts = explode('.', $version);
        while (count($parts) > 1 && end($parts) === '0') {
            array_pop($parts);
        }

        if (count($parts) === 1) {
            $parts[] = '0';
        }

        return implode('.', $parts);
    }

    /**
     * Delete old version files
     */
    protected function deleteOldVersionFiles(string $extensionSlug): void
    {
        $extensionDir = app_path('Extensions/' . Str::studly($extensionSlug));
        if (File::isDirectory($extensionDir)) {
            File::deleteDirectory($extensionDir);
        }

        $resourceDir = resource_path("extensions/{$extensionSlug}");
        if (File::isDirectory($resourceDir)) {
            File::deleteDirectory($resourceDir);
        }

        $routeFile = base_path("routes/extroutes/{$extensionSlug}.php");
        if (File::exists($routeFile)) {
            File::delete($routeFile);
        }
    }

    /**
     * Create resource directory
     */
    protected function makeDir(string $extensionSlug): void
    {
        $path = resource_path("extensions/$extensionSlug");
        if (!File::isDirectory($path)) {
            File::makeDirectory($path, 0755, true);
        }
    }

    /**
     * Copy resources
     */
    protected function copyResource(string $zipExtractPath, string $extensionSlug, array $indexJsonArray): void
    {
        $resourceDir = resource_path("extensions/$extensionSlug/migrations");
        if (!File::isDirectory($resourceDir)) {
            File::makeDirectory($resourceDir, 0755, true);
        }

        File::copy($zipExtractPath . DIRECTORY_SEPARATOR . 'extension.json', resource_path("extensions/$extensionSlug/extension.json"));

        foreach (data_get($indexJsonArray, 'migrations.uninstall', []) as $value) {
            $sqlPath = $zipExtractPath . DIRECTORY_SEPARATOR . 'migrations' . DIRECTORY_SEPARATOR . data_get($value, 'path');
            if (File::exists($sqlPath)) {
                File::copy($sqlPath, $resourceDir . DIRECTORY_SEPARATOR . basename($sqlPath));
            }
        }
    }

    /**
     * Copy route
     */
    protected function copyRoute(string $zipExtractPath, array $indexJsonArray): void
    {
        $route = data_get($indexJsonArray, 'route');
        if (!$route) return;

        $routePath = $zipExtractPath . DIRECTORY_SEPARATOR . $route;
        $extRoutesDir = base_path('routes/extroutes');
        if (!File::isDirectory($extRoutesDir)) {
            File::makeDirectory($extRoutesDir, 0755, true);
        }
        if (File::exists($routePath)) {
            File::copy($routePath, $extRoutesDir . DIRECTORY_SEPARATOR . basename($routePath));
        }
    }

    /**
     * Copy controllers
     */
    protected function copyControllers(string $zipExtractPath, array $indexJsonArray): void
    {
        foreach (data_get($indexJsonArray, 'controllers', []) as $controller) {
            $controllerPath = $zipExtractPath . DIRECTORY_SEPARATOR . $controller;
            $destination = base_path($controller);
            if (!File::isDirectory(dirname($destination))) {
                File::makeDirectory(dirname($destination), 0755, true);
            }
            if (File::exists($controllerPath)) {
                File::copy($controllerPath, $destination);
            }
        }
    }

    /**
     * Copy files
     */
    protected function copyFiles(string $zipExtractPath, array $indexJsonArray): void
    {
        foreach (data_get($indexJsonArray, 'stubs', []) as $key => $file) {
            $fileName = is_numeric($key) ? basename($file) : $key;
            $sourcePath = $zipExtractPath . DIRECTORY_SEPARATOR . 'stubs' . DIRECTORY_SEPARATOR . $fileName;
            $destinationPath = base_path($file);
            if (!File::isDirectory(dirname($destinationPath))) {
                File::makeDirectory(dirname($destinationPath), 0755, true);
            }
            if (File::exists($sourcePath)) {
                File::copy($sourcePath, $destinationPath);
            }
        }
    }
}
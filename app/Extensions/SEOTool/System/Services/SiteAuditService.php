<?php

declare(strict_types=1);

namespace App\Extensions\SEOTool\System\Services;

use App\Helpers\Classes\ApiHelper;
use App\Helpers\Classes\Helper;
use OpenAI\Laravel\Facades\OpenAI;

class SiteAuditService
{
    public static function auditUrl(string $url): array
    {
        $htmlContent = self::fetchPage($url);
        if (empty($htmlContent)) {
            return ['error' => 'Could not fetch the page content.'];
        }

        $onPageData = self::extractOnPageData($htmlContent, $url);
        $aiAnalysis = self::analyzeWithAI($onPageData, $url);

        return [
            'url'        => $url,
            'onPageData' => $onPageData,
            'aiAnalysis' => $aiAnalysis,
            'score'      => $aiAnalysis['score'] ?? 0,
        ];
    }

    private static function fetchPage(string $url): string
    {
        try {
            $ch = curl_init();
            curl_setopt_array($ch, [
                CURLOPT_URL            => $url,
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_TIMEOUT        => 15,
                CURLOPT_USERAGENT      => 'MagicAI SEO Audit Bot/4.0',
                CURLOPT_SSL_VERIFYPEER => false,
            ]);
            $html = curl_exec($ch);
            curl_close($ch);

            return $html ?: '';
        } catch (\Throwable) {
            return '';
        }
    }

    private static function extractOnPageData(string $html, string $url): array
    {
        $data = [];

        // Title
        preg_match('/<title>(.*?)<\/title>/is', $html, $titleMatch);
        $data['title'] = $titleMatch[1] ?? '';
        $data['titleLength'] = strlen($data['title']);

        // Meta description
        preg_match('/<meta\s+name=["\']description["\']\s+content=["\'](.*?)["\']/is', $html, $descMatch);
        $data['metaDescription'] = $descMatch[1] ?? '';
        $data['metaDescriptionLength'] = strlen($data['metaDescription']);

        // H1 tags
        preg_match_all('/<h1[^>]*>(.*?)<\/h1>/is', $html, $h1Matches);
        $data['h1Tags'] = $h1Matches[1] ?? [];
        $data['h1Count'] = count($data['h1Tags']);

        // H2 tags
        preg_match_all('/<h2[^>]*>(.*?)<\/h2>/is', $html, $h2Matches);
        $data['h2Count'] = count($h2Matches[1] ?? []);

        // Images without alt
        preg_match_all('/<img[^>]*>/is', $html, $imgMatches);
        $totalImages = count($imgMatches[0] ?? []);
        $imagesWithAlt = 0;
        foreach ($imgMatches[0] ?? [] as $img) {
            if (preg_match('/alt=["\'][^"\']+["\']/i', $img)) {
                $imagesWithAlt++;
            }
        }
        $data['totalImages'] = $totalImages;
        $data['imagesWithAlt'] = $imagesWithAlt;
        $data['imagesMissingAlt'] = $totalImages - $imagesWithAlt;

        // Links
        preg_match_all('/<a\s+[^>]*href=["\']([^"\']+)["\']/is', $html, $linkMatches);
        $links = $linkMatches[1] ?? [];
        $parsedUrl = parse_url($url);
        $domain = $parsedUrl['host'] ?? '';
        $internal = 0;
        $external = 0;
        foreach ($links as $link) {
            $parsedLink = parse_url($link);
            if (isset($parsedLink['host']) && $parsedLink['host'] !== $domain) {
                $external++;
            } else {
                $internal++;
            }
        }
        $data['internalLinks'] = $internal;
        $data['externalLinks'] = $external;
        $data['totalLinks'] = count($links);

        // Canonical
        preg_match('/<link\s+[^>]*rel=["\']canonical["\']\s+[^>]*href=["\']([^"\']+)["\']/is', $html, $canonicalMatch);
        $data['canonical'] = $canonicalMatch[1] ?? '';
        $data['hasCanonical'] = ! empty($data['canonical']);

        // Meta robots
        preg_match('/<meta\s+name=["\']robots["\']\s+content=["\'](.*?)["\']/is', $html, $robotsMatch);
        $data['metaRobots'] = $robotsMatch[1] ?? '';

        // Viewport
        $data['hasViewport'] = (bool) preg_match('/<meta\s+name=["\']viewport["\']/is', $html);

        // Schema markup
        $data['hasSchemaMarkup'] = str_contains($html, 'application/ld+json') || str_contains($html, 'itemtype=');

        // Word count
        $textContent = strip_tags($html);
        $data['wordCount'] = str_word_count($textContent);

        // SSL
        $data['isHttps'] = str_starts_with($url, 'https://');

        return $data;
    }

    private static function analyzeWithAI(array $onPageData, string $url): array
    {
        try {
            ApiHelper::setOpenAiKey();
            $defaultModel = Helper::setting('openai_default_model');

            $prompt = "Analyze this SEO audit data for the URL: {$url}\n\n"
                . json_encode($onPageData, JSON_PRETTY_PRINT)
                . "\n\nProvide a JSON response with:\n"
                . '1. "score": overall SEO score 0-100'
                . "\n2. \"issues\": array of {\"severity\": \"critical|warning|info\", \"title\": \"...\", \"description\": \"...\"}\n"
                . "3. \"recommendations\": array of strings with actionable improvements\n"
                . "Return ONLY valid JSON, no markdown.";

            $result = OpenAI::chat()->create([
                'model'    => $defaultModel,
                'messages' => [
                    ['role' => 'system', 'content' => 'You are an SEO audit specialist. Always return valid JSON.'],
                    ['role' => 'user', 'content' => $prompt],
                ],
            ]);

            $content = $result->choices[0]->message->content;
            $content = preg_replace('/```json\s*|\s*```/', '', $content);

            return json_decode($content, true) ?? ['score' => 0, 'issues' => [], 'recommendations' => []];
        } catch (\Throwable $e) {
            return [
                'score'           => 0,
                'issues'          => [['severity' => 'critical', 'title' => 'AI Analysis Failed', 'description' => $e->getMessage()]],
                'recommendations' => ['Fix API configuration and retry.'],
            ];
        }
    }
}

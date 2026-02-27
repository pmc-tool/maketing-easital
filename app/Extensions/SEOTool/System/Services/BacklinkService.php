<?php

declare(strict_types=1);

namespace App\Extensions\SEOTool\System\Services;

use App\Extensions\SEOTool\System\Services\SpyFu\SpyFuApiService;
use App\Helpers\Classes\ApiHelper;
use App\Helpers\Classes\Helper;
use OpenAI\Laravel\Facades\OpenAI;

class BacklinkService
{
    private SpyFuApiService $spyfuApi;

    public function __construct()
    {
        $this->spyfuApi = new SpyFuApiService;
    }

    public function getBacklinkReport(string $domain): array
    {
        $backlinks = $this->spyfuApi->getBacklinks($domain, 0, 50);
        $stats = $this->spyfuApi->getBacklinkStats($domain);

        return [
            'domain'    => $domain,
            'stats'     => $stats,
            'backlinks' => $backlinks,
        ];
    }

    public function getBacklinkAnalysis(string $domain): array
    {
        $report = $this->getBacklinkReport($domain);
        $aiInsights = $this->analyzeBacklinksWithAI($domain, $report);

        return array_merge($report, [
            'aiInsights' => $aiInsights,
        ]);
    }

    private function analyzeBacklinksWithAI(string $domain, array $report): array
    {
        try {
            ApiHelper::setOpenAiKey();
            $defaultModel = Helper::setting('openai_default_model');

            $prompt = "Analyze this backlink profile for domain: {$domain}\n\n"
                . json_encode($report, JSON_PRETTY_PRINT)
                . "\n\nProvide a JSON response with:\n"
                . "1. \"quality_score\": 0-100 backlink quality score\n"
                . "2. \"summary\": brief summary of the backlink profile\n"
                . "3. \"strengths\": array of strengths\n"
                . "4. \"weaknesses\": array of weaknesses\n"
                . "5. \"recommendations\": array of actionable link building recommendations\n"
                . 'Return ONLY valid JSON, no markdown.';

            $result = OpenAI::chat()->create([
                'model'    => $defaultModel,
                'messages' => [
                    ['role' => 'system', 'content' => 'You are a backlink analysis specialist. Always return valid JSON.'],
                    ['role' => 'user', 'content' => $prompt],
                ],
            ]);

            $content = $result->choices[0]->message->content;
            $content = preg_replace('/```json\s*|\s*```/', '', $content);

            return json_decode($content, true) ?? [];
        } catch (\Throwable) {
            return ['quality_score' => 0, 'summary' => 'Analysis unavailable', 'recommendations' => []];
        }
    }
}

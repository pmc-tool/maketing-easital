<?php

declare(strict_types=1);

namespace App\Extensions\SEOTool\System\Services\SpyFu;

class SpyFuRankingService
{
    private SpyFuApiService $api;

    public function __construct()
    {
        $this->api = new SpyFuApiService;
    }

    public function getRankingHistory(string $domain, string $keyword, string $country = 'US'): array
    {
        return $this->api->getRankingHistory($domain, $keyword, $country);
    }

    public function getDomainStatsHistory(string $domain, string $country = 'US'): array
    {
        return $this->api->getDomainStatsHistory($domain, $country);
    }

    public function getOrganicKeywordsWithRank(string $domain, int $maxRows = 50, string $country = 'US'): array
    {
        return $this->api->getDomainOrganicKeywords($domain, 0, $maxRows, $country);
    }
}

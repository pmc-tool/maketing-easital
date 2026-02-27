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

    public function getRankingHistoryForDomain(string $domain, string $country = 'US', int $pageSize = 50): array
    {
        return $this->api->getRankingHistoryForDomain($domain, $country, $pageSize);
    }

    public function getRankingHistoryForKeyword(string $keyword, array $domains, string $country = 'US'): array
    {
        return $this->api->getRankingHistoryForKeywordOnDomains($keyword, $domains, $country);
    }

    public function getDomainStatsHistory(string $domain, string $country = 'US'): array
    {
        return $this->api->getAllDomainStats($domain, $country);
    }

    public function getOrganicKeywordsWithRank(string $domain, int $pageSize = 50, string $country = 'US'): array
    {
        return $this->api->getSeoKeywords($domain, $pageSize, $country);
    }
}

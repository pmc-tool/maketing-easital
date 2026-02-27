<?php

declare(strict_types=1);

namespace App\Extensions\SEOTool\System\Services\SpyFu;

class SpyFuPPCService
{
    private SpyFuApiService $api;

    public function __construct()
    {
        $this->api = new SpyFuApiService;
    }

    public function getPaidKeywords(string $domain, int $pageSize = 50, string $country = 'US'): array
    {
        return $this->api->getPaidKeywords($domain, $pageSize, $country);
    }

    public function getDomainAdHistory(string $domain, string $country = 'US', int $pageSize = 50): array
    {
        return $this->api->getDomainAdHistory($domain, $country, $pageSize);
    }

    public function getKeywordAdHistory(string $term, string $country = 'US', int $pageSize = 50): array
    {
        return $this->api->getKeywordAdHistory($term, $country, $pageSize);
    }

    public function getPPCOverview(string $domain, string $country = 'US'): array
    {
        $stats = $this->api->getDomainStats($domain, $country);
        $paidKeywords = $this->getPaidKeywords($domain, 10, $country);

        return [
            'stats'        => $stats,
            'paidKeywords' => $paidKeywords,
        ];
    }
}

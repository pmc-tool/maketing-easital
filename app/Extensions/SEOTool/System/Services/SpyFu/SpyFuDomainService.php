<?php

declare(strict_types=1);

namespace App\Extensions\SEOTool\System\Services\SpyFu;

class SpyFuDomainService
{
    private SpyFuApiService $api;

    public function __construct()
    {
        $this->api = new SpyFuApiService;
    }

    public function getDomainOverview(string $domain, string $country = 'US'): array
    {
        return $this->api->getDomainStats($domain, $country);
    }

    public function getDomainHistory(string $domain, string $country = 'US'): array
    {
        return $this->api->getDomainStatsHistory($domain, $country);
    }

    public function getOrganicKeywords(string $domain, int $startRow = 0, int $maxRows = 50, string $country = 'US'): array
    {
        return $this->api->getDomainOrganicKeywords($domain, $startRow, $maxRows, $country);
    }

    public function getPaidKeywords(string $domain, int $startRow = 0, int $maxRows = 50, string $country = 'US'): array
    {
        return $this->api->getDomainPaidKeywords($domain, $startRow, $maxRows, $country);
    }

    public function getBacklinks(string $domain, int $startRow = 0, int $maxRows = 50): array
    {
        return $this->api->getBacklinks($domain, $startRow, $maxRows);
    }

    public function getBacklinkStats(string $domain): array
    {
        return $this->api->getBacklinkStats($domain);
    }

    public function getFullDomainReport(string $domain, string $country = 'US'): array
    {
        $stats = $this->getDomainOverview($domain, $country);
        $organicKeywords = $this->getOrganicKeywords($domain, 0, 10, $country);
        $backlinkStats = $this->getBacklinkStats($domain);

        return [
            'stats'            => $stats,
            'organicKeywords'  => $organicKeywords,
            'backlinkStats'    => $backlinkStats,
        ];
    }
}

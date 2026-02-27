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
        return $this->api->getAllDomainStats($domain, $country);
    }

    public function getOrganicKeywords(string $domain, int $pageSize = 50, string $country = 'US'): array
    {
        return $this->api->getSeoKeywords($domain, $pageSize, $country);
    }

    public function getPaidKeywords(string $domain, int $pageSize = 50, string $country = 'US'): array
    {
        return $this->api->getPaidKeywords($domain, $pageSize, $country);
    }

    public function getFullDomainReport(string $domain, string $country = 'US'): array
    {
        $stats = $this->getDomainOverview($domain, $country);
        $organicKeywords = $this->getOrganicKeywords($domain, 10, $country);

        return [
            'stats'           => $stats,
            'organicKeywords' => $organicKeywords,
        ];
    }
}

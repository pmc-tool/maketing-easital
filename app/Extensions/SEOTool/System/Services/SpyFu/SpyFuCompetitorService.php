<?php

declare(strict_types=1);

namespace App\Extensions\SEOTool\System\Services\SpyFu;

class SpyFuCompetitorService
{
    private SpyFuApiService $api;

    public function __construct()
    {
        $this->api = new SpyFuApiService;
    }

    public function getOrganicCompetitors(string $domain, int $pageSize = 20, string $country = 'US'): array
    {
        return $this->api->getOrganicCompetitors($domain, $pageSize, $country);
    }

    public function getPaidCompetitors(string $domain, int $pageSize = 20, string $country = 'US'): array
    {
        return $this->api->getPaidCompetitors($domain, $pageSize, $country);
    }

    public function getCompetingSeoKeywords(array $domains, string $country = 'US', int $pageSize = 50): array
    {
        return $this->api->getCompetingSeoKeywords($domains, $country, $pageSize);
    }

    public function getFullCompetitorReport(string $domain, string $country = 'US'): array
    {
        $organic = $this->getOrganicCompetitors($domain, 10, $country);
        $paid = $this->getPaidCompetitors($domain, 10, $country);

        return [
            'organicCompetitors' => $organic,
            'paidCompetitors'    => $paid,
        ];
    }
}

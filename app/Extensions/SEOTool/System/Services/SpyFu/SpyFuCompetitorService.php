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

    public function getOrganicCompetitors(string $domain, int $startRow = 0, int $maxRows = 20, string $country = 'US'): array
    {
        return $this->api->getOrganicCompetitors($domain, $startRow, $maxRows, $country);
    }

    public function getPaidCompetitors(string $domain, int $startRow = 0, int $maxRows = 20, string $country = 'US'): array
    {
        return $this->api->getPaidCompetitors($domain, $startRow, $maxRows, $country);
    }

    public function getKombatOverlap(array $domains, string $country = 'US'): array
    {
        return $this->api->getKombatOverlap($domains, $country);
    }

    public function getFullCompetitorReport(string $domain, string $country = 'US'): array
    {
        $organic = $this->getOrganicCompetitors($domain, 0, 10, $country);
        $paid = $this->getPaidCompetitors($domain, 0, 10, $country);

        return [
            'organicCompetitors' => $organic,
            'paidCompetitors'    => $paid,
        ];
    }
}

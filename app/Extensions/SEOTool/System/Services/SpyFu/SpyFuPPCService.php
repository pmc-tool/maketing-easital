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

    public function getTopPaidKeywords(string $domain, int $startRow = 0, int $maxRows = 50, string $country = 'US'): array
    {
        return $this->api->getTopPaidKeywords($domain, $startRow, $maxRows, $country);
    }

    public function getAdHistory(string $domain, string $keyword, string $country = 'US'): array
    {
        return $this->api->getAdHistory($domain, $keyword, $country);
    }

    public function getPPCOverview(string $domain, string $country = 'US'): array
    {
        $stats = $this->api->getDomainStats($domain, $country);
        $paidKeywords = $this->getTopPaidKeywords($domain, 0, 10, $country);

        return [
            'stats'        => $stats,
            'paidKeywords' => $paidKeywords,
        ];
    }
}

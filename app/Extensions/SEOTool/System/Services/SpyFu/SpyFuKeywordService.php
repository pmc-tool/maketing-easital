<?php

declare(strict_types=1);

namespace App\Extensions\SEOTool\System\Services\SpyFu;

class SpyFuKeywordService
{
    private SpyFuApiService $api;

    public function __construct()
    {
        $this->api = new SpyFuApiService;
    }

    public function getKeywordInfo(string $keyword, string $country = 'US'): array
    {
        return $this->api->getKeywordInfo($keyword, $country);
    }

    public function getRelatedKeywords(string $keyword, int $startRow = 0, int $maxRows = 50, string $country = 'US'): array
    {
        return $this->api->getRelatedKeywords($keyword, $startRow, $maxRows, $country);
    }

    public function getKeywordGroups(string $keyword, string $country = 'US'): array
    {
        return $this->api->getKeywordGroups($keyword, $country);
    }

    public function getFullKeywordReport(string $keyword, string $country = 'US'): array
    {
        $info = $this->getKeywordInfo($keyword, $country);
        $related = $this->getRelatedKeywords($keyword, 0, 20, $country);
        $groups = $this->getKeywordGroups($keyword, $country);

        return [
            'info'    => $info,
            'related' => $related,
            'groups'  => $groups,
        ];
    }
}

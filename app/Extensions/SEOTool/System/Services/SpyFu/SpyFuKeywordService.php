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

    public function getRelatedKeywords(string $keyword, int $pageSize = 50, string $country = 'US'): array
    {
        return $this->api->getRelatedKeywords($keyword, $pageSize, $country);
    }

    public function getQuestionKeywords(string $keyword, int $pageSize = 50, string $country = 'US'): array
    {
        return $this->api->getQuestionKeywords($keyword, $pageSize, $country);
    }

    public function getAlsoRanksFor(string $keyword, int $pageSize = 50, string $country = 'US'): array
    {
        return $this->api->getAlsoRanksForKeywords($keyword, $pageSize, $country);
    }

    public function getFullKeywordReport(string $keyword, string $country = 'US'): array
    {
        $related = $this->getRelatedKeywords($keyword, 20, $country);
        $questions = $this->getQuestionKeywords($keyword, 10, $country);

        return [
            'related'   => $related,
            'questions' => $questions,
        ];
    }
}

<?php

declare(strict_types=1);

namespace App\Extensions\SEOTool\System\Services\SpyFu;

use App\Models\SettingTwo;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\ClientException;
use GuzzleHttp\Exception\ServerException;

class SpyFuApiService
{
    private Client $client;

    private string $baseUrl = 'https://api.spyfu.com/apis';

    private string $apiKey;

    public function __construct()
    {
        $settings = SettingTwo::getCache();
        $this->apiKey = $settings->spyfu_api_key ?? '';
        $this->client = new Client([
            'timeout' => 30,
            'headers' => [
                'Authorization' => 'Basic ' . $this->apiKey,
                'Accept'        => 'application/json',
            ],
        ]);
    }

    public function get(string $endpoint, array $params = []): array
    {
        try {
            $response = $this->client->get($this->baseUrl . $endpoint, [
                'query' => $params,
            ]);

            return json_decode($response->getBody()->getContents(), true) ?? [];
        } catch (ServerException $e) {
            // SpyFu returns 500 when it has no data for a domain/keyword
            return ['resultCount' => 0, 'results' => [], '_error' => 'No data available from SpyFu for this query.'];
        } catch (ClientException $e) {
            $status = $e->getResponse()->getStatusCode();
            if ($status === 404) {
                return ['resultCount' => 0, 'results' => [], '_error' => 'No data found for this query.'];
            }
            throw $e;
        }
    }

    // ─── Domain Stats API ─────────────────────────────────────────

    public function getDomainStats(string $domain, string $country = 'US'): array
    {
        return $this->get('/domain_stats_api/v2/getLatestDomainStats', [
            'domain'      => $domain,
            'countryCode' => $country,
        ]);
    }

    public function getAllDomainStats(string $domain, string $country = 'US'): array
    {
        return $this->get('/domain_stats_api/v2/getAllDomainStats', [
            'domain'      => $domain,
            'countryCode' => $country,
        ]);
    }

    public function getBulkDomainStats(array $domains, string $country = 'US', bool $latestOnly = true): array
    {
        return $this->get('/domain_stats_api/v2/getBulkDomainStats', [
            'domains'        => implode(',', $domains),
            'countryCode'    => $country,
            'showOnlyLatest' => $latestOnly ? 'true' : 'false',
        ]);
    }

    // ─── SEO Research API (serp_api) ──────────────────────────────

    public function getSeoKeywords(string $domain, int $pageSize = 50, string $country = 'US', string $sortBy = 'SearchVolume'): array
    {
        return $this->get('/serp_api/v2/seo/getSeoKeywords', [
            'query'       => $domain,
            'pageSize'    => $pageSize,
            'countryCode' => $country,
            'sortBy'      => $sortBy,
        ]);
    }

    public function getMostValuableKeywords(string $domain, int $pageSize = 50, string $country = 'US'): array
    {
        return $this->get('/serp_api/v2/seo/getMostValuableKeywords', [
            'query'       => $domain,
            'pageSize'    => $pageSize,
            'countryCode' => $country,
        ]);
    }

    public function getNewlyRankedKeywords(string $domain, int $pageSize = 50, string $country = 'US'): array
    {
        return $this->get('/serp_api/v2/seo/getNewlyRankedKeywords', [
            'query'       => $domain,
            'pageSize'    => $pageSize,
            'countryCode' => $country,
        ]);
    }

    // ─── PPC Research API (serp_api) ──────────────────────────────

    public function getPaidKeywords(string $domain, int $pageSize = 50, string $country = 'US'): array
    {
        return $this->get('/serp_api/v2/ppc/getPaidSerps', [
            'query'       => $domain,
            'pageSize'    => $pageSize,
            'countryCode' => $country,
        ]);
    }

    public function getMostSuccessfulPpcKeywords(string $domain, int $pageSize = 50, string $country = 'US'): array
    {
        return $this->get('/serp_api/v2/ppc/getMostSuccessful', [
            'query'       => $domain,
            'pageSize'    => $pageSize,
            'countryCode' => $country,
        ]);
    }

    // ─── Keyword Research API (keyword_api) ───────────────────────

    public function getRelatedKeywords(string $keyword, int $pageSize = 50, string $country = 'US', string $sortBy = 'SearchVolume'): array
    {
        return $this->get('/keyword_api/v2/related/getRelatedKeywords', [
            'query'       => $keyword,
            'pageSize'    => $pageSize,
            'countryCode' => $country,
            'sortBy'      => $sortBy,
        ]);
    }

    public function getQuestionKeywords(string $keyword, int $pageSize = 50, string $country = 'US'): array
    {
        return $this->get('/keyword_api/v2/related/getQuestionKeywords', [
            'query'       => $keyword,
            'pageSize'    => $pageSize,
            'countryCode' => $country,
        ]);
    }

    public function getAlsoRanksForKeywords(string $keyword, int $pageSize = 50, string $country = 'US'): array
    {
        return $this->get('/keyword_api/v2/related/getAlsoRanksForKeywords', [
            'query'       => $keyword,
            'pageSize'    => $pageSize,
            'countryCode' => $country,
        ]);
    }

    public function getTransactionalKeywords(string $keyword, int $pageSize = 50, string $country = 'US'): array
    {
        return $this->get('/keyword_api/v2/related/getTransactionKeywords', [
            'query'       => $keyword,
            'pageSize'    => $pageSize,
            'countryCode' => $country,
        ]);
    }

    public function getKeywordInfoBulk(array $keywords, string $country = 'US'): array
    {
        return $this->get('/keyword_api/v2/related/getKeywordInformationBulk', [
            'query'       => implode(',', $keywords),
            'countryCode' => $country,
        ]);
    }

    // ─── Competitors API ──────────────────────────────────────────

    public function getOrganicCompetitors(string $domain, int $pageSize = 20, string $country = 'US', int $startingRow = 1): array
    {
        return $this->get('/competitors_api/v2/seo/getTopCompetitors', [
            'domain'      => $domain,
            'pageSize'    => $pageSize,
            'countryCode' => $country,
            'startingRow' => $startingRow,
        ]);
    }

    public function getPaidCompetitors(string $domain, int $pageSize = 20, string $country = 'US', int $startingRow = 1): array
    {
        return $this->get('/competitors_api/v2/ppc/getTopCompetitors', [
            'domain'      => $domain,
            'pageSize'    => $pageSize,
            'countryCode' => $country,
            'startingRow' => $startingRow,
        ]);
    }

    public function getCombinedCompetitors(string $domain, int $pageSize = 20, string $country = 'US'): array
    {
        return $this->get('/competitors_api/v2/combined/getCombinedTopCompetitors', [
            'domain'      => $domain,
            'pageSize'    => $pageSize,
            'countryCode' => $country,
        ]);
    }

    // ─── Kombat API ───────────────────────────────────────────────

    public function getCompetingSeoKeywords(array $domains, string $country = 'US', int $pageSize = 50, bool $isIntersection = true): array
    {
        return $this->get('/keyword_api/v2/kombat/getCompetingSeoKeywords', [
            'includeDomainsCsv' => implode(',', $domains),
            'isIntersection'    => $isIntersection ? 'true' : 'false',
            'pageSize'          => $pageSize,
            'countryCode'       => $country,
        ]);
    }

    public function getCompetingPpcKeywords(array $domains, string $country = 'US', int $pageSize = 50, bool $isIntersection = true): array
    {
        return $this->get('/keyword_api/v2/kombat/getCompetingPpcKeywords', [
            'includeDomainsCsv' => implode(',', $domains),
            'isIntersection'    => $isIntersection ? 'true' : 'false',
            'pageSize'          => $pageSize,
            'countryCode'       => $country,
        ]);
    }

    // ─── Ranking History API (organic_history_api) ────────────────

    public function getRankingHistoryForDomain(string $domain, string $country = 'US', int $pageSize = 50, string $startDate = '', string $endDate = ''): array
    {
        return $this->get('/organic_history_api/v2/historic/getHistoricRankingsForDomain', [
            'domain'      => $domain,
            'countryCode' => $country,
            'pageSize'    => $pageSize,
            'startDate'   => $startDate ?: date('Y-m-d', strtotime('-12 months')),
            'endDate'     => $endDate ?: date('Y-m-d'),
        ]);
    }

    public function getRankingHistoryForKeywordOnDomains(string $keyword, array $domains, string $country = 'US', string $startDate = '', string $endDate = ''): array
    {
        return $this->get('/organic_history_api/v2/historic/getHistoricRankingsForKeywordOnDomains', [
            'keyword'     => $keyword,
            'domains'     => implode(',', $domains),
            'countryCode' => $country,
            'startDate'   => $startDate ?: date('Y-m-d', strtotime('-12 months')),
            'endDate'     => $endDate ?: date('Y-m-d'),
        ]);
    }

    public function getRankingHistoryForDomainOnKeywords(string $domain, array $keywords, string $country = 'US', string $startDate = '', string $endDate = ''): array
    {
        return $this->get('/organic_history_api/v2/historic/getHistoricRankingsForDomainOnKeywords', [
            'domain'      => $domain,
            'keywords'    => implode(',', $keywords),
            'countryCode' => $country,
            'startDate'   => $startDate ?: date('Y-m-d', strtotime('-12 months')),
            'endDate'     => $endDate ?: date('Y-m-d'),
        ]);
    }

    // ─── Ad History API (cloud_ad_history_api) ────────────────────

    public function getDomainAdHistory(string $domain, string $country = 'US', int $pageSize = 50): array
    {
        return $this->get('/cloud_ad_history_api/v2/domain/getDomainAdHistory', [
            'domain'      => $domain,
            'countryCode' => $country,
            'pageSize'    => $pageSize,
        ]);
    }

    public function getKeywordAdHistory(string $term, string $country = 'US', int $pageSize = 50): array
    {
        return $this->get('/cloud_ad_history_api/v2/term/getTermAdHistory', [
            'term'        => $term,
            'countryCode' => $country,
            'pageSize'    => $pageSize,
        ]);
    }
}

<?php

declare(strict_types=1);

namespace App\Extensions\SEOTool\System\Services\SpyFu;

use App\Models\SettingTwo;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;

class SpyFuApiService
{
    private Client $client;

    private string $baseUrl = 'https://www.spyfu.com/apis';

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

    /**
     * @throws GuzzleException
     */
    public function get(string $endpoint, array $params = []): array
    {
        $response = $this->client->get($this->baseUrl . $endpoint, [
            'query' => $params,
        ]);

        return json_decode($response->getBody()->getContents(), true) ?? [];
    }

    // ─── Domain API v2 ───────────────────────────────────────────

    public function getDomainOrganicKeywords(string $domain, int $startRow = 0, int $maxRows = 50, string $country = 'US'): array
    {
        return $this->get('/domain_api/v2/domain/getOrganicKeywords', [
            'domain'   => $domain,
            'startRow' => $startRow,
            'maxRows'  => $maxRows,
            'country'  => $country,
        ]);
    }

    public function getDomainPaidKeywords(string $domain, int $startRow = 0, int $maxRows = 50, string $country = 'US'): array
    {
        return $this->get('/domain_api/v2/domain/getPaidKeywords', [
            'domain'   => $domain,
            'startRow' => $startRow,
            'maxRows'  => $maxRows,
            'country'  => $country,
        ]);
    }

    public function getDomainStats(string $domain, string $country = 'US'): array
    {
        return $this->get('/domain_stats_api/v2/getLatestDomainStats', [
            'domain'  => $domain,
            'country' => $country,
        ]);
    }

    public function getDomainStatsHistory(string $domain, string $country = 'US'): array
    {
        return $this->get('/domain_stats_api/v2/getDomainStatsHistory', [
            'domain'  => $domain,
            'country' => $country,
        ]);
    }

    // ─── Keyword API ─────────────────────────────────────────────

    public function getKeywordInfo(string $keyword, string $country = 'US'): array
    {
        return $this->get('/keyword_api/v2/keyword/getKeywordInfo', [
            'keyword' => $keyword,
            'country' => $country,
        ]);
    }

    public function getRelatedKeywords(string $keyword, int $startRow = 0, int $maxRows = 50, string $country = 'US'): array
    {
        return $this->get('/keyword_api/v2/keyword/getRelatedKeywords', [
            'keyword'  => $keyword,
            'startRow' => $startRow,
            'maxRows'  => $maxRows,
            'country'  => $country,
        ]);
    }

    public function getKeywordGroups(string $keyword, string $country = 'US'): array
    {
        return $this->get('/keyword_api/v2/keyword/getKeywordGroups', [
            'keyword' => $keyword,
            'country' => $country,
        ]);
    }

    // ─── Competitor / Kombat API ─────────────────────────────────

    public function getOrganicCompetitors(string $domain, int $startRow = 0, int $maxRows = 20, string $country = 'US'): array
    {
        return $this->get('/domain_api/v2/domain/getOrganicCompetitors', [
            'domain'   => $domain,
            'startRow' => $startRow,
            'maxRows'  => $maxRows,
            'country'  => $country,
        ]);
    }

    public function getPaidCompetitors(string $domain, int $startRow = 0, int $maxRows = 20, string $country = 'US'): array
    {
        return $this->get('/domain_api/v2/domain/getPaidCompetitors', [
            'domain'   => $domain,
            'startRow' => $startRow,
            'maxRows'  => $maxRows,
            'country'  => $country,
        ]);
    }

    public function getKombatOverlap(array $domains, string $country = 'US'): array
    {
        return $this->get('/kombat_api/v2/getOverlap', [
            'domains' => implode(',', $domains),
            'country' => $country,
        ]);
    }

    // ─── Backlink API ────────────────────────────────────────────

    public function getBacklinks(string $domain, int $startRow = 0, int $maxRows = 50): array
    {
        return $this->get('/backlink_api/v2/getBacklinks', [
            'domain'   => $domain,
            'startRow' => $startRow,
            'maxRows'  => $maxRows,
        ]);
    }

    public function getBacklinkStats(string $domain): array
    {
        return $this->get('/backlink_api/v2/getBacklinkStats', [
            'domain' => $domain,
        ]);
    }

    // ─── Ranking History API ─────────────────────────────────────

    public function getRankingHistory(string $domain, string $keyword, string $country = 'US'): array
    {
        return $this->get('/domain_api/v2/domain/getRankingHistory', [
            'domain'  => $domain,
            'keyword' => $keyword,
            'country' => $country,
        ]);
    }

    // ─── PPC / Ad History API ────────────────────────────────────

    public function getAdHistory(string $domain, string $keyword, string $country = 'US'): array
    {
        return $this->get('/domain_api/v2/domain/getAdHistory', [
            'domain'  => $domain,
            'keyword' => $keyword,
            'country' => $country,
        ]);
    }

    public function getTopPaidKeywords(string $domain, int $startRow = 0, int $maxRows = 50, string $country = 'US'): array
    {
        return $this->getDomainPaidKeywords($domain, $startRow, $maxRows, $country);
    }
}

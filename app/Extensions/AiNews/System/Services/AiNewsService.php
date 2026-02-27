<?php

namespace App\Extensions\AiNews\System\Services;

use App\Extensions\AiNews\System\Services\Traits\AiNewsApi;
use App\Models\Setting;
use Exception;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;

class AiNewsService
{
    use AiNewsApi;

    public const BASE_URL = 'https://api.heygen.com';

    public ?string $secretKey;

    private Client $client;

    public function __construct()
    {
        $this->secretKey = Setting::getCache()->heygen_secret_key;
        $this->client    = new Client;
    }

    private function post(string $url, array $params): array
    {
        if (blank($this->secretKey)) {
            return ['error' => ['message' => 'HeyGen API key is missing. Please configure it in Admin → Settings → HeyGen.'], 'data' => null];
        }

        try {
            $response = $this->client->post(self::BASE_URL . $url, [
                'headers' => $this->getHeaders(),
                'body'    => json_encode($params),
            ])->getBody()->getContents();

            return json_decode($response, true);
        } catch (RequestException $e) {
            if ($e->hasResponse()) {
                $body = $e->getResponse()?->getBody()->getContents();
                $json = json_decode($body, true);
                return ['error' => $json['error'] ?? ['message' => 'Unknown error'], 'data' => null];
            }
            return ['error' => ['message' => 'Request failed without a response'], 'data' => null];
        } catch (Exception $e) {
            return ['error' => ['message' => $e->getMessage()], 'data' => null];
        }
    }

    private function postBinary(string $fullUrl, string $fileContent, string $mimeType): array
    {
        if (blank($this->secretKey)) {
            return ['error' => ['message' => 'HeyGen API key is missing.'], 'data' => null];
        }

        try {
            $response = $this->client->post($fullUrl, [
                'headers' => [
                    'X-API-KEY'    => $this->secretKey,
                    'Content-Type' => $mimeType,
                ],
                'body' => $fileContent,
            ])->getBody()->getContents();

            return json_decode($response, true);
        } catch (RequestException $e) {
            if ($e->hasResponse()) {
                $body = $e->getResponse()?->getBody()->getContents();
                $json = json_decode($body, true);
                return ['error' => $json['error'] ?? ['message' => 'Asset upload failed'], 'data' => null];
            }
            return ['error' => ['message' => 'Asset upload request failed'], 'data' => null];
        } catch (Exception $e) {
            return ['error' => ['message' => $e->getMessage()], 'data' => null];
        }
    }

    private function get(string $url): array
    {
        if (blank($this->secretKey)) {
            return [];
        }

        try {
            $response = $this->client->get(self::BASE_URL . $url, [
                'headers' => $this->getHeaders(),
            ])->getBody()->getContents();

            return json_decode($response, true);
        } catch (Exception $e) {
            return ['error' => 'API request failed: ' . $e->getMessage()];
        }
    }

    private function delete(string $url): \Psr\Http\Message\ResponseInterface
    {
        return $this->client->delete(self::BASE_URL . $url, [
            'headers' => $this->getHeaders(),
        ]);
    }

    private function getHeaders(): array
    {
        return [
            'X-API-KEY'    => $this->secretKey,
            'accept'       => 'application/json',
            'content-type' => 'application/json',
        ];
    }
}

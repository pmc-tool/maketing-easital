<?php

namespace App\Extensions\AiNews\System\Services\Traits;

use Psr\Http\Message\ResponseInterface;

trait AiNewsApi
{
    public function createVideo(array $body): array
    {
        return $this->post('/v2/video/generate', $body);
    }

    public function uploadAsset(string $fileContent, string $mimeType): array
    {
        return $this->postBinary('https://upload.heygen.com/v1/asset', $fileContent, $mimeType);
    }

    public function listVideos(int $limit = 50): array
    {
        $url = "/v1/video.list?limit={$limit}";
        return $this->get($url);
    }

    public function retrieveVideo(string $videoId): array
    {
        $url = "/v1/video_status.get?video_id={$videoId}";
        return $this->get($url);
    }

    public function deleteVideo(string $videoId): ResponseInterface
    {
        $url = "/v1/video.delete?video_id={$videoId}";
        return $this->delete($url);
    }

    public function listAvatars(): array
    {
        return $this->get('/v2/avatars');
    }

    public function listVoices(): array
    {
        return $this->get('/v2/voices');
    }
}

<?php

namespace App\Extensions\SocialMedia\System\Services\Publisher;

use App\Extensions\SocialMedia\System\Enums\PostTypeEnum;
use App\Extensions\SocialMedia\System\Helpers\Facebook;
use App\Extensions\SocialMedia\System\Services\Publisher\Contracts\BasePublisherService;

class FacebookService extends BasePublisherService
{
    public function handle()
    {
        $media = $this->post->image;

        $message = $this->post->content;

        $facebook = new Facebook;

        $facebook->setToken($this->accessToken);

        if ($this->post->post_type === PostTypeEnum::Story) {
            return $facebook->publishPhotoStory($this->platformId, url($media));
        }

        return match ((bool) $media) {
            true => $facebook->publishPhotoOnPage($this->platformId, $message, [
                $media,
            ]),
            default => $facebook->publishTextOnPage($this->platformId, $message),
        };
    }
}

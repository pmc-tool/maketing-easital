<?php

namespace App\Domains\Entity\Drivers\FalAI;

use App\Domains\Entity\BaseDriver;
use App\Domains\Entity\Concerns\Calculate\HasTextToVideo;
use App\Domains\Entity\Contracts\Calculate\WithTextToVideoInterface;
use App\Domains\Entity\Enums\EntityEnum;

class GrokImagineVideoTTVDriver extends BaseDriver implements WithTextToVideoInterface
{
    use HasTextToVideo;

    public function enum(): EntityEnum
    {
        return EntityEnum::GROK_IMAGINE_VIDEO_TTV;
    }
}

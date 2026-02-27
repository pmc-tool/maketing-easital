<?php

namespace App\Domains\Entity\Drivers\FalAI;

use App\Domains\Entity\BaseDriver;
use App\Domains\Entity\Concerns\Calculate\HasTextToVideo;
use App\Domains\Entity\Concerns\Input\HasInputImage;
use App\Domains\Entity\Contracts\Calculate\WithTextToVideoInterface;
use App\Domains\Entity\Contracts\Input\WithInputImageInterface;
use App\Domains\Entity\Enums\EntityEnum;

class GrokImagineVideoITVDriver extends BaseDriver implements WithInputImageInterface, WithTextToVideoInterface
{
    use HasInputImage;
    use HasTextToVideo;

    public function enum(): EntityEnum
    {
        return EntityEnum::GROK_IMAGINE_VIDEO_ITV;
    }
}

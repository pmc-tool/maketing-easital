<?php

namespace App\Domains\Entity\Drivers\FalAI\Seedance;

use App\Domains\Entity\BaseDriver;
use App\Domains\Entity\Concerns\Calculate\HasTextToVideo;
use App\Domains\Entity\Contracts\Calculate\WithTextToVideoInterface;
use App\Domains\Entity\Enums\EntityEnum;

class Seedance15ProTTVDriver extends BaseDriver implements WithTextToVideoInterface
{
    use HasTextToVideo;

    public function enum(): EntityEnum
    {
        return EntityEnum::SEEDANCE_1_5_PRO_TTV;
    }
}

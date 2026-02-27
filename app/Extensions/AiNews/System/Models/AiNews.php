<?php

namespace App\Extensions\AiNews\System\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AiNews extends Model
{
    protected $table = 'ai_news_videos';

    protected $fillable = [
        'user_id',
        'video_id',
        'title',
        'presenter_type',
        'status',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}

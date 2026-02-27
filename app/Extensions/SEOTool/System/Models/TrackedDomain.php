<?php

declare(strict_types=1);

namespace App\Extensions\SEOTool\System\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class TrackedDomain extends Model
{
    protected $table = 'seo_tracked_domains';

    protected $fillable = [
        'user_id',
        'domain',
        'keyword',
        'country',
        'ranking_data',
        'last_checked_at',
    ];

    protected $casts = [
        'ranking_data'   => 'array',
        'last_checked_at' => 'datetime',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(\App\Models\User::class);
    }
}

<?php

declare(strict_types=1);

namespace App\Extensions\SEOTool\System\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AuditResult extends Model
{
    protected $table = 'seo_audit_results';

    protected $fillable = [
        'user_id',
        'url',
        'score',
        'results',
    ];

    protected $casts = [
        'results' => 'array',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(\App\Models\User::class);
    }
}

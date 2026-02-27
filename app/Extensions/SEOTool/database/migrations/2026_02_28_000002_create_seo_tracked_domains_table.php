<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('seo_tracked_domains', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->string('domain');
            $table->string('keyword')->nullable();
            $table->string('country', 5)->default('US');
            $table->json('ranking_data')->nullable();
            $table->timestamp('last_checked_at')->nullable();
            $table->timestamps();

            $table->index(['user_id', 'domain']);
            $table->index(['user_id', 'keyword']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('seo_tracked_domains');
    }
};

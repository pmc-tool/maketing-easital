<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('ai_news_videos', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->string('video_id');
            $table->string('title');
            $table->string('presenter_type')->default('avatar'); // 'avatar' or 'talking_photo'
            $table->string('status')->default('in_progress');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('ai_news_videos');
    }
};

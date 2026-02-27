<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('seo_audit_results', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->string('url');
            $table->integer('score')->default(0);
            $table->json('results')->nullable();
            $table->timestamps();

            $table->index(['user_id', 'url']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('seo_audit_results');
    }
};

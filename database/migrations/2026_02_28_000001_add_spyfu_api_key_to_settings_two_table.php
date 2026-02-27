<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('settings_two', function (Blueprint $table) {
            $table->text('spyfu_api_key')->nullable();
        });
    }

    public function down(): void
    {
        Schema::table('settings_two', function (Blueprint $table) {
            $table->dropColumn('spyfu_api_key');
        });
    }
};

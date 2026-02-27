<?php

declare(strict_types=1);

namespace App\Extensions\AiNews\System;

use App\Extensions\AiNews\System\Http\Controllers\AiNewsController;
use Illuminate\Contracts\Http\Kernel;
use Illuminate\Routing\Router;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;

/**
 * @note When you create a new service provider, make sure to add it to the "MarketplaceServiceProvider".
 * Otherwise, your Laravel application won't recognize this provider, and the related functions won't work properly.
 */
class AiNewsServiceProvider extends ServiceProvider
{
    public function register(): void {}

    public function boot(Kernel $kernel): void
    {
        $this->registerViews()
            ->registerRoutes()
            ->registerMigrations();
    }

    public function registerViews(): static
    {
        $this->loadViewsFrom([__DIR__ . '/../resources/views'], 'ai-news');
        return $this;
    }

    public function registerMigrations(): static
    {
        $this->loadMigrationsFrom(__DIR__ . '/../database/migrations');
        return $this;
    }

    private function registerRoutes(): static
    {
        $this->router()
            ->group([
                'middleware' => ['web', 'auth'],
            ], function (Router $router) {
                $router
                    ->prefix('dashboard/user')
                    ->name('dashboard.user.')
                    ->group(function (Router $router) {
                        $router->get('ai-news', [AiNewsController::class, 'index'])->name('ai-news.index');
                        $router->get('ai-news/create', [AiNewsController::class, 'create'])->name('ai-news.create');
                        $router->post('ai-news', [AiNewsController::class, 'store'])->name('ai-news.store');
                        $router->get('ai-news-delete/{id}', [AiNewsController::class, 'delete'])->name('ai-news.delete');
                        $router->get('ai-news-check', [AiNewsController::class, 'checkVideoStatus'])->name('ai-news.check');
                    });
            });

        return $this;
    }

    private function router(): Router|Route
    {
        return $this->app['router'];
    }
}

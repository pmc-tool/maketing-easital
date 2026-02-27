<?php

declare(strict_types=1);

namespace App\Extensions\SEOTool\System;

use App\Extensions\SEOTool\System\Http\Controllers\CompetitorAnalysisController;
use App\Extensions\SEOTool\System\Http\Controllers\ContentOptimizerController;
use App\Extensions\SEOTool\System\Http\Controllers\DashboardController;
use App\Extensions\SEOTool\System\Http\Controllers\DomainAnalysisController;
use App\Extensions\SEOTool\System\Http\Controllers\KeywordResearchController;
use App\Extensions\SEOTool\System\Http\Controllers\PPCIntelligenceController;
use App\Extensions\SEOTool\System\Http\Controllers\SeoController;
use App\Extensions\SEOTool\System\Http\Controllers\SerpTrackerController;
use App\Extensions\SEOTool\System\Http\Controllers\SiteAuditController;
use App\Http\Middleware\CheckTemplateTypeAndPlan;
use Illuminate\Contracts\Http\Kernel;
use Illuminate\Routing\Router;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;

class SEOToolServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->registerConfig();
    }

    public function boot(Kernel $kernel): void
    {
        $this->registerTranslations()
            ->registerViews()
            ->registerRoutes()
            ->registerMigrations()
            ->registerComponents();

    }

    public function registerComponents(): static
    {
        //        $this->loadViewComponentsAs('example', []);

        return $this;
    }

    public function registerConfig(): static
    {
        $this->mergeConfigFrom(__DIR__ . '/../config/seo-tool.php', 'seo-tool');

        return $this;
    }

    protected function registerTranslations(): static
    {
        $this->loadTranslationsFrom(__DIR__ . '/../resources/lang', 'seo-tool');

        return $this;
    }

    public function registerViews(): static
    {
        $this->loadViewsFrom([__DIR__ . '/../resources/views'], 'seo-tool');

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
                    ->prefix('dashboard')
                    ->name('dashboard.')
                    ->group(function (Router $router) {
                        $router
                            ->prefix('user')
                            ->name('user.')
                            ->group(function (Router $router) {

                                // Existing SEO Controller routes
                                $router
                                    ->controller(SeoController::class)
                                    ->prefix('seo')
                                    ->name('seo.')
                                    ->group(function () {
                                        Route::get('', 'index')->name('index')->middleware(CheckTemplateTypeAndPlan::class);
                                        Route::post('suggestKeywords', 'suggestKeywords')->name('suggestKeywords');
                                        Route::post('genkeywords', 'generateKeywords')->name('genkeywords');
                                        Route::post('genSearchQuestions', 'genSearchQuestions')->name('genSearchQuestions');
                                        Route::post('genSEO', 'genSEO')->name('genSEO');
                                        Route::post('analyseArticle', 'analyseArticle')->name('analyseArticle');
                                        Route::post('improveArticle', 'improveArticle')->name('improveArticle');
                                    });

                                // Dashboard / Quick Lookup
                                $router
                                    ->controller(DashboardController::class)
                                    ->prefix('seo/dashboard')
                                    ->name('seo.dashboard.')
                                    ->group(function () {
                                        Route::post('quick-lookup', 'quickDomainLookup')->name('quickLookup');
                                    });

                                // Keyword Research
                                $router
                                    ->controller(KeywordResearchController::class)
                                    ->prefix('seo/keywords')
                                    ->name('seo.keywords.')
                                    ->group(function () {
                                        Route::post('research', 'research')->name('research');
                                        Route::post('related', 'getRelated')->name('related');
                                    });

                                // Competitor Analysis
                                $router
                                    ->controller(CompetitorAnalysisController::class)
                                    ->prefix('seo/competitors')
                                    ->name('seo.competitors.')
                                    ->group(function () {
                                        Route::post('analyze', 'analyze')->name('analyze');
                                        Route::post('kombat', 'kombat')->name('kombat');
                                    });

                                // Domain Analysis
                                $router
                                    ->controller(DomainAnalysisController::class)
                                    ->prefix('seo/domain')
                                    ->name('seo.domain.')
                                    ->group(function () {
                                        Route::post('analyze', 'analyze')->name('analyze');
                                        Route::post('backlinks', 'backlinks')->name('backlinks');
                                    });

                                // SERP Tracker
                                $router
                                    ->controller(SerpTrackerController::class)
                                    ->prefix('seo/serp')
                                    ->name('seo.serp.')
                                    ->group(function () {
                                        Route::post('track', 'trackRanking')->name('track');
                                        Route::post('history', 'domainHistory')->name('history');
                                    });

                                // Site Audit
                                $router
                                    ->controller(SiteAuditController::class)
                                    ->prefix('seo/audit')
                                    ->name('seo.audit.')
                                    ->group(function () {
                                        Route::post('run', 'audit')->name('run');
                                    });

                                // PPC Intelligence
                                $router
                                    ->controller(PPCIntelligenceController::class)
                                    ->prefix('seo/ppc')
                                    ->name('seo.ppc.')
                                    ->group(function () {
                                        Route::post('overview', 'overview')->name('overview');
                                        Route::post('ad-history', 'adHistory')->name('adHistory');
                                    });

                                // Content Optimizer
                                $router
                                    ->controller(ContentOptimizerController::class)
                                    ->prefix('seo/optimizer')
                                    ->name('seo.optimizer.')
                                    ->group(function () {
                                        Route::post('optimize', 'optimize')->name('optimize');
                                    });
                            });

                    });
            });

        return $this;
    }

    private function router(): Router|Route
    {
        return $this->app['router'];
    }
}

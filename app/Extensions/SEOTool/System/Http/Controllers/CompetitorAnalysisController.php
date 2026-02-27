<?php

declare(strict_types=1);

namespace App\Extensions\SEOTool\System\Http\Controllers;

use App\Domains\Entity\Enums\EntityEnum;
use App\Domains\Entity\Facades\Entity;
use App\Extensions\SEOTool\System\Services\SpyFu\SpyFuCompetitorService;
use App\Http\Controllers\Controller;
use App\Models\Usage;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CompetitorAnalysisController extends Controller
{
    public function analyze(Request $request): JsonResponse
    {
        try {
            $driver = Entity::driver(EntityEnum::SPYFU);
            if (! $driver->hasCreditBalance()) {
                return response()->json(['error' => __('You have no credits left. Please consider upgrading your plan.')], 402);
            }

            $competitorService = new SpyFuCompetitorService;
            $result = $competitorService->getFullCompetitorReport(
                $request->domain,
                $request->country ?? 'US'
            );

            $driver->input(json_encode($result))->calculateCredit()->decreaseCredit();
            Usage::getSingle()->updateWordCounts($driver->calculate());

            return response()->json(['result' => $result]);
        } catch (\Throwable $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function kombat(Request $request): JsonResponse
    {
        try {
            $driver = Entity::driver(EntityEnum::SPYFU);
            if (! $driver->hasCreditBalance()) {
                return response()->json(['error' => __('You have no credits left. Please consider upgrading your plan.')], 402);
            }

            $competitorService = new SpyFuCompetitorService;
            $domains = array_filter(explode(',', $request->domains));
            $result = $competitorService->getKombatOverlap($domains, $request->country ?? 'US');

            $driver->input(json_encode($result))->calculateCredit()->decreaseCredit();
            Usage::getSingle()->updateWordCounts($driver->calculate());

            return response()->json(['result' => $result]);
        } catch (\Throwable $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}

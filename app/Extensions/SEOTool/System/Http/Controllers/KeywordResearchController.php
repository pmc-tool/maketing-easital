<?php

declare(strict_types=1);

namespace App\Extensions\SEOTool\System\Http\Controllers;

use App\Domains\Entity\Enums\EntityEnum;
use App\Domains\Entity\Facades\Entity;
use App\Extensions\SEOTool\System\Services\SpyFu\SpyFuKeywordService;
use App\Http\Controllers\Controller;
use App\Models\Usage;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class KeywordResearchController extends Controller
{
    public function research(Request $request): JsonResponse
    {
        try {
            $driver = Entity::driver(EntityEnum::SPYFU);
            if (! $driver->hasCreditBalance()) {
                return response()->json(['error' => __('You have no credits left. Please consider upgrading your plan.')], 402);
            }

            $keywordService = new SpyFuKeywordService;
            $result = $keywordService->getFullKeywordReport(
                $request->keyword,
                $request->country ?? 'US'
            );

            $driver->input(json_encode($result))->calculateCredit()->decreaseCredit();
            Usage::getSingle()->updateWordCounts($driver->calculate());

            return response()->json(['result' => $result]);
        } catch (\Throwable $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function getRelated(Request $request): JsonResponse
    {
        try {
            $driver = Entity::driver(EntityEnum::SPYFU);
            if (! $driver->hasCreditBalance()) {
                return response()->json(['error' => __('You have no credits left. Please consider upgrading your plan.')], 402);
            }

            $keywordService = new SpyFuKeywordService;
            $result = $keywordService->getRelatedKeywords(
                $request->keyword,
                $request->startRow ?? 0,
                $request->maxRows ?? 50,
                $request->country ?? 'US'
            );

            $driver->input(json_encode($result))->calculateCredit()->decreaseCredit();
            Usage::getSingle()->updateWordCounts($driver->calculate());

            return response()->json(['result' => $result]);
        } catch (\Throwable $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}

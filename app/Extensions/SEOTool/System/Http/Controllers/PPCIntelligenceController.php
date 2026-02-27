<?php

declare(strict_types=1);

namespace App\Extensions\SEOTool\System\Http\Controllers;

use App\Domains\Entity\Enums\EntityEnum;
use App\Domains\Entity\Facades\Entity;
use App\Extensions\SEOTool\System\Services\SpyFu\SpyFuPPCService;
use App\Http\Controllers\Controller;
use App\Models\Usage;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PPCIntelligenceController extends Controller
{
    public function overview(Request $request): JsonResponse
    {
        try {
            $driver = Entity::driver(EntityEnum::SPYFU);
            if (! $driver->hasCreditBalance()) {
                return response()->json(['error' => __('You have no credits left. Please consider upgrading your plan.')], 402);
            }

            $ppcService = new SpyFuPPCService;
            $result = $ppcService->getPPCOverview(
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

    public function adHistory(Request $request): JsonResponse
    {
        try {
            $driver = Entity::driver(EntityEnum::SPYFU);
            if (! $driver->hasCreditBalance()) {
                return response()->json(['error' => __('You have no credits left. Please consider upgrading your plan.')], 402);
            }

            $ppcService = new SpyFuPPCService;
            $result = $ppcService->getAdHistory(
                $request->domain,
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
}

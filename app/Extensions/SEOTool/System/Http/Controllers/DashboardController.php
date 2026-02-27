<?php

declare(strict_types=1);

namespace App\Extensions\SEOTool\System\Http\Controllers;

use App\Domains\Entity\Enums\EntityEnum;
use App\Domains\Entity\Facades\Entity;
use App\Extensions\SEOTool\System\Services\SpyFu\SpyFuDomainService;
use App\Http\Controllers\Controller;
use App\Models\Usage;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function quickDomainLookup(Request $request): JsonResponse
    {
        try {
            $driver = Entity::driver(EntityEnum::SPYFU);
            if (! $driver->hasCreditBalance()) {
                return response()->json(['error' => __('You have no credits left. Please consider upgrading your plan.')], 402);
            }

            $domainService = new SpyFuDomainService;
            $result = $domainService->getDomainOverview($request->domain, $request->country ?? 'US');

            $driver->input(json_encode($result))->calculateCredit()->decreaseCredit();
            Usage::getSingle()->updateWordCounts($driver->calculate());

            return response()->json(['result' => $result]);
        } catch (\Throwable $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}

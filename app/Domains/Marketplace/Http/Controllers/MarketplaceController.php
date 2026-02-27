<?php

namespace App\Domains\Marketplace\Http\Controllers;

use App\Domains\Marketplace\Services\ExtensionInstallService;
use App\Domains\Marketplace\Services\ExtensionUninstallService;
use App\Http\Controllers\Controller;

class MarketplaceController extends Controller
{
    public function install(string $slug, ExtensionInstallService $service): mixed
    {
        return $service->install($slug);
    }

    public function uninstall(string $slug, ExtensionUninstallService $service): mixed
    {
        return $service->uninstall($slug);
    }
}

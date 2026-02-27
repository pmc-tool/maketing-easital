<?php

namespace RachidLaasri\LaravelInstaller\Repositories;

use App\Models\SettingTwo;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Storage;

class ApplicationStatusRepository implements ApplicationStatusRepositoryInterface
{
    public function financePage(string $view = 'panel.admin.finance.gateways.particles.finance'): string
    {
        // No more license checks
        return $view;
    }

    public function financeLicense(): bool
    {
        // No more license checks
        return true;
    }

    // Remove licenseType() method as it is no longer needed
    // public function licenseType(): ?string {}

    public function check(string $licenseKey, bool $installed = false): bool
    {
        // Eliminate license check, do nothing
        return true;
    }

    // Remove the portal() method if not used anymore
    // public function portal() {}

    public function getVariable(string $key)
    {
        // Not related to license, may return null or default value
        return null;
    }

    public function save($data): bool
    {
        // If you don't need to save the license, you can change or ignore this logic.
        return true;
    }

    public function setLicense(): void
    {
        // Eliminate saving licenses to the database
    }

    public function generate(Request $request): bool
    {
        // Remove license check in request
        return true;
    }

    public function next($request, Closure $next)
    {
        // Remove license check, no more redirect
        return $next($request);
    }

    public function webhook($request)
    {
        // Remove license check and no more status updates
        return response()->noContent();
    }

    // The appKey() method can still be retained if needed for other purposes.
    public function appKey(): string
    {
        return md5(config('app.key'));
    }
}
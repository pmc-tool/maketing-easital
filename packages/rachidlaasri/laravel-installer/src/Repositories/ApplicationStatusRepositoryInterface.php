<?php

namespace RachidLaasri\LaravelInstaller\Repositories;

use Closure;
use Illuminate\Http\Request;

interface ApplicationStatusRepositoryInterface
{
    // Returns the view of the financial page without checking the license anymore
    public function financePage(string $view = 'panel.admin.finance.gateways.particles.finance'): string;

    // No need to check license anymore, always return true
    public function financeLicense(): bool;

    // This method may no longer be needed and should be removed.
    // public function licenseType(): ?string;

    // Remove check() since license check is no longer needed
    // public function check(string $licenseKey, bool $installed = false): bool;

    // Portal() may not be needed anymore, if you don't need to store license state.
    // public function portal();

    // Keep it if you need to get some value from the application
    public function getVariable(string $key);

    // The generate() method can be retained if the request still needs to be processed, not related to the license.
    public function generate(Request $request): bool;

    // The setLicense() method can be removed
    // public function setLicense(): void;

    // This method may no longer be necessary.
    // public function next($request, Closure $next);

    // The webhook() method can be removed
    // public function webhook($request);
}
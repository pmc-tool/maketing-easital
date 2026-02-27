<?php

namespace App\Domains\Marketplace\Repositories;

use App\Domains\Marketplace\Repositories\Contracts\ExtensionRepositoryInterface;
use App\Helpers\Classes\Helper;
use App\Models\Extension;
use App\Models\SettingTwo;
use Closure;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Client\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use RachidLaasri\LaravelInstaller\Repositories\ApplicationStatusRepository;

class ExtensionRepository implements ExtensionRepositoryInterface
{
    public ?array $banners = [];

    public const APP_VERSION = 7.2;
    public const API_URL = 'https://buy-magicai.zoomnearby.com/fetch-magicai.php';

    // ======================================================================
    // INTERFACE METHODS
    // ======================================================================

    public function find(string $slug): array
    {
        $response = $this->request('get', '', [
            'endpoint' => 'find',
            'slug'     => $slug,
        ]);

        if (! $response->ok()) {
            return [];
        }

        $data = $response->json('data') ?? [];
        $extension = Extension::query()->firstWhere('slug', $slug);

        return array_merge($data, [
            'only_show'  => Str::contains($extension['slug'] ?? '', ['only-show']),
            'db_version' => $extension?->version,
            'installed'  => (bool) $extension?->installed,
            'upgradable' => $extension && isset($data['version']) && $extension->version !== $data['version'],
        ]);
    }

    public function findBySlugInDb(string $slug): Model|Builder|null
    {
        return Extension::query()->where('slug', $slug)->first();
    }

    public function all(bool $isTheme = false): array
    {
        $endpoint = $isTheme ? 'theme' : 'extension';

        $response = $this->request('get', '', ['endpoint' => $endpoint]);

        if (! $response->ok()) {
            return [];
        }

        $data = $response->json('data') ?? [];
        $this->banners = $response->json('banners') ?? [];

        $this->updateExtensionsTable($data);

        return $this->mergedInstalled($data);
    }

    public function install(string $slug, string $version): Response
    {
        return $this->request('post', "extension/{$slug}/install/{$version}");
    }

    public function check($request = null, Closure $next = null): bool
    {
        $domain = request()->getHost();

        return cache()->remember(
            'check_license_domain_' . $domain,
            86400,
            fn () => (bool) $this->request('post', 'check')->json('licensed', false)
        );
    }

    public function supportExtensions(): array
    {
        $response = $this->request('get', '', ['endpoint' => 'extension']);

        if (! $response->ok()) {
            return [];
        }

        $data = $response->json('data') ?? [];
        $this->banners = $response->json('banners') ?? [];

        $this->updateExtensionsTable($data);

        return $this->mergedInstalled($data);
    }

    public function subscription(): Response
    {
        return $this->request('get', 'subscription');
    }

    public function subscriptionPayment(): string
    {
        return cache()->remember('subscription_payment', 86400, function () {
            $response = $this->subscription();
            return $response->ok() ? (string) $response->json('payment', '') : '';
        });
    }

    public function cart(): array
    {
        $response = $this->request('get', 'cart/' . $this->domainKey());
        return $response->ok() ? ($response->json() ?? []) : [];
    }

    public function blacklist(): bool
    {
        return (bool) $this->request('post', 'blacklist')->json('blacklist', false);
    }

    // ======================================================================
    // BUSINESS METHODS
    // ======================================================================

    public function deleteCoupon(): array
    {
        $response = $this->request('get', 'cart/coupon/' . $this->domainKey() . '/delete');
        return $response->ok()
            ? $response->json()
            : ['status' => 'error', 'message' => __('An error occurred while deleting the coupon.')];
    }

    public function storeCoupon(string $couponCode): array
    {
        $response = $this->request('post', 'cart/coupon/' . $this->domainKey(), [
            'coupon_code' => $couponCode,
        ]);

        return $response->ok()
            ? $response->json()
            : ['status' => 'error', 'message' => __('An error occurred while applying the coupon.')];
    }

    public function licensed(array $data): array
    {
        return $data;
    }

    public function paidExtensions(): array
    {
        return collect($this->themes())
            ->merge($this->extensions())
            ->where('price', '>', 0)
            ->reject(fn ($e) => Str::contains($e['slug'], ['cart']))
            ->values()
            ->toArray();
    }

    public function banners(): array
    {
        if (empty($this->banners)) {
            $this->all();
        }
        return $this->banners ?? [];
    }

    public function extensions(): array
    {
        return collect($this->all())
            ->reject(fn ($e) => Str::contains($e['slug'], ['cart']))
            ->values()
            ->toArray();
    }

    public function themes(): array
    {
        return collect($this->all(true))
            ->reject(fn ($t) => Str::contains($t['slug'], ['cart']))
            ->values()
            ->toArray();
    }

    public function findId(int $id)
    {
        return collect($this->extensions())->firstWhere('id', $id);
    }

    public function findSupport(string $slug): array
    {
        return $this->find($slug);
    }

    public function appVersion(): bool|string|int
    {
        $file = base_path('version.txt');
        return file_exists($file) ? trim(file_get_contents($file)) : self::APP_VERSION;
    }

    // ======================================================================
    // MIDDLEWARE
    // ======================================================================

    public function handleLicenseCheckMiddleware(Request $request, Closure $next)
    {
        if (! $this->check()) {
            Storage::disk('local')->delete('portal');
            SettingTwo::getCache()->update(['liquid_license_domain_key' => null]);
            cache()->forget('check_license_domain_' . $request->getHost());

            return redirect()
                ->route('LaravelInstaller::license')
                ->with('message', 'License for this domain is invalid. Please contact support.');
        }

        return $next($request);
    }

    // ======================================================================
    // HELPERS
    // ======================================================================

    public function request(string $method, string $route, array $body = [], $fullUrl = null)
    {
        $fullUrl ??= rtrim(self::API_URL, '/') . '/' . ltrim($route, '/');

        return Http::withHeaders([
            'Accept'         => 'application/json',
            'Content-Type'   => 'application/json',
            'x-license-type' => $this->licenseType(),
            'x-app-key'      => $this->appKey(),
            'x-app-version'  => (string) $this->appVersion(),
        ])->timeout(60)->{$method}($fullUrl, $body);
    }

    public function mergedInstalled(array $data): array
    {
        $extensions = Extension::query()->get();

        return collect($data)->map(function ($extension) use ($extensions) {
            $db = $extensions->firstWhere('slug', $extension['slug']);

            return array_merge($extension, [
                'only_show'  => Str::contains($extension['slug'], ['only-show']),
                'db_version' => $db?->version,
                'installed'  => (bool) $db?->installed,
                'upgradable' => $db && isset($extension['version']) && $db->version !== $extension['version'],
            ]);
        })->toArray();
    }

    /**
     * ✅ HARDENED — WILL NEVER CRASH
     */
    private function updateExtensionsTable(?array $data): void
    {
        if (empty($data) || ! is_array($data)) {
            return;
        }

        foreach ($data as $extension) {
            if (! isset($extension['slug'])) {
                continue;
            }

            Extension::query()->updateOrCreate(
                ['slug' => $extension['slug']],
                [
                    'is_theme' => $extension['is_theme'] ?? false,
                    'version'  => $extension['version'] ?? null,
                ]
            );
        }
    }

    public function appKey()
    {
        return md5(config('app.key'));
    }

    public function licenseType()
    {
        return app(ApplicationStatusRepository::class)->getVariable('liquid_license_type')
            ?: Helper::settingTwo('liquid_license_type');
    }

    public function domainKey()
    {
        return app(ApplicationStatusRepository::class)->getVariable('liquid_license_domain_key')
            ?: Helper::settingTwo('liquid_license_domain_key');
    }
}

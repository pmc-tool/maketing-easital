<div x-data="{
    domain: '',
    country: 'US',
    stats: null,

    async quickLookup() {
        if (!this.domain) { toastr.warning('{{ __('Please enter a domain') }}'); return; }
        const data = await this.postRequest('/dashboard/user/seo/dashboard/quick-lookup', {
            domain: this.domain,
            country: this.country
        });
        if (data) this.stats = data.result;
    }
}">
    <div class="mb-8">
        <h2 class="mb-2 text-xl font-bold text-heading-foreground">{{ __('SEO Dashboard') }}</h2>
        <p class="text-sm text-foreground/60">{{ __('Quick overview and domain lookup. Enter a domain to get started.') }}</p>
    </div>

    {{-- Quick Domain Lookup --}}
    <div class="mb-8 rounded-xl border border-border bg-background p-6">
        <h3 class="mb-4 text-sm font-semibold text-heading-foreground">{{ __('Quick Domain Lookup') }}</h3>
        @include('seo-tool::partials.domain-input', ['model' => 'domain', 'countryModel' => 'country', 'action' => 'quickLookup()', 'buttonText' => 'Lookup'])
    </div>

    {{-- Stats Grid --}}
    <template x-if="stats">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div class="rounded-xl border border-border bg-background p-4 transition-shadow hover:shadow-md">
                <p class="text-xs font-medium text-foreground/60">{{ __('Organic Keywords') }}</p>
                <p class="mt-1 text-2xl font-bold text-heading-foreground" x-text="(stats.organicKeywords || stats.totalOrganicResults || 0).toLocaleString()"></p>
            </div>
            <div class="rounded-xl border border-border bg-background p-4 transition-shadow hover:shadow-md">
                <p class="text-xs font-medium text-foreground/60">{{ __('Monthly Organic Clicks') }}</p>
                <p class="mt-1 text-2xl font-bold text-heading-foreground" x-text="(stats.monthlyOrganicClicks || stats.averageOrganicClicks || 0).toLocaleString()"></p>
            </div>
            <div class="rounded-xl border border-border bg-background p-4 transition-shadow hover:shadow-md">
                <p class="text-xs font-medium text-foreground/60">{{ __('Paid Keywords') }}</p>
                <p class="mt-1 text-2xl font-bold text-heading-foreground" x-text="(stats.paidKeywords || stats.totalAdsPurchased || 0).toLocaleString()"></p>
            </div>
            <div class="rounded-xl border border-border bg-background p-4 transition-shadow hover:shadow-md">
                <p class="text-xs font-medium text-foreground/60">{{ __('Estimated Monthly PPC Budget') }}</p>
                <p class="mt-1 text-2xl font-bold text-heading-foreground" x-text="'$' + (stats.monthlyPpcBudget || stats.averageAdBudget || 0).toLocaleString()"></p>
            </div>
        </div>
    </template>

    {{-- Welcome cards when no stats --}}
    <template x-if="!stats">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            @foreach([
                ['icon' => 'key', 'title' => 'Keyword Research', 'desc' => 'Discover profitable keywords with volume, CPC, and difficulty data.', 'tool' => 'keyword-research'],
                ['icon' => 'users', 'title' => 'Competitor Analysis', 'desc' => 'Spy on competitors organic and paid strategies.', 'tool' => 'competitor-analysis'],
                ['icon' => 'world', 'title' => 'Domain Analysis', 'desc' => 'Deep dive into any domain SEO profile and backlinks.', 'tool' => 'domain-analysis'],
                ['icon' => 'chart-line', 'title' => 'SERP Tracker', 'desc' => 'Track keyword ranking history over time.', 'tool' => 'serp-tracker'],
                ['icon' => 'clipboard-check', 'title' => 'Site Audit', 'desc' => 'AI-powered on-page SEO audit for any URL.', 'tool' => 'site-audit'],
                ['icon' => 'currency-dollar', 'title' => 'PPC Intelligence', 'desc' => 'Analyze paid search strategies and ad history.', 'tool' => 'ppc-intelligence'],
            ] as $card)
            <button
                class="group rounded-xl border border-border bg-background p-6 text-left transition-all hover:border-primary/30 hover:shadow-md"
                @click="switchTool('{{ $card['tool'] }}')"
            >
                <div class="mb-3 inline-flex rounded-lg bg-primary/10 p-2.5 transition-colors group-hover:bg-primary/20">
                    <x-dynamic-component :component="'tabler-' . $card['icon']" class="size-5 text-primary" />
                </div>
                <h4 class="mb-1 text-sm font-semibold text-heading-foreground">{{ __($card['title']) }}</h4>
                <p class="text-xs text-foreground/60">{{ __($card['desc']) }}</p>
            </button>
            @endforeach
        </div>
    </template>
</div>

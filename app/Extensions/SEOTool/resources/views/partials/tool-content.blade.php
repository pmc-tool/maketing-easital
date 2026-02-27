{{-- Loading overlay --}}
<div x-show="loading" class="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
    <div class="rounded-xl bg-background p-6 shadow-xl">
        <div class="flex items-center gap-3">
            <svg class="size-5 animate-spin text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span class="text-sm font-medium text-heading-foreground">{{ __('Processing...') }}</span>
        </div>
    </div>
</div>

{{-- Tool Views --}}
<div x-show="activeTool === 'dashboard'" x-cloak>
    @include('seo-tool::tools.dashboard')
</div>

<div x-show="activeTool === 'content-analyzer'" x-cloak>
    @include('seo-tool::tools.content-analyzer')
</div>

<div x-show="activeTool === 'keyword-research'" x-cloak>
    @include('seo-tool::tools.keyword-research')
</div>

<div x-show="activeTool === 'competitor-analysis'" x-cloak>
    @include('seo-tool::tools.competitor-analysis')
</div>

<div x-show="activeTool === 'domain-analysis'" x-cloak>
    @include('seo-tool::tools.domain-analysis')
</div>

<div x-show="activeTool === 'serp-tracker'" x-cloak>
    @include('seo-tool::tools.serp-tracker')
</div>

<div x-show="activeTool === 'site-audit'" x-cloak>
    @include('seo-tool::tools.site-audit')
</div>

<div x-show="activeTool === 'ppc-intelligence'" x-cloak>
    @include('seo-tool::tools.ppc-intelligence')
</div>

<div x-show="activeTool === 'content-optimizer'" x-cloak>
    @include('seo-tool::tools.content-optimizer')
</div>

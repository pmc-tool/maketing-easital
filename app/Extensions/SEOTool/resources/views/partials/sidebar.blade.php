<aside class="hidden w-64 shrink-0 border-r border-border bg-background lg:block">
    <div class="flex h-full flex-col">
        <div class="border-b border-border p-4">
            <h3 class="flex items-center gap-2 text-sm font-semibold text-heading-foreground">
                <x-tabler-chart-bar class="size-5" />
                {{ __('SEO Tools') }}
                <span class="ml-auto rounded bg-primary/10 px-1.5 py-0.5 text-2xs font-bold text-primary">v4.0</span>
            </h3>
        </div>

        <nav class="flex-1 overflow-y-auto p-2">
            <ul class="space-y-0.5">
                {{-- Dashboard --}}
                <li>
                    <button
                        class="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors"
                        :class="activeTool === 'dashboard' ? 'bg-primary/10 text-primary' : 'text-heading-foreground hover:bg-foreground/5'"
                        @click="switchTool('dashboard')"
                    >
                        <x-tabler-layout-dashboard class="size-4" />
                        {{ __('Overview') }}
                    </button>
                </li>

                {{-- Content Analyzer (existing) --}}
                <li>
                    <button
                        class="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors"
                        :class="activeTool === 'content-analyzer' ? 'bg-primary/10 text-primary' : 'text-heading-foreground hover:bg-foreground/5'"
                        @click="switchTool('content-analyzer')"
                    >
                        <x-tabler-file-analytics class="size-4" />
                        {{ __('Content Analyzer') }}
                    </button>
                </li>

                <li class="px-3 pb-1 pt-4">
                    <span class="text-2xs font-semibold uppercase tracking-wider text-foreground/40">{{ __('SpyFu Intelligence') }}</span>
                </li>

                {{-- Keyword Research --}}
                <li>
                    <button
                        class="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors"
                        :class="activeTool === 'keyword-research' ? 'bg-primary/10 text-primary' : 'text-heading-foreground hover:bg-foreground/5'"
                        @click="switchTool('keyword-research')"
                    >
                        <x-tabler-key class="size-4" />
                        {{ __('Keyword Research') }}
                    </button>
                </li>

                {{-- Competitor Analysis --}}
                <li>
                    <button
                        class="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors"
                        :class="activeTool === 'competitor-analysis' ? 'bg-primary/10 text-primary' : 'text-heading-foreground hover:bg-foreground/5'"
                        @click="switchTool('competitor-analysis')"
                    >
                        <x-tabler-users class="size-4" />
                        {{ __('Competitor Analysis') }}
                    </button>
                </li>

                {{-- Domain Analysis --}}
                <li>
                    <button
                        class="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors"
                        :class="activeTool === 'domain-analysis' ? 'bg-primary/10 text-primary' : 'text-heading-foreground hover:bg-foreground/5'"
                        @click="switchTool('domain-analysis')"
                    >
                        <x-tabler-world class="size-4" />
                        {{ __('Domain Analysis') }}
                    </button>
                </li>

                {{-- SERP Tracker --}}
                <li>
                    <button
                        class="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors"
                        :class="activeTool === 'serp-tracker' ? 'bg-primary/10 text-primary' : 'text-heading-foreground hover:bg-foreground/5'"
                        @click="switchTool('serp-tracker')"
                    >
                        <x-tabler-chart-line class="size-4" />
                        {{ __('SERP Tracker') }}
                    </button>
                </li>

                {{-- Site Audit --}}
                <li>
                    <button
                        class="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors"
                        :class="activeTool === 'site-audit' ? 'bg-primary/10 text-primary' : 'text-heading-foreground hover:bg-foreground/5'"
                        @click="switchTool('site-audit')"
                    >
                        <x-tabler-clipboard-check class="size-4" />
                        {{ __('Site Audit') }}
                    </button>
                </li>

                {{-- PPC Intelligence --}}
                <li>
                    <button
                        class="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors"
                        :class="activeTool === 'ppc-intelligence' ? 'bg-primary/10 text-primary' : 'text-heading-foreground hover:bg-foreground/5'"
                        @click="switchTool('ppc-intelligence')"
                    >
                        <x-tabler-currency-dollar class="size-4" />
                        {{ __('PPC Intelligence') }}
                    </button>
                </li>

                {{-- Content Optimizer --}}
                <li>
                    <button
                        class="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors"
                        :class="activeTool === 'content-optimizer' ? 'bg-primary/10 text-primary' : 'text-heading-foreground hover:bg-foreground/5'"
                        @click="switchTool('content-optimizer')"
                    >
                        <x-tabler-wand class="size-4" />
                        {{ __('Content Optimizer') }}
                    </button>
                </li>
            </ul>
        </nav>

        <div class="border-t border-border p-3">
            <p class="text-center text-2xs text-foreground/40">{{ __('Powered by SpyFu & AI') }}</p>
        </div>
    </div>
</aside>

{{-- Mobile sidebar toggle --}}
<div class="fixed bottom-4 left-4 z-50 lg:hidden">
    <button
        class="flex size-12 items-center justify-center rounded-full bg-primary text-white shadow-lg"
        x-data="{ open: false }"
        @click="open = !open; $refs.mobileSidebar.classList.toggle('hidden')"
    >
        <x-tabler-menu-2 class="size-5" />
    </button>
</div>
<div class="fixed inset-0 z-40 hidden bg-black/50 lg:hidden" x-ref="mobileSidebar" @click="$el.classList.add('hidden')">
    <aside class="h-full w-64 border-r border-border bg-background" @click.stop>
        <nav class="overflow-y-auto p-2 pt-4">
            <ul class="space-y-0.5">
                @foreach([
                    'dashboard' => ['icon' => 'layout-dashboard', 'label' => 'Overview'],
                    'content-analyzer' => ['icon' => 'file-analytics', 'label' => 'Content Analyzer'],
                    'keyword-research' => ['icon' => 'key', 'label' => 'Keyword Research'],
                    'competitor-analysis' => ['icon' => 'users', 'label' => 'Competitor Analysis'],
                    'domain-analysis' => ['icon' => 'world', 'label' => 'Domain Analysis'],
                    'serp-tracker' => ['icon' => 'chart-line', 'label' => 'SERP Tracker'],
                    'site-audit' => ['icon' => 'clipboard-check', 'label' => 'Site Audit'],
                    'ppc-intelligence' => ['icon' => 'currency-dollar', 'label' => 'PPC Intelligence'],
                    'content-optimizer' => ['icon' => 'wand', 'label' => 'Content Optimizer'],
                ] as $tool => $info)
                <li>
                    <button
                        class="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors"
                        :class="activeTool === '{{ $tool }}' ? 'bg-primary/10 text-primary' : 'text-heading-foreground hover:bg-foreground/5'"
                        @click="switchTool('{{ $tool }}'); $refs.mobileSidebar.classList.add('hidden')"
                    >
                        {{ __($info['label']) }}
                    </button>
                </li>
                @endforeach
            </ul>
        </nav>
    </aside>
</div>

<div x-data="{
    url: '',
    result: null,
    chart: null,

    async runAudit() {
        if (!this.url) { toastr.warning('{{ __('Please enter a URL') }}'); return; }
        if (!this.url.startsWith('http')) this.url = 'https://' + this.url;
        const data = await this.postRequest('/dashboard/user/seo/audit/run', { url: this.url });
        if (data && data.result) {
            this.result = data.result;
            this.$nextTick(() => this.renderScoreChart());
        }
    },

    renderScoreChart() {
        if (!this.result || !this.result.score) return;
        const el = document.getElementById('audit-score-chart');
        if (!el) return;
        if (this.chart) this.chart.destroy();

        const score = this.result.score;
        const color = score >= 80 ? '#22c55e' : score >= 50 ? '#eab308' : '#ef4444';

        this.chart = new ApexCharts(el, {
            chart: { type: 'radialBar', height: 200, sparkline: { enabled: true } },
            series: [score],
            plotOptions: {
                radialBar: {
                    startAngle: -90, endAngle: 90,
                    track: { background: 'hsl(var(--heading-foreground) / 3%)', strokeWidth: '97%' },
                    dataLabels: { name: { show: false }, value: { fontSize: '24px', fontWeight: 'bold', offsetY: -5 } }
                }
            },
            colors: [color],
            labels: ['Score']
        });
        this.chart.render();
    },

    severityColor(severity) {
        return { 'critical': 'text-red-600 bg-red-100', 'warning': 'text-yellow-700 bg-yellow-100', 'info': 'text-blue-600 bg-blue-100' }[severity] || 'text-gray-600 bg-gray-100';
    }
}">
    <div class="mb-6">
        <h2 class="mb-2 text-xl font-bold text-heading-foreground">{{ __('Site Audit') }}</h2>
        <p class="text-sm text-foreground/60">{{ __('AI-powered on-page SEO audit. Enter any URL to analyze.') }}</p>
    </div>

    {{-- URL Input --}}
    <div class="mb-6 rounded-xl border border-border bg-background p-6">
        <div class="flex gap-2">
            <input
                class="form-control flex-1"
                type="text"
                x-model="url"
                placeholder="{{ __('Enter URL (e.g. https://example.com/page)') }}"
                @keydown.enter="runAudit()"
            />
            <x-button variant="primary" @click="runAudit()">
                <x-tabler-clipboard-check class="size-4" />
                {{ __('Run Audit') }}
            </x-button>
        </div>
    </div>

    <template x-if="result">
        <div>
            {{-- Score and On-Page Data --}}
            <div class="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div class="rounded-xl border border-border bg-background p-6 text-center">
                    <h3 class="mb-2 text-sm font-semibold text-heading-foreground">{{ __('SEO Score') }}</h3>
                    <div id="audit-score-chart"></div>
                </div>

                <div class="col-span-2 rounded-xl border border-border bg-background p-6">
                    <h3 class="mb-4 text-sm font-semibold text-heading-foreground">{{ __('On-Page Data') }}</h3>
                    <div class="grid grid-cols-2 gap-3 sm:grid-cols-3">
                        <div class="rounded-lg bg-foreground/5 p-3">
                            <p class="text-2xs font-medium text-foreground/60">{{ __('Title Length') }}</p>
                            <p class="text-sm font-bold text-heading-foreground" x-text="(result.onPageData?.titleLength || 0) + ' chars'"></p>
                        </div>
                        <div class="rounded-lg bg-foreground/5 p-3">
                            <p class="text-2xs font-medium text-foreground/60">{{ __('Meta Description') }}</p>
                            <p class="text-sm font-bold text-heading-foreground" x-text="(result.onPageData?.metaDescriptionLength || 0) + ' chars'"></p>
                        </div>
                        <div class="rounded-lg bg-foreground/5 p-3">
                            <p class="text-2xs font-medium text-foreground/60">{{ __('H1 Tags') }}</p>
                            <p class="text-sm font-bold text-heading-foreground" x-text="result.onPageData?.h1Count || 0"></p>
                        </div>
                        <div class="rounded-lg bg-foreground/5 p-3">
                            <p class="text-2xs font-medium text-foreground/60">{{ __('Images Missing Alt') }}</p>
                            <p class="text-sm font-bold" :class="(result.onPageData?.imagesMissingAlt || 0) > 0 ? 'text-red-600' : 'text-green-600'" x-text="result.onPageData?.imagesMissingAlt || 0"></p>
                        </div>
                        <div class="rounded-lg bg-foreground/5 p-3">
                            <p class="text-2xs font-medium text-foreground/60">{{ __('Internal Links') }}</p>
                            <p class="text-sm font-bold text-heading-foreground" x-text="result.onPageData?.internalLinks || 0"></p>
                        </div>
                        <div class="rounded-lg bg-foreground/5 p-3">
                            <p class="text-2xs font-medium text-foreground/60">{{ __('Word Count') }}</p>
                            <p class="text-sm font-bold text-heading-foreground" x-text="(result.onPageData?.wordCount || 0).toLocaleString()"></p>
                        </div>
                        <div class="rounded-lg bg-foreground/5 p-3">
                            <p class="text-2xs font-medium text-foreground/60">{{ __('HTTPS') }}</p>
                            <p class="text-sm font-bold" :class="result.onPageData?.isHttps ? 'text-green-600' : 'text-red-600'" x-text="result.onPageData?.isHttps ? 'Yes' : 'No'"></p>
                        </div>
                        <div class="rounded-lg bg-foreground/5 p-3">
                            <p class="text-2xs font-medium text-foreground/60">{{ __('Canonical Tag') }}</p>
                            <p class="text-sm font-bold" :class="result.onPageData?.hasCanonical ? 'text-green-600' : 'text-red-600'" x-text="result.onPageData?.hasCanonical ? 'Yes' : 'No'"></p>
                        </div>
                        <div class="rounded-lg bg-foreground/5 p-3">
                            <p class="text-2xs font-medium text-foreground/60">{{ __('Schema Markup') }}</p>
                            <p class="text-sm font-bold" :class="result.onPageData?.hasSchemaMarkup ? 'text-green-600' : 'text-red-600'" x-text="result.onPageData?.hasSchemaMarkup ? 'Yes' : 'No'"></p>
                        </div>
                    </div>
                </div>
            </div>

            {{-- Issues --}}
            <template x-if="result.aiAnalysis && result.aiAnalysis.issues">
                <div class="mb-8">
                    <h3 class="mb-4 text-sm font-semibold text-heading-foreground">{{ __('Issues Found') }}</h3>
                    <div class="space-y-2">
                        <template x-for="(issue, i) in result.aiAnalysis.issues" :key="i">
                            <div class="flex items-start gap-3 rounded-lg border border-border p-4">
                                <span class="mt-0.5 shrink-0 rounded px-2 py-0.5 text-2xs font-bold uppercase" :class="severityColor(issue.severity)" x-text="issue.severity"></span>
                                <div>
                                    <p class="text-sm font-medium text-heading-foreground" x-text="issue.title"></p>
                                    <p class="mt-1 text-xs text-foreground/60" x-text="issue.description"></p>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
            </template>

            {{-- Recommendations --}}
            <template x-if="result.aiAnalysis && result.aiAnalysis.recommendations">
                <div>
                    <h3 class="mb-4 text-sm font-semibold text-heading-foreground">{{ __('Recommendations') }}</h3>
                    <div class="rounded-xl border border-border bg-background p-4">
                        <ul class="space-y-2">
                            <template x-for="(rec, i) in result.aiAnalysis.recommendations" :key="i">
                                <li class="flex items-start gap-2 text-sm text-foreground">
                                    <x-tabler-check class="mt-0.5 size-4 shrink-0 text-green-600" />
                                    <span x-text="rec"></span>
                                </li>
                            </template>
                        </ul>
                    </div>
                </div>
            </template>
        </div>
    </template>
</div>

<div x-data="{
    domain: '',
    country: 'US',
    result: null,
    backlinkResult: null,
    activeTab: 'overview',
    stats: null,

    async analyze() {
        if (!this.domain) { toastr.warning('{{ __('Please enter a domain') }}'); return; }
        const data = await this.postRequest('/dashboard/user/seo/domain/analyze', {
            domain: this.domain,
            country: this.country
        });
        if (data && data.result) {
            this.result = data.result;
            // Flatten stats from results[0] for easy access
            const raw = data.result.stats?.results?.[0] || {};
            this.stats = raw;
        }
    },

    async getBacklinks() {
        if (!this.domain) { toastr.warning('{{ __('Please enter a domain') }}'); return; }
        const data = await this.postRequest('/dashboard/user/seo/domain/backlinks', {
            domain: this.domain
        });
        if (data && data.result) this.backlinkResult = data.result;
    }
}">
    <div class="mb-6">
        <h2 class="mb-2 text-xl font-bold text-heading-foreground">{{ __('Domain Analysis') }}</h2>
        <p class="text-sm text-foreground/60">{{ __('Complete domain SEO profile including organic keywords, traffic estimates, and AI insights.') }}</p>
    </div>

    {{-- Domain Input --}}
    <div class="mb-6 rounded-xl border border-border bg-background p-6">
        @include('seo-tool::partials.domain-input', ['model' => 'domain', 'countryModel' => 'country', 'action' => 'analyze()'])
    </div>

    {{-- Tabs --}}
    <template x-if="result">
        <div>
            <div class="mb-4 flex gap-2 border-b border-border">
                <button class="border-b-2 px-4 py-2 text-sm font-medium transition-colors" :class="activeTab === 'overview' ? 'border-primary text-primary' : 'border-transparent text-foreground/60'" @click="activeTab = 'overview'">{{ __('Overview') }}</button>
                <button class="border-b-2 px-4 py-2 text-sm font-medium transition-colors" :class="activeTab === 'keywords' ? 'border-primary text-primary' : 'border-transparent text-foreground/60'" @click="activeTab = 'keywords'">{{ __('Top Keywords') }}</button>
                <button class="border-b-2 px-4 py-2 text-sm font-medium transition-colors" :class="activeTab === 'backlinks' ? 'border-primary text-primary' : 'border-transparent text-foreground/60'" @click="activeTab = 'backlinks'; if(!backlinkResult) getBacklinks()">{{ __('AI Insights') }}</button>
            </div>

            {{-- Overview --}}
            <div x-show="activeTab === 'overview'">
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div class="rounded-xl border border-border bg-background p-4">
                        <p class="text-xs font-medium text-foreground/60">{{ __('Organic Keywords') }}</p>
                        <p class="mt-1 text-2xl font-bold text-heading-foreground" x-text="(stats?.totalOrganicResults || 0).toLocaleString()"></p>
                    </div>
                    <div class="rounded-xl border border-border bg-background p-4">
                        <p class="text-xs font-medium text-foreground/60">{{ __('Monthly Organic Clicks') }}</p>
                        <p class="mt-1 text-2xl font-bold text-heading-foreground" x-text="(stats?.monthlyOrganicClicks || 0).toLocaleString()"></p>
                    </div>
                    <div class="rounded-xl border border-border bg-background p-4">
                        <p class="text-xs font-medium text-foreground/60">{{ __('Monthly Organic Value') }}</p>
                        <p class="mt-1 text-2xl font-bold text-heading-foreground" x-text="'$' + (stats?.monthlyOrganicValue || 0).toLocaleString()"></p>
                    </div>
                    <div class="rounded-xl border border-border bg-background p-4">
                        <p class="text-xs font-medium text-foreground/60">{{ __('Paid Keywords') }}</p>
                        <p class="mt-1 text-2xl font-bold text-heading-foreground" x-text="(stats?.totalAdsPurchased || 0).toLocaleString()"></p>
                    </div>
                    <div class="rounded-xl border border-border bg-background p-4">
                        <p class="text-xs font-medium text-foreground/60">{{ __('Monthly PPC Budget') }}</p>
                        <p class="mt-1 text-2xl font-bold text-heading-foreground" x-text="'$' + (stats?.monthlyBudget || 0).toLocaleString()"></p>
                    </div>
                    <div class="rounded-xl border border-border bg-background p-4">
                        <p class="text-xs font-medium text-foreground/60">{{ __('Domain Strength') }}</p>
                        <p class="mt-1 text-2xl font-bold text-heading-foreground" x-text="(stats?.strength || 0) + '/100'"></p>
                    </div>
                    <div class="rounded-xl border border-border bg-background p-4">
                        <p class="text-xs font-medium text-foreground/60">{{ __('Avg. Organic Rank') }}</p>
                        <p class="mt-1 text-2xl font-bold text-heading-foreground" x-text="stats?.averageOrganicRank || '-'"></p>
                    </div>
                    <div class="rounded-xl border border-border bg-background p-4">
                        <p class="text-xs font-medium text-foreground/60">{{ __('Monthly Paid Clicks') }}</p>
                        <p class="mt-1 text-2xl font-bold text-heading-foreground" x-text="(stats?.monthlyPaidClicks || 0).toLocaleString()"></p>
                    </div>
                    <div class="rounded-xl border border-border bg-background p-4">
                        <p class="text-xs font-medium text-foreground/60">{{ __('Avg. Ad Rank') }}</p>
                        <p class="mt-1 text-2xl font-bold text-heading-foreground" x-text="stats?.averageAdRank || '-'"></p>
                    </div>
                </div>
            </div>

            {{-- Top Keywords --}}
            <div x-show="activeTab === 'keywords'">
                <template x-if="result.organicKeywords?.results?.length > 0">
                    <div class="overflow-x-auto rounded-lg border border-border">
                        <table class="w-full text-sm">
                            <thead class="bg-foreground/5">
                                <tr>
                                    <th class="px-4 py-3 text-left font-semibold text-heading-foreground">{{ __('Keyword') }}</th>
                                    <th class="px-4 py-3 text-left font-semibold text-heading-foreground">{{ __('Rank') }}</th>
                                    <th class="px-4 py-3 text-left font-semibold text-heading-foreground">{{ __('Change') }}</th>
                                    <th class="px-4 py-3 text-left font-semibold text-heading-foreground">{{ __('Volume') }}</th>
                                    <th class="px-4 py-3 text-left font-semibold text-heading-foreground">{{ __('Difficulty') }}</th>
                                    <th class="px-4 py-3 text-left font-semibold text-heading-foreground">{{ __('CPC') }}</th>
                                    <th class="px-4 py-3 text-left font-semibold text-heading-foreground">{{ __('SEO Clicks') }}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template x-for="(kw, i) in result.organicKeywords.results" :key="i">
                                    <tr class="border-t border-border transition-colors hover:bg-foreground/3">
                                        <td class="px-4 py-3 font-medium text-heading-foreground" x-text="kw.keyword"></td>
                                        <td class="px-4 py-3 text-foreground" x-text="kw.rank || '-'"></td>
                                        <td class="px-4 py-3">
                                            <span :class="(kw.rankChange || 0) > 0 ? 'text-green-600' : (kw.rankChange || 0) < 0 ? 'text-red-500' : 'text-foreground/50'" x-text="(kw.rankChange > 0 ? '+' : '') + (kw.rankChange || 0)"></span>
                                        </td>
                                        <td class="px-4 py-3 text-foreground" x-text="(kw.searchVolume || 0).toLocaleString()"></td>
                                        <td class="px-4 py-3">
                                            <span class="rounded px-2 py-0.5 text-xs font-medium"
                                                :class="(kw.keywordDifficulty || 0) > 66 ? 'bg-red-100 text-red-700' : (kw.keywordDifficulty || 0) > 33 ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'"
                                                x-text="kw.keywordDifficulty || '-'"></span>
                                        </td>
                                        <td class="px-4 py-3 text-foreground" x-text="kw.broadCostPerClick ? '$' + kw.broadCostPerClick.toFixed(2) : '-'"></td>
                                        <td class="px-4 py-3 text-foreground" x-text="(kw.seoClicks || 0).toLocaleString()"></td>
                                    </tr>
                                </template>
                            </tbody>
                        </table>
                    </div>
                </template>
                <template x-if="!result.organicKeywords?.results?.length">
                    <div class="py-8 text-center text-sm text-foreground/50">{{ __('No keyword data available for this domain.') }}</div>
                </template>
            </div>

            {{-- AI Insights --}}
            <div x-show="activeTab === 'backlinks'">
                <template x-if="backlinkResult">
                    <div>
                        <template x-if="backlinkResult.aiInsights">
                            <div class="space-y-4">
                                <div class="flex items-center gap-3">
                                    <span class="text-sm font-medium text-foreground/60">{{ __('SEO Quality Score:') }}</span>
                                    <span class="rounded-lg bg-primary/10 px-3 py-1 text-lg font-bold text-primary" x-text="(backlinkResult.aiInsights.quality_score || 0) + '/100'"></span>
                                </div>

                                <div class="rounded-xl border border-border bg-background p-4">
                                    <h4 class="mb-2 text-sm font-semibold text-heading-foreground">{{ __('Summary') }}</h4>
                                    <p class="text-sm text-foreground" x-text="backlinkResult.aiInsights.summary || ''"></p>
                                </div>

                                <template x-if="backlinkResult.aiInsights.strengths?.length">
                                    <div class="rounded-xl border border-green-200 bg-green-50 p-4 dark:border-green-900 dark:bg-green-950/30">
                                        <h4 class="mb-2 text-sm font-semibold text-green-700 dark:text-green-400">{{ __('Strengths') }}</h4>
                                        <ul class="space-y-1">
                                            <template x-for="(s, i) in backlinkResult.aiInsights.strengths" :key="i">
                                                <li class="flex items-start gap-2 text-sm text-green-700 dark:text-green-400">
                                                    <span class="mt-1 shrink-0">+</span>
                                                    <span x-text="s"></span>
                                                </li>
                                            </template>
                                        </ul>
                                    </div>
                                </template>

                                <template x-if="backlinkResult.aiInsights.weaknesses?.length">
                                    <div class="rounded-xl border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/30">
                                        <h4 class="mb-2 text-sm font-semibold text-red-700 dark:text-red-400">{{ __('Weaknesses') }}</h4>
                                        <ul class="space-y-1">
                                            <template x-for="(w, i) in backlinkResult.aiInsights.weaknesses" :key="i">
                                                <li class="flex items-start gap-2 text-sm text-red-700 dark:text-red-400">
                                                    <span class="mt-1 shrink-0">-</span>
                                                    <span x-text="w"></span>
                                                </li>
                                            </template>
                                        </ul>
                                    </div>
                                </template>

                                <template x-if="backlinkResult.aiInsights.recommendations?.length">
                                    <div class="rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-950/30">
                                        <h4 class="mb-2 text-sm font-semibold text-blue-700 dark:text-blue-400">{{ __('Recommendations') }}</h4>
                                        <ul class="space-y-1">
                                            <template x-for="(r, i) in backlinkResult.aiInsights.recommendations" :key="i">
                                                <li class="flex items-start gap-2 text-sm text-blue-700 dark:text-blue-400">
                                                    <span class="mt-1 shrink-0">&rarr;</span>
                                                    <span x-text="r"></span>
                                                </li>
                                            </template>
                                        </ul>
                                    </div>
                                </template>
                            </div>
                        </template>
                    </div>
                </template>
                <template x-if="!backlinkResult">
                    <div class="py-8 text-center text-sm text-foreground/50">{{ __('Loading AI analysis...') }}</div>
                </template>
            </div>
        </div>
    </template>
</div>

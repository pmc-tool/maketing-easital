<div x-data="{
    domain: '',
    country: 'US',
    result: null,
    backlinkResult: null,
    activeTab: 'overview',

    async analyze() {
        if (!this.domain) { toastr.warning('{{ __('Please enter a domain') }}'); return; }
        const data = await this.postRequest('/dashboard/user/seo/domain/analyze', {
            domain: this.domain,
            country: this.country
        });
        if (data && data.result) this.result = data.result;
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
        <p class="text-sm text-foreground/60">{{ __('Complete domain SEO profile including organic keywords, backlinks, and traffic estimates.') }}</p>
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
                <button class="border-b-2 px-4 py-2 text-sm font-medium transition-colors" :class="activeTab === 'backlinks' ? 'border-primary text-primary' : 'border-transparent text-foreground/60'" @click="activeTab = 'backlinks'; if(!backlinkResult) getBacklinks()">{{ __('Backlinks') }}</button>
            </div>

            {{-- Overview --}}
            <div x-show="activeTab === 'overview'">
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div class="rounded-xl border border-border bg-background p-4">
                        <p class="text-xs font-medium text-foreground/60">{{ __('Organic Keywords') }}</p>
                        <p class="mt-1 text-2xl font-bold text-heading-foreground" x-text="(result.stats?.organicKeywords || result.stats?.totalOrganicResults || 0).toLocaleString()"></p>
                    </div>
                    <div class="rounded-xl border border-border bg-background p-4">
                        <p class="text-xs font-medium text-foreground/60">{{ __('Monthly Organic Clicks') }}</p>
                        <p class="mt-1 text-2xl font-bold text-heading-foreground" x-text="(result.stats?.monthlyOrganicClicks || result.stats?.averageOrganicClicks || 0).toLocaleString()"></p>
                    </div>
                    <div class="rounded-xl border border-border bg-background p-4">
                        <p class="text-xs font-medium text-foreground/60">{{ __('Organic Competitors') }}</p>
                        <p class="mt-1 text-2xl font-bold text-heading-foreground" x-text="(result.stats?.organicCompetitors || result.stats?.totalOrganicCompetitors || 0).toLocaleString()"></p>
                    </div>
                    <div class="rounded-xl border border-border bg-background p-4">
                        <p class="text-xs font-medium text-foreground/60">{{ __('Paid Keywords') }}</p>
                        <p class="mt-1 text-2xl font-bold text-heading-foreground" x-text="(result.stats?.paidKeywords || result.stats?.totalAdsPurchased || 0).toLocaleString()"></p>
                    </div>
                    <div class="rounded-xl border border-border bg-background p-4">
                        <p class="text-xs font-medium text-foreground/60">{{ __('Monthly PPC Budget') }}</p>
                        <p class="mt-1 text-2xl font-bold text-heading-foreground" x-text="'$' + (result.stats?.monthlyPpcBudget || result.stats?.averageAdBudget || 0).toLocaleString()"></p>
                    </div>
                    <div class="rounded-xl border border-border bg-background p-4">
                        <p class="text-xs font-medium text-foreground/60">{{ __('Domain Strength') }}</p>
                        <p class="mt-1 text-2xl font-bold text-heading-foreground" x-text="result.stats?.domainStrength || result.stats?.strengthIndex || '-'"></p>
                    </div>
                </div>

                {{-- Backlink Stats --}}
                <template x-if="result.backlinkStats">
                    <div class="mt-6">
                        <h3 class="mb-3 text-sm font-semibold text-heading-foreground">{{ __('Backlink Summary') }}</h3>
                        <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
                            <div class="rounded-xl border border-border bg-background p-4">
                                <p class="text-xs font-medium text-foreground/60">{{ __('Total Backlinks') }}</p>
                                <p class="mt-1 text-2xl font-bold text-heading-foreground" x-text="(result.backlinkStats?.totalBacklinks || result.backlinkStats?.total || 0).toLocaleString()"></p>
                            </div>
                            <div class="rounded-xl border border-border bg-background p-4">
                                <p class="text-xs font-medium text-foreground/60">{{ __('Referring Domains') }}</p>
                                <p class="mt-1 text-2xl font-bold text-heading-foreground" x-text="(result.backlinkStats?.referringDomains || 0).toLocaleString()"></p>
                            </div>
                            <div class="rounded-xl border border-border bg-background p-4">
                                <p class="text-xs font-medium text-foreground/60">{{ __('Dofollow Links') }}</p>
                                <p class="mt-1 text-2xl font-bold text-heading-foreground" x-text="(result.backlinkStats?.dofollow || 0).toLocaleString()"></p>
                            </div>
                        </div>
                    </div>
                </template>
            </div>

            {{-- Top Keywords --}}
            <div x-show="activeTab === 'keywords'">
                <template x-if="result.organicKeywords">
                    <div class="overflow-x-auto rounded-lg border border-border">
                        <table class="w-full text-sm">
                            <thead class="bg-foreground/5">
                                <tr>
                                    <th class="px-4 py-3 text-left font-semibold text-heading-foreground">{{ __('Keyword') }}</th>
                                    <th class="px-4 py-3 text-left font-semibold text-heading-foreground">{{ __('Rank') }}</th>
                                    <th class="px-4 py-3 text-left font-semibold text-heading-foreground">{{ __('Volume') }}</th>
                                    <th class="px-4 py-3 text-left font-semibold text-heading-foreground">{{ __('CPC') }}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template x-for="(kw, i) in (result.organicKeywords?.results || result.organicKeywords || [])" :key="i">
                                    <tr class="border-t border-border transition-colors hover:bg-foreground/3">
                                        <td class="px-4 py-3 font-medium text-heading-foreground" x-text="kw.keyword || kw.term || kw"></td>
                                        <td class="px-4 py-3 text-foreground" x-text="kw.rankNumber || kw.rank || '-'"></td>
                                        <td class="px-4 py-3 text-foreground" x-text="(kw.searchVolume || '-').toLocaleString()"></td>
                                        <td class="px-4 py-3 text-foreground" x-text="kw.costPerClick ? '$' + kw.costPerClick.toFixed(2) : '-'"></td>
                                    </tr>
                                </template>
                            </tbody>
                        </table>
                    </div>
                </template>
            </div>

            {{-- Backlinks --}}
            <div x-show="activeTab === 'backlinks'">
                <template x-if="backlinkResult">
                    <div>
                        <template x-if="backlinkResult.aiInsights">
                            <div class="mb-4 rounded-xl border border-primary/20 bg-primary/5 p-4">
                                <h4 class="mb-2 text-sm font-semibold text-heading-foreground">{{ __('AI Backlink Analysis') }}</h4>
                                <p class="mb-2 text-sm text-foreground" x-text="backlinkResult.aiInsights.summary || ''"></p>
                                <div class="flex items-center gap-2">
                                    <span class="text-xs font-medium text-foreground/60">{{ __('Quality Score:') }}</span>
                                    <span class="rounded bg-primary/10 px-2 py-0.5 text-xs font-bold text-primary" x-text="(backlinkResult.aiInsights.quality_score || 0) + '/100'"></span>
                                </div>
                            </div>
                        </template>

                        <div class="overflow-x-auto rounded-lg border border-border">
                            <table class="w-full text-sm">
                                <thead class="bg-foreground/5">
                                    <tr>
                                        <th class="px-4 py-3 text-left font-semibold text-heading-foreground">{{ __('Source URL') }}</th>
                                        <th class="px-4 py-3 text-left font-semibold text-heading-foreground">{{ __('Anchor Text') }}</th>
                                        <th class="px-4 py-3 text-left font-semibold text-heading-foreground">{{ __('Type') }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <template x-for="(bl, i) in (backlinkResult.backlinks?.results || backlinkResult.backlinks || [])" :key="i">
                                        <tr class="border-t border-border transition-colors hover:bg-foreground/3">
                                            <td class="max-w-xs truncate px-4 py-3 text-xs text-foreground" x-text="bl.sourceUrl || bl.source || bl"></td>
                                            <td class="px-4 py-3 text-foreground" x-text="bl.anchorText || bl.anchor || '-'"></td>
                                            <td class="px-4 py-3 text-foreground" x-text="bl.linkType || bl.type || '-'"></td>
                                        </tr>
                                    </template>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </template>
                <template x-if="!backlinkResult">
                    <div class="py-8 text-center text-sm text-foreground/50">{{ __('Loading backlink data...') }}</div>
                </template>
            </div>
        </div>
    </template>
</div>

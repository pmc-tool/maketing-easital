<div x-data="{
    keyword: '',
    country: 'US',
    result: null,
    keywordInfo: null,
    relatedKeywords: [],
    questionKeywords: [],

    async research() {
        if (!this.keyword) { toastr.warning('{{ __('Please enter a keyword') }}'); return; }
        const data = await this.postRequest('/dashboard/user/seo/keywords/research', {
            keyword: this.keyword,
            country: this.country
        });
        if (data && data.result) {
            this.result = data.result;
            this.relatedKeywords = data.result.related?.results || [];
            this.questionKeywords = data.result.questions?.results || [];
            // Use the seed keyword match from related results for info cards
            const seed = this.relatedKeywords.find(k => k.keyword?.toLowerCase() === this.keyword.toLowerCase());
            this.keywordInfo = seed || this.relatedKeywords[0] || null;
        }
    }
}">
    <div class="mb-6">
        <h2 class="mb-2 text-xl font-bold text-heading-foreground">{{ __('Keyword Research') }}</h2>
        <p class="text-sm text-foreground/60">{{ __('Discover keyword metrics, related terms, and question keywords powered by SpyFu.') }}</p>
    </div>

    {{-- Search Input --}}
    <div class="mb-8 rounded-xl border border-border bg-background p-6">
        @include('seo-tool::partials.keyword-input', ['model' => 'keyword', 'countryModel' => 'country', 'action' => 'research()'])
    </div>

    {{-- Keyword Info Cards --}}
    <template x-if="keywordInfo">
        <div class="mb-8">
            <h3 class="mb-4 text-sm font-semibold text-heading-foreground">{{ __('Keyword Metrics') }}</h3>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div class="rounded-xl border border-border bg-background p-4">
                    <p class="text-xs font-medium text-foreground/60">{{ __('Search Volume') }}</p>
                    <p class="mt-1 text-2xl font-bold text-heading-foreground" x-text="(keywordInfo.searchVolume || 0).toLocaleString()"></p>
                    <template x-if="keywordInfo.liveSearchVolume">
                        <p class="mt-0.5 text-xs text-foreground/50" x-text="'Live: ' + keywordInfo.liveSearchVolume.toLocaleString()"></p>
                    </template>
                </div>
                <div class="rounded-xl border border-border bg-background p-4">
                    <p class="text-xs font-medium text-foreground/60">{{ __('CPC (Broad)') }}</p>
                    <p class="mt-1 text-2xl font-bold text-heading-foreground" x-text="'$' + (keywordInfo.broadCostPerClick || 0).toFixed(2)"></p>
                    <template x-if="keywordInfo.exactCostPerClick">
                        <p class="mt-0.5 text-xs text-foreground/50" x-text="'Exact: $' + keywordInfo.exactCostPerClick.toFixed(2)"></p>
                    </template>
                </div>
                <div class="rounded-xl border border-border bg-background p-4">
                    <p class="text-xs font-medium text-foreground/60">{{ __('SEO Difficulty') }}</p>
                    <p class="mt-1 text-2xl font-bold" :class="(keywordInfo.rankingDifficulty || 0) > 60 ? 'text-red-600' : (keywordInfo.rankingDifficulty || 0) > 30 ? 'text-yellow-600' : 'text-green-600'" x-text="(keywordInfo.rankingDifficulty || 0) + '/100'"></p>
                </div>
                <div class="rounded-xl border border-border bg-background p-4">
                    <p class="text-xs font-medium text-foreground/60">{{ __('Monthly Clicks') }}</p>
                    <p class="mt-1 text-2xl font-bold text-heading-foreground" x-text="(keywordInfo.totalMonthlyClicks || 0).toLocaleString()"></p>
                    <template x-if="keywordInfo.percentOrganicClicks">
                        <p class="mt-0.5 text-xs text-foreground/50" x-text="(keywordInfo.percentOrganicClicks * 100).toFixed(0) + '% organic'"></p>
                    </template>
                </div>
            </div>
        </div>
    </template>

    {{-- Related Keywords Table --}}
    <template x-if="relatedKeywords.length > 0">
        <div class="mb-8">
            <h3 class="mb-4 text-sm font-semibold text-heading-foreground">
                {{ __('Related Keywords') }}
                <span class="ml-2 text-xs font-normal text-foreground/50" x-text="'(' + (result.related?.totalMatchingResults || relatedKeywords.length) + ' total)'"></span>
            </h3>
            <div class="overflow-x-auto rounded-lg border border-border">
                <table class="w-full text-sm">
                    <thead class="bg-foreground/5">
                        <tr>
                            <th class="px-4 py-3 text-left font-semibold text-heading-foreground">{{ __('Keyword') }}</th>
                            <th class="px-4 py-3 text-left font-semibold text-heading-foreground">{{ __('Volume') }}</th>
                            <th class="px-4 py-3 text-left font-semibold text-heading-foreground">{{ __('CPC') }}</th>
                            <th class="px-4 py-3 text-left font-semibold text-heading-foreground">{{ __('Difficulty') }}</th>
                            <th class="px-4 py-3 text-left font-semibold text-heading-foreground">{{ __('Clicks') }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template x-for="(kw, i) in relatedKeywords" :key="i">
                            <tr class="border-t border-border transition-colors hover:bg-foreground/3">
                                <td class="px-4 py-3 font-medium text-heading-foreground" x-text="kw.keyword"></td>
                                <td class="px-4 py-3 text-foreground" x-text="(kw.searchVolume || 0).toLocaleString()"></td>
                                <td class="px-4 py-3 text-foreground" x-text="kw.broadCostPerClick ? '$' + kw.broadCostPerClick.toFixed(2) : '-'"></td>
                                <td class="px-4 py-3">
                                    <span class="rounded px-2 py-0.5 text-xs font-medium"
                                        :class="(kw.rankingDifficulty || 0) > 60 ? 'bg-red-100 text-red-700' : (kw.rankingDifficulty || 0) > 30 ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'"
                                        x-text="kw.rankingDifficulty ?? '-'"></span>
                                </td>
                                <td class="px-4 py-3 text-foreground" x-text="(kw.totalMonthlyClicks || 0).toLocaleString()"></td>
                            </tr>
                        </template>
                    </tbody>
                </table>
            </div>
        </div>
    </template>

    {{-- Question Keywords --}}
    <template x-if="questionKeywords.length > 0">
        <div>
            <h3 class="mb-4 text-sm font-semibold text-heading-foreground">{{ __('Question Keywords') }}</h3>
            <div class="overflow-x-auto rounded-lg border border-border">
                <table class="w-full text-sm">
                    <thead class="bg-foreground/5">
                        <tr>
                            <th class="px-4 py-3 text-left font-semibold text-heading-foreground">{{ __('Question') }}</th>
                            <th class="px-4 py-3 text-left font-semibold text-heading-foreground">{{ __('Volume') }}</th>
                            <th class="px-4 py-3 text-left font-semibold text-heading-foreground">{{ __('Clicks') }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template x-for="(q, i) in questionKeywords" :key="i">
                            <tr class="border-t border-border transition-colors hover:bg-foreground/3">
                                <td class="px-4 py-3 font-medium text-heading-foreground" x-text="q.keyword"></td>
                                <td class="px-4 py-3 text-foreground" x-text="(q.searchVolume || 0).toLocaleString()"></td>
                                <td class="px-4 py-3 text-foreground" x-text="(q.totalMonthlyClicks || 0).toLocaleString()"></td>
                            </tr>
                        </template>
                    </tbody>
                </table>
            </div>
        </div>
    </template>
</div>

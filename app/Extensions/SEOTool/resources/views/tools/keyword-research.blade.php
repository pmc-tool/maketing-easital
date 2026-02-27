<div x-data="{
    keyword: '',
    country: 'US',
    result: null,
    keywordInfo: null,
    relatedKeywords: [],

    async research() {
        if (!this.keyword) { toastr.warning('{{ __('Please enter a keyword') }}'); return; }
        const data = await this.postRequest('/dashboard/user/seo/keywords/research', {
            keyword: this.keyword,
            country: this.country
        });
        if (data && data.result) {
            this.result = data.result;
            this.keywordInfo = data.result.info || {};
            this.relatedKeywords = data.result.related?.results || data.result.related || [];
        }
    }
}">
    <div class="mb-6">
        <h2 class="mb-2 text-xl font-bold text-heading-foreground">{{ __('Keyword Research') }}</h2>
        <p class="text-sm text-foreground/60">{{ __('Discover keyword metrics, related terms, and keyword groups powered by SpyFu.') }}</p>
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
                    <p class="mt-1 text-2xl font-bold text-heading-foreground" x-text="(keywordInfo.searchVolume || keywordInfo.exactMatchSearchVolume || 0).toLocaleString()"></p>
                </div>
                <div class="rounded-xl border border-border bg-background p-4">
                    <p class="text-xs font-medium text-foreground/60">{{ __('CPC') }}</p>
                    <p class="mt-1 text-2xl font-bold text-heading-foreground" x-text="'$' + (keywordInfo.costPerClick || keywordInfo.cpc || 0).toFixed(2)"></p>
                </div>
                <div class="rounded-xl border border-border bg-background p-4">
                    <p class="text-xs font-medium text-foreground/60">{{ __('SEO Difficulty') }}</p>
                    <p class="mt-1 text-2xl font-bold" :class="(keywordInfo.seoClicksPerSearch || keywordInfo.rankingDifficulty || 0) > 60 ? 'text-red-600' : (keywordInfo.seoClicksPerSearch || keywordInfo.rankingDifficulty || 0) > 30 ? 'text-yellow-600' : 'text-green-600'" x-text="(keywordInfo.rankingDifficulty || keywordInfo.seoClicksPerSearch || 0)"></p>
                </div>
                <div class="rounded-xl border border-border bg-background p-4">
                    <p class="text-xs font-medium text-foreground/60">{{ __('Organic CTR') }}</p>
                    <p class="mt-1 text-2xl font-bold text-heading-foreground" x-text="((keywordInfo.percentOrganicClicks || keywordInfo.organicCtr || 0) * 100).toFixed(1) + '%'"></p>
                </div>
            </div>
        </div>
    </template>

    {{-- Related Keywords Table --}}
    <template x-if="relatedKeywords.length > 0">
        <div>
            <h3 class="mb-4 text-sm font-semibold text-heading-foreground">{{ __('Related Keywords') }}</h3>
            <div class="overflow-x-auto rounded-lg border border-border">
                <table class="w-full text-sm">
                    <thead class="bg-foreground/5">
                        <tr>
                            <th class="px-4 py-3 text-left font-semibold text-heading-foreground">{{ __('Keyword') }}</th>
                            <th class="px-4 py-3 text-left font-semibold text-heading-foreground">{{ __('Volume') }}</th>
                            <th class="px-4 py-3 text-left font-semibold text-heading-foreground">{{ __('CPC') }}</th>
                            <th class="px-4 py-3 text-left font-semibold text-heading-foreground">{{ __('Difficulty') }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template x-for="(kw, i) in relatedKeywords" :key="i">
                            <tr class="border-t border-border transition-colors hover:bg-foreground/3">
                                <td class="px-4 py-3 font-medium text-heading-foreground" x-text="kw.keyword || kw.term || kw"></td>
                                <td class="px-4 py-3 text-foreground" x-text="(kw.searchVolume || kw.exactMatchSearchVolume || '-').toLocaleString()"></td>
                                <td class="px-4 py-3 text-foreground" x-text="kw.costPerClick ? '$' + kw.costPerClick.toFixed(2) : '-'"></td>
                                <td class="px-4 py-3 text-foreground" x-text="kw.rankingDifficulty || kw.seoClicksPerSearch || '-'"></td>
                            </tr>
                        </template>
                    </tbody>
                </table>
            </div>
        </div>
    </template>

    {{-- Keyword Groups --}}
    <template x-if="result && result.groups && result.groups.length > 0">
        <div class="mt-8">
            <h3 class="mb-4 text-sm font-semibold text-heading-foreground">{{ __('Keyword Groups') }}</h3>
            <div class="flex flex-wrap gap-2">
                <template x-for="(group, i) in result.groups" :key="i">
                    <span class="rounded-full border border-border bg-foreground/5 px-3 py-1.5 text-xs font-medium text-heading-foreground" x-text="group.groupName || group.name || group"></span>
                </template>
            </div>
        </div>
    </template>
</div>

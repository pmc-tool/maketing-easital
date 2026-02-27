<div x-data="{
    domain: '',
    country: 'US',
    kombatDomains: '',
    organicCompetitors: [],
    paidCompetitors: [],
    kombatResult: null,
    activeTab: 'organic',

    async analyze() {
        if (!this.domain) { toastr.warning('{{ __('Please enter a domain') }}'); return; }
        const data = await this.postRequest('/dashboard/user/seo/competitors/analyze', {
            domain: this.domain,
            country: this.country
        });
        if (data && data.result) {
            this.organicCompetitors = data.result.organicCompetitors?.results || [];
            this.paidCompetitors = data.result.paidCompetitors?.results || [];
        }
    },

    async runKombat() {
        if (!this.kombatDomains) { toastr.warning('{{ __('Please enter domains (comma-separated)') }}'); return; }
        const data = await this.postRequest('/dashboard/user/seo/competitors/kombat', {
            domains: this.kombatDomains,
            country: this.country
        });
        if (data && data.result) this.kombatResult = data.result;
    }
}">
    <div class="mb-6">
        <h2 class="mb-2 text-xl font-bold text-heading-foreground">{{ __('Competitor Analysis') }}</h2>
        <p class="text-sm text-foreground/60">{{ __('Discover organic and paid competitors for any domain. Compare keyword overlap with Kombat.') }}</p>
    </div>

    {{-- Domain Input --}}
    <div class="mb-6 rounded-xl border border-border bg-background p-6">
        <h3 class="mb-4 text-sm font-semibold text-heading-foreground">{{ __('Find Competitors') }}</h3>
        @include('seo-tool::partials.domain-input', ['model' => 'domain', 'countryModel' => 'country', 'action' => 'analyze()'])
    </div>

    {{-- Tabs --}}
    <template x-if="organicCompetitors.length > 0 || paidCompetitors.length > 0">
        <div class="mb-8">
            <div class="mb-4 flex gap-2 border-b border-border">
                <button class="border-b-2 px-4 py-2 text-sm font-medium transition-colors" :class="activeTab === 'organic' ? 'border-primary text-primary' : 'border-transparent text-foreground/60 hover:text-heading-foreground'" @click="activeTab = 'organic'">
                    {{ __('SEO Competitors') }} (<span x-text="organicCompetitors.length"></span>)
                </button>
                <button class="border-b-2 px-4 py-2 text-sm font-medium transition-colors" :class="activeTab === 'paid' ? 'border-primary text-primary' : 'border-transparent text-foreground/60 hover:text-heading-foreground'" @click="activeTab = 'paid'">
                    {{ __('PPC Competitors') }} (<span x-text="paidCompetitors.length"></span>)
                </button>
            </div>

            {{-- Organic Competitors --}}
            <div x-show="activeTab === 'organic'">
                <div class="overflow-x-auto rounded-lg border border-border">
                    <table class="w-full text-sm">
                        <thead class="bg-foreground/5">
                            <tr>
                                <th class="px-4 py-3 text-left font-semibold text-heading-foreground">{{ __('Domain') }}</th>
                                <th class="px-4 py-3 text-left font-semibold text-heading-foreground">{{ __('Common Keywords') }}</th>
                                <th class="px-4 py-3 text-left font-semibold text-heading-foreground">{{ __('Overlap Score') }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template x-for="(comp, i) in organicCompetitors" :key="i">
                                <tr class="border-t border-border transition-colors hover:bg-foreground/3">
                                    <td class="px-4 py-3 font-medium text-heading-foreground" x-text="comp.domain"></td>
                                    <td class="px-4 py-3 text-foreground" x-text="(comp.commonTerms || 0).toLocaleString()"></td>
                                    <td class="px-4 py-3 text-foreground" x-text="comp.rank ? comp.rank.toFixed(6) : '-'"></td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
            </div>

            {{-- Paid Competitors --}}
            <div x-show="activeTab === 'paid'">
                <div class="overflow-x-auto rounded-lg border border-border">
                    <table class="w-full text-sm">
                        <thead class="bg-foreground/5">
                            <tr>
                                <th class="px-4 py-3 text-left font-semibold text-heading-foreground">{{ __('Domain') }}</th>
                                <th class="px-4 py-3 text-left font-semibold text-heading-foreground">{{ __('Common Keywords') }}</th>
                                <th class="px-4 py-3 text-left font-semibold text-heading-foreground">{{ __('Overlap Score') }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template x-for="(comp, i) in paidCompetitors" :key="i">
                                <tr class="border-t border-border transition-colors hover:bg-foreground/3">
                                    <td class="px-4 py-3 font-medium text-heading-foreground" x-text="comp.domain"></td>
                                    <td class="px-4 py-3 text-foreground" x-text="(comp.commonTerms || 0).toLocaleString()"></td>
                                    <td class="px-4 py-3 text-foreground" x-text="comp.rank ? comp.rank.toFixed(6) : '-'"></td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </template>

    {{-- Kombat Section --}}
    <div class="rounded-xl border border-border bg-background p-6">
        <h3 class="mb-4 text-sm font-semibold text-heading-foreground">{{ __('Kombat - SEO Keyword Overlap') }}</h3>
        <p class="mb-4 text-xs text-foreground/60">{{ __('Compare up to 3 domains to see shared SEO keywords.') }}</p>
        <div class="flex gap-2">
            <input
                class="form-control flex-1"
                type="text"
                x-model="kombatDomains"
                placeholder="{{ __('domain1.com, domain2.com, domain3.com') }}"
            />
            <x-button variant="primary" @click="runKombat()">
                {{ __('Compare') }}
            </x-button>
        </div>

        <template x-if="kombatResult && kombatResult.results?.length > 0">
            <div class="mt-4">
                <p class="mb-3 text-xs text-foreground/50" x-text="(kombatResult.totalMatchingResults || kombatResult.resultCount || 0) + ' shared keywords found'"></p>
                <div class="overflow-x-auto rounded-lg border border-border">
                    <table class="w-full text-sm">
                        <thead class="bg-foreground/5">
                            <tr>
                                <th class="px-4 py-3 text-left font-semibold text-heading-foreground">{{ __('Keyword') }}</th>
                                <th class="px-4 py-3 text-left font-semibold text-heading-foreground">{{ __('Volume') }}</th>
                                <th class="px-4 py-3 text-left font-semibold text-heading-foreground">{{ __('Difficulty') }}</th>
                                <th class="px-4 py-3 text-left font-semibold text-heading-foreground">{{ __('CPC') }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template x-for="(kw, i) in kombatResult.results" :key="i">
                                <tr class="border-t border-border transition-colors hover:bg-foreground/3">
                                    <td class="px-4 py-3 font-medium text-heading-foreground" x-text="kw.keyword"></td>
                                    <td class="px-4 py-3 text-foreground" x-text="(kw.searchVolume || 0).toLocaleString()"></td>
                                    <td class="px-4 py-3">
                                        <span class="rounded px-2 py-0.5 text-xs font-medium"
                                            :class="(kw.rankingDifficulty || 0) > 60 ? 'bg-red-100 text-red-700' : (kw.rankingDifficulty || 0) > 30 ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'"
                                            x-text="kw.rankingDifficulty ?? '-'"></span>
                                    </td>
                                    <td class="px-4 py-3 text-foreground" x-text="kw.broadCostPerClick ? '$' + kw.broadCostPerClick.toFixed(2) : '-'"></td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
            </div>
        </template>

        <template x-if="kombatResult && (!kombatResult.results || kombatResult.results.length === 0)">
            <div class="mt-4 rounded-lg border border-border bg-foreground/5 p-4 text-center text-sm text-foreground/50">
                {{ __('No shared keywords found between these domains.') }}
            </div>
        </template>
    </div>
</div>

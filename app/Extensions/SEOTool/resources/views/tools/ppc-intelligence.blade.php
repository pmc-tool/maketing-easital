<div x-data="{
    domain: '',
    keyword: '',
    country: 'US',
    ppcData: null,
    adHistory: null,
    activeTab: 'overview',

    async getOverview() {
        if (!this.domain) { toastr.warning('{{ __('Please enter a domain') }}'); return; }
        const data = await this.postRequest('/dashboard/user/seo/ppc/overview', {
            domain: this.domain,
            country: this.country
        });
        if (data && data.result) this.ppcData = data.result;
    },

    async getAdHistory() {
        if (!this.domain || !this.keyword) { toastr.warning('{{ __('Please enter both domain and keyword') }}'); return; }
        const data = await this.postRequest('/dashboard/user/seo/ppc/ad-history', {
            domain: this.domain,
            keyword: this.keyword,
            country: this.country
        });
        if (data && data.result) this.adHistory = data.result;
    }
}">
    <div class="mb-6">
        <h2 class="mb-2 text-xl font-bold text-heading-foreground">{{ __('PPC Intelligence') }}</h2>
        <p class="text-sm text-foreground/60">{{ __('Analyze paid search strategies, ad budget, and ad history for any domain.') }}</p>
    </div>

    {{-- Tabs --}}
    <div class="mb-6 flex gap-2 border-b border-border">
        <button class="border-b-2 px-4 py-2 text-sm font-medium" :class="activeTab === 'overview' ? 'border-primary text-primary' : 'border-transparent text-foreground/60'" @click="activeTab = 'overview'">{{ __('PPC Overview') }}</button>
        <button class="border-b-2 px-4 py-2 text-sm font-medium" :class="activeTab === 'adhistory' ? 'border-primary text-primary' : 'border-transparent text-foreground/60'" @click="activeTab = 'adhistory'">{{ __('Ad History') }}</button>
    </div>

    {{-- PPC Overview --}}
    <div x-show="activeTab === 'overview'">
        <div class="mb-6 rounded-xl border border-border bg-background p-6">
            @include('seo-tool::partials.domain-input', ['model' => 'domain', 'countryModel' => 'country', 'action' => 'getOverview()', 'buttonText' => 'Analyze PPC'])
        </div>

        <template x-if="ppcData">
            <div>
                <div class="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div class="rounded-xl border border-border bg-background p-4">
                        <p class="text-xs font-medium text-foreground/60">{{ __('Paid Keywords') }}</p>
                        <p class="mt-1 text-2xl font-bold text-heading-foreground" x-text="(ppcData.stats?.paidKeywords || ppcData.stats?.totalAdsPurchased || 0).toLocaleString()"></p>
                    </div>
                    <div class="rounded-xl border border-border bg-background p-4">
                        <p class="text-xs font-medium text-foreground/60">{{ __('Monthly PPC Budget') }}</p>
                        <p class="mt-1 text-2xl font-bold text-heading-foreground" x-text="'$' + (ppcData.stats?.monthlyPpcBudget || ppcData.stats?.averageAdBudget || 0).toLocaleString()"></p>
                    </div>
                    <div class="rounded-xl border border-border bg-background p-4">
                        <p class="text-xs font-medium text-foreground/60">{{ __('Monthly PPC Clicks') }}</p>
                        <p class="mt-1 text-2xl font-bold text-heading-foreground" x-text="(ppcData.stats?.monthlyPpcClicks || ppcData.stats?.averageAdClicks || 0).toLocaleString()"></p>
                    </div>
                    <div class="rounded-xl border border-border bg-background p-4">
                        <p class="text-xs font-medium text-foreground/60">{{ __('Avg CPC') }}</p>
                        <p class="mt-1 text-2xl font-bold text-heading-foreground" x-text="'$' + (ppcData.stats?.averageCpc || ppcData.stats?.avgCostPerClick || 0).toFixed(2)"></p>
                    </div>
                </div>

                {{-- Paid Keywords Table --}}
                <template x-if="ppcData.paidKeywords">
                    <div>
                        <h3 class="mb-4 text-sm font-semibold text-heading-foreground">{{ __('Top Paid Keywords') }}</h3>
                        <div class="overflow-x-auto rounded-lg border border-border">
                            <table class="w-full text-sm">
                                <thead class="bg-foreground/5">
                                    <tr>
                                        <th class="px-4 py-3 text-left font-semibold text-heading-foreground">{{ __('Keyword') }}</th>
                                        <th class="px-4 py-3 text-left font-semibold text-heading-foreground">{{ __('CPC') }}</th>
                                        <th class="px-4 py-3 text-left font-semibold text-heading-foreground">{{ __('Volume') }}</th>
                                        <th class="px-4 py-3 text-left font-semibold text-heading-foreground">{{ __('Ad Position') }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <template x-for="(kw, i) in (ppcData.paidKeywords?.results || ppcData.paidKeywords || [])" :key="i">
                                        <tr class="border-t border-border transition-colors hover:bg-foreground/3">
                                            <td class="px-4 py-3 font-medium text-heading-foreground" x-text="kw.keyword || kw.term || kw"></td>
                                            <td class="px-4 py-3 text-foreground" x-text="kw.costPerClick ? '$' + kw.costPerClick.toFixed(2) : '-'"></td>
                                            <td class="px-4 py-3 text-foreground" x-text="(kw.searchVolume || 0).toLocaleString()"></td>
                                            <td class="px-4 py-3 text-foreground" x-text="kw.adPosition || kw.position || '-'"></td>
                                        </tr>
                                    </template>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </template>
            </div>
        </template>
    </div>

    {{-- Ad History --}}
    <div x-show="activeTab === 'adhistory'">
        <div class="mb-6 rounded-xl border border-border bg-background p-6">
            <div class="flex gap-2">
                <input class="form-control w-1/3" type="text" x-model="domain" placeholder="{{ __('Domain') }}" />
                <input class="form-control flex-1" type="text" x-model="keyword" placeholder="{{ __('Keyword') }}" />
                <select class="form-control w-24" x-model="country">
                    <option value="US">US</option>
                    <option value="GB">UK</option>
                    <option value="CA">CA</option>
                </select>
                <x-button variant="primary" @click="getAdHistory()">{{ __('Get History') }}</x-button>
            </div>
        </div>

        <template x-if="adHistory">
            <div class="rounded-xl border border-border bg-background p-6">
                <h3 class="mb-4 text-sm font-semibold text-heading-foreground">{{ __('Ad History') }}</h3>
                <div class="overflow-x-auto rounded-lg border border-border">
                    <table class="w-full text-sm">
                        <thead class="bg-foreground/5">
                            <tr>
                                <th class="px-4 py-3 text-left font-semibold text-heading-foreground">{{ __('Period') }}</th>
                                <th class="px-4 py-3 text-left font-semibold text-heading-foreground">{{ __('Ad Copy') }}</th>
                                <th class="px-4 py-3 text-left font-semibold text-heading-foreground">{{ __('Position') }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template x-for="(ad, i) in (Array.isArray(adHistory) ? adHistory : (adHistory.results || []))" :key="i">
                                <tr class="border-t border-border transition-colors hover:bg-foreground/3">
                                    <td class="px-4 py-3 text-foreground" x-text="ad.month || ad.date || 'Period ' + (i + 1)"></td>
                                    <td class="max-w-md px-4 py-3 text-xs text-foreground" x-text="ad.adTitle || ad.title || ad.adCopy || '-'"></td>
                                    <td class="px-4 py-3 text-foreground" x-text="ad.position || ad.rank || '-'"></td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
            </div>
        </template>
    </div>
</div>

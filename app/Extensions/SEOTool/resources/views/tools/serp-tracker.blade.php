<div x-data="{
    domain: '',
    keyword: '',
    country: 'US',
    rankingHistory: null,
    domainHistory: null,
    activeTab: 'keyword',
    chart: null,

    async trackKeyword() {
        if (!this.domain || !this.keyword) { toastr.warning('{{ __('Please enter both domain and keyword') }}'); return; }
        const data = await this.postRequest('/dashboard/user/seo/serp/track', {
            domain: this.domain,
            keyword: this.keyword,
            country: this.country
        });
        if (data && data.result) {
            this.rankingHistory = data.result;
            this.$nextTick(() => this.renderChart());
        }
    },

    async getDomainHistory() {
        if (!this.domain) { toastr.warning('{{ __('Please enter a domain') }}'); return; }
        const data = await this.postRequest('/dashboard/user/seo/serp/history', {
            domain: this.domain,
            country: this.country
        });
        if (data && data.result) this.domainHistory = data.result;
    },

    formatYYYYMM(ym) {
        const str = String(ym);
        const year = str.substring(0, 4);
        const month = str.substring(4);
        const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        return months[parseInt(month) - 1] + ' ' + year;
    },

    renderChart() {
        if (!this.rankingHistory) return;
        const results = this.rankingHistory.results || [];
        if (results.length === 0) return;

        // For keyword tracking: results[0].results is {YYYYMM: rank}
        const item = results[0];
        const rankData = item.results || item.historicalRanks || {};
        const sortedKeys = Object.keys(rankData).sort();

        if (sortedKeys.length === 0) return;

        const labels = sortedKeys.map(k => this.formatYYYYMM(k));
        const ranks = sortedKeys.map(k => rankData[k]);

        if (this.chart) this.chart.destroy();
        const el = document.getElementById('serp-chart');
        if (!el) return;

        this.chart = new ApexCharts(el, {
            chart: { type: 'line', height: 300, toolbar: { show: false } },
            series: [{ name: item.keyword || this.keyword, data: ranks }],
            xaxis: { categories: labels },
            yaxis: { reversed: true, min: 1, title: { text: '{{ __('Position') }}' } },
            colors: ['hsl(var(--primary))'],
            stroke: { curve: 'smooth', width: 2 },
            markers: { size: 4 },
            tooltip: { y: { formatter: (val) => 'Rank #' + val } }
        });
        this.chart.render();
    }
}">
    <div class="mb-6">
        <h2 class="mb-2 text-xl font-bold text-heading-foreground">{{ __('SERP Tracker') }}</h2>
        <p class="text-sm text-foreground/60">{{ __('Track keyword ranking positions over time for any domain.') }}</p>
    </div>

    {{-- Input --}}
    <div class="mb-6 rounded-xl border border-border bg-background p-6">
        <div class="mb-4 flex gap-2 border-b border-border">
            <button class="border-b-2 px-4 py-2 text-sm font-medium" :class="activeTab === 'keyword' ? 'border-primary text-primary' : 'border-transparent text-foreground/60'" @click="activeTab = 'keyword'">{{ __('Keyword Rank') }}</button>
            <button class="border-b-2 px-4 py-2 text-sm font-medium" :class="activeTab === 'domain' ? 'border-primary text-primary' : 'border-transparent text-foreground/60'" @click="activeTab = 'domain'">{{ __('Domain History') }}</button>
        </div>

        <div x-show="activeTab === 'keyword'">
            <div class="flex gap-2">
                <input class="form-control w-1/3" type="text" x-model="domain" placeholder="{{ __('Domain (e.g. themeforest.net)') }}" />
                <input class="form-control flex-1" type="text" x-model="keyword" placeholder="{{ __('Keyword (e.g. wordpress themes)') }}" />
                <select class="form-control w-24" x-model="country">
                    <option value="US">US</option>
                    <option value="GB">UK</option>
                    <option value="CA">CA</option>
                    <option value="AU">AU</option>
                </select>
                <x-button variant="primary" @click="trackKeyword()">
                    <x-tabler-chart-line class="size-4" />
                    {{ __('Track') }}
                </x-button>
            </div>
        </div>

        <div x-show="activeTab === 'domain'">
            @include('seo-tool::partials.domain-input', ['model' => 'domain', 'countryModel' => 'country', 'action' => 'getDomainHistory()', 'buttonText' => 'Get History'])
        </div>
    </div>

    {{-- Keyword Ranking Chart --}}
    <template x-if="rankingHistory && activeTab === 'keyword'">
        <div>
            {{-- Info --}}
            <template x-if="rankingHistory.results?.length > 0">
                <div class="mb-4 flex flex-wrap gap-3">
                    <template x-for="(item, i) in rankingHistory.results" :key="i">
                        <div class="rounded-lg border border-border bg-background px-4 py-2">
                            <span class="text-xs text-foreground/60" x-text="item.domain || item.keyword"></span>
                            <div class="flex items-center gap-2">
                                <span class="text-lg font-bold text-heading-foreground" x-text="'#' + (item.endRank || item.startRank || '-')"></span>
                                <template x-if="(item.rankChange || 0) !== 0">
                                    <span class="text-xs font-medium" :class="item.rankChange > 0 ? 'text-red-500' : 'text-green-600'" x-text="(item.rankChange > 0 ? '+' : '') + item.rankChange"></span>
                                </template>
                            </div>
                        </div>
                    </template>
                </div>
            </template>

            <div class="mb-8 rounded-xl border border-border bg-background p-6">
                <h3 class="mb-4 text-sm font-semibold text-heading-foreground">{{ __('Ranking History') }}</h3>
                <div id="serp-chart"></div>
            </div>
        </div>
    </template>

    {{-- No results message --}}
    <template x-if="rankingHistory && (!rankingHistory.results || rankingHistory.results.length === 0) && activeTab === 'keyword'">
        <div class="rounded-xl border border-border bg-background p-8 text-center">
            <p class="text-sm text-foreground/50">{{ __('No ranking data found for this keyword/domain combination. Try a more popular keyword.') }}</p>
        </div>
    </template>

    {{-- Domain History Data --}}
    <template x-if="domainHistory && activeTab === 'domain'">
        <div class="rounded-xl border border-border bg-background p-6">
            <h3 class="mb-4 text-sm font-semibold text-heading-foreground">
                {{ __('Domain Ranking History') }}
                <span class="ml-2 text-xs font-normal text-foreground/50" x-text="'(' + (domainHistory.totalMatchingResults || domainHistory.resultCount || 0) + ' keywords tracked)'"></span>
            </h3>
            <div class="overflow-x-auto rounded-lg border border-border">
                <table class="w-full text-sm">
                    <thead class="bg-foreground/5">
                        <tr>
                            <th class="px-4 py-3 text-left font-semibold text-heading-foreground">{{ __('Keyword') }}</th>
                            <th class="px-4 py-3 text-left font-semibold text-heading-foreground">{{ __('Current Rank') }}</th>
                            <th class="px-4 py-3 text-left font-semibold text-heading-foreground">{{ __('Change') }}</th>
                            <th class="px-4 py-3 text-left font-semibold text-heading-foreground">{{ __('Volume') }}</th>
                            <th class="px-4 py-3 text-left font-semibold text-heading-foreground">{{ __('Clicks') }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template x-for="(entry, i) in (domainHistory.results || [])" :key="i">
                            <tr class="border-t border-border transition-colors hover:bg-foreground/3">
                                <td class="px-4 py-3 font-medium text-heading-foreground" x-text="entry.keyword || '-'"></td>
                                <td class="px-4 py-3 text-foreground" x-text="entry.endRank || entry.startRank || '-'"></td>
                                <td class="px-4 py-3">
                                    <span :class="(entry.rankChange || 0) > 0 ? 'text-red-500' : (entry.rankChange || 0) < 0 ? 'text-green-600' : 'text-foreground/50'" x-text="(entry.rankChange || 0) === 0 ? '-' : ((entry.rankChange > 0 ? '+' : '') + entry.rankChange)"></span>
                                </td>
                                <td class="px-4 py-3 text-foreground" x-text="(entry.searchVolume || 0).toLocaleString()"></td>
                                <td class="px-4 py-3 text-foreground" x-text="(entry.endClicks || 0).toLocaleString()"></td>
                            </tr>
                        </template>
                    </tbody>
                </table>
            </div>
        </div>
    </template>
</div>

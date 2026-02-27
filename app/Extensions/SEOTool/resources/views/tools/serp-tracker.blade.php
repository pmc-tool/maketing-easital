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

    renderChart() {
        if (!this.rankingHistory) return;
        const history = Array.isArray(this.rankingHistory) ? this.rankingHistory : (this.rankingHistory.results || []);
        if (history.length === 0) return;

        const labels = history.map((h, i) => h.month || h.date || 'Period ' + (i + 1));
        const ranks = history.map(h => h.rank || h.position || h.rankNumber || 0);

        if (this.chart) this.chart.destroy();

        const el = document.getElementById('serp-chart');
        if (!el) return;

        this.chart = new ApexCharts(el, {
            chart: { type: 'line', height: 300, toolbar: { show: false } },
            series: [{ name: '{{ __('Rank Position') }}', data: ranks }],
            xaxis: { categories: labels },
            yaxis: { reversed: true, title: { text: '{{ __('Position') }}' } },
            colors: ['hsl(var(--primary))'],
            stroke: { curve: 'smooth', width: 2 },
            markers: { size: 4 }
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
                <input class="form-control w-1/3" type="text" x-model="domain" placeholder="{{ __('Domain') }}" />
                <input class="form-control flex-1" type="text" x-model="keyword" placeholder="{{ __('Keyword') }}" />
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

    {{-- Ranking Chart --}}
    <template x-if="rankingHistory && activeTab === 'keyword'">
        <div class="mb-8 rounded-xl border border-border bg-background p-6">
            <h3 class="mb-4 text-sm font-semibold text-heading-foreground">{{ __('Ranking History') }}</h3>
            <div id="serp-chart"></div>
        </div>
    </template>

    {{-- Domain History Data --}}
    <template x-if="domainHistory && activeTab === 'domain'">
        <div class="rounded-xl border border-border bg-background p-6">
            <h3 class="mb-4 text-sm font-semibold text-heading-foreground">{{ __('Domain Stats History') }}</h3>
            <div class="overflow-x-auto rounded-lg border border-border">
                <table class="w-full text-sm">
                    <thead class="bg-foreground/5">
                        <tr>
                            <th class="px-4 py-3 text-left font-semibold text-heading-foreground">{{ __('Period') }}</th>
                            <th class="px-4 py-3 text-left font-semibold text-heading-foreground">{{ __('Organic Keywords') }}</th>
                            <th class="px-4 py-3 text-left font-semibold text-heading-foreground">{{ __('Organic Clicks') }}</th>
                            <th class="px-4 py-3 text-left font-semibold text-heading-foreground">{{ __('Paid Keywords') }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template x-for="(entry, i) in (Array.isArray(domainHistory) ? domainHistory : (domainHistory.results || []))" :key="i">
                            <tr class="border-t border-border transition-colors hover:bg-foreground/3">
                                <td class="px-4 py-3 text-foreground" x-text="entry.month || entry.date || 'Period ' + (i + 1)"></td>
                                <td class="px-4 py-3 text-foreground" x-text="(entry.organicKeywords || entry.totalOrganicResults || 0).toLocaleString()"></td>
                                <td class="px-4 py-3 text-foreground" x-text="(entry.organicClicks || entry.averageOrganicClicks || 0).toLocaleString()"></td>
                                <td class="px-4 py-3 text-foreground" x-text="(entry.paidKeywords || entry.totalAdsPurchased || 0).toLocaleString()"></td>
                            </tr>
                        </template>
                    </tbody>
                </table>
            </div>
        </div>
    </template>
</div>

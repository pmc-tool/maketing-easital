@extends('panel.layout.app', ['disable_tblr' => true])
@section('title', __('SEO Tool'))
@section('titlebar_subtitle', __('Comprehensive SEO suite powered by SpyFu & AI - Keywords, Competitors, Domain Analysis, SERP Tracking, Audits & more.'))

@section('content')
    <div
        class="flex min-h-[calc(100vh-200px)]"
        x-data="seoToolApp()"
    >
        {{-- Sidebar --}}
        @include('seo-tool::partials.sidebar')

        {{-- Main Content Area --}}
        <div class="flex-1 overflow-y-auto p-6 lg:p-8">
            @include('seo-tool::partials.tool-content')
        </div>
    </div>
@endsection

@push('script')
    <script src="/themes/default/assets/libs/apexcharts/dist/apexcharts.min.js"></script>
    <script>
        function seoToolApp() {
            return {
                activeTool: 'dashboard',
                loading: false,
                csrfToken: '{{ csrf_token() }}',

                switchTool(tool) {
                    this.activeTool = tool;
                },

                async postRequest(url, data) {
                    this.loading = true;
                    try {
                        const formData = new FormData();
                        Object.keys(data).forEach(key => formData.append(key, data[key]));
                        const response = await fetch(url, {
                            method: 'POST',
                            headers: { 'X-CSRF-TOKEN': this.csrfToken },
                            body: formData
                        });
                        const result = await response.json();
                        if (result.error) {
                            toastr.error(result.error);
                            return null;
                        }
                        return result;
                    } catch (e) {
                        toastr.error(e.message || 'Request failed');
                        return null;
                    } finally {
                        this.loading = false;
                    }
                }
            }
        }
    </script>

    {{-- Content Analyzer (legacy) scripts --}}
    @include('seo-tool::particles.generate-seo-script')

    {{-- Legacy Content Analyzer Variables & Functions --}}
    <script>
        const filters = ['Keywords', 'Headers', 'Links', 'Images'];
        var total_percent = {{ $app_is_demo ? 86 : 0 }};
        var chart = undefined;
        var keywordsCount = 0;
        var headersCount = 0;
        var linksCount = 0;
        var imagesCount = 0;
        var streaming = false;
        var isGenerating = false;

        function renderChart(percent, colorStops) {
            var options = {
                series: [percent],
                chart: { type: 'radialBar', offsetY: -20, sparkline: { enabled: true } },
                plotOptions: {
                    radialBar: {
                        startAngle: -90, endAngle: 90,
                        track: { background: "hsl(var(--heading-foreground) / 3%)", strokeWidth: '97%', margin: 5 },
                        dataLabels: { enabled: false }
                    }
                },
                grid: { padding: { top: 10 } },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'light', shadeIntensity: 0.4, inverseColors: false,
                        opacityFrom: 1, opacityTo: 1, stops: [0, 30, 60, 100],
                        colorStops: [
                            { offset: 0, color: colorStops[0], opacity: 1 },
                            { offset: 30, color: colorStops[1], opacity: 1 },
                            { offset: 60, color: colorStops[2] || colorStops[1], opacity: 1 },
                            { offset: 100, color: colorStops[2] || colorStops[1], opacity: 1 }
                        ]
                    }
                },
                labels: ['{{ __('SEO Percent') }}'],
                colors: ['hsl(var(--heading-foreground))'],
            };
            if (chart) { chart.destroy(); }
            chart = new ApexCharts(document.getElementById('chart-credit'), options);
            chart.render();
            var el = document.querySelector('.total_percent span');
            if (el) el.innerText = percent;
        }

        function updateWordCount() {
            let contentScan = $("#content_scan");
            let text = contentScan.text().trim();
            $('#content_length').text(text.length + ' / 20000');
        }

        document.addEventListener("DOMContentLoaded", function() {
            "use strict";
            var colorStops = ['#FF0000', '#FF0000'];
            var chartEl = document.getElementById('chart-credit');
            if (chartEl) renderChart(total_percent, colorStops);
            let contentScan = $("#content_scan");
            contentScan.on('input', function() { updateWordCount(); });
        });
    </script>

    <script>
        function sendScanRequest(ev) {
            "use strict";
            ev?.preventDefault();
            var spinner = document.querySelector('.refresh-icon');
            var improveSeoBtn = document.querySelector('#improve-seo-btn');
            var analyzSeoBtn = document.querySelector('#analys_btn');
            var reanalyzSeoBtn = document.querySelector('#reanalys_btn');
            var seoReportSection = document.querySelector('#seo_report');
            var resultText = $("#content_scan").html();
            let topic = $("#keyword");
            let type = $("#type");
            if (topic.val().length == 0) { toastr.warning('Please enter the keyword/topic.'); return false; }
            if (resultText.length == 0) { toastr.warning('Please enter content.'); return false; }
            if (resultText.length > 20000) { toastr.warning('The length of content should be 20000 characters or less.'); return false; }
            imagesCount = getImagesCount(resultText);
            headersCount = getHeadersCount(resultText);
            linksCount = getLinksCount(resultText);
            var formData = new FormData();
            formData.append('topicKeyword', topic.val());
            formData.append('resultText', resultText);
            formData.append('type', type.val());
            formData.append('imagesCount', imagesCount);
            formData.append('headersCount', headersCount);
            formData.append('linksCount', linksCount);
            Alpine.store('appLoadingIndicator').show();
            $('#analys_btn').prop('disabled', true);
            if (spinner) spinner.classList.remove('hidden');
            $.ajax({
                type: "post",
                headers: { 'X-CSRF-TOKEN': "{{ csrf_token() }}" },
                url: "/dashboard/user/seo/analyseArticle",
                data: formData,
                contentType: false,
                processData: false,
                success: function(data) {
                    if (seoReportSection) seoReportSection.classList.remove('hidden');
                    updateSeoResult(data, imagesCount, headersCount, linksCount, resultText);
                    $('#analys_btn').prop('disabled', false);
                    if (spinner) spinner.classList.add('hidden');
                    Alpine.store('appLoadingIndicator').hide();
                    if (analyzSeoBtn) analyzSeoBtn.classList.add('hidden');
                    if (improveSeoBtn) improveSeoBtn.classList.remove('hidden');
                    if (reanalyzSeoBtn) reanalyzSeoBtn.classList.remove('hidden');
                },
                error: function(data) {
                    console.log(data);
                    $('#analys_btn').prop('disabled', false);
                    if (spinner) spinner.classList.add('hidden');
                    Alpine.store('appLoadingIndicator').hide();
                }
            });
            return false;
        }

        function getImagesCount(content) {
            var img = content.match(/<img[^>]+>/g);
            var newimages = [];
            if (img) { for (var i = 0; i < img.length; i++) { var src = img[i].match(/src="([^"]+)"/); if (src) newimages.push(src[1]); } }
            return newimages.length || 0;
        }
        function getHeadersCount(content) {
            var newheaders = []; var headerPattern = /<h[1-6]>(.*?)<\/h[1-6]>/g; var match;
            while ((match = headerPattern.exec(content)) !== null) newheaders.push(match[1]);
            return newheaders.length || 0;
        }
        function getLinksCount(content) {
            var newlinks = []; var linkPattern = /<a.*?href="(.*?)".*?>(.*?)<\/a>/g; var match;
            while ((match = linkPattern.exec(content)) !== null) newlinks.push(match[1]);
            return newlinks.length || 0;
        }

        function updateSeoResult(data, imagesCount, headersCount, linksCount, resultText) {
            keywordsCount = 0;
            var competitorList = data.competitorList;
            var longTailList = data.longTailList;
            var containerCompetitorList = document.querySelector('.content_competitorList');
            var containerLongTailList = document.querySelector('.content_longTailList');
            if (containerCompetitorList) {
                containerCompetitorList.innerHTML = '<div class="flex w-full flex-wrap gap-3" id="select_keywords">';
                for (let item of competitorList) {
                    let matchData = checkKeywordMatch(item, resultText);
                    if (matchData.isMatched) keywordsCount += matchData.matchCount;
                    containerCompetitorList.innerHTML += `<button class="keyword me-1 my-1 ${matchData.matchCount > 0 ? 'bg-green-100 text-green-500' : 'bg-red-100 text-red-500'} cursor-pointer rounded-full border border-secondary px-3 py-1 font-medium">${item} <span class="text-xs font-normal text-heading">(${matchData.matchCount})</span></button>`;
                }
                containerCompetitorList.innerHTML += '</div>';
            }
            if (containerLongTailList) {
                containerLongTailList.innerHTML = '<div class="flex w-full flex-wrap gap-3" id="select_keywords">';
                for (let item of longTailList) {
                    let matchData = checkKeywordMatch(item, resultText);
                    if (matchData.isMatched) keywordsCount += matchData.matchCount;
                    containerLongTailList.innerHTML += `<button class="keyword ${matchData.matchCount > 0 ? 'bg-green-100 text-green-500' : 'bg-red-100 text-red-500'} me-1 my-1 cursor-pointer rounded-full border border-secondary px-3 py-1 font-medium">${item} <span class="text-xs font-normal text-heading">(${matchData.matchCount})</span></button>`;
                }
                containerLongTailList.innerHTML += '</div>';
            }
            filters.forEach(filter => {
                var count = document.querySelector('.count_' + filter);
                if (!count) return;
                var numbers = count.querySelector('.numbers');
                numbers.innerHTML = '';
                count.classList.remove('text-green-600', 'bg-green-500/10', 'text-red-700', 'bg-red-700/10', 'dark:bg-red-600/10', 'dark:text-red-600');
                numbers.innerHTML = window[filter.toLowerCase() + 'Count'];
                if (window[filter.toLowerCase() + 'Count'] > 0) {
                    count.classList.add('text-green-600', 'bg-green-500/10');
                    count.querySelector('.up')?.classList.remove('hidden');
                    count.querySelector('.down')?.classList.add('hidden');
                } else {
                    count.classList.add('text-red-700', 'bg-red-700/10', 'dark:bg-red-600/10', 'dark:text-red-600');
                    count.querySelector('.down')?.classList.remove('hidden');
                    count.querySelector('.up')?.classList.add('hidden');
                }
            });
            var per = parseInt(data.percentage) || 0;
            var colorStops = per <= 30 ? ['#FF0000', '#FF0000'] : per <= 60 ? ['#FFA500', '#FFA500', '#FFA500'] : ['#1CA685', '#1CA685', '#1CA685'];
            renderChart(per, colorStops);
        }

        function checkKeywordMatch(keyword, content) {
            var keywordLower = keyword.toLowerCase();
            var keywordUpper = keyword.toUpperCase();
            var keywordTitle = keyword.replace(/\b\w/g, l => l.toUpperCase());
            var keywordMatch = keyword + '|' + keywordLower + '|' + keywordUpper + '|' + keywordTitle;
            var keywordPattern = new RegExp(keywordMatch, 'g');
            var matchCount = (content.match(keywordPattern) || []).length;
            return { isMatched: matchCount > 0, matchCount: matchCount };
        }

        function improveSeo() {
            let controller = new AbortController();
            const signal = controller.signal;
            let output = '';
            let chunk = [];
            let content_scan = $("#content_scan");
            let type = $("#type").val();
            var spinner = document.querySelector('.refresh-icon');
            let topicKeyword = $("#keyword").val();
            if (spinner) spinner.classList.remove('hidden');
            Alpine.store('appLoadingIndicator').show();
            $('#improve-seo-btn').prop('disabled', true);
            let nIntervId = setInterval(function() {
                if (chunk.length == 0 && !streaming) {
                    clearInterval(nIntervId);
                    sendScanRequest();
                }
                const text = chunk.shift();
                if (text) {
                    output += text;
                    output = output.replace(/(<br>\s*){2,}/g, '<br>');
                    content_scan.html(output);
                }
            }, 20);
            var compatitorList = document.querySelectorAll('.content_competitorList button') || [];
            var longTailList = document.querySelectorAll('.content_longTailList button') || [];
            var formData = new FormData();
            formData.append('topicKeyword', topicKeyword);
            formData.append('resultText', content_scan.html());
            formData.append('seoTool', true);
            formData.append('type', type);
            formData.append('competitorList', JSON.stringify(Array.from(compatitorList).map(item => item.innerText)));
            formData.append('longTailList', JSON.stringify(Array.from(longTailList).map(item => item.innerText)));
            formData.append('imagesCount', getImagesCount(content_scan.html()) || 0);
            formData.append('headersCount', getHeadersCount(content_scan.html()) || 0);
            formData.append('linksCount', getLinksCount(content_scan.html()) || 0);
            streaming = true;
            isGenerating = true;
            content_scan.html('');
            fetchEventSource('/dashboard/user/seo/improveArticle', {
                method: 'POST',
                headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
                body: formData,
                signal: signal,
                onmessage: (event) => {
                    if (event.data === '[DONE]') streaming = false;
                    if (event.data !== undefined && event.data !== null && event.data != '[DONE]') {
                        chunk.push(event.data.replace(/(?:\r\n|\r|\n)/g, ' <br> '));
                    }
                },
                onclose: () => { streaming = false; isGenerating = false; if (spinner) spinner.classList.add('hidden'); $('#improve-seo-btn').prop('disabled', false); Alpine.store('appLoadingIndicator').hide(); },
                onerror: (err) => { clearInterval(nIntervId); streaming = false; isGenerating = false; console.log(err); if (spinner) spinner.classList.add('hidden'); $('#improve-seo-btn').prop('disabled', false); Alpine.store('appLoadingIndicator').hide(); }
            });
        }
    </script>
@endpush

<div x-data="{
    keyword: '',
    tone: 'professional',
    originalContent: '',
    optimizedContent: '',
    isStreaming: false,

    async optimize() {
        if (!this.keyword) { toastr.warning('{{ __('Please enter a target keyword') }}'); return; }
        if (!this.originalContent) { toastr.warning('{{ __('Please enter content to optimize') }}'); return; }

        this.optimizedContent = '';
        this.isStreaming = true;

        const formData = new FormData();
        formData.append('keyword', this.keyword);
        formData.append('content', this.originalContent);
        formData.append('tone', this.tone);

        try {
            const response = await fetch('/dashboard/user/seo/optimizer/optimize', {
                method: 'POST',
                headers: { 'X-CSRF-TOKEN': this.csrfToken },
                body: formData
            });

            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let buffer = '';

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                buffer += decoder.decode(value, { stream: true });
                const lines = buffer.split('\n');
                buffer = lines.pop();

                for (const line of lines) {
                    if (line.startsWith('data: ')) {
                        const data = line.slice(6);
                        if (data === '[DONE]') {
                            this.isStreaming = false;
                            break;
                        }
                        this.optimizedContent += data;
                    }
                }
            }
        } catch (e) {
            toastr.error(e.message || 'Optimization failed');
        } finally {
            this.isStreaming = false;
        }
    }
}">
    <div class="mb-6">
        <h2 class="mb-2 text-xl font-bold text-heading-foreground">{{ __('Content Optimizer') }}</h2>
        <p class="text-sm text-foreground/60">{{ __('AI-powered content optimization. Paste content and get an SEO-optimized version in real-time.') }}</p>
    </div>

    {{-- Controls --}}
    <div class="mb-6 rounded-xl border border-border bg-background p-6">
        <div class="flex flex-wrap gap-3">
            <input
                class="form-control flex-1"
                type="text"
                x-model="keyword"
                placeholder="{{ __('Target keyword') }}"
            />
            <select class="form-control w-40" x-model="tone">
                <option value="professional">{{ __('Professional') }}</option>
                <option value="casual">{{ __('Casual') }}</option>
                <option value="academic">{{ __('Academic') }}</option>
                <option value="persuasive">{{ __('Persuasive') }}</option>
                <option value="creative">{{ __('Creative') }}</option>
            </select>
            <button type="button" class="btn btn-primary" @click="optimize()" x-bind:disabled="isStreaming">
                <template x-if="isStreaming">
                    <svg class="size-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                </template>
                <template x-if="!isStreaming">
                    <svg xmlns="http://www.w3.org/2000/svg" class="size-4" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 21l15 -15l-3 -3l-15 15l3 3" /><path d="M15 6l3 3" /><path d="M9 3a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" /><path d="M19 13a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" /></svg>
                </template>
                {{ __('Optimize') }}
            </button>
        </div>
    </div>

    {{-- Side by Side Editor --}}
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {{-- Original --}}
        <div>
            <h3 class="mb-3 text-sm font-semibold text-heading-foreground">{{ __('Original Content') }}</h3>
            <textarea
                class="form-control h-[500px] w-full resize-none rounded-xl border p-4 text-sm"
                x-model="originalContent"
                placeholder="{{ __('Paste your content here...') }}"
            ></textarea>
        </div>

        {{-- Optimized --}}
        <div>
            <h3 class="mb-3 flex items-center gap-2 text-sm font-semibold text-heading-foreground">
                {{ __('Optimized Content') }}
                <template x-if="isStreaming">
                    <span class="inline-flex items-center gap-1 rounded bg-primary/10 px-2 py-0.5 text-2xs font-medium text-primary">
                        <span class="size-1.5 animate-pulse rounded-full bg-primary"></span>
                        {{ __('Streaming') }}
                    </span>
                </template>
            </h3>
            <div
                class="h-[500px] overflow-y-auto rounded-xl border bg-background p-4 text-sm text-foreground"
                x-html="optimizedContent || '<span class=\'text-foreground/40\'>{{ __('Optimized content will appear here...') }}</span>'"
            ></div>
        </div>
    </div>
</div>

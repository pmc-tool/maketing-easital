<div class="rounded-xl border border-border bg-background p-4 transition-shadow hover:shadow-md">
    <div class="flex items-start justify-between">
        <div>
            <p class="text-xs font-medium text-foreground/60" x-text="label"></p>
            <p class="mt-1 text-2xl font-bold text-heading-foreground" x-text="typeof value === 'number' ? value.toLocaleString() : value"></p>
        </div>
        <div class="rounded-lg bg-primary/10 p-2">
            <template x-if="icon === 'key'"><x-tabler-key class="size-5 text-primary" /></template>
            <template x-if="icon === 'chart'"><x-tabler-chart-bar class="size-5 text-primary" /></template>
            <template x-if="icon === 'link'"><x-tabler-link class="size-5 text-primary" /></template>
            <template x-if="icon === 'dollar'"><x-tabler-currency-dollar class="size-5 text-primary" /></template>
            <template x-if="icon === 'world'"><x-tabler-world class="size-5 text-primary" /></template>
            <template x-if="icon === 'trending'"><x-tabler-trending-up class="size-5 text-primary" /></template>
        </div>
    </div>
    <template x-if="change !== undefined">
        <p class="mt-2 text-xs" :class="change >= 0 ? 'text-green-600' : 'text-red-600'">
            <span x-text="change >= 0 ? '+' : ''"></span><span x-text="change"></span>%
        </p>
    </template>
</div>

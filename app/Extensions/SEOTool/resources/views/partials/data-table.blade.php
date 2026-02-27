<div class="overflow-x-auto rounded-lg border border-border">
    <table class="w-full text-sm">
        <thead class="bg-foreground/5">
            <tr>
                <template x-for="col in columns" :key="col.key">
                    <th
                        class="cursor-pointer px-4 py-3 text-left font-semibold text-heading-foreground transition-colors hover:bg-foreground/10"
                        @click="sortBy(col.key)"
                    >
                        <span class="flex items-center gap-1" x-text="col.label"></span>
                    </th>
                </template>
            </tr>
        </thead>
        <tbody>
            <template x-for="(row, index) in sortedRows" :key="index">
                <tr class="border-t border-border transition-colors hover:bg-foreground/3">
                    <template x-for="col in columns" :key="col.key">
                        <td class="px-4 py-3 text-foreground" x-text="row[col.key] ?? '-'"></td>
                    </template>
                </tr>
            </template>
            <tr x-show="sortedRows.length === 0">
                <td :colspan="columns.length" class="px-4 py-8 text-center text-foreground/50">
                    {{ __('No data available') }}
                </td>
            </tr>
        </tbody>
    </table>
</div>

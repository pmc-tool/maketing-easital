<div class="flex gap-2">
    <input
        class="form-control flex-1"
        type="text"
        x-model="{{ $model ?? 'domain' }}"
        placeholder="{{ __($placeholder ?? 'Enter domain (e.g. example.com)') }}"
    />
    <select class="form-control w-24" x-model="{{ $countryModel ?? 'country' }}">
        <option value="US">US</option>
        <option value="GB">UK</option>
        <option value="CA">CA</option>
        <option value="AU">AU</option>
        <option value="DE">DE</option>
        <option value="FR">FR</option>
        <option value="IN">IN</option>
    </select>
    <x-button variant="primary" @click="{{ $action ?? 'search()' }}">
        <x-tabler-search class="size-4" />
        {{ __($buttonText ?? 'Analyze') }}
    </x-button>
</div>

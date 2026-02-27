@extends('panel.layout.settings')
@section('title', __('SpyFu API Settings'))
@section('titlebar_actions', '')
@section('titlebar_subtitle', __('This API key is used for SEO Tool features: Keyword Research, Competitor Analysis, Domain Analysis, SERP Tracker, PPC Intelligence'))

@section('additional_css')
    <link
            href="{{ custom_theme_url('/assets/libs/select2/select2.min.css') }}"
            rel="stylesheet"
    />
@endsection

@section('settings')
    <form
            id="settings_form"
            onsubmit="return spyfuSettingsSave();"
            enctype="multipart/form-data"
    >
        <x-card
                class="mb-2 max-md:text-center"
                szie="lg"
        >
            @if ($app_is_demo)
                <div class="mb-3">
                    <label class="form-label">{{ __('SpyFu API Key') }}</label>
                    <input
                            class="form-control"
                            id="spyfu_api_key"
                            type="text"
                            name="spyfu_api_key"
                            value="*********************"
                    >
                </div>
            @else
                <div
                        class="form-control mb-3 border-none p-0 [&_.select2-selection--multiple]:!rounded-[--tblr-border-radius] [&_.select2-selection--multiple]:!border-[--tblr-border-color] [&_.select2-selection--multiple]:!p-[1em_1.23em]">
                    <label class="form-label">{{ __('SpyFu API Key (Base64 encoded API_ID:Secret)') }}
                        <x-alert class="mt-2">
                            <x-button
                                    variant="link"
                                    href="https://developer.spyfu.com/"
                                    target="_blank"
                            >
                                {{ __('Get an API key') }}
                            </x-button>
                        </x-alert>
                    </label>
                    <input
                            class="form-control"
                            id="spyfu_api_key"
                            type="text"
                            name="spyfu_api_key"
                            value="{{ $settings_two->spyfu_api_key }}"
                            required
                    >
                    <x-alert class="mt-2">
                        <p>
                            {{ __('Please ensure that your SpyFu API key is fully functional and billing is defined on your SpyFu account. The key should be the Base64-encoded value of API_ID:Secret.') }}
                        </p>
                    </x-alert>
                    <a
                            class="btn btn-primary mb-2 mt-2 w-full"
                            href="{{ route('dashboard.admin.settings.spyfuapi.test') }}"
                            target="_blank"
                    >
                        {{ __('After Saving Setting, Click Here to Test Your API Key') }}
                    </a>
                </div>
            @endif
        </x-card>

        <button
                class="btn btn-primary w-full"
                id="settings_button"
                form="settings_form"
        >
            {{ __('Save') }}
        </button>
    </form>
@endsection

@push('script')
    <script src="{{ custom_theme_url('/assets/js/panel/settings.js') }}"></script>
    <script src="{{ custom_theme_url('/assets/libs/select2/select2.min.js') }}"></script>
@endpush

@extends('panel.layout.settings')
@section('title', __('AI News'))
@section('titlebar_subtitle', __('Generate professional news videos with an AI avatar or your own photo, custom background, and voiceover.'))

@section('settings')
    <form
        class="flex flex-col gap-5"
        id="ai_news_form"
        action="{{ route('dashboard.user.ai-news.store') }}"
        method="POST"
        enctype="multipart/form-data"
        x-data="aiNewsForm()"
    >
        @csrf

        {{-- Step 1: Presenter --}}
        <x-form-step step="1" label="{{ __('Presenter') }}" />

        {{-- Toggle: Avatar / HeyGen Personas / Upload Photo --}}
        <div class="flex gap-2 rounded-lg border p-1">
            <button
                type="button"
                class="flex-1 rounded-md px-3 py-2 text-sm font-medium transition-colors"
                :class="presenterType === 'avatar' ? 'bg-primary text-primary-foreground' : 'hover:bg-heading-foreground/5'"
                @click="presenterType = 'avatar'"
            >
                {{ __('Stock Avatar') }}
            </button>
            <button
                type="button"
                class="flex-1 rounded-md px-3 py-2 text-sm font-medium transition-colors"
                :class="presenterType === 'talking_photo_preset' ? 'bg-primary text-primary-foreground' : 'hover:bg-heading-foreground/5'"
                @click="presenterType = 'talking_photo_preset'"
            >
                {{ __('HeyGen Personas') }}
            </button>
            <button
                type="button"
                class="flex-1 rounded-md px-3 py-2 text-sm font-medium transition-colors"
                :class="presenterType === 'talking_photo' ? 'bg-primary text-primary-foreground' : 'hover:bg-heading-foreground/5'"
                @click="presenterType = 'talking_photo'"
            >
                {{ __('Upload My Photo') }}
            </button>
        </div>
        <input type="hidden" name="presenter_type" :value="presenterType">

        {{-- Stock Avatar picker --}}
        <div x-show="presenterType === 'avatar'" x-cloak>
            <div class="relative" x-data="{ open: false, selectedAvatar: null }">
                <label class="mb-2 block text-2xs font-medium text-label">
                    {{ __('Avatar') }}
                </label>
                <div
                    class="flex min-h-11 cursor-pointer items-center rounded-input border px-4 py-2 text-input-foreground sm:text-2xs"
                    @click="open = !open"
                >
                    <template x-if="selectedAvatar">
                        <div class="flex w-full items-center">
                            <img class="mr-2 h-10 w-auto" :src="selectedAvatar.preview_image_url" alt="">
                            <span x-text="selectedAvatar.avatar_name"></span>
                            <x-tabler-chevron-down class="ms-auto size-4 text-label" />
                        </div>
                    </template>
                    <template x-if="!selectedAvatar">
                        <div class="flex w-full items-center">
                            <span>{{ __('Select a stock avatar') }}</span>
                            <x-tabler-chevron-down class="ms-auto size-4 text-label" />
                        </div>
                    </template>
                </div>
                <div
                    class="absolute z-10 mt-1 max-h-72 w-full overflow-y-auto border bg-background"
                    x-show="open"
                    @click.away="open = false"
                >
                    <div class="grid grid-cols-2 gap-4 p-2">
                        @foreach ($avatars as $avatar)
                            <div
                                class="flex cursor-pointer flex-col items-center p-2 hover:bg-heading-foreground/5"
                                @click="selectedAvatar = { avatar_id: '{{ addslashes($avatar['avatar_id']) }}', avatar_name: '{{ addslashes($avatar['avatar_name']) }}', preview_image_url: '{{ $avatar['preview_image_url'] }}' }; open = false"
                            >
                                <img
                                    class="h-24 w-24 rounded-full border object-cover shadow-md"
                                    src="{{ $avatar['preview_image_url'] }}"
                                    alt="{{ $avatar['avatar_name'] }}"
                                >
                                <div class="mt-2 text-center text-2xs">{{ $avatar['avatar_name'] }}</div>
                            </div>
                        @endforeach
                    </div>
                </div>
                <input type="hidden" name="avatar_id" :value="selectedAvatar ? selectedAvatar.avatar_id : ''">
            </div>

            <div class="mt-4">
                <x-forms.input
                    id="avatar_style"
                    size="lg"
                    type="select"
                    label="{{ __('Avatar Style') }}"
                    name="avatar_style"
                >
                    <option value="normal">{{ __('Normal') }}</option>
                    <option value="circle">{{ __('Circle') }}</option>
                    <option value="closeUp">{{ __('CloseUp') }}</option>
                </x-forms.input>
            </div>
        </div>

        {{-- HeyGen Personas picker --}}
        <div x-show="presenterType === 'talking_photo_preset'" x-cloak x-data="personaSearch()">
            <label class="mb-1 block text-2xs font-medium text-label">
                {{ __('HeyGen Personas') }}
            </label>
            <p class="mb-2 text-2xs text-foreground/50">
                {{ __('Pre-built personas from HeyGen — includes news anchors, presenters, and more. No upload needed.') }}
            </p>

            {{-- Search --}}
            <input
                type="text"
                x-model="searchQuery"
                placeholder="{{ __('Search personas...') }}"
                class="mb-3 w-full rounded-input border bg-input px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            >

            {{-- Selected persona display --}}
            <div x-show="selectedPersona" class="mb-3 flex items-center gap-3 rounded-lg border bg-heading-foreground/5 p-3">
                <img :src="selectedPersona?.preview_image_url" class="h-12 w-12 rounded-full object-cover" alt="">
                <div>
                    <p class="text-sm font-medium" x-text="selectedPersona?.talking_photo_name"></p>
                    <p class="text-2xs text-foreground/50">{{ __('Selected') }}</p>
                </div>
                <button type="button" @click="selectedPersona = null" class="ms-auto text-foreground/40 hover:text-foreground">
                    <x-tabler-x class="size-4" />
                </button>
            </div>

            {{-- Grid --}}
            <div class="max-h-80 overflow-y-auto rounded-lg border">
                <div class="grid grid-cols-2 gap-3 p-3 sm:grid-cols-3">
                    @foreach ($talkingPhotos as $tp)
                        <div
                            class="persona-card flex cursor-pointer flex-col items-center rounded-lg p-2 transition-colors hover:bg-heading-foreground/5"
                            :class="selectedPersona?.talking_photo_id === '{{ $tp['talking_photo_id'] }}' ? 'ring-2 ring-primary bg-primary/5' : ''"
                            data-name="{{ strtolower($tp['talking_photo_name']) }}"
                            @click="selectedPersona = { talking_photo_id: '{{ $tp['talking_photo_id'] }}', talking_photo_name: '{{ addslashes($tp['talking_photo_name']) }}', preview_image_url: '{{ $tp['preview_image_url'] }}' }"
                        >
                            <img
                                class="h-20 w-20 rounded-full border object-cover shadow-sm"
                                src="{{ $tp['preview_image_url'] }}"
                                alt="{{ $tp['talking_photo_name'] }}"
                                loading="lazy"
                            >
                            <div class="mt-1 text-center text-2xs leading-tight">{{ $tp['talking_photo_name'] }}</div>
                        </div>
                    @endforeach
                </div>
            </div>

            <input type="hidden" name="preset_talking_photo_id" :value="selectedPersona ? selectedPersona.talking_photo_id : ''">
        </div>

        {{-- Upload My Photo --}}
        <div x-show="presenterType === 'talking_photo'" x-cloak>
            <label class="mb-1 block text-2xs font-medium text-label">
                {{ __('Your Presenter Photo') }}
            </label>
            <p class="mb-2 text-2xs text-foreground/50">
                {{ __('Upload a photo of a real person — their face will be animated to lip-sync with the voice. Face must be clearly visible. JPG/PNG, max 10MB.') }}
            </p>
            <div
                class="relative flex min-h-36 cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-input p-6 transition-colors hover:border-primary"
                @click="$refs.photoInput.click()"
                @dragover.prevent
                @drop.prevent="handlePhotoDrop($event)"
            >
                <template x-if="!photoPreview">
                    <div class="flex flex-col items-center gap-2 text-center">
                        <x-tabler-user-circle class="size-10 text-label" />
                        <p class="text-sm font-medium">{{ __('Click or drag a photo here') }}</p>
                        <p class="text-2xs text-foreground/50">{{ __('JPG, PNG up to 10MB') }}</p>
                    </div>
                </template>
                <template x-if="photoPreview">
                    <div class="flex flex-col items-center gap-2">
                        <img :src="photoPreview" class="h-32 w-32 rounded-full object-cover shadow-md" alt="">
                        <p class="text-2xs text-foreground/50">{{ __('Click to change') }}</p>
                    </div>
                </template>
                <input
                    type="file"
                    name="photo"
                    accept="image/jpeg,image/png"
                    class="hidden"
                    x-ref="photoInput"
                    @change="handlePhotoSelect($event)"
                >
            </div>
        </div>

        {{-- Step 2: Voice --}}
        <x-form-step step="2" label="{{ __('Voice') }}" />

        <div class="voice-select-container" x-data="voicePreview()">
            <div class="flex items-end gap-4">
                <x-forms.input
                    id="voice-select"
                    type="select"
                    container-class="w-full"
                    x-model="selectedAudio"
                    @change="selectedVoiceId = $event.target.options[$event.target.selectedIndex].dataset.voiceId"
                    name="voice_audio"
                    required
                    label="{{ __('Select a Voice') }}"
                >
                    <option value="">{{ __('Select a voice') }}</option>
                    @foreach ($voices as $voice)
                        <option
                            data-voice-id="{{ $voice['voice_id'] }}"
                            value="{{ $voice['preview_audio'] }}"
                        >
                            {{ $voice['name'] }} ({{ $voice['language'] }} - {{ ucfirst($voice['gender']) }})
                        </option>
                    @endforeach
                </x-forms.input>
                <x-button
                    class="preview-speech group size-10 shrink-0"
                    variant="ghost-shadow"
                    size="none"
                    type="button"
                    title="{{ __('Preview') }}"
                    @click="playPreview"
                >
                    <x-tabler-volume class="size-4 group-[.loading]:hidden" />
                    <x-tabler-refresh class="lqd-icon-loader hidden size-4 animate-spin group-[.loading]:block" />
                </x-button>
            </div>
            <input type="hidden" name="voice_id" x-model="selectedVoiceId">
        </div>

        {{-- Step 3: News Content --}}
        <x-form-step step="3" label="{{ __('News Content') }}" />

        <div>
            <x-forms.input
                id="title"
                label="{{ __('News Headline') }}"
                placeholder="{{ __('e.g. Breaking: Global Tech Summit Opens in Dubai') }}"
                type="text"
                name="title"
                required
            />
            <p class="mt-1 text-2xs text-foreground/50">
                {{ __('Used as the title in your video library. It is not spoken in the video — put your full script below.') }}
            </p>
        </div>

        <div x-data="scriptCounter()">
            <label class="mb-2 flex items-center justify-between text-2xs font-medium text-label" for="input_text">
                <span>{{ __('News Script') }} <span class="text-red-500">*</span></span>
                <span class="font-normal text-foreground/50">
                    <span x-text="charCount"></span>/5000 {{ __('chars') }}
                    &nbsp;·&nbsp;~<span x-text="estDuration"></span> {{ __('min') }}
                </span>
            </label>
            <textarea
                id="input_text"
                name="input_text"
                rows="7"
                maxlength="5000"
                required
                placeholder="{{ __('Write the full news script that the anchor will read aloud. Video length is determined by script length (~140 words/min). Max ~6 minutes.') }}"
                class="w-full rounded-input border bg-input px-4 py-3 text-sm text-input-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/50"
                x-model="scriptText"
                @input="updateCount"
            ></textarea>
            <p class="mt-1 text-2xs text-foreground/50">
                {{ __('Video length is set by script length — ~140 words/min. Max 5,000 characters (~6–7 min).') }}
            </p>
        </div>

        {{-- Step 4: Background (only for Stock Avatar mode) --}}
        <div x-show="presenterType === 'avatar'" x-cloak>
            <x-form-step step="4" label="{{ __('Background Image') }}" />
            <label class="mb-1 block text-2xs font-medium text-label">
                {{ __('News Studio Background') }}
                <span class="text-red-500">*</span>
            </label>
            <p class="mb-2 text-2xs text-foreground/50">
                {{ __('This image appears behind the presenter — use a news studio, city backdrop, office, etc. JPG/PNG, max 10MB.') }}
            </p>
            <div
                class="relative flex min-h-36 cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-input p-6 transition-colors hover:border-primary"
                @click="$refs.bgInput.click()"
                @dragover.prevent
                @drop.prevent="handleBgDrop($event)"
            >
                <template x-if="!bgPreview">
                    <div class="flex flex-col items-center gap-2 text-center">
                        <x-tabler-photo class="size-10 text-label" />
                        <p class="text-sm font-medium">{{ __('Click or drag background image here') }}</p>
                        <p class="text-2xs text-foreground/50">{{ __('News studio, backdrop, etc. JPG/PNG up to 10MB') }}</p>
                    </div>
                </template>
                <template x-if="bgPreview">
                    <div class="flex flex-col items-center gap-2">
                        <img :src="bgPreview" class="max-h-40 max-w-full rounded-lg object-cover shadow-md" alt="">
                        <p class="text-2xs text-foreground/50">{{ __('Click to change') }}</p>
                    </div>
                </template>
                <input
                    type="file"
                    name="background"
                    accept="image/jpeg,image/png"
                    class="hidden"
                    x-ref="bgInput"
                    @change="handleBgSelect($event)"
                >
            </div>
        </div>

        @if ($app_is_demo)
            <x-button type="button" onclick="return toastr.info('This feature is disabled in Demo version.');">
                {{ __('Generate News Video') }}
            </x-button>
        @else
            <x-button id="ai_news_btn" type="submit" form="ai_news_form">
                {{ __('Generate News Video') }}
            </x-button>
        @endif
    </form>

    <div class="spinner-border text-primary" id="preloader" role="status" style="display:none;width:3rem;height:3rem;">
        <span class="sr-only">Loading...</span>
    </div>
@endsection

<style>
    #preloader {
        display: none;
        position: fixed;
        top: 50%;
        left: 50%;
        z-index: 1000;
    }
    [x-cloak] { display: none !important; }
</style>

@push('script')
<script>
    function aiNewsForm() {
        return {
            presenterType: 'avatar',
            photoPreview: null,
            bgPreview: null,

            handlePhotoSelect(e) {
                const file = e.target.files[0];
                if (file) this.photoPreview = URL.createObjectURL(file);
            },
            handlePhotoDrop(e) {
                const file = e.dataTransfer.files[0];
                if (file) {
                    this.$refs.photoInput.files = e.dataTransfer.files;
                    this.photoPreview = URL.createObjectURL(file);
                }
            },
            handleBgSelect(e) {
                const file = e.target.files[0];
                if (file) this.bgPreview = URL.createObjectURL(file);
            },
            handleBgDrop(e) {
                const file = e.dataTransfer.files[0];
                if (file) {
                    this.$refs.bgInput.files = e.dataTransfer.files;
                    this.bgPreview = URL.createObjectURL(file);
                }
            },
        };
    }

    function personaSearch() {
        return {
            searchQuery: '',
            selectedPersona: null,
            init() {
                this.$watch('searchQuery', val => {
                    const q = val.toLowerCase();
                    document.querySelectorAll('.persona-card').forEach(card => {
                        const name = card.dataset.name || '';
                        card.style.display = name.includes(q) ? '' : 'none';
                    });
                });
            }
        };
    }

    function voicePreview() {
        return {
            selectedAudio: null,
            selectedVoiceId: null,
            isLoading: false,
            audioPlayer: null,

            playPreview() {
                if (!this.selectedAudio) {
                    alert("{{ __('Please select a voice to preview.') }}");
                    return;
                }
                if (this.audioPlayer) {
                    this.audioPlayer.pause();
                    this.audioPlayer.currentTime = 0;
                }
                this.isLoading = true;
                this.audioPlayer = new Audio(this.selectedAudio);
                this.audioPlayer.play()
                    .then(() => { this.isLoading = false; })
                    .catch(() => {
                        alert("{{ __('Failed to play the selected audio.') }}");
                        this.isLoading = false;
                    });
                this.audioPlayer.addEventListener('ended', () => { this.isLoading = false; });
            }
        };
    }

    function scriptCounter() {
        return {
            scriptText: '',
            charCount: 0,
            estDuration: '0',
            updateCount() {
                this.charCount = this.scriptText.length;
                const words = this.scriptText.trim() ? this.scriptText.trim().split(/\s+/).length : 0;
                this.estDuration = (words / 140).toFixed(1);
            }
        };
    }

    document.getElementById('ai_news_form').addEventListener('submit', function () {
        document.getElementById('preloader').style.display = 'block';
    });
</script>
@endpush

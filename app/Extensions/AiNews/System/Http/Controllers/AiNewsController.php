<?php

namespace App\Extensions\AiNews\System\Http\Controllers;

use App\Domains\Entity\Enums\EntityEnum;
use App\Domains\Entity\Facades\Entity;
use App\Extensions\AiNews\System\Models\AiNews;
use App\Extensions\AiNews\System\Services\AiNewsService;
use App\Helpers\Classes\Helper;
use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class AiNewsController extends Controller
{
    public function __construct(
        public AiNewsService $service
    ) {}

    public function index(): View
    {
        $userVideoIds = AiNews::query()
            ->where('user_id', auth()->id())
            ->pluck('video_id')
            ->toArray();

        $allVideos = $this->service->listVideos()['data']['videos'] ?? [];

        $userVideos = array_filter($allVideos, function ($video) use ($userVideoIds) {
            return isset($video['video_id']) && in_array($video['video_id'], $userVideoIds, true);
        });

        $detailedVideos = array_map(function ($video) {
            $detail = $this->service->retrieveVideo($video['video_id'])['data'] ?? [];
            $record = AiNews::query()->where('video_id', $video['video_id'])->first();
            return array_merge($video, $detail, [
                'title' => $record?->title ?? '',
            ]);
        }, $userVideos);

        $inProgress = AiNews::query()
            ->where('user_id', auth()->id())
            ->where('status', 'in_progress')
            ->pluck('video_id')
            ->toArray();

        return view('ai-news::index', [
            'list'       => $detailedVideos,
            'inProgress' => $inProgress,
        ]);
    }

    public function create(): View
    {
        if (Helper::appIsDemo()) {
            $listAvatars      = Cache::remember('cache_list_avatars', 36000, fn () => $this->service->listAvatars()['data']['avatars'] ?? []);
            $listVoices       = Cache::remember('cache_list_voices', 36000, fn () => $this->service->listVoices()['data']['voices'] ?? []);
            $listTalkingPhotos = Cache::remember('cache_list_talking_photos', 36000, fn () => array_slice($this->service->listAvatars()['data']['talking_photos'] ?? [], 0, 200));
        } else {
            $avatarData        = $this->service->listAvatars();
            $listAvatars       = $avatarData['data']['avatars'] ?? [];
            $listTalkingPhotos = array_slice($avatarData['data']['talking_photos'] ?? [], 0, 200);
            $listVoices        = $this->service->listVoices()['data']['voices'] ?? [];
        }

        return view('ai-news::create', [
            'avatars'       => $listAvatars,
            'talkingPhotos' => $listTalkingPhotos,
            'voices'        => $listVoices,
        ]);
    }

    public function store(Request $request)
    {
        if (Helper::appIsDemo()) {
            return response()->json([
                'status'  => 'error',
                'message' => trans('This feature is disabled in demo mode.'),
            ]);
        }

        $request->validate([
            'presenter_type'          => 'required|in:avatar,talking_photo,talking_photo_preset',
            'voice_id'                => 'required|string',
            'input_text'              => 'required|string|max:5000',
            'title'                   => 'required|string|max:255',
            'avatar_id'               => 'required_if:presenter_type,avatar|nullable|string',
            'avatar_style'            => 'nullable|string|in:normal,circle,closeUp',
            'photo'                   => 'required_if:presenter_type,talking_photo|nullable|file|mimes:jpg,jpeg,png|max:10240',
            'preset_talking_photo_id' => 'required_if:presenter_type,talking_photo_preset|nullable|string',
            'background'              => 'required_if:presenter_type,avatar|nullable|file|mimes:jpg,jpeg,png|max:10240',
        ]);

        // Check credits
        $driver = Entity::driver(EntityEnum::HEYGEN)->inputVideoCount(1)->calculateCredit();
        try {
            $driver->redirectIfNoCreditBalance();
        } catch (Exception $e) {
            return redirect()->back()->with([
                'message' => __('You have no credits left. Please consider upgrading your plan.'),
                'type'    => 'error',
            ]);
        }

        // Upload background image (only for avatar mode)
        $bgAssetId = null;
        if ($request->presenter_type === 'avatar') {
            $bgFile    = $request->file('background');
            $bgContent = file_get_contents($bgFile->getRealPath());
            $bgMime    = $bgFile->getMimeType();
            $bgUpload  = $this->service->uploadAsset($bgContent, $bgMime);

            if (!isset($bgUpload['data']['id'])) {
                $errMsg = $bgUpload['error']['message'] ?? 'Background image upload failed.';
                return redirect()->back()->with(['message' => $errMsg, 'type' => 'error']);
            }
            $bgAssetId = $bgUpload['data']['id'];
        }

        // Build character block
        if ($request->presenter_type === 'talking_photo') {
            // User uploads their own photo
            $photoFile    = $request->file('photo');
            $photoContent = file_get_contents($photoFile->getRealPath());
            $photoMime    = $photoFile->getMimeType();
            $photoUpload  = $this->service->uploadAsset($photoContent, $photoMime);

            if (!isset($photoUpload['data']['id'])) {
                $errMsg = $photoUpload['error']['message'] ?? 'Photo upload failed.';
                return redirect()->back()->with(['message' => $errMsg, 'type' => 'error']);
            }

            $character = [
                'type'             => 'talking_photo',
                'talking_photo_id' => $photoUpload['data']['id'],
                'talking_style'    => 'expressive',
            ];
        } elseif ($request->presenter_type === 'talking_photo_preset') {
            // User picks a HeyGen pre-built persona
            $character = [
                'type'             => 'talking_photo',
                'talking_photo_id' => $request->preset_talking_photo_id,
                'talking_style'    => 'expressive',
            ];
        } else {
            // Standard avatar
            $character = [
                'type'         => 'avatar',
                'avatar_id'    => $request->avatar_id,
                'avatar_style' => $request->avatar_style ?? 'normal',
            ];
        }

        // Build video input
        $videoInput = [
            'character' => $character,
            'voice'     => [
                'type'       => 'text',
                'input_text' => $request->input_text,
                'voice_id'   => $request->voice_id,
            ],
        ];

        if ($bgAssetId) {
            $videoInput['background'] = [
                'type'           => 'image',
                'image_asset_id' => $bgAssetId,
            ];
        }

        $body = [
            'video_inputs' => [$videoInput],
            'dimension'    => [
                'width'  => 1920,
                'height' => 1080,
            ],
        ];

        $service  = new AiNewsService;
        $response = $service->createVideo($body);

        if (empty($response['error'])) {
            AiNews::query()->create([
                'user_id'        => auth()->id(),
                'video_id'       => $response['data']['video_id'],
                'title'          => $request->title,
                'presenter_type' => $request->presenter_type,
                'status'         => 'in_progress',
            ]);

            $driver->decreaseCredit();

            return redirect()->route('dashboard.user.ai-news.index')->with([
                'message' => __('News video is being generated. This may take a few minutes.'),
                'type'    => 'success',
            ]);
        }

        $errMsg = $response['error']['message'] ?? __('Video generation failed. Please try again.');
        return redirect()->back()->with(['message' => $errMsg, 'type' => 'error']);
    }

    public function delete(string $id)
    {
        if (Helper::appIsDemo()) {
            return response()->json([
                'status'  => 'error',
                'message' => trans('This feature is disabled in demo mode.'),
            ]);
        }

        $response = $this->service->deleteVideo($id);

        if (in_array($response->getStatusCode(), [200, 204])) {
            AiNews::query()->where('video_id', $id)->delete();
            return back()->with(['message' => __('Deleted successfully.'), 'type' => 'success']);
        }

        return back()->with(['message' => __('Delete failed.'), 'type' => 'danger']);
    }

    public function checkVideoStatus(Request $request): \Illuminate\Http\JsonResponse
    {
        $ids = $request->get('ids');

        if (!$ids) {
            return response()->json(['data' => []]);
        }

        $service   = new AiNewsService;
        $allVideos = $service->listVideos()['data']['videos'] ?? [];
        $data      = [];

        foreach ($allVideos as $entry) {
            if (in_array($entry['video_id'], (array) $ids) && $entry['status'] === 'completed') {
                $detail  = $service->retrieveVideo($entry['video_id'])['data'] ?? [];
                $record  = AiNews::query()->where('video_id', $entry['video_id'])->first();
                $merged  = array_merge($entry, $detail, ['title' => $record?->title ?? '']);

                AiNews::query()->where('video_id', $entry['video_id'])->update(['status' => 'completed']);

                $data[] = [
                    'divId' => 'video-' . $merged['video_id'],
                    'html'  => view('ai-news::video-item', ['entry' => $merged])->render(),
                ];
            }
        }

        return response()->json(['data' => $data]);
    }
}

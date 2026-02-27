<?php

namespace App\Extensions\ChatbotWhatsapp\System\Http\Controllers\Webhook;

use App\Extensions\Chatbot\System\Models\ChatbotChannel;
use App\Extensions\Chatbot\System\Models\ChatbotChannelWebhook;
use App\Extensions\ChatbotWhatsapp\System\Services\Meta\MetaWhatsappConversationService;
use App\Extensions\ChatbotWhatsapp\System\Services\Meta\MetaWhatsappService;
use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;

class ChatbotMetaWhatsappController extends Controller
{
    public function __construct(
        public MetaWhatsappConversationService $service
    ) {}

    /**
     * GET — Meta webhook verification handshake.
     * Meta sends hub.mode, hub.verify_token, and hub.challenge.
     */
    public function verify(
        int $chatbotId,
        int $channelId,
        Request $request
    ): Response|JsonResponse {
        $mode = $request->query('hub_mode');
        $token = $request->query('hub_verify_token');
        $challenge = $request->query('hub_challenge');

        if ($mode !== 'subscribe' || ! $token || ! $challenge) {
            return response()->json(['error' => 'Invalid verification request'], 403);
        }

        $channel = ChatbotChannel::find($channelId);

        if (! $channel) {
            return response()->json(['error' => 'Channel not found'], 404);
        }

        $verifyToken = data_get($channel['credentials'], 'whatsapp_verify_token');

        if ($token !== $verifyToken) {
            Log::warning('Meta WhatsApp webhook verification failed — token mismatch', [
                'chatbot_id' => $chatbotId,
                'channel_id' => $channelId,
            ]);

            return response()->json(['error' => 'Verification token mismatch'], 403);
        }

        return response($challenge, 200)->header('Content-Type', 'text/plain');
    }

    /**
     * POST — Handle incoming Meta WhatsApp webhook events.
     */
    public function handle(
        int $chatbotId,
        int $channelId,
        Request $request
    ): JsonResponse {
        $channel = ChatbotChannel::find($channelId);

        if (! $channel) {
            return response()->json(['status' => false], 404);
        }

        // Validate X-Hub-Signature-256
        $signature = $request->header('X-Hub-Signature-256', '');
        $appSecret = data_get($channel['credentials'], 'whatsapp_app_secret');

        if ($appSecret && $signature) {
            $rawBody = $request->getContent();

            if (! MetaWhatsappService::validateSignature($rawBody, $signature, $appSecret)) {
                Log::warning('Meta WhatsApp webhook signature validation failed', [
                    'chatbot_id' => $chatbotId,
                    'channel_id' => $channelId,
                ]);

                return response()->json(['status' => false, 'error' => 'Invalid signature'], 403);
            }
        }

        $payload = $request->all();

        // Log the webhook payload
        ChatbotChannelWebhook::query()->create([
            'chatbot_id'         => $chatbotId,
            'chatbot_channel_id' => $channelId,
            'payload'            => $payload,
            'created_at'         => now(),
        ]);

        $this->service
            ->setIpAddress()
            ->setChatbotId($chatbotId)
            ->setChannelId($channelId)
            ->setPayload($payload);

        // Filter out status update webhooks (delivery/read receipts have no messages array)
        if (! $this->service->hasMessages()) {
            return response()->json(['status' => true]);
        }

        $conversation = $this->service->storeConversation();

        $chatbot = $this->service->getChatbot();

        $this->service->insertMessage(
            conversation: $conversation,
            message: $this->service->getMessageBody() ?? '',
            role: 'user',
            model: $chatbot?->getAttribute('ai_model')
        );

        $this->service->handleWhatsapp();

        // Meta requires HTTP 200 response
        return response()->json(['status' => true]);
    }
}

<?php

namespace App\Extensions\ChatbotWhatsapp\System\Services\Meta;

use App\Extensions\Chatbot\System\Models\ChatbotChannel;
use Exception;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class MetaWhatsappService
{
    public ChatbotChannel $chatbotChannel;

    private string $graphApiVersion = 'v21.0';

    private string $graphApiBase = 'https://graph.facebook.com';

    public function sendText(string $message, string $receiver): array
    {
        $phoneNumberId = data_get($this->chatbotChannel['credentials'], 'whatsapp_phone_number_id');
        $accessToken = data_get($this->chatbotChannel['credentials'], 'whatsapp_access_token');

        $receiver = $this->normalizePhone($receiver);

        try {
            $response = Http::withToken($accessToken)
                ->post("{$this->graphApiBase}/{$this->graphApiVersion}/{$phoneNumberId}/messages", [
                    'messaging_product' => 'whatsapp',
                    'recipient_type'    => 'individual',
                    'to'                => $receiver,
                    'type'              => 'text',
                    'text'              => [
                        'preview_url' => false,
                        'body'        => $message,
                    ],
                ]);

            if ($response->successful()) {
                $data = $response->json();

                return [
                    'properties' => [
                        'message_id' => data_get($data, 'messages.0.id'),
                        'contact_id' => data_get($data, 'contacts.0.wa_id'),
                        'to'         => $receiver,
                        'body'       => $message,
                        'status'     => 'sent',
                    ],
                    'message' => trans('Message sent'),
                    'status'  => true,
                ];
            }

            $error = $response->json('error.message', 'Unknown error from Meta API');
            Log::error('Meta WhatsApp API error', [
                'status'  => $response->status(),
                'error'   => $response->json('error'),
                'to'      => $receiver,
            ]);

            return [
                'message' => $error,
                'status'  => false,
            ];
        } catch (Exception $exception) {
            Log::error('Meta WhatsApp send failed', [
                'error' => $exception->getMessage(),
                'to'    => $receiver,
            ]);

            return [
                'message' => $exception->getMessage(),
                'status'  => false,
            ];
        }
    }

    public function markAsRead(string $messageId): bool
    {
        $phoneNumberId = data_get($this->chatbotChannel['credentials'], 'whatsapp_phone_number_id');
        $accessToken = data_get($this->chatbotChannel['credentials'], 'whatsapp_access_token');

        try {
            $response = Http::withToken($accessToken)
                ->post("{$this->graphApiBase}/{$this->graphApiVersion}/{$phoneNumberId}/messages", [
                    'messaging_product' => 'whatsapp',
                    'status'            => 'read',
                    'message_id'        => $messageId,
                ]);

            return $response->successful();
        } catch (Exception $exception) {
            Log::error('Meta WhatsApp markAsRead failed', [
                'error'      => $exception->getMessage(),
                'message_id' => $messageId,
            ]);

            return false;
        }
    }

    public static function validateSignature(string $payload, string $signature, string $appSecret): bool
    {
        $expectedSignature = 'sha256=' . hash_hmac('sha256', $payload, $appSecret);

        return hash_equals($expectedSignature, $signature);
    }

    public function normalizePhone(string $phone): string
    {
        // Strip whatsapp: prefix (Twilio legacy format)
        $phone = preg_replace('/^whatsapp:/', '', $phone);

        // Strip + prefix — Meta expects digits only
        $phone = ltrim($phone, '+');

        return $phone;
    }

    public function getChatbotChannel(): ChatbotChannel
    {
        return $this->chatbotChannel;
    }

    public function setChatbotChannel(ChatbotChannel $chatbotChannel): self
    {
        $this->chatbotChannel = $chatbotChannel;

        return $this;
    }
}

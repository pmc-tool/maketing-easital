<?php

namespace App\Extensions\ChatbotWhatsapp\System\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class WhatsappChannelStoreRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'channel'                            => 'required|string',
            'user_id'                            => 'required',
            'chatbot_id'                         => 'required',
            'credentials'                        => 'array|required',
            'credentials.whatsapp_phone_number_id' => 'required|string',
            'credentials.whatsapp_access_token'    => 'required|string',
            'credentials.whatsapp_verify_token'    => 'required|string',
            'credentials.whatsapp_app_secret'      => 'required|string',
            'connected_at'                       => 'string',
        ];
    }

    protected function prepareForValidation(): void
    {
        $this->merge([
            'user_id'      => auth()->id(),
            'connected_at' => (string) now(),
            'channel'      => 'whatsapp',
        ]);
    }
}

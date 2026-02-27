<?php

namespace App\Extensions\AIChatPro\System\Jobs;

use App\Domains\Entity\Enums\EntityEnum;
use App\Helpers\Classes\ApiHelper;
use App\Helpers\Classes\Helper;
use App\Models\UserOpenaiChatMessage;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;
use OpenAI\Laravel\Facades\OpenAI;
use RuntimeException;
use Throwable;

class GenerateChatSuggestionsJob implements ShouldQueue
{
    use Dispatchable;
    use InteractsWithQueue;
    use Queueable;
    use SerializesModels;

    public function __construct(protected int $messageId) {}

    public function handle(): void
    {
        $message = UserOpenaiChatMessage::find($this->messageId);

        if (! $message) {
            Log::warning('Chat suggestion generation: message not found', [
                'message_id' => $this->messageId,
            ]);

            return;
        }

        $this->generateSuggestions($message);
    }

    private function generateSuggestions(UserOpenaiChatMessage $message): void
    {
        $systemPrompt = <<<'PROMPT'
        You are an expert AI chat assistant.

        Based on the user's message and the AI response, generate:
        1. A short friendly brief of what the suggestions are about (1 sentence).
        2. An array of 4 short, actionable follow-up suggestions the user might want to ask next.

        STRICT OUTPUT RULES:
        - Return ONLY valid JSON
        - No markdown
        - No explanations
        - No extra text
        - No additional keys

        JSON FORMAT (must match exactly):
        {
          "brief": "short friendly sentence about the suggestions",
          "suggestions": ["Suggestion 1","Suggestion 2","Suggestion 3","Suggestion 4"]
        }

        Suggestions rules:
        - 2–6 words each
        - Relevant follow-up questions or topics
        - Concrete and actionable
        - Diverse range of follow-up directions
        - Written as short prompts the user would type

        Example:
        {
          "brief": "If you want, I can:",
          "suggestions": ["Make a shorter version","Rewrite for email","Make it more dramatic","Adapt it to your Brand"]
        }
        PROMPT;

        $userInput = $message->input ?? '';
        $aiResponse = mb_substr($message->output ?? '', 0, 500);

        try {
            ApiHelper::setOpenAiKey();

            $result = OpenAI::responses()->create([
                'model' => EntityEnum::fromSlug(Helper::setting('openai_default_model'))?->value ?? EntityEnum::GPT_4_O->value,
                'input' => [
                    ['role' => 'system', 'content' => $systemPrompt],
                    ['role' => 'user', 'content' => "User message: {$userInput}\n\nAI response (truncated): {$aiResponse}"],
                ],
            ]);

            $responseText = collect($result['output'] ?? [])
                ->flatMap(fn ($item) => $item['content'] ?? [])
                ->pluck('text')
                ->implode('');

            $payload = json_decode($responseText, true, 512, JSON_THROW_ON_ERROR);

            if (
                ! isset($payload['brief'], $payload['suggestions']) ||
                ! is_array($payload['suggestions']) ||
                count($payload['suggestions']) !== 4
            ) {
                throw new RuntimeException('Invalid AI response structure.');
            }
        } catch (Throwable $e) {
            Log::warning('Chat suggestion generation failed, using defaults', [
                'message_id' => $message->id,
                'error'      => $e->getMessage(),
            ]);

            $payload = [
                'brief'       => 'If you want, I can:',
                'suggestions' => [
                    'Make a shorter version',
                    'Rewrite for email',
                    'Make it more dramatic',
                    'Adapt it to your Brand',
                ],
            ];
        }

        $message->update([
            'suggestions_response' => $payload,
        ]);
    }
}

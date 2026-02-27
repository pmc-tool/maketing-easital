<?php

declare(strict_types=1);

namespace App\Extensions\SEOTool\System\Http\Controllers;

use App\Domains\Entity\Enums\EntityEnum;
use App\Domains\Entity\Facades\Entity;
use App\Helpers\Classes\ApiHelper;
use App\Helpers\Classes\Helper;
use App\Http\Controllers\Controller;
use App\Models\Usage;
use Illuminate\Http\Request;
use OpenAI\Laravel\Facades\OpenAI;

class ContentOptimizerController extends Controller
{
    public function optimize(Request $request)
    {
        $defaultModel = Helper::setting('openai_default_model');
        $driver = Entity::driver(EntityEnum::fromSlug($defaultModel));
        $driver->redirectIfNoCreditBalance();

        ApiHelper::setOpenAiKey();

        $content = $request->content ?? '';
        $keyword = $request->keyword ?? '';
        $tone = $request->tone ?? 'professional';

        $prompt = "You are an expert SEO content optimizer. Optimize the following content for the target keyword \"{$keyword}\" with a {$tone} tone.\n\n"
            . "Requirements:\n"
            . "1. Improve keyword density naturally (target 1-2%)\n"
            . "2. Add relevant LSI keywords\n"
            . "3. Improve readability and structure\n"
            . "4. Ensure proper heading hierarchy\n"
            . "5. Add meta description suggestion\n"
            . "6. Maintain the original meaning and intent\n\n"
            . "Original Content:\n{$content}\n\n"
            . 'Return the optimized content as HTML (without head/body tags). Do not wrap in ```html.';

        session_start();
        header('Content-type: text/event-stream');
        header('Cache-Control: no-cache');

        $result = OpenAI::chat()->createStreamed([
            'model'    => $defaultModel,
            'messages' => [
                ['role' => 'user', 'content' => $prompt],
            ],
            'stream' => true,
        ]);

        $output = '';
        $responsedText = '';
        foreach ($result as $response) {
            $message = $response->choices[0]->delta->content;
            if ($message === null) {
                continue;
            }
            $messageFix = str_replace(["\r\n", "\r", "\n"], '<br/>', $message);
            $output .= $messageFix;
            $responsedText .= $message;

            echo "event: data\n";
            echo 'data: ' . $messageFix . "\n\n";
            flush();
        }
        echo "event: stop\n";
        echo "data: [DONE]\n\n";

        $driver->input($responsedText)->calculateCredit()->decreaseCredit();
        Usage::getSingle()->updateWordCounts($driver->calculate());
    }
}

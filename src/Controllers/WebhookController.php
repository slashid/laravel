<?php

namespace SlashId\Laravel\Controllers;

use Illuminate\Http\Request;
use SlashId\Laravel\Events\WebhookEvent;
use SlashId\Php\SlashIdSdk;

class WebhookController
{
    public function listen(Request $request, SlashIdSdk $sdk): void
    {
        $decoded = $sdk->webhook()->decodeWebhookCall($request->getContent(), app('cache.psr6'));

        // Dispatch an event with the webhook event.
        WebhookEvent::dispatch(
            $decoded['trigger_content']['event_metadata']['event_name'],
            $decoded['trigger_content']['event_metadata']['event_id'],
            $decoded['trigger_content'],
        );
    }
}

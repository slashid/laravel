<?php

namespace SlashId\Laravel\Controllers;

use Illuminate\Http\Request;
use SlashId\Laravel\Events\WebhookEvent;
use SlashId\Php\SlashIdSdk;
use Symfony\Component\HttpFoundation\Exception\BadRequestException;

class WebhookController
{
    public function listen(Request $request, SlashIdSdk $sdk): void
    {
        /** @var \Psr\Cache\CacheItemPoolInterface */
        $cache = app('cache.psr6');

        $decoded = $sdk->webhook()->decodeWebhookCall($request->getContent(), $cache);

        if (
            ! is_array($decoded['trigger_content']) ||
            empty($decoded['trigger_content']['event_metadata']) ||
            ! is_array($decoded['trigger_content']['event_metadata']) ||
            empty($decoded['trigger_content']['event_metadata']['event_name']) ||
            ! is_string($decoded['trigger_content']['event_metadata']['event_name']) ||
            empty($decoded['trigger_content']['event_metadata']['event_id']) ||
            ! is_string($decoded['trigger_content']['event_metadata']['event_id'])
        ) {
            throw new BadRequestException('Invalid Webhook call: missing trigger_content->event_metadata->event_name and trigger_content->event_metadata->event_id.');
        }

        // Dispatch an event with the webhook event.
        WebhookEvent::dispatch(
            $decoded['trigger_content']['event_metadata']['event_name'],
            $decoded['trigger_content']['event_metadata']['event_id'],
            $decoded['trigger_content'],
        );
    }
}

<?php

namespace SlashId\Laravel\Controllers;

use Firebase\JWT\CachedKeySet;
use Firebase\JWT\JWT;
use GuzzleHttp\Client;
use GuzzleHttp\Psr7\HttpFactory;
use Illuminate\Http\Request;
use SlashId\Laravel\Events\WebhookEvent;
use SlashId\Php\SlashIdSdk;

class WebhookController
{
    public function listen(Request $request, SlashIdSdk $sdk)
    {
        $jwt = $request->getContent();

        $httpClient = new Client([
            'headers' => [
                'SlashID-OrgID' => $sdk->getOrganizationId(),
            ],
        ]);

        $keySet = new CachedKeySet(
            $sdk->getApiUrl() . '/organizations/webhooks/verification-jwks',
            $httpClient,
            new HttpFactory(),
            app('cache.psr6'),
            null, // $expiresAfter int seconds to set the JWKS to expire
            true  // $rateLimit    true to enable rate limit of 10 RPS on lookup of invalid keys
        );

        $decoded = JWT::decode($jwt, $keySet);

        // Convert to array.
        $decoded = \json_decode(\json_encode($decoded), TRUE);

        // Dispatch an event with the webhook event.
        WebhookEvent::dispatch(
            $decoded['trigger_content']['event_metadata']['event_name'],
            $decoded['trigger_content']['event_metadata']['event_id'],
            $decoded['trigger_content'],
        );
    }
}

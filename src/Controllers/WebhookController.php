<?php

namespace SlashId\Laravel\Controllers;

use Firebase\JWT\CachedKeySet;
use Firebase\JWT\JWT;
use GuzzleHttp\Psr7\HttpFactory;
use Illuminate\Http\Request;

class WebhookController
{
    public function listen(Request $request)
    {
        $jwt = $request->getContent();

        // Create an HTTP client (can be any PSR-7 compatible HTTP client)
        $httpClient = new Client([
            'headers' => [
                'SlashID-OrgID' => $GLOBALS['slashid_oid'],
            ],
        ]);

        // Create an HTTP request factory (can be any PSR-17 compatible HTTP request factory)
        $httpFactory = new HttpFactory();

        $keySet = new CachedKeySet(
            'https://api.sandbox.slashid.com/organizations/webhooks/verification-jwks',
            $httpClient,
            $httpFactory,
            app('cache.psr6'),
            null, // $expiresAfter int seconds to set the JWKS to expire
            true  // $rateLimit    true to enable rate limit of 10 RPS on lookup of invalid keys
        );

        $decoded = JWT::decode($jwt, $keySet);
        print_r($decoded);
    }
}

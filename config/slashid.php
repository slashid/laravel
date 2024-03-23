<?php

return [
    'web_register_user_provider' => true,
    'web_register_guard' => true,
    'web_register_routes' => true,
    'web_route_path_login' => '/login',
    'web_route_path_login_callback' => '/login/callback',
    'web_route_path_logout' => '/logout',
    'web_redirect_after_login' => '/',
    'web_redirect_after_logout' => '/',

    'api_register_user_provider' => true,
    'api_register_guard' => true,

    'group_register_middleware' => true,

    'webhook_enable' => true,
    'webhook_route_path' => '/slashid/webhook',

    // Do NOT override the following three variables, only set them as environment variables.
    'sdk_environment' => env('SLASHID_ENVIRONMENT'),
    'sdk_organization_id' => env('SLASHID_ORGANIZATION_ID'),
    'sdk_api_key' => env('SLASHID_API_KEY'),
];

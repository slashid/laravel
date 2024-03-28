<?php

return [
    'login_form_factors' => [
        ['method' => 'webauthn'],
        ['method' => 'email_link'],
    ],
    'login_form_configuration' => [],
    'login_form_override_bundled_javascript' => false,
    'login_form_override_javascript_glue' => false,
    'login_form_css_override' => [
        // '--sid-color-foreground' => '#00c',
        //'--sid-color-primary' => '#f00',
        // '--sid-color-panel' => '#ff0',
        // '--sid-button-border-radius' => '3px',
    ],

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
];

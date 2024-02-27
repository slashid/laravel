<?php

return [
    'web_register_user_provider' => TRUE,
    'web_register_guard' => TRUE,
    'web_register_routes' => TRUE,
    'web_route_path_login' => '/login',
    'web_route_path_login_callback' => '/login/callback',
    'web_route_path_logout' => '/logout',
    'web_redirect_after_login' => '/',
    'web_redirect_after_logout' => '/',

    'api_register_user_provider' => TRUE,
    'api_register_guard' => TRUE,

    'group_register_middleware' => TRUE,
];

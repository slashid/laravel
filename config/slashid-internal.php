<?php

// Do NOT override this file. This is used for caching in config calculated values.

$strings = array_keys(json_decode(file_get_contents(__DIR__.'/../resources/lang/en.json'), TRUE));
$keys = array_map(fn ($string) => substr($string, strlen('SlashID::')), $strings);
$strings = array_combine($keys, $strings);

return [
    'sdk_environment' => env('SLASHID_ENVIRONMENT'),
    'sdk_organization_id' => env('SLASHID_ORGANIZATION_ID'),
    'sdk_api_key' => env('SLASHID_API_KEY'),

    'login_form_strings' => $strings,
];

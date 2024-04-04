<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="robots" content="noindex,nofollow"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
    <title>Login</title>
    @if ($useBundled)
        <link rel="stylesheet" href="{{ asset('vendor/slashid/bundled-form/style.css') }}">
    @endif
</head>
<body>
    @include('slashid::login-form')
</body>
</html>

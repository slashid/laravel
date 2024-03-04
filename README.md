# Laravel SlashID integration

## Installation

1. Install the Laravel SlashID packaged with composer:

```bash
composer require slashid/laravel-slashid
```

2. Edit your environment file, `.env`, adding the following variables to the end of the file:
    * `SLASHID_ENVIRONMENT`, either `sandbox` or `production`
    * `SLASHID_ORGANIZATION_ID`, your organization's ID. You'll find it your SlashID console (https://console.slashid.dev/ for production, https://console.sandbox.slashid.dev/ for sandbox), in the "Settings" tab, on the top of the page.
    * `SLASHID_ORGANIZATION_ID`, your organization's ID. You'll also find it your SlashID console, in the "Settings" tab, on the very bottom of the page.

```conf
SLASHID_ENVIRONMENT=sandbox
SLASHID_ORGANIZATION_ID=412edb57-ae26-f2aa-9999-770021ed52d1
SLASHID_API_KEY=z0dlY-nluiq8mcvm8YTolSkJV6e9
```

3. Run the following artisan command to publish the resources:

```php
php artisan vendor:publish --provider="SlashId\Laravel\Providers\SlashIdServiceProvider"
```

You're ready! Now access `/login` in your website and enjoy your new login with SlashID :)

## Configuration

There several configurations in this package, that you can edit on `config/slashid.php`. The configurations more likely for you to override are `web_redirect_after_login` and `web_redirect_after_logout`.

| Configuration                   | Default value        | Description                                                                                                                    |
|---------------------------------|----------------------|--------------------------------------------------------------------------------------------------------------------------------|
| `web_register_user_provider`    | `true`               | Whether to register the session-based user provider. Turn off if you want to use *exclusively* API-based authentication.       |
| `web_register_guard`            | `true`               | Whether to register the session-based authentication. Turn off if you want to use *exclusively* API-based authentication.      |
| `web_register_routes`           | `true`               | Whether to register the web routes (`/login`, `/login/callback`, `/logout`). Turn off if you want to register your own routes. |
| `web_route_path_login`          | `'/login'`           | The URL for the login page.                                                                                                    |
| `web_route_path_login_callback` | `'/login/callback'`  | The URL for the login callback page (you probaby don't want to override it).                                                   |
| `web_route_path_logout`         | `'/logout'`          | The URL for the logout page.                                                                                                   |
| `web_redirect_after_login`      | `'/'`                | Where to redirect the user after login.                                                                                        |
| `web_redirect_after_logout`     | `'/'`                | Where to redirect the user after logout.                                                                                       |
| `api_register_user_provider`    | `true`               | Whether to register the stateless user provider. Turn off if you want to use *exclusively* web authentication.                 |
| `api_register_guard`            | `true`               | Whether to register the stateless authentication. Turn off if you want to use *exclusively* web authentication.                |
| `group_register_middleware`     | `true`               | Whether to register the group middleware (see the section "Group-based access check in routes")                                |
| `webhook_enable`                | `true`               | Whether to enable webhooks (see the section "Webhooks")                                                                        |
| `webhook_route_path`            | `'/slashid/webhook'` | The URL for the webhook route (you probaby don't want to override it).                                                         |

## Groups

### Group-based access check in routes

You can use the `slashid_group` middleware to restrict certain routes to people of a given group. For instance, if you want to create a route `/content-management` that only people within the "Editor" group can access, and a route `/admin` that only people within the "Admin" group can access, you can do it like this:

```php
// web.php

Route::get('/content-management', function () {
    // Route that only someone in the group "Editor" can access.
})->middleware('slashid_group:Editor');

Route::get('/admin', function () {
    // Route that only someone in the group "Admin" can access.
})->middleware('slashid_group:Admin');
```

If the user is not logged in, they will be redirected to the login page. If the user is logged in, they will receive an Access Denied exception.

:warning: **Note**: group names are case-sensitive, please make sure you are using the correct group names.

You can also combine different groups in your route checking! For instance, if you want the `/dashboard` page to be accessible for anyone in ANY of the groups "Admin", "Editor" or "Reviewer", you can use `|` to combine different group names in an `OR` conjunction:

```php
// web.php

Route::get('/group/Admin-OR-Editor', function () {
    // Route that someone in the group "Admin", OR in the group "Editor", OR in the group "Reviewer" can access.
})->middleware('slashid_group:Admin|Editor|Reviewer');
```

You can also use `&` to combine groups in an `AND` conjunction:

```php
Route::get('/very-secure-page', function () {
    // Route that is only accessed by someone *both* in the "Admin" and "Editor" groups.
})->middleware('slashid_group:Admin&Editor');
```

:warning: **Note**: you cannot combine `|` and `&` in a same route, e.g. `->middleware('slashid_group:Admin&Editor|Reviewer')` is an invalid declaration and will raise an exception.

### Group-checking in custom code

If you want to check the groups of a user in your custom code, you can use any of the group-related methods of the `\SlashId\Laravel\SlashIdUser` class, e.g.:

```php
if ($user->hasGroup('Editor')) {
    // Do things that only an "Editor" user can do.
}

if ($user->hasAnyGroup(['Admin', 'Editor', 'Reviewer'])) {
    // Do things that someone in the group "Admin", OR in the group "Editor", OR
    // in the group "Reviewer" can do.
}

if ($user->hasAllGroups(['Admin', 'Editor'])) {
    // Do things that only someone that is in *both* "Admin" and "Editor" groups
    // can do.
}

// Shows the user groups as a list of strings.
var_dump($user->getGroups());
```

### Group-checking in Blade

You can also use the `hasGroup` / `hasAnyGroup` / `hasAllGroups` methods do build templates in Blade that display different things depending on the groups the user belongs to.

```php
// some-template.blade.php

@if (auth()->user())

    <p>You are logged in</p>

    @if (auth()->user()->hasGroup('Editor'))

        <p>Information Editors can access.</p>

    @endif

    @if (auth()->user()->hasGroup('Admin'))

        <p>Information Admins can access.</p>

    @endif

    @if (auth()->user()->hasAnyGroup(['Admin', 'Editor']))

        <p>Information both Editors & Admins can access.</p>

    @endif

@else

    <p>You are NOT logged in</p>

@endif
```

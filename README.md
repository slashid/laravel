# Laravel SlashID integration

## Installation

1. Install the Laravel SlashID packaged with composer:

```
composer require slashid/laravel-slashid
```

2. Edit your environment file, `.env`, adding the following variables to the end of the file:
    * `SLASHID_ENVIRONMENT`, either `sandbox` or `production`
    * `SLASHID_ORGANIZATION_ID`, your organization's ID. You'll find it in your SlashID console (https://console.slashid.dev/ for production, https://console.sandbox.slashid.dev/ for sandbox), in the "Settings" tab, on the top of the page.
    * `SLASHID_API_KEY`, your organization's API Key. You'll also find it in your SlashID console, in the "Settings" tab, at the very bottom of the page.

```conf
SLASHID_ENVIRONMENT=sandbox
SLASHID_ORGANIZATION_ID=412edb57-ae26-f2aa-9999-770021ed52d1
SLASHID_API_KEY=z0dlY-nluiq8mcvm8YTolSkJV6e9
```

3. Run the following artisan command to publish the resources:

```
php artisan vendor:publish --provider="SlashId\Laravel\Providers\SlashIdServiceProvider"
```

You're ready! Now access `/login` in your website and enjoy your new login with SlashID :)

## Configuration

There are several configurations in this package, that you can edit on `config/slashid.php`. The configurations that are more likely for you to override are `web_redirect_after_login` and `web_redirect_after_logout`.

| Configuration                            | Default value        | Description                                                                                                                    |
|------------------------------------------|----------------------|--------------------------------------------------------------------------------------------------------------------------------|
| `login_form_configuration`               | see below            | See [Login form configuration](#login-form-configuration)                                                                      |
| `login_form_override_bundled_javascript` | `false`              | Set true to override the Bundled JavaScript form, see [Overriding the login form](#overriding-the-login-form).                 |
| `login_form_override_javascript_glue`    | `false`              | Set true to override the JavaScript glue code, see [Overriding the login form](#overriding-the-login-form).                    |
| `login_form_css_override`                | `[]`                 | See [Login form theme](#login-form-theme)                                                                                      |
| `web_register_user_provider`             | `true`               | Whether to register the session-based user provider. Turn it off if you want to use *exclusively* API-based authentication.       |
| `web_register_guard`                     | `true`               | Whether to register the session-based authentication. Turn it off if you want to use *exclusively* API-based authentication.      |
| `web_register_routes`                    | `true`               | Whether to register the web routes (`/login`, `/login/callback`, `/logout`). Turn it off if you want to register your routes. |
| `web_route_path_login`                   | `'/login'`           | The URL for the login page.                                                                                                    |
| `web_route_path_login_callback`          | `'/login/callback'`  | The URL for the login callback page (you probably don't want to override it).                                                   |
| `web_route_path_logout`                  | `'/logout'`          | The URL for the logout page.                                                                                                   |
| `web_redirect_after_login`               | `'/'`                | Where to redirect the user after login.                                                                                        |
| `web_redirect_after_logout`              | `'/'`                | Where to redirect the user after logout.                                                                                       |
| `api_register_user_provider`             | `true`               | Whether to register the stateless user provider. Turn it off if you want to use *exclusively* web authentication.                 |
| `api_register_guard`                     | `true`               | Whether to register the stateless authentication. Turn it off if you want to use *exclusively* web authentication.                |
| `group_register_middleware`              | `true`               | Whether to register the group middleware (see the section "Group-based access check-in routes")                                |
| `webhook_enable`                         | `true`               | Whether to enable webhooks (see the section "Webhooks")                                                                        |
| `webhook_route_path`                     | `'/slashid/webhook'` | The URL for the webhook route (you probably don't want to override it).                                                         |

### Login form configuration

The login form is a bundled version of [SlashID's React SDK](https://developer.slashid.dev/docs/access/react-sdk). As such all options in the components are usable here, just note that you have to convert `camelCase` to `kebab-case` (see examples below).

In `config/slashid.php`, the option `login_form_configuration`, has the following default value:

```php
// config/slashid.php

return [
    'login_form_configuration' => [
        'factors' => [
            ['method' => 'webauthn'],
            ['method' => 'email_link'],
        ],
        'analytics-enabled',
        // Uncomment to enable the dark theme.
        // 'theme-props' => ['theme' => 'dark'],
    ],
    //.............
];
```

### Authentication methods

For instance, if you want to add password login, first add the password option in the SlashID Console > Settings, then change the configuration to as such:

```php
// config/slashid.php

return [
    'login_form_configuration' => [
        'factors' => [
            ['method' => 'webauthn'],
            ['method' => 'email_link'],
            ['method' => 'password'],
        ],
        'analytics-enabled',
        // Uncomment to enable the dark theme.
        // 'theme-props' => ['theme' => 'dark'],
    ],
    //........
];
```

For more information, check the documentation at: https://developer.slashid.dev/docs/access/sdk/interfaces/Types.Factor

### Login form theme

You can choose between a light and a dark theme by overriding the `theme-props` option in the `login_form_configuration`. For instance, this will make the theme dark:

```php
// config/slashid.php

return [
    'login_form_configuration' => [
        'factors' => [
            ['method' => 'webauthn'],
            ['method' => 'email_link'],
        ],
        'analytics-enabled',
        'theme-props' => ['theme' => 'dark'],
    ],
    //.............
];
```

You can also override [any of the CSS variables provided by the React SDK](https://developer.slashid.dev/docs/access/react-sdk/reference/components/react-sdk-reference-form#css-custom-properties-variables). For instance, to make the login button red, you can do the following:

```php
// config/slashid.php

return [
    //.............
    'login_form_css_override' => [
        '--sid-color-primary' => '#f00',
    ],
    //.............
];
```

## Groups

### Group-based access check-in routes

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

You can also use the `hasGroup` / `hasAnyGroup` / `hasAllGroups` methods to build templates in Blade that display different things depending on the groups the user belongs to.

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

## Webhooks

See [SlashID documentation on Webhooks](https://developer.slashid.dev/docs/access/guides/webhooks/introduction).

### Artisan webhook commands

To use webhooks, you need first to register your URL with SlashID. Webhooks are managed via API, but this package provides three Artisan commands to help you manage them.

#### How to register webhooks

To register a new webhook for the current website use the following command. You are required to define a unique name for it, in this example, we're using `my_laravel_webhook`.

```
php artisan slashid:webhook:register my_laravel_webhook
```

By default, the webhook is registered with the triggers: `PersonDeleted_v1`, `PersonLoggedOut_v1`, and `PasswordChanged_v1`. You can specify which triggers to register, listing the triggers separated by space:

```
php artisan slashid:webhook:register my_laravel_webhook PasswordChanged_v1 VirtualPageLoaded_v1 AuthenticationFailed_v1
```

You can run `slashid:webhook:register` as many times as you want, if there is already a webhook registered to that URL, it will be updated and the list of triggers will be overridden.


#### How to test webhooks locally

You can test webhooks in your local development environment with a tool such as [ngrok](https://ngrok.com/), then use the option `--base-url` to register a webhook with the proxy.

For instance, if you are running Laravel on port 8080, you can proxy your local environment with ngrok with:

```
ngrok http 8000
```

The ngrok command-line will then display data about your proxy, such as:

```
Forwarding                    https://2f45-2804-14c-483-983f-b323-32f2-4714-1609.ngrok-free.app -> http://localhost:8000
```

Then, you can register a web service to the proxy URL, with the following command:

```
php artisan slashid:webhook:register proxied_webhook PasswordChanged_v1 --base-url=https://2f45-2804-14c-483-983f-b323-32f2-4714-1609.ngrok-free.app
```

#### How to register webhooks for other applications

You can use the artisan command to register webhooks with any arbitrary URL:

```
php artisan slashid:webhook:register proxied_webhook PasswordChanged_v1 --webhook-url=https://someotherapplication.example.com/some-arbitrary-url
```

### How to see existing webhooks

You can see all webhooks registered to your SlashID organization with the command:

```
php artisan slashid:webhook:list
```

#### How to delete a webhook

You can delete a webhook by its ID.

```
php artisan slashid:webhook:delete 065e5237-c1c4-7a96-ab00-783ef0cbd002
```

To learn a webhook ID, use the `slashid:webhook:list` command.

### Listening to events

Any received webhook will be made available to the developer as a Laravel event.

To listen to webhook events in your Laravel application, create a class in the `app/Listeners` folder of your application. In the example below, we are naming it `WebhookListener`, but you can name it as you like.

```php
// app/Listeners/WebhookListener.php
<?php

namespace App\Listeners;

use SlashId\Laravel\Events\WebhookEvent;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class WebhookListener
{
    /**
     * Handle the event.
     */
    public function handle(WebhookEvent $event): void
    {
        print_r([
            $event->getEventName(),
            $event->getEventId(),
            $event->getTriggerContent(),
        ]);
    }
}
```

After creating the listener class, you need to let Laravel know it exists by editing the file `app/Providers/EventServiceProvider.php`. On the `$listen` property, add your class, such as:

```php
// app/Providers/EventServiceProvider.php
<?php

namespace App\Providers;

use App\Listeners\WebhookListener;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use SlashId\Laravel\Events\WebhookEvent;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event to listener mappings for the application.
     *
     * @var array<class-string, array<int, class-string>>
     */
    protected $listen = [
        WebhookEvent::class => [
            WebhookListener::class,
        ],
    ];

    // ... rest of the class provided by Laravel ...
}
```

The listener will receive the event of class `\SlashId\Laravel\Events\WebhookEvent`. It has three methods you can use to extract information about the webhook call:

* `$event->getEventName()` will return the trigger name, such as `AuthenticationFailed_v1`, that is, `->trigger_content->event_metadata->event_name` in the JSON sent to the webhook.
* `$event->getEventId()` will return the event ID, such as `68a850ca-b2ee-46ce-8592-410813037739`, that is, `->trigger_content->event_metadata->event_id` in the JSON sent to the webhook.
* `$event->getTriggerContent()` will return the full content of the webhook call, that is, `->trigger_content` in the JSON sent to the webhook.

## User Migration

If you are installing SlashID in an existing Laravel website, you will probably already have a user base that you'll want to migrate to SlashID's database. This is made easy with two migration commands.

First, you have to run the artisan command `php artisan slashid:import:create-script`. It will ask you the User class in your installation, usually `\App\Models\User`.

```
$ php artisan slashid:import:create-script

 Please inform the class of the user model [\App\Models\User]:
 >

The Slash ID migration script has been created at /var/www/html/database/slashid/user-migration.php. Please open the file and modify it according to the instructions in it.
```

A script will be created on `database/slashid/user-migration.php`. It will look like this:

```php
<?php

use SlashId\Laravel\SlashIdUser;

/** @var \Illuminate\Contracts\Auth\Authenticatable[] */
$laravelUsers = \App\Models\User::all();
$slashIdUsers = [];
foreach ($laravelUsers as $laravelUser) {
    $slashIdUser = new SlashIdUser();
    $slashIdUser
        ->addEmailAddress($laravelUser->email)
        ->setLegacyPasswordToMigrate($laravelUser->getAuthPassword())
        // Uncomment if you want to set the phone number.
        // ->addPhoneNumber($laravelUser->phone_number)
        // Uncomment if you want to set groups.
        // ->setGroups(['Editor'])
        // Uncomment if you want to specify a region for the user.
        // ->setRegion('us-iowa')
        ->setBucketAttributes(\SlashId\Php\PersonInterface::BUCKET_ORGANIZATION_END_USER_NO_ACCESS, [
            // List the user attributes you want to migrate, grouped by bucket.
            'old_id' => $laravelUser->getAuthIdentifier(),
            'firstname' => $laravelUser->firstname,
            'email_verified_at' => $laravelUser->email_verified_at,
            'lastname' => $laravelUser->lastname,
            'username' => $laravelUser->username,
        ]);

    $slashIdUsers[] = $slashIdUser;
}

return $slashIdUsers;
```

You must alter the `user-migration.php` to model the data to be migrated as you want. The script must return an array of `\SlashId\Laravel\SlashIdUser` with all the users you want to bulk import into SlashID.

After fitting the script to your needs, run `php artisan slashid:import:run`, e.g.:

```
$ php artisan slashid:import:run
+------------------------+---------------+--------+-------+--------+-------------------------------------------------------------------------------------------------------------------------------+
| Emails                 | Phone numbers | Region | Roles | Groups | Attributes                                                                                                                    |
+------------------------+---------------+--------+-------+--------+-------------------------------------------------------------------------------------------------------------------------------+
| rattazzi@example.com   |               |        |       |        | {"end_user_no_access":{"old_id":1,"firstname":"Urbano","email_verified_at":null,"lastname":"Rattazzi","username":"rattazzi"}} |
| nitti@example.com      |               |        |       |        | {"end_user_no_access":{"old_id":2,"firstname":"Francesco","email_verified_at":null,"lastname":"Nitti","username":"nitti"}}    |
| cavour@example.com     |               |        |       |        | {"end_user_no_access":{"old_id":3,"firstname":"Camillo","email_verified_at":null,"lastname":"Cavour","username":"cavour"}}    |
+------------------------+---------------+--------+-------+--------+-------------------------------------------------------------------------------------------------------------------------------+

 Do you want to proceed with importing 3 users? (yes/no) [no]:
 > yes

2 successfully imported users.
1 users failed to import. Check the file /var/www/html/database/slashid/migration-failed-202403271142.csv for errors.
```

Any errors that occured in a migration will be output as a CSV. Check the CSV to fix the errors and run again.

## Overriding the login form

### Blade template and how to insert the form in a layout

The login form is rendered in two Blade templates: `slashid/login.blade.php` and `slashid/login-form.blade.php`. The actual code lies in the template `login-form`, `login` being just a wrapper to add a `<html>` around the form.

Therefore, if you want to wrap the login form in `/login` inside the layout of the page, you can override the `login` template. So:

First, copy `vendor/slashid/laravel/resources/views/login.blade.php` to `resources/views/vendor/slashid/login.blade.php`, then edit the file according to your needs. For instance, if you have a `<x-app-layout>` component, your template can be:

```php
// resources/views/vendor/slashid/login.blade.php
<x-app-layout>
    @include('slashid::login-form')
</x-app-layout>
```

In most cases, you will not need to override `login-form.blade.php`.

### Using custom JavaScript

The Laravel package comes with a bundle [SlashID React SDK](https://developer.slashid.dev/docs/access/react-sdk) and a small JavaScript glue piece of code at `vendor/slashid/laravel/public/slashid.laravel-web-login.js`.

You may want to override the Bundled React SDK to compile your implementation of the React login form. If that's the case, change the option `login_form_override_bundled_javascript` to `true` in `config/slashid.php` to prevent the Bundled React SDK from being loaded.

Alternatively, you may want to override the glue code, to include custom actions after the login. If that's the case, change the option `login_form_override_javascript_glue` to `true` in `config/slashid.php` to prevent the glue code from being loaded.

In both cases, you are responsible for loading your custom code yourself.

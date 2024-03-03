# Laravel SlashID integration


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

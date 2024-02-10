<?php

namespace SlashId\Laravel\Providers;

use App\SlashId\SlashIdStatelessProvider;
use App\SlashId\SlashIdUserProvider;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Auth;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        //
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        $this->registerPolicies();

        Auth::provider('slashid_users', function ($app, array $config) {
            return new SlashIdUserProvider(TRUE);
        });

        Auth::extend('slashid_stateless', function ($app, $name, array $config) {
            return new SlashIdStatelessProvider();
        });
    }
}

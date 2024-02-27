<?php

namespace SlashId\Laravel\Providers;

use Illuminate\Auth\AuthManager;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Routing\Router;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use SlashId\Laravel\Auth\SessionGuard;
use SlashId\Laravel\Auth\StatelessGuard;
use SlashId\Laravel\Controllers\LoginController;
use SlashId\Laravel\Middleware\GroupMiddleware;
use SlashId\Php\SlashIdSdk;

class SlashIdServiceProvider extends ServiceProvider
{

    /**
     * {@inheritdoc}
     */
    public function boot(
        AuthManager $auth,
        Router $router,
    )
    {
        $this->publishes([
            __DIR__.'/../../config/slashid.php' => config_path('slashid.php'),
        ]);
        $this->mergeConfigFrom(__DIR__.'/../../config/slashid.php', 'slashid');

        $this->publishes([
            __DIR__.'/../../public' => public_path('vendor/slashid'),
        ], 'public');

        if (config('slashid.web_register_user_provider')) {
            $auth->provider('slashid_session_user', function (Application $app) {
                return new SessionUserProvider(app(SlashIdSdk::class));
            });
        }

        if (config('slashid.web_register_guard')) {
            $auth->extend('slashid_session_guard', function (Application $app, $name, array $config) use ($auth) {
                $provider = $auth->createUserProvider($config['provider'] ?? null);

                $guard = new SessionGuard(
                    $name,
                    $provider,
                    $app['session.store'],
                );

                // When using the remember me functionality of the authentication services we
                // will need to be set the encryption instance of the guard, which allows
                // secure, encrypted cookie values to get generated for those cookies.
                if (method_exists($guard, 'setCookieJar')) {
                    $guard->setCookieJar($app['cookie']);
                }

                if (method_exists($guard, 'setDispatcher')) {
                    $guard->setDispatcher($app['events']);
                }

                if (method_exists($guard, 'setRequest')) {
                    $guard->setRequest($app->refresh('request', $guard, 'setRequest'));
                }

                return $guard;
            });
        }

        if (config('slashid.api_register_user_provider')) {
            $auth->provider('slashid_stateless_user', function (Application $app) {
                return new StatelessUserProvider(app(SlashIdSdk::class));
            });
        }

        if (config('slashid.api_register_guard')) {
            $auth->extend('slashid_stateless_guard', fn($app, $name, array $config) => new StatelessGuard($auth->createUserProvider($config['provider'])));
        }

        if (config('slashid.group_register_middleware')) {
            $router->aliasMiddleware('slashid_group', GroupMiddleware::class);
        }

        if (config('slashid.web_register_routes')) {
            $this->loadViewsFrom(__DIR__ . '/../../resources/views', 'slashid');
            Route::get(config('slashid.web_route_path_login'), [LoginController::class, 'login'])
                ->middleware('web')->name('login');

            Route::post(config('slashid.web_route_path_login_callback'), [LoginController::class, 'loginCallback'])
                ->middleware('web')->name('login.callback');

            Route::get(config('slashid.web_route_path_logout'), [LoginController::class, 'logout'])
                ->middleware('web')->name('logout');
        }
    }

    public function register()
    {
        $this->app->singleton(SlashIdSdk::class, function (): SlashIdSdk {
            return new SlashIdSdk(
                env('SLASHID_ENVIRONMENT'),
                env('SLASHID_ORGANIZATION_ID'),
                env('SLASHID_API_KEY'),
            );
        });
    }

}

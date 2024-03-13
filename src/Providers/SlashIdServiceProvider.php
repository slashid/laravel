<?php

namespace SlashId\Laravel\Providers;

use Illuminate\Auth\AuthManager;
use Illuminate\Http\Request;
use Illuminate\Routing\Router;
use Illuminate\Support\ServiceProvider;
use SlashId\Laravel\Auth\SessionGuard;
use SlashId\Laravel\Auth\StatelessGuard;
use SlashId\Laravel\Commands\DeleteWebhook;
use SlashId\Laravel\Commands\ListWebhooks;
use SlashId\Laravel\Commands\RegisterWebhook;
use SlashId\Laravel\Controllers\LoginController;
use SlashId\Laravel\Controllers\WebhookController;
use SlashId\Laravel\Exception\InvalidConfigurationException;
use SlashId\Laravel\Middleware\GroupMiddleware;
use SlashId\Php\SlashIdSdk;

class SlashIdServiceProvider extends ServiceProvider
{
    public function boot(
        AuthManager $auth,
        Request $request,
        Router $router,
        SlashIdSdk $sdk,
    ): void {
        $this->publishes([
            __DIR__.'/../../config/slashid.php' => $this->app->configPath('slashid.php'),
        ]);
        $this->mergeConfigFrom(__DIR__.'/../../config/slashid.php', 'slashid');

        $this->publishes([
            __DIR__.'/../../public' => $this->app->publicPath('vendor/slashid'),
        ], 'public');

        if ($this->app->runningInConsole()) {
            $this->commands([
                DeleteWebhook::class,
                ListWebhooks::class,
                RegisterWebhook::class,
            ]);
        }
        if (config('slashid.web_register_user_provider')) {
            config([
                'auth.providers.slashid_session_user' => [
                    'driver' => 'slashid_session_user',
                ],
            ]);

            $auth->provider('slashid_session_user', fn() => new SessionUserProvider($sdk));
        }

        if (config('slashid.web_register_guard')) {
            config([
                'auth.guards.web' => [
                    'driver' => 'slashid_session_guard',
                    'provider' => 'slashid_session_user',
                ],
            ]);

            $auth->extend('slashid_session_guard', function ($app, $name, array $config) use ($auth) {
                /** @var \SlashId\Laravel\Providers\SessionUserProvider */
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
            config([
                'auth.providers.slashid_stateless_user' => [
                    'driver' => 'slashid_stateless_user',
                ],
            ]);

            $auth->provider('slashid_stateless_user', fn () => new StatelessUserProvider($sdk));
        }

        if (config('slashid.api_register_guard')) {
            config([
                'auth.guards.api' => [
                    'driver' => 'slashid_stateless_guard',
                    'provider' => 'slashid_stateless_user',
                ],
            ]);

            $auth->extend('slashid_stateless_guard', function ($app, $name, array $config) use ($auth, $request): StatelessGuard {
                /** @var \SlashId\Laravel\Providers\StatelessUserProvider */
                $userProvider = $auth->createUserProvider($config['provider']);
                return new StatelessGuard($request, $userProvider);
            });
        }

        if (config('slashid.group_register_middleware')) {
            $router->aliasMiddleware('slashid_group', GroupMiddleware::class);
        }

        if (config('slashid.web_register_routes')) {
            $this->loadViewsFrom(__DIR__.'/../../resources/views', 'slashid');
            $router->get($this->getRoutePathFromConfig('web_route_path_login'), [LoginController::class, 'login'])
                ->name('login')
                ->middleware('web');

            $router->post($this->getRoutePathFromConfig('web_route_path_login_callback'), [LoginController::class, 'loginCallback'])
                ->name('login.callback')
                ->middleware('web');

            $router->get($this->getRoutePathFromConfig('web_route_path_logout'), [LoginController::class, 'logout'])
                ->name('logout')
                ->middleware('web');
        }

        if (config('slashid.webhook_enable')) {
            $router->post($this->getRoutePathFromConfig('webhook_route_path'), [WebhookController::class, 'listen'])
                ->name('slashid.webhook');
        }
    }

    public function register()
    {
        $this->app->singleton(SlashIdSdk::class, fn(): SlashIdSdk => new SlashIdSdk(
            $this->getStringEnvironmentVariable('SLASHID_ENVIRONMENT'),
            $this->getStringEnvironmentVariable('SLASHID_ORGANIZATION_ID'),
            $this->getStringEnvironmentVariable('SLASHID_API_KEY'),
        ));
    }

    /**
     * Loads path-related configuration and ensures they're strings.
     */
    protected function getRoutePathFromConfig(string $configName): string
    {
        $fullConfigName = 'slashid.'.$configName;
        $path = config($fullConfigName);
        if (! is_string($path)) {
            throw new InvalidConfigurationException("The configuration $fullConfigName should be a string, please check the file \"config/slashid.php\".");
        }
        return $path;
    }

    /**
     * Loads string environment configuration.
     */
    protected function getStringEnvironmentVariable(string $key): string
    {
        $value = env($key);
        if (! is_string($value)) {
            throw new InvalidConfigurationException("The environment variable $key should be a string.");
        }
        return $value;
    }
}

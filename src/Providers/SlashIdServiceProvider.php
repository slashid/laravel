<?php

namespace SlashId\Laravel\Providers;

use Firebase\JWT\CachedKeySet;
use Firebase\JWT\JWT;
use GuzzleHttp\Client;
use GuzzleHttp\Psr7\HttpFactory;
use Illuminate\Auth\AuthManager;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Router;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use SlashId\Laravel\Auth\SessionGuard;
use SlashId\Laravel\Auth\StatelessGuard;
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
        $this->loadViewsFrom(__DIR__ . '/../../resources/views', 'slashid');

        $auth->provider('slashid_session_user', function (Application $app) {
            return new SessionUserProvider(app(SlashIdSdk::class));
        });

        $auth->provider('slashid_stateless_user', function (Application $app) {
            return new StatelessUserProvider(app(SlashIdSdk::class));
        });

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

        $auth->extend('slashid_stateless_guard', fn($app, $name, array $config) => new StatelessGuard($auth->createUserProvider($config['provider'])));

        $router->aliasMiddleware('slashid_group', GroupMiddleware::class);

        // @todo Move routes to a controller
        // @todo Make it configurable whether to add Routes or not
        // @todo Make route paths configurable
        Route::get('/login', function () {
            if (Auth::check()) {
                // @todo Make redirect page a configurable route
                return redirect('/');
            }

            return view('slashid::login');
        })->middleware('web')->name('login');

        Route::post('/login/callback', function (Request $request) {
            // @todo Fix session regeneration
            #$request->session()->regenerate();
            $success = Auth::attempt(['token' => $request->request->get('token')]);

            return new JsonResponse([
                'success' => $success,
                // @todo Make redirect page a configurable route
                'redirect' => '/'
            ]);
        })->middleware('web')->name('login.callback');

        Route::get('/logout', function () {
            Auth::logout();

            // @todo Make redirect page a configurable route
            return redirect('/');
        })->middleware('web')->name('logout');


        Route::post('/slashid/webhook', function (Request $request) {
            $jwt = $request->getContent();

            // Create an HTTP client (can be any PSR-7 compatible HTTP client)
            $httpClient = new Client([
                'headers' => [
                    'SlashID-OrgID' => $GLOBALS['slashid_oid'],
                ],
            ]);

            // Create an HTTP request factory (can be any PSR-17 compatible HTTP request factory)
            $httpFactory = new HttpFactory();

            $keySet = new CachedKeySet(
                'https://api.sandbox.slashid.com/organizations/webhooks/verification-jwks',
                $httpClient,
                $httpFactory,
                app('cache.psr6'),
                null, // $expiresAfter int seconds to set the JWKS to expire
                true  // $rateLimit    true to enable rate limit of 10 RPS on lookup of invalid keys
            );

            $decoded = JWT::decode($jwt, $keySet);
            print_r($decoded);
        })->name('slashid_webhook');
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

<?php

namespace SlashId\Laravel\Providers;

use Illuminate\Auth\AuthManager;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Router;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use SlashId\Laravel\Auth\StatelessGuard;
use SlashId\Laravel\Middleware\GroupMiddleware;

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
            return new SessionUserProvider();
        });

        $auth->provider('slashid_stateless_user', function (Application $app) {
            return new StatelessUserProvider();
        });

        $auth->extend('slashid_stateless_guard', fn($app, $name, array $config) => new StatelessGuard($auth->createUserProvider($config['provider'])));

        $router->aliasMiddleware('slashid_group', GroupMiddleware::class);

        // @todo Move routes to a controller
        // @todo Make it configurable whether to add Routes or not
        // @todo Make routes configurable
        Route::get('/login', function () {
            if (Auth::check()) {
                // @todo Make redirect page a configurable route
                return redirect('/');
            }

            return view('slashid::login');
        })->name('login');

        Route::post('/login/callback', function (Request $request) {
            // @todo Fix session regeneration
            #$request->session()->regenerate();
            $success = Auth::attempt(['token' => $request->request->get('token')]);
            return new JsonResponse([
                'success' => $success,
                // @todo Make redirect page a configurable route
                'redirect' => '/'
            ]);
        });
    }

}

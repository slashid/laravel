<?php

namespace SlashId\Laravel\Controllers;

use Illuminate\Contracts\View\View;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use SlashId\Php\SlashIdSdk;

class LoginController
{
    public function login(SlashIdSdk $sdk): View|RedirectResponse
    {
        if (Auth::check()) {
            /** @var \Illuminate\Http\RedirectResponse */
            return redirect($this->getRedirectionPath('login'));
        }

        $configuration = config('slashid.login_form_configuration') + [
            'factors' => json_encode(config('slashid.login_form_factors')),
            'oid' => $sdk->getOrganizationId(),
            'base-api-url' => $sdk->getApiUrl(),
            'token-storage' => 'memory',
            'on-success' => 'slashIdLoginSuccessCallback',
            'analytics-enabled'
        ];

        /** @var \Illuminate\Contracts\View\View */
        return view('slashid::login', [
            'configuration' => $configuration,
            'csrfToken' => csrf_token(),
            'loginCallbackUrl' => route('login.callback', [], false),
            'useBundled' => !config('slashid.login_override_bundled_javascript'),
            'useGlue' => !config('slashid.login_override_javascript_glue'),
        ]);
    }

    public function loginCallback(Request $request): JsonResponse
    {
        // @todo Fix session regeneration
        //$request->session()->regenerate();
        $success = Auth::attempt(['token' => $request->request->get('token')]);

        return new JsonResponse([
            'success' => $success,
            'redirect' => url($this->getRedirectionPath('login')),
        ]);
    }

    public function logout(): RedirectResponse
    {
        Auth::logout();

        /** @var \Illuminate\Http\RedirectResponse */
        return redirect($this->getRedirectionPath('logout'));
    }

    protected function getRedirectionPath(string $redirectAfter): string
    {
        $redirectionPath = config('slashid.web_redirect_after_'.$redirectAfter);

        return is_string($redirectionPath) ? $redirectionPath : '/';
    }
}

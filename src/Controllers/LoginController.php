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

        /** @var \Illuminate\Contracts\View\View */
        return view('slashid::login', [
            'apiUrl' => $sdk->getApiUrl(),
            'csrfToken' => csrf_token(),
            'factors' => config('slashid.login_factors'),
            'loginCallbackUrl' => route('login.callback', [], false),
            'organizationId' => $sdk->getOrganizationId(),
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

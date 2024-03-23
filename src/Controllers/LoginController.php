<?php

namespace SlashId\Laravel\Controllers;

use Illuminate\Contracts\View\View;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController
{
    public function login(): View|RedirectResponse
    {
        if (Auth::check()) {
            /** @var \Illuminate\Http\RedirectResponse */
            return redirect($this->getRedirectionPath('login'));
        }

        /** @var \Illuminate\Contracts\View\View */
        return view('slashid::login', [
            'organizationId' => env('SLASHID_ORGANIZATION_ID'),
            'loginCallbackUrl' => route('login.callback', [], false),
            'csrfToken' => csrf_token(),
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

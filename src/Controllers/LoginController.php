<?php

namespace SlashId\Laravel\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;

class LoginController {

    public function login(): View|RedirectResponse {
        if (Auth::check()) {
            return redirect($this->getRedirectionPath('login'));
        }

        return view('slashid::login');
    }

    public function loginCallback(Request $request): JsonResponse {
        // @todo Fix session regeneration
        #$request->session()->regenerate();
        $success = Auth::attempt(['token' => $request->request->get('token')]);

        return new JsonResponse([
            'success' => $success,
            'redirect' => url($this->getRedirectionPath('login')),
        ]);
    }

    public function logout(): RedirectResponse {
        Auth::logout();

        return redirect($this->getRedirectionPath('logout'));
    }

    protected function getRedirectionPath(string $redirectAfter): string {
        return config('slashid.web_redirect_after_' . $redirectAfter);
    }

}

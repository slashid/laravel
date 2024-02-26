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
            // @todo Make redirect page a configurable route
            return redirect('/');
        }

        return view('slashid::login');
    }

    function loginCallback(Request $request): JsonResponse {
        // @todo Fix session regeneration
        #$request->session()->regenerate();
        $success = Auth::attempt(['token' => $request->request->get('token')]);

        return new JsonResponse([
            'success' => $success,
            // @todo Make redirect page a configurable route
            'redirect' => '/'
        ]);
    }

}

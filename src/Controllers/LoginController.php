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

        /** @var string[] */
        $strings = config('slashid-internal.login_form_strings');
        $strings = array_map(fn ($string) => __($string), $strings);

        $configuration = array_merge([
            'oid' => $sdk->getOrganizationId(),
            'base-api-url' => $sdk->getApiUrl(),
            'text' => $strings,
            'token-storage' => 'memory',
            'on-success' => 'slashIdLoginSuccessCallback',
        ], config('slashid.login_form_configuration'));

        $configuration = array_map(fn ($option) => is_array($option) ? json_encode($option) : $option, $configuration);

        /** @var \Illuminate\Contracts\View\View */
        return view('slashid::login', [
            'configuration' => $configuration,
            'csrfToken' => csrf_token(),
            'loginCallbackUrl' => route('login.callback', [], false),
            'cssOverride' => config('slashid.login_form_css_override'),
            'useBundled' => ! config('slashid.login_override_bundled_javascript'),
            'useGlue' => ! config('slashid.login_override_javascript_glue'),
        ]);
    }

    public function loginCallback(Request $request): JsonResponse
    {
        $success = Auth::attempt(['token' => $request->request->get('token')]);

        $request->session()->regenerate();

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

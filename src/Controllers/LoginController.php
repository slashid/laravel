<?php

namespace SlashId\Laravel\Controllers;

use Illuminate\Contracts\View\View;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\Compilers\ComponentTagCompiler;
use SlashId\Laravel\Exception\InvalidConfigurationException;
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
        return view($this->resolveLoginView(), [
            'organizationId' => $sdk->getOrganizationId(),
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

    protected function resolveLoginView(): string
    {
        $config = config('slashid.login_screen_template_wrapper');
        switch ($config) {
            case 'x-app-layout':
                return 'slashid::slashid-login-with-x-app-layout';

            case 'html-tag':
                return 'slashid::slashid-login-with-html-tag';

            case 'auto':
                try {
                    // When the configuration is set on "auto", we will check if component "x-app-layout" exists. If it
                    // exists, use a view wrapped in x-app-layout, otherwise use a view wrapped in <html>.
                    app(ComponentTagCompiler::class)->componentClass('x-app-layout');
                    return 'slashid::login-with-x-app-layout';
                }
                catch (\InvalidArgumentException $exception) {
                    // If the component does not exist, an exception will be thrown.
                    return 'slashid::slashid-login-with-html-tag';
                }

            default:
                throw new InvalidConfigurationException("Invalid value \"$config\" for configuration \"slashid.login_screen_use_x_app_layout\". Valid options are: \"auto\", \"x-app-layout\" or \"html-tag\".");
        }
    }
}

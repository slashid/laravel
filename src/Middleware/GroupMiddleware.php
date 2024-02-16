<?php

namespace SlashId\Laravel\Middleware;

use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;

class GroupMiddleware {

    public function handle(Request $request, \Closure $next, string $group): Response
    {
        if (!Auth::check()) {
            throw new AuthenticationException('Unauthenticated.', [Auth::guard()], $this->redirectTo($request));
        }

        $checkMode = 'AND';
        if (str_contains($group, '&') && str_contains($group, '|')) {
            // @todo Implement exception for Middleware definition.
            throw new \Exception('You can either define an AND list of roles with comma (,) or an OR list of roles with pipe (|), but not both.');
        }

        /** @var \App\SlashId\SlashIdUser */
        $user = Auth::user();

        if (str_contains($group, '|')) {
            $groups = explode('|', $group);
            if (!$user->hasAnyGroup($groups)) {
                throw new AccessDeniedHttpException('User is required to be in any of the following groups: "' . implode('", "', $groups) . '"');
            }
        }
        elseif (str_contains($group, '&')) {
            $groups = explode('&', $group);
            if (!$user->hasAllGroups($groups)) {
                throw new AccessDeniedHttpException('User is required to be in all of the following groups: "' . implode('", "', $groups) . '"');
            }
        }
        elseif (!$user->hasGroup($group)) {
            throw new AccessDeniedHttpException('User is required to be in the group: "' . $group . '"');
        }


        return $next($request);
    }

    /**
     * Get the path the user should be redirected to when they are not authenticated.
     */
    protected function redirectTo(Request $request): ?string
    {
        return $request->expectsJson() ? null : route('login');
    }

}

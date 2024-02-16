<?php

namespace SlashId\Laravel\Auth;

use Illuminate\Auth\SessionGuard as LaravelSessionGuard;
use Illuminate\Contracts\Auth\Authenticatable;

class SessionGuard extends LaravelSessionGuard {

    public function login(Authenticatable $user, $remember = false)
    {
        // We ignore the $remember parameters, as we will NOT be using remember
        // cookies with SlashID.
        parent::login($user);

        // Set the user to the session, to avoid connecting to SlashID servers
        // on every request.
        $this->session->put('slashid_user_' . $user->getAuthIdentifier(), $user);
    }

}

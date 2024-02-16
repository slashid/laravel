<?php

namespace SlashId\Laravel\Providers;

use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Support\Facades\Request;
use SlashId\Laravel\SlashIdUser;

class SessionUserProvider extends StatelessUserProvider
{

    public function retrieveById($identifier)
    {
        if (!array_key_exists($identifier, $this->localCacheUsers)) {
            $sessionUser = $this->retrieveSessionUser();
            if ($sessionUser && $sessionUser->getAuthIdentifier() === $identifier) {
                $this->localCacheUsers[$identifier] = $sessionUser;
            }
            else {
                $this->localCacheUsers[$identifier] = $this->retrieveByIdFromApi($identifier);
            }
        }

        return $this->localCacheUsers[$identifier];
    }

    public function validateCredentials(Authenticatable $user, array $credentials)
    {
        if (parent::validateCredentials($user, $credentials)) {
            // When the user is authenticated, save it to the session.
            Request::session()->put('slashid_user', $user);
            return TRUE;
        }

        return FALSE;
    }

    protected function retrieveSessionUser(): ?SlashIdUser {
        $session = Request::session();
        if ($session->has('slashid_user')) {
            return $session->get('slashid_user');
        }
        return NULL;
    }

}

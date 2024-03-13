<?php

namespace SlashId\Laravel\Providers;

use Illuminate\Support\Facades\Request;
use SlashId\Laravel\SlashIdUser;

class SessionUserProvider extends StatelessUserProvider
{
    public function retrieveById($identifier): ?SlashIdUser
    {
        if (! array_key_exists($identifier, $this->localCacheUsers)) {
            $sessionUser = $this->retrieveSessionUser($identifier);
            if ($sessionUser && $sessionUser->getAuthIdentifier() === $identifier) {
                $this->localCacheUsers[$identifier] = $sessionUser;
            } else {
                $this->localCacheUsers[$identifier] = $this->retrieveByIdFromApi($identifier);
            }
        }

        return $this->localCacheUsers[$identifier];
    }

    protected function retrieveSessionUser(string $identifier): ?SlashIdUser
    {
        $session = Request::session();
        if ($session->has('slashid_user_'.$identifier)) {
            return $session->get('slashid_user_'.$identifier);
        }

        return null;
    }
}

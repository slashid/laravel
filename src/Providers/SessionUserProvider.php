<?php

namespace SlashId\Laravel\Providers;

use Illuminate\Support\Facades\Request;
use SlashId\Laravel\SlashIdUser;

class SessionUserProvider extends StatelessUserProvider
{
    /**
     * Gets a SlashID person by its ID.
     *
     * The currently logged in user will usually be provided by the (validated) token provided by the user, either via
     * Authorization header (in StatelessUserProvider) or via /login/callback route and subsequently save in session (in
     * SessionUserProvider). However if not found, an API call will be made to GET /persons/9999-9999-9999.
     *
     * @param string $identifier
     *
     * return \SlashId\Laravel\SlashIdUser|null
     */
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

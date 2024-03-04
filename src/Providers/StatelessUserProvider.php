<?php

namespace SlashId\Laravel\Providers;

use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Contracts\Auth\UserProvider;
use SlashId\Laravel\SlashIdUser;
use SlashId\Php\SlashIdSdk;

class StatelessUserProvider implements UserProvider
{
    protected array $localCacheUsers = [];

    public function __construct(
        protected SlashIdSdk $sdk,
    ) {
    }

    public function retrieveById($identifier)
    {
        if (! array_key_exists($identifier, $this->localCacheUsers)) {
            $this->localCacheUsers[$identifier] = $this->retrieveByIdFromApi($identifier);
        }

        return $this->localCacheUsers[$identifier];
    }

    public function retrieveByToken($identifier, $token)
    {
        return null;
    }

    public function updateRememberToken(Authenticatable $user, $token)
    {
    }

    public function retrieveByCredentials(array $credentials)
    {
        // @todo Add exceptions for malformed tokens
        if (empty($credentials['token']) || ! str_contains($credentials['token'], '.')) {
            return null;
        }

        [, $userDataTokenPart] = explode('.', $credentials['token']);
        $userData = json_decode(base64_decode($userDataTokenPart), true);

        return new SlashIdUser($userData['person_id'], $userData);
    }

    public function validateCredentials(Authenticatable $user, array $credentials)
    {
        $userFromToken = $this->retrieveByCredentials($credentials);
        if ($user->getAuthIdentifier() !== $userFromToken->getAuthIdentifier()) {
            return false;
        }

        return $this->validateSlashIdToken($credentials['token']);
    }

    protected function validateSlashIdToken(string $token)
    {
        return $this->sdk
            ->post('/token/validate', ['token' => $token])['valid'];
    }

    protected function retrieveByIdFromApi(string $identifier): ?SlashIdUser
    {
        return new SlashIdUser(
            $identifier,
            $this->sdk
                ->get('/persons/'.$identifier, [
                    'fields' => ['handles', 'groups', 'attributes'],
                ])
        );
    }
}

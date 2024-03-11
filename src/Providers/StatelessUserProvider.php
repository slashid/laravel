<?php

namespace SlashId\Laravel\Providers;

use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Contracts\Auth\UserProvider;
use SlashId\Laravel\SlashIdUser;
use SlashId\Php\Exception\IdNotFoundException;
use SlashId\Php\SlashIdSdk;

class StatelessUserProvider implements UserProvider
{
    protected array $localCacheUsers = [];

    public function __construct(
        protected SlashIdSdk $sdk,
    ) {
    }

    public function retrieveById($identifier): ?SlashIdUser
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

    public function updateRememberToken(Authenticatable $user, $token): void
    {
    }

    public function retrieveByCredentials(array $credentials): ?SlashIdUser
    {
        if (empty($credentials['token']) || ! str_contains($credentials['token'], '.')) {
            return null;
        }

        $tokenParts = explode('.', $credentials['token']);

        if (count($tokenParts) !== 3) {
            return null;
        }

        [, $userDataTokenPart] = $tokenParts;
        $userData = json_decode(base64_decode($userDataTokenPart), true);

        if (!$userData || empty($userData['person_id'])) {
            return null;
        }

        return new SlashIdUser($userData['person_id'], $userData);
    }

    public function validateCredentials(Authenticatable $user, array $credentials): bool
    {
        $userFromToken = $this->retrieveByCredentials($credentials);
        if ($user->getAuthIdentifier() !== $userFromToken->getAuthIdentifier()) {
            return false;
        }

        return $this->validateSlashIdToken($credentials['token']);
    }

    protected function validateSlashIdToken(string $token): bool
    {
        return $this->sdk
            ->post('/token/validate', ['token' => $token])['valid'] ?? FALSE;
    }

    protected function retrieveByIdFromApi(string $identifier): ?SlashIdUser
    {
        try {
            return new SlashIdUser(
                $identifier,
                $this->sdk
                    ->get('/persons/'.$identifier, [
                        'fields' => ['handles', 'groups', 'attributes'],
                    ])
            );
        } catch (IdNotFoundException $exception) {
            return NULL;
        }
    }
}

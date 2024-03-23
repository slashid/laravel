<?php

namespace SlashId\Laravel\Providers;

use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Contracts\Auth\UserProvider;
use SlashId\Laravel\SlashIdUser;
use SlashId\Php\Exception\IdNotFoundException;
use SlashId\Php\SlashIdSdk;

class StatelessUserProvider implements UserProvider
{
    /**
     * @var array<string, \SlashId\Laravel\SlashIdUser|null>
     */
    protected array $localCacheUsers = [];

    public function __construct(
        protected SlashIdSdk $sdk,
    ) {
    }

    /**
     * Gets a SlashID person by its ID.
     *
     * The currently logged in user will usually be provided by the (validated) token provided by the user, either via
     * Authorization header (in StatelessUserProvider) or via /login/callback route and subsequently save in session (in
     * SessionUserProvider). However if not found, an API call will be made to GET /persons/9999-9999-9999.
     *
     * @param  string  $identifier
     *
     * return \SlashId\Laravel\SlashIdUser|null
     */
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

    /**
     * @param  string[]  $credentials  An array in the format ['token' => 'SOME.TOKEN'].
     * @return \SlashId\Laravel\SlashIdUser|null The user, if the token exists. Please note that the token is NOT
     *                                           validated, so do not trust the return without calling
     *                                           validateCredentials().
     */
    public function retrieveByCredentials(array $credentials): ?SlashIdUser
    {
        if ($personId = $this->parsePersonIdFromCredentials($credentials)) {
            return $this->retrieveByIdFromApi($personId);
        }

        return null;
    }

    /**
     * Validates the token informed by the user, by testing it against the token validation endpoint in SlashID API.
     *
     * @param  \Illuminate\Contracts\Auth\Authenticatable  $user  The user from the token.
     * @param  string[]  $credentials  An array in the format ['token' => 'SOME.TOKEN'].
     *
     * @see https://developer.slashid.dev/docs/api/post-token-validate
     */
    public function validateCredentials(Authenticatable $user, array $credentials): bool
    {
        $personId = $this->parsePersonIdFromCredentials($credentials);
        if ($user->getAuthIdentifier() !== $personId) {
            return false;
        }

        return $this->validateSlashIdToken($credentials['token']);
    }

    /**
     * @param  string[]  $credentials  An array in the format ['token' => 'SOME.TOKEN'].
     */
    protected function parsePersonIdFromCredentials(array $credentials): ?string
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

        if (! $userData || ! is_array($userData) || empty($userData['person_id']) || ! is_string($userData['person_id'])) {
            return null;
        }

        return $userData['person_id'];
    }

    protected function validateSlashIdToken(string $token): bool
    {
        $response = $this->sdk->post('/token/validate', ['token' => $token]);

        return is_array($response) ? (bool) ($response['valid'] ?? false) : false;
    }

    protected function retrieveByIdFromApi(string $identifier): ?SlashIdUser
    {
        try {
            $response = $this->sdk->get('/persons/'.$identifier, [
                'fields' => ['handles', 'groups', 'attributes'],
            ]);

            return is_array($response) ?
                // @phpstan-ignore-next-line
                SlashIdUser::fromValues($response) :
                null;
        } catch (IdNotFoundException $exception) {
            return null;
        }
    }
}

<?php

namespace SlashId\Laravel\Providers;

use GuzzleHttp\Client;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Contracts\Auth\UserProvider;
use SlashId\Laravel\SlashIdUser;

class SessionUserProvider implements UserProvider
{
    protected array $localCacheUsers = [];

    public function retrieveById($identifier)
    {
        if (!array_key_exists($identifier, $this->localCacheUsers)) {
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
        if (empty($credentials['token']) || !str_contains($credentials['token'], '.')) {
            return NULL;
        }

        [, $userDataTokenPart] = explode('.', $credentials['token']);
        $userData = json_decode(base64_decode($userDataTokenPart), TRUE);
        return new SlashIdUser($userData['person_id'], $userData);
    }

    public function validateCredentials(Authenticatable $user, array $credentials)
    {
        $userFromToken = $this->retrieveByCredentials($credentials);
        if ($user->getAuthIdentifier() !== $userFromToken->getAuthIdentifier()) {
            return FALSE;
        }

        return $this->validateSlashIdToken($credentials['token']);
    }

    protected function validateSlashIdToken(string $token) {
        $response = (new Client())
            ->request('POST', 'https://api.sandbox.slashid.com/token/validate', [
                'headers' => [
                    'Content-Type' => 'application/json',
                    'Accept' => 'application/json',
                    'SlashID-API-Key' => $GLOBALS['slashid_api_key'],
                ],
                'body' => json_encode(['token' => $token]),
            ]);
        $parsedResponse = \json_decode(((string) $response->getBody()));
        return !empty($parsedResponse->result->valid);
    }

    protected function retrieveByIdFromApi(string $identifier): ?SlashIdUser {
        // @todo Move request to SDK
        $response = (new Client())
            ->request('GET', 'https://api.sandbox.slashid.com/persons/' . $identifier . '/?fields=handles,groups,attributes', [
                'headers' => [
                    'Accept' => 'application/json',
                    'SlashID-API-Key' => $GLOBALS['slashid_api_key'],
                    'SlashID-OrgID' => $GLOBALS['slashid_oid'],
                ],
            ]);


        return new SlashIdUser($identifier, \json_decode($response->getBody(), TRUE)['result']);
    }

}

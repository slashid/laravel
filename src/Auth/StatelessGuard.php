<?php

namespace SlashId\Laravel\Auth;

use Illuminate\Auth\CreatesUserProviders;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Contracts\Auth\UserProvider;
use Illuminate\Http\Request;
use SlashId\Laravel\Providers\StatelessUserProvider;
use SlashId\Laravel\SlashIdUser;

class StatelessGuard implements Guard
{
    use CreatesUserProviders;

    protected ?SlashIdUser $user = null;

    protected StatelessUserProvider $userProvider;

    protected ?bool $authenticated;

    public function __construct(
        protected Request $request,
        UserProvider $userProvider,
    ) {
        if (! ($userProvider instanceof StatelessUserProvider)) {
            throw new \InvalidArgumentException('\SlashId\Laravel\Auth\StatelessGuard requires a \SlashId\Laravel\Providers\StatelessUserProvider.');
        }

        $this->userProvider = $userProvider;
    }

    /**
     * Determine if the current user is authenticated.
     *
     * @return bool
     */
    public function check()
    {
        $user = $this->user();

        return ! empty($user);
    }

    /**
     * Determine if the current user is a guest.
     *
     * @return bool
     */
    public function guest()
    {
        $user = $this->user();

        return empty($user);
    }

    /**
     * Get the currently authenticated user.
     *
     * @return \Illuminate\Contracts\Auth\Authenticatable|null
     */
    public function user()
    {
        if (! isset($this->authenticated)) {
            $this->authenticated = false;

            $credentials = ['token' => $this->request->bearerToken()];
            $user = $this->userProvider->retrieveByCredentials($credentials);

            if ($user && $this->userProvider->validateCredentials($user, $credentials)) {
                $this->authenticated = true;
                $this->user = $user;
            }

        }

        return $this->user;
    }

    /**
     * Get the ID for the currently authenticated user.
     *
     * @return int|string|null
     */
    public function id()
    {
        return $this->user ? $this->user->getAuthIdentifier() : null;
    }

    /**
     * Validate a user's credentials.
     *
     * @param  string[]  $credentials  An array in the format ['token' => 'SOME.TOKEN']
     * @return bool
     */
    public function validate(array $credentials = [])
    {
        $user = $this->userProvider->retrieveByCredentials($credentials);

        return $user && $this->userProvider->validateCredentials($user, $credentials);
    }

    /**
     * Determine if the guard has a user instance.
     *
     * @return bool
     */
    public function hasUser()
    {
        return $this->authenticated;
    }

    /**
     * Set the current user.
     *
     * @return void
     */
    public function setUser(Authenticatable $user)
    {
        if (! ($user instanceof SlashIdUser)) {
            throw new \InvalidArgumentException('$user must be of type \SlashId\Laravel\SlashIdUser');
        }

        $this->user = $user;
        $this->authenticated = true;
    }
}

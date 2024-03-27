<?php

namespace SlashId\Laravel\Auth;

use Illuminate\Auth\CreatesUserProviders;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Contracts\Auth\UserProvider;
use Illuminate\Http\Request;
use SlashId\Laravel\SlashIdUser;

class StatelessGuard implements Guard
{
    use CreatesUserProviders;

    protected ?SlashIdUser $user = null;

    protected ?bool $authenticated;

    public function __construct(
        protected Request $request,
        protected UserProvider $userProvider,
    ) {
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

            if ($token = $this->request->bearerToken()) {
                $credentials = ['token' => $token];
                $user = $this->userProvider->retrieveByCredentials($credentials);

                if ($user && $this->userProvider->validateCredentials($user, $credentials)) {
                    $this->authenticated = true;
                    $this->user = $user;
                }
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
        return $this->user()?->getAuthIdentifier();
    }

    /**
     * Validate a user's credentials.
     *
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
        return $this->check();
    }

    /**
     * Set the current user.
     *
     * @return void
     */
    public function setUser(Authenticatable $user)
    {
        $this->user = $user;
        $this->authenticated = true;
    }
}

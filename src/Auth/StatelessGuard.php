<?php

namespace SlashId\Laravel\Auth;

use Illuminate\Auth\CreatesUserProviders;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Contracts\Auth\UserProvider;
use Illuminate\Support\Facades\Request;
use SlashId\Laravel\SlashIdUser;

class StatelessGuard implements Guard
{

    use CreatesUserProviders;

    protected UserProvider $userProvider;
    protected ?SlashIdUser $user = NULL;
    protected bool $authenticated;

    public function __construct()
    {
        $this->userProvider = $this->createUserProvider('slashid_stateless_user');
    }

    /**
     * Determine if the current user is authenticated.
     *
     * @return bool
     */
    public function check() {
      $user = $this->user();
      return !empty($user);
    }

    /**
     * Determine if the current user is a guest.
     *
     * @return bool
     */
    public function guest() {
        $user = $this->user();
        return empty($user);
    }

    /**
     * Get the currently authenticated user.
     *
     * @return \Illuminate\Contracts\Auth\Authenticatable|null
     */
    public function user() {
        if (!isset($this->authenticated)) {
            $this->authenticated = FALSE;

            $credentials = ['token' => $this->getToken()];
            $user = $this->userProvider->retrieveByCredentials($credentials);

            if ($user && $this->userProvider->validateCredentials($user, $credentials)) {
                $this->authenticated = TRUE;
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
    public function id() {
      return $this->user ? $this->user->getAuthIdentifier() : NULL;
    }

    /**
     * Validate a user's credentials.
     *
     * @param  array  $credentials
     * @return bool
     */
    public function validate(array $credentials = []) {
        $user = $this->userProvider->retrieveByCredentials($credentials);
        return $user && $this->userProvider->validateCredentials($user, $credentials);
    }

    /**
     * Determine if the guard has a user instance.
     *
     * @return bool
     */
    public function hasUser() {
      return $this->authenticated;
    }

    /**
     * Set the current user.
     *
     * @param  \Illuminate\Contracts\Auth\Authenticatable  $user
     * @return void
     */
    public function setUser(Authenticatable $user) {
      $this->user = $user;
    }

    /**
     * Gets the token.
     */
    protected function getToken(): ?string {
        $header = Request::header('Authorization');
        if ($header && strpos($header, 'Bearer ') === 0) {
            return substr($header, strlen('Bearer '));
        }

        return NULL;
    }

}

<?php

namespace SlashId\Laravel;

use Illuminate\Contracts\Auth\Authenticatable;
use SlashId\Php\Person;

final class SlashIdUser extends Person implements Authenticatable
{
    /**
     * A copy of Person::$personId, because Laravel expects a public $id property.
     */
    public ?string $id;

    public function __construct(
        ?string $personId = null,
        bool $isActive = true,
        ?string $region = null,
    ) {
        parent::__construct($personId, $isActive, $region);
        $this->id = $personId;
    }

    // ******************************************************************
    // ** Implementations of methods of the Authenticatable interface. **
    // ******************************************************************

    public function getAuthIdentifierName(): string
    {
        return 'id';
    }

    public function getAuthIdentifier(): ?string
    {
        return $this->id;
    }

    public function getAuthPasswordName(): string
    {
        throw new \LogicException('getAuthPasswordName() should not be called on SlashIdUser, as SlashID does not expose passwords.');
    }

    public function getAuthPassword()
    {
        throw new \LogicException('getAuthPassword() should not be called on SlashIdUser, as SlashID does not expose passwords.');
    }

    /**
     * @return string|null
     */
    public function getRememberToken()
    {
        return null;
    }

    public function setRememberToken($value)
    {
        throw new \LogicException('Laravel SlashID integration does not support remember tokens.');
    }

    public function getRememberTokenName()
    {
        throw new \LogicException('Laravel SlashID integration does not support remember tokens.');
    }
}

<?php

namespace SlashId\Laravel;

use Illuminate\Contracts\Auth\Authenticatable;

final class SlashIdUser implements Authenticatable
{
    public function __construct(
        public string $id,
        protected array $values,
    ) {
    }

    public function getAuthIdentifierName()
    {
        return 'id';
    }

    public function getAuthIdentifier()
    {
        return $this->id;
    }

    public function getAuthPassword()
    {
        return null;
    }

    public function getRememberToken()
    {
        return null;
    }

    public function setRememberToken($value)
    {
        // Nothing.
    }

    public function getRememberTokenName()
    {
        return null;
    }

    public function getValues(): array
    {
        return $this->values;
    }

    public function hasGroup(string $group): bool
    {
        return in_array($group, $this->getGroups());
    }

    public function hasAnyGroup(array $groups): bool
    {
        return (bool) count(array_intersect($groups, $this->getGroups()));
    }

    public function hasAllGroups(array $groups): bool
    {
        return ! count(array_diff($groups, $this->getGroups()));
    }

    public function getGroups(): array
    {
        return $this->values['groups'] ?? [];
    }
}

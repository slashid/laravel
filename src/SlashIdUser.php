<?php

namespace SlashId\Laravel;

use Illuminate\Contracts\Auth\Authenticatable;

final class SlashIdUser implements Authenticatable
{
    /**
     * The email address, if it exists.
     *
     * In an API response or a token, the phone number will look something like this:
     * {"handles":[{"type":"email_address","value":"user@example.com"}]}
     */
    protected ?string $emailAddress = null;

    /**
     * The phone number, if it exists.
     *
     * In an API response or a token, the phone number will look something like this:
     * {"handles":[{"type":"phone_number","value":"+5519999999999"}]}
     */
    protected ?string $phoneNumber = null;

    /**
     * The attributes of a user.
     *
     * @var mixed[]
     */
    protected array $attributes = [];

    /**
     * The groups of the user.
     *
     * @var string[]
     */
    protected array $groups = [];

    /**
     * @param  string|null  $id  The Person ID. In an API response or a token it will look like: {"person_id": "af5fbd30-7ce7-4548-8b30-4cd59cb2aba1"}.
     * @param  bool  $isActive  Whether the user is active. In an API response or a token it will look like: {"active": true}.
     * @param  string|null  $region  The Region. In an API response or a token it will look like: {"region": "us-iowa"}.
     */
    public function __construct(
        public ?string $id = null,
        protected bool $isActive = true,
        protected ?string $region = null,
    ) {
    }

    /**
     * @param  array{active: bool, person_id: string, roles: string[], attributes: mixed[], region: string, handles: array{type: string, value: string}[], groups: string[]}  $values
     */
    public static function fromValues(array $values): static
    {
        $user = new self($values['person_id'], $values['active'], $values['region']);

        $user
            ->setGroups($values['groups'])
            ->setAttributes($values['attributes']);

        foreach ($values['handles'] as $handle) {
            if (($handle['type'] === 'email_address')) {
                $user->setEmailAddress($handle['value']);
            }
            if (($handle['type'] === 'phone_number')) {
                $user->setPhoneNumber($handle['value']);
            }
        }

        return $user;
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

    public function getAuthPassword()
    {
        throw new \LogicException('getAuthPassword() should not be called on SlashIdUser, as SlashID does not expose passwords.');
    }

    public function getRememberToken()
    {
        throw new \LogicException('Laravel SlashID integration does not support remember tokens.');
    }

    public function setRememberToken($value)
    {
        throw new \LogicException('Laravel SlashID integration does not support remember tokens.');
    }

    public function getRememberTokenName()
    {
        throw new \LogicException('Laravel SlashID integration does not support remember tokens.');
    }

    // **********************
    // ** Get/Set methods. **
    // **********************

    public function isActive(): bool
    {
        return $this->isActive;
    }

    public function setActive(bool $isActive): static
    {
        $this->isActive = $isActive;

        return $this;
    }

    public function getEmailAddress(): ?string
    {
        return $this->emailAddress;
    }

    public function setEmailAddress(string $emailAddress): static
    {
        $this->emailAddress = $emailAddress;

        return $this;
    }

    public function getPhoneNumber(): ?string
    {
        return $this->phoneNumber;
    }

    public function setPhoneNumber(string $phoneNumber): static
    {
        $this->phoneNumber = $phoneNumber;

        return $this;
    }

    /**
     * @return mixed[] $attributes The user attributes.
     */
    public function getAttributes(): array
    {
        return $this->attributes;
    }

    /**
     * @param  mixed[]  $attributes  The user attributes.
     */
    public function setAttributes(array $attributes): static
    {
        $this->attributes = $attributes;

        return $this;
    }

    public function getRegion(): ?string
    {
        return $this->region;
    }

    public function setRegion(string $region): static
    {
        $this->region = $region;

        return $this;
    }

    /**
     * @return string[] A list of groups, e.g. ['Editor', 'Admin'].
     */
    public function getGroups(): array
    {
        return $this->groups;
    }

    /**
     * @param  string[]  $groups  A list of groups, e.g. ['Editor', 'Admin'].
     */
    public function setGroups(array $groups): static
    {
        foreach ($groups as $group) {
            if (! is_string($group)) {
                throw new \InvalidArgumentException('The $groups parameter must be a list of strings.');
            }
        }

        $this->groups = $groups;

        return $this;
    }

    // *****************************
    // ** Group-checking methods. **
    // *****************************

    /**
     * Checks if the user is in a group.
     *
     * @return bool Whether the user is in a group or not.
     */
    public function hasGroup(string $group): bool
    {
        return in_array($group, $this->getGroups());
    }

    /**
     * Checks if the user is in ANY of the groups listed.
     *
     * @param  string[]  $groups  The list of groups to check, e.g. ['Editor', 'Admin'].
     * @return bool Whether the user is in ANY of the groups.
     */
    public function hasAnyGroup(array $groups): bool
    {
        return (bool) count(array_intersect($groups, $this->getGroups()));
    }

    /**
     * Checks if the user is in ALL of the groups listed.
     *
     * @param  string[]  $groups  The list of groups to check, e.g. ['Editor', 'Admin'].
     * @return bool Whether the user is in ALL of the groups.
     */
    public function hasAllGroups(array $groups): bool
    {
        return ! count(array_diff($groups, $this->getGroups()));
    }
}

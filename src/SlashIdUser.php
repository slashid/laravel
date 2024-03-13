<?php

namespace SlashId\Laravel;

use Illuminate\Contracts\Auth\Authenticatable;

final class SlashIdUser implements Authenticatable
{
    /**
     * @param  string  $id  The SlashID person ID in the format 0659dd31-7e38-7d1e-8704-e3b8b6966176
     * @param  mixed[]  $values  The values returned by an API request such as:
     *                           https://api.slashid.com/persons/0659dd31-7e38-7d1e-8704-e3b8b6966176?fields=handles,groups,attributes
     *                           or encoded in the JWT. Example:
     *
     *                        @code
     *                        [
     *                            'active' => true,
     *                            'attributes' => [],
     *                            'groups' => ['Admin', 'Editor'],
     *                            'handles' => [
     *                                [
     *                                    'type' => 'email_address',
     *                                    'value' => 'test@example.com',
     *                                ],
     *                            ],
     *                            'person_id' => '0659dd31-7e38-7d1e-8704-e3b8b6966176',
     *                            'region' => 'us-iowa',
     *                            'roles' => [],
     *                        ]
     *
     *                        @endcode
     */
    public function __construct(
        public string $id,
        protected array $values,
    ) {
    }

    public function getAuthIdentifierName(): string
    {
        return 'id';
    }

    public function getAuthIdentifier(): string
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

    /**
     * Gets the values of the person.
     *
     * @return mixed[] The values of the person from the webservice.
     */
    public function getValues(): array
    {
        return $this->values;
    }

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

    /**
     * Gets the list of groups the user has.
     *
     * @return string[] The list of groups to check, e.g. ['Editor', 'Admin'].
     */
    public function getGroups(): array
    {
        /** @var string[] */
        return $this->values['groups'] ?? [];
    }
}

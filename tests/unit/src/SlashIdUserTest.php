<?php

namespace SlashId\Test\Laravel;

use PHPUnit\Framework\TestCase;
use SlashId\Laravel\SlashIdUser;

/**
 * @covers \SlashId\Laravel\SlashIdUser
 */
class SlashIdUserTest extends TestCase
{
    /**
     * Test values to run the SlashID user.
     */
    private const TEST_VALUES = [
        'active' => true,
        'attributes' => [],
        'groups' => ['Admin', 'Editor'],
        'handles' => [
            [
                'type' => 'email_address',
                'value' => 'test@example.com',
            ],
        ],
        'person_id' => '0659dd31-7e38-7d1e-8704-e3b8b6966176',
        'region' => 'us-iowa',
        'roles' => [],
    ];

    /**
     * Tests getAuthIdentifierName().
     */
    public function testGetAuthIdentifierName(): void
    {
        $this->assertEquals('id', $this->slashIdUser()->getAuthIdentifierName());
    }

    /**
     * Tests getAuthIdentifier().
     */
    public function testGetAuthIdentifier(): void
    {
        $this->assertEquals('0659dd31-7e38-7d1e-8704-e3b8b6966176', $this->slashIdUser()->getAuthIdentifier());
    }

    /**
     * Covers methods that don't do anything.
     */
    public function testNullMethods(): void
    {
        $user = $this->slashIdUser();
        $this->assertNull($user->getAuthPassword());
        $this->assertNull($user->getRememberToken());
        $this->assertNull($user->setRememberToken('value'));
        $this->assertNull($user->getRememberTokenName());
    }

    /**
     * Tests getValues().
     */
    public function testGetValues(): void
    {
        $this->assertEquals(self::TEST_VALUES, $this->slashIdUser()->getValues());
    }

    /**
     * Tests group-related methods.
     */
    public function testGroups(): void
    {
        $user = $this->slashIdUser();
        $this->assertEquals(['Admin', 'Editor'], $user->getGroups());
        $this->assertTrue($user->hasGroup('Editor'));
        $this->assertFalse($user->hasGroup('Manager'));
        $this->assertTrue($user->hasAnyGroup(['Editor', 'Manager']));
        $this->assertTrue($user->hasAnyGroup(['Editor', 'Admin']));
        $this->assertTrue($user->hasAnyGroup(['Editor']));
        $this->assertFalse($user->hasAnyGroup(['Manager', 'Reviewer']));
        $this->assertFalse($user->hasAnyGroup(['Manager']));
        $this->assertTrue($user->hasAllGroups(['Admin']));
        $this->assertTrue($user->hasAllGroups(['Admin', 'Editor']));
        $this->assertTrue($user->hasAllGroups(['Editor', 'Admin']));
        $this->assertTrue($user->hasAllGroups(['Admin']));
        $this->assertFalse($user->hasAllGroups(['Editor', 'Manager']));
        $this->assertFalse($user->hasAllGroups(['Admin', 'Manager']));
        $this->assertFalse($user->hasAllGroups(['Manager']));
    }

    /**
     * Instantiates a class to do the testing.
     */
    protected function slashIdUser(): SlashIdUser
    {
        return new SlashIdUser('0659dd31-7e38-7d1e-8704-e3b8b6966176', self::TEST_VALUES);
    }
}

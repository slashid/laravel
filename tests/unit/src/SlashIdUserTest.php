<?php

namespace SlashId\Test\Laravel;

use PHPUnit\Framework\TestCase;
use SlashId\Laravel\SlashIdUser;

/**
 * @covers \SlashId\Laravel\SlashIdUser
 */
class SlashIdUserTest extends TestCase
{
    public static function dataProviderTestFromValues(): array
    {
        $emailHandle = [
            'type' => 'email_address',
            'value' => 'test@example.com',
        ];
        $phoneHandle = [
            'type' => 'phone_number',
            'value' => '+5511999999999',
        ];
        return [
            [[], false, false],
            [[$emailHandle], true, false],
            [[$phoneHandle], false, true],
            [[$emailHandle, $phoneHandle], true, true],
        ];
    }

    /**
     * Tests fromValues().
     *
     * @dataProvider dataProviderTestFromValues
     */
    public function testFromValues(array $handles, bool $hasEmail, bool $hasPhone): void
    {
        $values = [
            'active' => true,
            'attributes' => ['name' => 'John'],
            'groups' => ['Admin', 'Editor'],
            'handles' => $handles,
            'person_id' => '0659dd31-7e38-7d1e-8704-e3b8b6966176',
            'region' => 'us-iowa',
            'roles' => [],
        ];

        $user = SlashIdUser::fromValues($values);
        $this->assertEquals('0659dd31-7e38-7d1e-8704-e3b8b6966176', $user->getAuthIdentifier());
        $this->assertTrue($user->isActive());
        $this->assertEquals('us-iowa', $user->getRegion());
        $this->assertEquals(['name' => 'John'], $user->getAttributes());
        $this->assertEquals(['Admin', 'Editor'], $user->getGroups());
        if ($hasEmail) {
            $this->assertEquals('test@example.com', $user->getEmailAddress());
        } else {
            $this->assertNull($user->getEmailAddress());
        }
        if ($hasPhone) {
            $this->assertEquals('+5511999999999', $user->getPhoneNumber());
        } else {
            $this->assertNull($user->getPhoneNumber());
        }
    }

    /**
     * Tests getAuthIdentifierName().
     */
    public function testGetAuthIdentifierName(): void
    {
        $user = new SlashIdUser();
        $this->assertEquals('id', $user->getAuthIdentifierName());
    }

    /**
     * Tests getAuthIdentifier().
     */
    public function testGetAuthIdentifier(): void
    {
        $user = new SlashIdUser('0659dd31-7e38-7d1e-8704-e3b8b6966176');
        $this->assertEquals('0659dd31-7e38-7d1e-8704-e3b8b6966176', $user->getAuthIdentifier());
    }

    /**
     * Tests getAuthPassword().
     */
    public function testGetAuthPassword(): void
    {
        $user = new SlashIdUser();
        $this->expectException(\LogicException::class);
        $this->assertNull($user->getAuthPassword());
    }

    /**
     * Tests getRememberToken().
     */
    public function testGetRememberToken(): void
    {
        $user = new SlashIdUser();
        $this->expectException(\LogicException::class);
        $this->assertNull($user->getRememberToken());
    }

    /**
     * Tests setRememberToken().
     */
    public function testSetRememberToken(): void
    {
        $user = new SlashIdUser();
        $this->expectException(\LogicException::class);
        $this->assertNull($user->setRememberToken('value'));
    }

    /**
     * Tests getRememberTokenName().
     */
    public function testGetRememberTokenName(): void
    {
        $user = new SlashIdUser();
        $this->expectException(\LogicException::class);
        $this->assertNull($user->getRememberTokenName());
    }

    /**
     * Tests isActive()/setActive().
     */
    public function testActive(): void
    {
        $firstUser = new SlashIdUser();
        $this->assertTrue($firstUser->isActive());

        $secondUser = new SlashIdUser(NULL, false);
        $this->assertFalse($secondUser->isActive());


        $firstUser->setActive(false);
        $this->assertFalse($firstUser->isActive());

        $secondUser->setActive(true);
        $this->assertTrue($secondUser->isActive());
    }

    /**
     * Tests getEmailAddress()/setEmailAddress().
     */
    public function testEmailAddress(): void
    {
        $user = new SlashIdUser();
        $this->assertNull($user->getEmailAddress());
        $user->setPhoneNumber('+5511999999999');
        $this->assertEquals('+5511999999999', $user->getPhoneNumber());
    }

    /**
     * Tests getRegion()/setRegion().
     */
    public function testRegion(): void
    {
        $user = new SlashIdUser();
        $this->assertNull($user->getRegion());

        $user = new SlashIdUser(region: 'us-iowa');
        $this->assertEquals('us-iowa', $user->getRegion());
        $user->setRegion('europe-belgium');
        $this->assertEquals('europe-belgium', $user->getRegion());
    }

    /**
     * Tests getAttributes()/setAttributes().
     */
    public function testAttributes(): void
    {
        $user = new SlashIdUser();
        $this->assertEmpty($user->getAttributes());
        $user->setAttributes(['name' => 'John']);
        $this->assertEquals(['name' => 'John'], $user->getAttributes());
    }

    /**
     * Tests getPhoneNumber()/setPhoneNumber().
     */
    public function testPhoneNumber(): void
    {
        $user = new SlashIdUser();
        $this->assertNull($user->getPhoneNumber());
        $user->setEmailAddress('test@example.com');
        $this->assertEquals('test@example.com', $user->getEmailAddress());
    }

    /**
     * Tests getGroups()/setGroups().
     */
    public function testGroups(): void
    {
        $user = new SlashIdUser();
        $this->assertEmpty($user->getGroups());
        $user->setGroups(['Admin', 'Editor']);
        $this->assertEquals(['Admin', 'Editor'], $user->getGroups());

        $user->setGroups(['indexes_will_be_ignored' => 'Admin']);
        $this->assertEquals(['Admin'], $user->getGroups());

        $this->expectException(\InvalidArgumentException::class);
        $this->expectExceptionMessage('The $groups parameter must be a list of strings.');
        $user->setGroups([123]);
    }
    /**
     * Tests group-checking methods.
     */
    public function testGroupChecking(): void
    {
        $user = new SlashIdUser();
        $user->setGroups(['Admin', 'Editor']);
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
}

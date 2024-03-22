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
        $this->assertEquals('0659dd31-7e38-7d1e-8704-e3b8b6966176', $user->id);
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
}

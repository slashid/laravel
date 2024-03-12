<?php

namespace SlashId\Test\Laravel\Auth;

use Illuminate\Contracts\Auth\UserProvider;
use Illuminate\Http\Request;
use PHPUnit\Framework\MockObject\MockObject;
use SlashId\Laravel\Auth\StatelessGuard;
use SlashId\Laravel\SlashIdUser;
use SlashId\Php\SlashIdSdk;
use SlashId\Test\Laravel\SlashIdTestCaseBase;

class StatelessGuardTest extends SlashIdTestCaseBase
{
    protected Request&MockObject $request;
    protected UserProvider&MockObject $userProvider;

    /**
     * Tests check(), hasUser(), guest(), id(), when there is not a user.
     */
    public function testAnonymous(): void
    {
        $guard = $this->getStatelessGuard();
        $guard->setAuthenticated(FALSE);
        $this->assertFalse($guard->check());
        $this->assertFalse($guard->hasUser());
        $this->assertTrue($guard->guest());
        $this->assertNull($guard->id());
    }

    /**
     * Tests check(), hasUser(), guest(), id(), setUser(), when there is a user.
     */
    public function testCheckTrue(): void
    {
        $guard = $this->getStatelessGuard();
        $guard->setUser(new SlashIdUser('9999-9999-9999', []));
        $this->assertTrue($guard->check());
        $this->assertTrue($guard->hasUser());
        $this->assertFalse($guard->guest());
        $this->assertEquals('9999-9999-9999', $guard->id());
    }

    /**
     * Data provider for testUser().
     */
    public static function dataProviderTestUser(): array
    {
        return [
            [FALSE],
            [TRUE],
        ];
    }

    /**
     * Tests user().
     *
     * @dataProvider dataProviderTestUser
     */
    public function testUser(bool $validToken): void
    {
        $guard = $this->getStatelessGuard();
        $this->request
            ->expects($this->once())
            ->method('bearerToken')
            ->willReturn('TOKEN');

        $this->userProvider
            ->expects($this->once())
            ->method('retrieveByCredentials')
            ->with($this->identicalTo(['token' => 'TOKEN']))
            ->willReturn(new SlashIdUser('9999-9999-9999', []));

        $this->userProvider
            ->expects($this->once())
            ->method('validateCredentials')
            ->withAnyParameters()
            ->willReturn($validToken);

        $user = $guard->user();

        if ($validToken) {
            $this->assertInstanceOf(SlashIdUser::class, $user);
            $this->assertTrue($guard->check());
        } else {
            $this->assertNull($user);
            $this->assertFalse($guard->check());
        }
    }

    /**
     * Tests validate().
     *
     * @dataProvider dataProviderTestUser
     */
    public function testValidate(bool $validToken): void
    {
        $guard = $this->getStatelessGuard();

        $this->userProvider
            ->expects($this->once())
            ->method('retrieveByCredentials')
            ->with($this->identicalTo(['token' => 'TOKEN']))
            ->willReturn(new SlashIdUser('9999-9999-9999', []));

        $this->userProvider
            ->expects($this->once())
            ->method('validateCredentials')
            ->withAnyParameters()
            ->willReturn($validToken);

        $output = $guard->validate(['token' => 'TOKEN']);

        if ($validToken) {
            $this->assertTrue($output);
        } else {
            $this->assertFalse($output);
        }
    }

    protected function getStatelessGuard(): TestableStatelessGuard
    {
        $this->request = $this->createMock(Request::class);
        $this->userProvider = $this->createMock(UserProvider::class);
        return new TestableStatelessGuard($this->request, $this->userProvider);
    }
}

class TestableStatelessGuard extends StatelessGuard {
    public function setAuthenticated(bool $authenticated): void {
        $this->authenticated = $authenticated;
    }
}

<?php

namespace SlashId\Test\Laravel\Auth;

use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Contracts\Auth\UserProvider;
use Illuminate\Http\Request;
use PHPUnit\Framework\MockObject\MockObject;
use SlashId\Laravel\Auth\StatelessGuard;
use SlashId\Laravel\Providers\StatelessUserProvider;
use SlashId\Laravel\SlashIdUser;
use SlashId\Test\Laravel\SlashIdTestCaseBase;

/**
 * @covers \SlashId\Laravel\Auth\StatelessGuard
 */
class StatelessGuardTest extends SlashIdTestCaseBase
{
    protected Request&MockObject $request;

    protected UserProvider&MockObject $userProvider;

    /**
     * Tests __construct() with invalid user provider.
     */
    public function testConstructException(): void
    {
        $this->expectException(\InvalidArgumentException::class);
        $request = $this->createMock(Request::class);
        $userProvider = $this->createMock(UserProvider::class);
        new StatelessGuard($request, $userProvider);
    }

    /**
     * Data provider for testAnonymous().
     */
    public static function dataProviderTestCheckAnonymous(): array
    {
        return [
            ['check', 'assertFalse'],
            ['hasUser', 'assertFalse'],
            ['guest', 'assertTrue'],
            ['id', 'assertNull'],
        ];
    }

    /**
     * Tests check(), hasUser(), guest(), id(), when there is not a user.
     *
     * @dataProvider dataProviderTestCheckAnonymous
     */
    public function testAnonymous(string $testedFunction, string $assertFunction): void
    {
        $guard = $this->getStatelessGuard();
        $this->request
            ->expects($this->once())
            ->method('bearerToken')
            ->willReturn(null);

        $this->{$assertFunction}($guard->{$testedFunction}());
    }

    /**
     * Data provider for testCheckAuthenticated().
     */
    public static function dataProviderTestCheckAuthenticated(): array
    {
        return [
            ['check', 'assertTrue', []],
            ['hasUser', 'assertTrue', []],
            ['guest', 'assertFalse', []],
            ['id', 'assertEquals', ['9999-9999-9999']],
        ];
    }

    /**
     * Tests check(), hasUser(), guest(), id(), setUser(), when there is a user.
     *
     * @dataProvider dataProviderTestCheckAuthenticated
     */
    public function testCheckAuthenticated(string $testedFunction, string $assertFunction, array $parameters): void
    {
        $guard = $this->getStatelessGuard();
        $guard->setUser(new SlashIdUser('9999-9999-9999', []));
        $parameters[] = $guard->{$testedFunction}();
        $this->{$assertFunction}(...$parameters);
    }

    /**
     * Tests setUser() when the user is not a SlashIdUser.
     */
    public function testSetUserWithInvalidUser(): void
    {
        $this->expectException(\LogicException::class);

        $guard = $this->getStatelessGuard();
        $guard->setUser($this->createMock(Authenticatable::class));
    }

    /**
     * Data provider for testUser().
     */
    public static function dataProviderTestUser(): array
    {
        return [
            [false],
            [true],
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

    protected function getStatelessGuard(): StatelessGuard
    {
        $this->request = $this->createMock(Request::class);
        $this->userProvider = $this->createMock(StatelessUserProvider::class);

        return new StatelessGuard($this->request, $this->userProvider);
    }
}

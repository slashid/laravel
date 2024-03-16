<?php

namespace SlashId\Test\Laravel\Middleware;

use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\Request;
use SlashId\Laravel\Exception\InvalidGroupMiddlewareDefinitionException;
use SlashId\Laravel\Middleware\GroupMiddleware;
use SlashId\Laravel\SlashIdUser;
use SlashId\Test\Laravel\SlashIdTestCaseBase;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;

class GroupMiddlewareTest extends SlashIdTestCaseBase
{
    /**
     * Data provider for testHandle().
     */
    public static function dataProviderTestHandle(): array
    {
        $groups = ['Editor', 'Admin'];

        return [
            [false, 'Editor', [], AuthenticationException::class],
            [true, 'Editor|Admin&Manager', [], InvalidGroupMiddlewareDefinitionException::class],
            [true, 'Editor', [], AccessDeniedHttpException::class],
            [true, 'Editor|Admin', [], AccessDeniedHttpException::class],
            [true, 'Editor&Admin', [], AccessDeniedHttpException::class],
            [true, 'Editor', $groups, null],
            [true, 'Editor|Admin', $groups, null],
            [true, 'Editor&Admin', $groups, null],
        ];
    }

    /**
     * Tests handle().
     *
     * @dataProvider dataProviderTestHandle
     */
    public function testHandle(bool $check, string $group, array $userGroups, ?string $expectedException): void
    {
        $guard = $this->mockGuard();
        $guard
            ->expects($this->once())
            ->method('check')
            ->willReturn($check);
        $guard
            ->expects($this->any())
            ->method('user')
            ->willReturn((new SlashIdUser('99999-99999-9999'))->setGroups($userGroups));

        $request = $this->createMock(Request::class);
        $request
            ->expects($this->any())
            ->method('expectsJson')
            ->willReturn(true);

        if ($expectedException) {
            $this->expectException($expectedException);
        }

        $expectedResponse = new Response();
        $actualResponse = (new GroupMiddleware)->handle($request, fn () => $expectedResponse, $group);

        $this->assertEquals($expectedResponse, $actualResponse);
    }
}

<?php

namespace SlashId\Test\Laravel\Middleware;

use Illuminate\Auth\AuthenticationException;
use Illuminate\Auth\AuthManager;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use PHPUnit\Framework\TestCase;
use SlashId\Laravel\Exception\InvalidGroupMiddlewareDefinitionException;
use SlashId\Laravel\Middleware\GroupMiddleware;
use SlashId\Laravel\SlashIdUser;
use SlashId\Test\Laravel\LaravelMockTestTrait;
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
            [FALSE, 'Editor', [], AuthenticationException::class],
            [TRUE, 'Editor|Admin&Manager', [], InvalidGroupMiddlewareDefinitionException::class],
            [TRUE, 'Editor', [], AccessDeniedHttpException::class],
            [TRUE, 'Editor|Admin', [], AccessDeniedHttpException::class],
            [TRUE, 'Editor&Admin', [], AccessDeniedHttpException::class],
            [TRUE, 'Editor', $groups, NULL],
            [TRUE, 'Editor|Admin', $groups, NULL],
            [TRUE, 'Editor&Admin', $groups, NULL],
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
            ->willReturn(new SlashIdUser('99999-99999-9999', [
                'groups' => $userGroups,
            ]));

        $request = $this->createMock(Request::class);
        $request
            ->expects($this->any())
            ->method('expectsJson')
            ->willReturn(TRUE);

        if ($expectedException) {
            $this->expectException($expectedException);
        }

        $expectedResponse = new Response();
        $actualResponse = (new GroupMiddleware)->handle($request, fn() => $expectedResponse, $group);

        $this->assertEquals($expectedResponse, $actualResponse);
    }


}

<?php

namespace SlashId\Test\Laravel\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;
use SlashId\Laravel\Controllers\LoginController;
use SlashId\Test\Laravel\SlashIdTestCaseBase;
use Symfony\Component\HttpFoundation\InputBag;

/**
 * @covers \SlashId\Laravel\Controllers\LoginController
 */
class LoginControllerTest extends SlashIdTestCaseBase
{
    /**
     * Data provider for testLogin().
     */
    public static function dataProviderTestLogin(): array
    {
        return [
            [false, View::class],
            [true, RedirectResponse::class],
        ];
    }

    /**
     * Tests login().
     *
     * @dataProvider dataProviderTestLogin
     */
    public function testLogin(bool $check, string $expectedResponseType): void
    {
        $this->mockContainer();

        $guard = $this->mockGuard();
        $guard
            ->expects($this->once())
            ->method('check')
            ->willReturn($check);

        $config = $this->mockConfig();
        $config
            ->expects($check ? $this->once() : $this->never())
            ->method('get')
            ->with($this->identicalTo('slashid.web_redirect_after_login'))
            ->willReturn('/');

        $redirect = $this->mockRedirect();
        $redirect
            ->expects($check ? $this->once() : $this->never())
            ->method('to')
            ->with($this->identicalTo('/'))
            ->willReturn(new RedirectResponse('/'));

        $viewFactory = $this->mockViewFactory();
        $viewFactory
            ->expects($check ? $this->never() : $this->once())
            ->method('make')
            ->with($this->identicalTo('slashid::login'))
            ->willReturn($this->createMock(View::class));

        $response = (new LoginController())->login();
        $this->assertInstanceOf($expectedResponseType, $response);
    }

    /**
     * Data provider for testLoginCallback().
     */
    public static function dataProviderTestLoginCallback(): array
    {
        return [
            [false, '{"success":false,"redirect":"\/"}'],
            [true, '{"success":true,"redirect":"\/"}'],
        ];
    }

    /**
     * Tests login().
     *
     * @dataProvider dataProviderTestLoginCallback
     */
    public function testLoginCallback(bool $success, string $expectedResponse): void
    {
        $guard = $this->mockGuard();
        $guard
            ->expects($this->once())
            ->method('attempt')
            ->with($this->identicalTo(['token' => 'TOKEN']))
            ->willReturn($success);

        $config = $this->mockConfig();
        $config
            ->expects($this->once())
            ->method('get')
            ->with($this->identicalTo('slashid.web_redirect_after_login'))
            ->willReturn('/');

        $urlGenerator = $this->mockUrlGenerator();
        $urlGenerator
            ->expects($this->once())
            ->method('to')
            ->with($this->identicalTo('/'))
            ->willReturn('/');

        $this->mockContainer();

        $request = new Request();
        $request->request = new InputBag(['token' => 'TOKEN']);
        $response = (new LoginController())->loginCallback($request);
        $this->assertEquals($expectedResponse, $response->getContent());
    }

    /**
     * Tests logout().
     */
    public function testLogout(): void
    {
        $config = $this->mockConfig();
        $config
            ->expects($this->once())
            ->method('get')
            ->with($this->identicalTo('slashid.web_redirect_after_logout'))
            ->willReturn('/');
        $this->mockContainer();

        $redirect = $this->mockRedirect();
        $redirect
            ->expects($this->once())
            ->method('to')
            ->with($this->identicalTo('/'))
            ->willReturn(new RedirectResponse('/'));

        $response = (new LoginController())->logout();
        $this->assertInstanceOf(RedirectResponse::class, $response);
    }
}

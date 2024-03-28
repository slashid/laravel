<?php

namespace SlashId\Test\Laravel\Controllers;

use Illuminate\Contracts\Translation\Translator;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Session\Store;
use Illuminate\View\View;
use SlashId\Laravel\Controllers\LoginController;
use SlashId\Php\SlashIdSdk;
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
            ->expects($check ? $this->once() : $this->exactly(5))
            ->method('get')
            ->withAnyParameters()
            ->willReturnCallback(fn ($configName) => match ($configName) {
                'slashid.web_redirect_after_login' => '/',
                'slashid-internal.login_form_strings' => [
                    'SlashID::initial.title' => 'initial.title',
                ],
                'slashid.login_form_configuration' => [
                    'factors' => [
                        ['method' => 'webauthn'],
                        ['method' => 'email_link'],
                    ],
                    'analytics-enabled',
                ],
                'slashid.login_form_css_override' => [
                    '--sid-color-foreground' => '#00c',
                ],
                'slashid.login_override_bundled_javascript' => false,
                'slashid.login_override_javascript_glue' => false,
                default => throw new \LogicException("Unexpected config called: $configName.")
            });

        $translator = $this->createMock(Translator::class);
        $translator
            ->expects($check ? $this->never() : $this->once())
            ->method('get')
            ->willReturn('Welcome');
        $this->instances['translator'] = $translator;

        $session = $this->createMock(Store::class);
        $session
            ->expects($check ? $this->never() : $this->once())
            ->method('token')
            ->willReturn('000-111-222');
        $this->instances['session'] = $session;

        $router = $this->mockUrlGenerator();
        $router
            ->expects($check ? $this->never() : $this->once())
            ->method('route')
            ->with($this->identicalTo('login.callback'), $this->identicalTo([]), $this->identicalTo(false))
            ->willReturn('/login/callback');

        $redirect = $this->mockRedirect();
        $redirect
            ->expects($check ? $this->once() : $this->never())
            ->method('to')
            ->with($this->identicalTo('/'))
            ->willReturn(new RedirectResponse('/'));

        $sdk = $this->createMock(SlashIdSdk::class);
        $sdk
            ->expects($check ? $this->never() : $this->once())
            ->method('getOrganizationId')
            ->willReturn('9999-9999-9999');
        $sdk
            ->expects($check ? $this->never() : $this->once())
            ->method('getApiUrl')
            ->willReturn('https://api.slashid.com');

        $viewFactory = $this->mockViewFactory();
        $viewFactory
            ->expects($check ? $this->never() : $this->once())
            ->method('make')
            ->with($this->identicalTo('slashid::login'), $this->identicalTo([
                'configuration' => [
                    'oid' => '9999-9999-9999',
                    'base-api-url' => 'https://api.slashid.com',
                    'text' => '{"SlashID::initial.title":"Welcome"}',
                    'token-storage' => 'memory',
                    'on-success' => 'slashIdLoginSuccessCallback',
                    'factors' => '[{"method":"webauthn"},{"method":"email_link"}]',
                    'analytics-enabled',
                ],
                'csrfToken' => '000-111-222',
                'loginCallbackUrl' => '/login/callback',
                'cssOverride' => [
                    '--sid-color-foreground' => '#00c',
                ],
                'useBundled' => true,
                'useGlue' => true,
            ]))
            ->willReturn($this->createMock(View::class));

        $response = (new LoginController())->login($sdk);
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

        $session = $this->createMock(Store::class);
        $session
            ->expects($success ? $this->once() : $this->never())
            ->method('regenerate');

        $this->mockContainer();

        $request = new Request();
        $request->request = new InputBag(['token' => 'TOKEN']);
        $request->setLaravelSession($session);
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

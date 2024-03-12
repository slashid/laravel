<?php

namespace SlashId\Test\Laravel;

use Illuminate\Auth\AuthManager;
use Illuminate\Config\Repository as ConfigRepository;
use Illuminate\Container\Container;
use Illuminate\Contracts\Routing\UrlGenerator;
use Illuminate\Contracts\View\Factory as ViewFactory;
use Illuminate\Routing\Redirector;
use Illuminate\Support\Facades\Auth;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;
use SlashId\Laravel\Auth\SessionGuard;

class SlashIdTestCaseBase extends TestCase
{
    protected ?Container $container;

    protected array $instances;

    protected function tearDown(): void
    {
        $this->container = null;
        $this->instances = [];
        Container::setInstance(null);
    }

    protected function mockContainer(): Container&MockObject
    {
        if (! isset($this->container)) {
            $this->container = $this->createMock(Container::class);
            Container::setInstance($this->container);
        }
        /** @var \Illuminate\Container\Container&\PHPUnit\Framework\MockObject\MockObject */
        $container = $this->container;

        $container
            ->expects($this->any())
            ->method('make')
            ->withAnyParameters()
            ->willReturnCallback(fn ($abstract) => $this->instances[$abstract]);

        return $container;
    }

    protected function mockConfig(): ConfigRepository&MockObject
    {
        $this->instances['config'] = $this->createMock(ConfigRepository::class);

        return $this->instances['config'];
    }

    protected function mockGuard(): SessionGuard&MockObject
    {
        $statelessGuard = $this->createMock(SessionGuard::class);

        $auth = new AuthManager([
            'config' => [
                'auth.defaults.guard' => 'web',
                'auth.guards.web' => [
                    'driver' => 'slashid_session_guard',
                    'provider' => 'slashid_session_user',
                ],
            ],
        ]);
        $auth->extend('slashid_session_guard', fn ($app, $name, array $config) => $statelessGuard);
        Auth::swap($auth);

        return $statelessGuard;
    }

    protected function mockRedirect(): Redirector&MockObject
    {
        $this->instances['redirect'] = $this->createMock(Redirector::class);

        return $this->instances['redirect'];
    }

    protected function mockUrlGenerator(): UrlGenerator&MockObject
    {
        $this->instances[UrlGenerator::class] = $this->createMock(UrlGenerator::class);

        return $this->instances[UrlGenerator::class];
    }

    protected function mockViewFactory(): ViewFactory&MockObject
    {
        $this->instances[ViewFactory::class] = $this->createMock(ViewFactory::class);

        return $this->instances[ViewFactory::class];
    }
}

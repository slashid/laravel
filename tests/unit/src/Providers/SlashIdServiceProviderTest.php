<?php

namespace SlashId\Test\Laravel\Providers;

use Dotenv\Repository\RepositoryInterface;
use Illuminate\Auth\AuthManager;
use Illuminate\Contracts\Cookie\QueueingFactory;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Foundation\CachesConfiguration;
use Illuminate\Contracts\Session\Session;
use Illuminate\Http\Request as LaravelRequest;
use Illuminate\Routing\Router;
use Illuminate\Routing\RouteRegistrar;
use Illuminate\Support\Env;
use SlashId\Laravel\Auth\SessionGuard;
use SlashId\Laravel\Auth\StatelessGuard;
use SlashId\Laravel\Providers\SlashIdServiceProvider;
use SlashId\Php\SlashIdSdk;
use SlashId\Test\Laravel\SlashIdTestCaseBase;
use Symfony\Component\HttpFoundation\Request;

/**
 * @covers \SlashId\Laravel\Providers\SlashIdServiceProvider
 */
class SlashIdServiceProviderTest extends SlashIdTestCaseBase
{
    /**
     * Data provider for testBoot().
     */
    public static function dataProviderTestBoot(): array
    {
        return [[false], [true]];
    }

    /**
     * Tests boot().
     *
     * @dataProvider dataProviderTestBoot
     */
    public function testBoot(bool $enableConfig): void
    {
        $config = $this->mockConfig();
        $config
            ->expects($this->any())
            ->method('get')
            ->withAnyParameters()
            ->willReturnCallback(fn ($configName) => str_contains($configName, 'route_path') ? 'path' : $enableConfig);

        $this->mockContainer();

        $app = $this->createMockForIntersectionOfInterfaces([Application::class, CachesConfiguration::class]);
        $app
            ->expects($this->once())
            ->method('configPath')
            ->with($this->identicalTo('slashid.php'))
            ->willReturn('/var/www/html/config/slashid.php');
        $app
            ->expects($this->once())
            ->method('publicPath')
            ->with($this->identicalTo('vendor/slashid'))
            ->willReturn('/var/www/html/public/vendor/slashid');
        $app
            ->expects($this->once())
            ->method('configurationIsCached')
            ->with()
            ->willReturn(true);
        $app
            ->expects($this->once())
            ->method('runningInConsole')
            ->willReturn($enableConfig);

        $auth = new AuthManager(new class($this->createMock(Session::class), $this->createMock(QueueingFactory::class), $this->createMock(Dispatcher::class)) implements \ArrayAccess
        {
            protected array $values;

            public function __construct(
                protected Session $session,
                protected QueueingFactory $cookie,
                protected Dispatcher $dispatcher,
            ) {
                $this->values = [
                    'session.store' => $session,
                    'cookie' => $cookie,
                    'events' => $dispatcher,
                    'config' => [
                        'auth.guards.web' => [
                            'driver' => 'slashid_session_guard',
                            'provider' => 'slashid_session_user',
                        ],
                        'auth.providers.slashid_session_user' => [
                            'driver' => 'slashid_session_user',
                        ],
                        'auth.guards.api' => [
                            'driver' => 'slashid_stateless_guard',
                            'provider' => 'slashid_stateless_user',
                        ],
                        'auth.providers.slashid_stateless_user' => [
                            'driver' => 'slashid_stateless_user',
                        ],
                    ],
                ];
            }

            public function offsetExists(mixed $offset): bool
            {
                return array_key_exists($offset, $this->values);
            }

            public function offsetGet(mixed $offset): mixed
            {
                return $this->values[$offset];
            }

            public function offsetSet(mixed $offset, mixed $value): void
            {
                $this->values[$offset] = $value;
            }

            public function offsetUnset(mixed $offset): void
            {
                unset($this->values[$offset]);
            }

            public function refresh()
            {
                return new Request();
            }
        });
        $router = $this->createMock(Router::class);
        $route = (new RouteRegistrar($router));

        $router
            ->expects($enableConfig ? $this->exactly(2) : $this->never())
            ->method('get')
            ->withAnyParameters()
            ->willReturn($route);

        $router
            ->expects($enableConfig ? $this->exactly(2) : $this->never())
            ->method('post')
            ->withAnyParameters()
            ->willReturn($route);

        $this->instances[SlashIdSdk::class] = $this->createMock(SlashIdSdk::class);
        $this->instances['request'] = new LaravelRequest();

        (new SlashIdServiceProvider($app))->boot($auth, $router);

        if ($enableConfig) {
            // Tests closures.
            $this->assertInstanceOf(SessionGuard::class, $auth->guard('web'));
            $this->assertInstanceOf(StatelessGuard::class, $auth->guard('api'));
        }
    }

    /**
     * Tests register().
     */
    public function testRegister(): void
    {
        $app = $this->createMock(Application::class);
        $app
            ->expects($this->once())
            ->method('singleton')
            ->with($this->identicalTo(SlashIdSdk::class), $this->isInstanceOf(\Closure::class))
            ->willReturnCallback(fn ($name, $closure) => $closure());

        $repository = $this->createMock(RepositoryInterface::class);
        $reflection = new \ReflectionClass(Env::class);
        $reflection->setStaticPropertyValue('repository', $repository);
        $repository
            ->expects($this->exactly(3))
            ->method('get')
            ->willReturn('sandbox');

        (new SlashIdServiceProvider($app))->register();
    }
}

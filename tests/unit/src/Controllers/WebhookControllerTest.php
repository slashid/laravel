<?php

namespace SlashId\Test\Laravel\Controllers;

use Illuminate\Http\Request;
use Psr\Cache\CacheItemPoolInterface;
use SlashId\Laravel\Controllers\WebhookController;
use SlashId\Laravel\Events\WebhookEvent;
use SlashId\Php\Abstraction\WebhookAbstraction;
use SlashId\Php\SlashIdSdk;
use SlashId\Test\Laravel\SlashIdTestCaseBase;
use Symfony\Component\EventDispatcher\EventDispatcher;
use Symfony\Component\HttpFoundation\Exception\BadRequestException;

class WebhookControllerTest extends SlashIdTestCaseBase
{
    /**
     * Data provider for testListen().
     */
    public static function dataProviderTestListen(): array
    {
        return [
            [
                [
                    'trigger_content' => [
                        'event_metadata' => [
                            'event_id' => '9999-9999',
                            'event_name' => 'SlashIDSDKLoaded_v1',
                        ],
                    ],
                ],
                false,
            ],
            [
                [
                    'trigger_content' => [
                        'event_metadata' => [
                            'event_id' => 123,
                            'event_name' => 'SlashIDSDKLoaded_v1',
                        ],
                    ],
                ],
                true,
            ],
            [
                [
                    'trigger_content' => [
                        'event_metadata' => [
                            'event_name' => 'SlashIDSDKLoaded_v1',
                        ],
                    ],
                ],
                true,
            ],
            [
                [
                    'trigger_content' => [
                        'event_metadata' => [
                            'event_id' => '9999-9999',
                            'event_name' => 123,
                        ],
                    ],
                ],
                true,
            ],
            [
                [
                    'trigger_content' => [
                        'event_metadata' => [
                            'event_id' => '9999-9999',
                        ],
                    ],
                ],
                true,
            ],
            [
                [
                    'trigger_content' => [
                        'event_metadata' => 123,
                    ],
                ],
                true,
            ],
            [
                [
                    'trigger_content' => [],
                ],
                true,
            ],
        ];
    }

    /**
     * Tests listen().
     *
     * @dataProvider dataProviderTestListen
     */
    public function testListen(array $decodedCall, bool $expectsException): void
    {
        /** @var \SlashId\Php\SlashIdSdk&\PHPUnit\Framework\MockObject\MockObject */
        $webhook = $this->createConfiguredStub(WebhookAbstraction::class, [
            'decodeWebhookCall' => $decodedCall,
        ]);
        /** @var \SlashId\Php\SlashIdSdk */
        $sdk = $this->createConfiguredStub(SlashIdSdk::class, [
            'webhook' => $webhook,
        ]);

        $request = new Request(content: 'TOKEN');

        $this->instances['cache.psr6'] = $this->createMock(CacheItemPoolInterface::class);
        $this->instances['events'] = $dispatcher = $this->createMock(EventDispatcher::class);

        $this->mockContainer();

        $dispatcher
            ->expects($expectsException ? $this->never() : $this->once())
            ->method('dispatch')
            ->with($this->isInstanceOf(WebhookEvent::class));

        if ($expectsException) {
            $this->expectException(BadRequestException::class);
        }

        (new WebhookController())->listen($request, $sdk);
    }
}

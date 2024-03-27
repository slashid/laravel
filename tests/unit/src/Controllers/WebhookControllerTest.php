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

/**
 * @covers \SlashId\Laravel\Controllers\WebhookController
 */
class WebhookControllerTest extends SlashIdTestCaseBase
{
    /**
     * Tests listen().
     */
    public function testListen(): void
    {
        /** @var \SlashId\Php\SlashIdSdk&\PHPUnit\Framework\MockObject\MockObject */
        $webhook = $this->createConfiguredStub(WebhookAbstraction::class, [
            'decodeWebhookCall' => [
                'trigger_content' => [
                    'event_metadata' => [
                        'event_id' => '9999-9999',
                        'event_name' => 'SlashIDSDKLoaded_v1',
                    ],
                ],
            ],
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
            ->expects($this->once())
            ->method('dispatch')
            ->with($this->isInstanceOf(WebhookEvent::class));

        (new WebhookController())->listen($request, $sdk);
    }
}

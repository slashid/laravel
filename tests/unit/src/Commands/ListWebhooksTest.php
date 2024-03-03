<?php

namespace SlashId\Tests\Laravel\Commands;

use Illuminate\Console\OutputStyle;
use PHPUnit\Framework\TestCase;
use SlashId\Laravel\Commands\ListWebhooks;
use SlashId\Php\Abstraction\WebhookAbstraction;
use SlashId\Php\SlashIdSdk;

class ListWebhooksTest extends TestCase
{
    /**
     * Data provider for testHandle().
     */
    public static function dataProviderTestHandle(): array
    {
        return [
            [[]],
            [
                [
                    [
                        'description' => '',
                        'id' => '065e3c7b-3480-7c16-8700-26b32cf383fe',
                        'name' => 'example',
                        'target_url' => 'https://example.com/slashid/webhook',
                        'timeout' => '0s',
                    ],
                ],
            ],
        ];
    }

    /**
     * Tests handle().
     *
     * @dataProvider dataProviderTestHandle
     */
    public function testHandle(array $webhooks): void
    {
        // Prepare test.
        $webhookStub = $this->createConfiguredStub(WebhookAbstraction::class, [
            'findAll' => $webhooks,
            'getWebhookTriggers' => ['SlashIDSDKLoaded_v1'],
        ]);
        /** @var \SlashId\Php\SlashIdSdk */
        $sdkStub = $this->createConfiguredStub(SlashIdSdk::class, [
            'getOrganizationId' => '999-999-999',
            'webhook' => $webhookStub,
        ]);
        /** @var \Illuminate\Console\OutputStyle&\PHPUnit\Framework\MockObject\MockObject */
        $outputMock = $this->createMock(OutputStyle::class);

        // Sets expectations.
        if (empty($webhooks)) {
            $outputMock->expects($this->once())
                ->method('writeln')
                ->with($this->identicalTo('<info>No webhooks found for organization 999-999-999</info>'), $this->identicalTo(32));
        }
        else {
            $outputMock->expects($this->exactly(6))
                ->method('writeln')
                ->willReturnCallback(function (string|iterable $messages, int $type = self::OUTPUT_NORMAL) {
                    static $callCounter = 0;
                    $lines = [
                        '<info>Webhooks for organization 999-999-999</info>',
                        '+--+--+--+--+',
                        '|<info> ID </info>|<info> Name </info>|<info> URL </info>|<info> Triggers </info>|',
                        '+--+--+--+--+',
                        '| 065e3c7b-3480-7c16-8700-26b32cf383fe | example | https://example.com/slashid/webhook | SlashIDSDKLoaded_v1 |',
                        '+--+--+--+--+',
                    ];
                    if ($messages !== $lines[$callCounter]) {
                        throw new \LogicException();
                    }
                    $callCounter++;
                });
        }

        // Run test.
        $listWebhooks = new ListWebhooks();
        $listWebhooks->setOutput($outputMock);
        $listWebhooks->handle($sdkStub);
    }


}

<?php

namespace SlashId\Test\Laravel\Commands;

use Illuminate\Console\OutputStyle;
use SlashId\Laravel\Commands\RegisterWebhook;
use SlashId\Php\Abstraction\WebhookAbstraction;
use SlashId\Php\SlashIdSdk;
use SlashId\Test\Laravel\SlashIdTestCaseBase;
use Symfony\Component\Console\Input\InputInterface;

/**
 * @covers \SlashId\Laravel\Commands\RegisterWebhook
 */
class RegisterWebhookTest extends SlashIdTestCaseBase
{
    /**
     * Data provider for testHandle().
     */
    public static function dataProviderTestHandle(): array
    {
        $localWebhookUrl = 'https://localhost/webhook';
        $webhookUrl = 'https://example.com/webhook';
        $baseUrl = 'https://example.com';

        return [
            [false, null,        null,     null],
            [false, null,        $baseUrl, null],
            [false, $webhookUrl, null,     $webhookUrl],
            [false, $webhookUrl, $baseUrl, $webhookUrl],
            [true,  null,        null,     $localWebhookUrl],
            [true,  null,        $baseUrl, $webhookUrl],
            [true,  $webhookUrl, null,     $webhookUrl],
            [true,  $webhookUrl, $baseUrl, $webhookUrl],
        ];
    }

    /**
     * Tests handle().
     *
     * @dataProvider dataProviderTestHandle
     */
    public function testHandle(bool $configEnabled, ?string $optionWebhookUrl, ?string $optionBaseUrl, ?string $expectedWebhookUrl): void
    {
        $input = $this->createMock(InputInterface::class);
        $input
            ->expects($this->exactly(2))
            ->method('getArgument')
            ->withAnyParameters()
            ->willReturnCallback(fn ($argument) => $argument === 'name' ? 'webhook_name' : ['PersonDeleted_v1']);

        $input
            ->expects($this->any())
            ->method('getOption')
            ->withAnyParameters()
            ->willReturnCallback(fn ($option) => $option === 'webhook-url' ? $optionWebhookUrl : $optionBaseUrl);

        $config = $this->mockConfig();
        $config
            ->expects($optionWebhookUrl ? $this->never() : $this->once())
            ->method('get')
            ->with($this->identicalTo('slashid.webhook_enable'))
            ->willReturn($configEnabled);

        $urlGenerator = $this->mockUrlGenerator();
        $urlGenerator
            ->expects($configEnabled & ! $optionWebhookUrl ? $this->once() : $this->never())
            ->method('route')
            ->with($this->identicalTo('slashid.webhook'), $this->identicalTo([]), $this->identicalTo(! $optionBaseUrl))
            ->willReturnCallback(fn ($name, $parameters, $absolute) => $absolute ? 'https://localhost/webhook' : '/webhook');

        $this->mockContainer();

        $output = $this->createMock(OutputStyle::class);
        $output
            ->expects($this->once())
            ->method('writeln')
            ->with(
                $this->identicalTo(
                    $expectedWebhookUrl ?
                        '<info>Creating webhook "webhook_name" for URL '.$expectedWebhookUrl.' with triggers PersonDeleted_v1</info>' :
                        '<error>Webhooks are not enable for this installation. Either add "webhook_enable" => true to config/slashid.php or define a full URL with --webhook-url.</error>'
                ),
                $this->identicalTo(32)
            );

        $webhook = $this->createMock(WebhookAbstraction::class);
        $webhook
            ->expects($expectedWebhookUrl ? $this->once() : $this->never())
            ->method('register')
            ->with($this->identicalTo($expectedWebhookUrl), $this->identicalTo('webhook_name'), $this->identicalTo(['PersonDeleted_v1']));

        /** @var \SlashId\Php\SlashIdSdk */
        $sdk = $this->createConfiguredStub(SlashIdSdk::class, [
            'webhook' => $webhook,
        ]);

        // Run test.
        $registerWebhook = new RegisterWebhook();
        $registerWebhook->setInput($input);
        $registerWebhook->setOutput($output);
        $registerWebhook->handle($sdk);
    }
}

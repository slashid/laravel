<?php

namespace SlashId\Tests\Laravel\Commands\Webhook;

use Illuminate\Console\OutputStyle;
use PHPUnit\Framework\TestCase;
use SlashId\Laravel\Commands\Webhook\DeleteWebhook;
use SlashId\Php\Abstraction\WebhookAbstraction;
use SlashId\Php\SlashIdSdk;
use Symfony\Component\Console\Input\InputInterface;

/**
 * @covers \SlashId\Laravel\Commands\Webhook\DeleteWebhook
 */
class DeleteWebhookTest extends TestCase
{
    /**
     * Tests handle().
     */
    public function testHandle(): void
    {
        $webhook = $this->createMock(WebhookAbstraction::class);
        $webhook
            ->expects($this->once())
            ->method('deleteById')
            ->with('9999-9999-9999');

        /** @var \SlashId\Php\SlashIdSdk */
        $sdk = $this->createConfiguredStub(SlashIdSdk::class, [
            'webhook' => $webhook,
        ]);

        $output = $this->createMock(OutputStyle::class);
        $output
            ->expects($this->once())
            ->method('writeln')
            ->with($this->identicalTo('<info>Webhook with ID "9999-9999-9999" has been deleted.</info>'), $this->identicalTo(32));

        $input = $this->createMock(InputInterface::class);
        $input
            ->expects($this->once())
            ->method('getArgument')
            ->with($this->identicalTo('id'))
            ->willReturn('9999-9999-9999');

        // Run test.
        $deleteWebhook = new DeleteWebhook();
        $deleteWebhook->setInput($input);
        $deleteWebhook->setOutput($output);
        $deleteWebhook->handle($sdk);
    }
}

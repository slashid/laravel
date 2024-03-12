<?php

namespace SlashId\Test\Laravel\Events;

use PHPUnit\Framework\TestCase;
use SlashId\Laravel\Events\WebhookEvent;

class WebhookEventTest extends TestCase
{
    /**
     * Tests getEventName(), getEventId() and getTriggerContent(),
     */
    public function testWebhookEvent(): void
    {
        $triggerContent = [
            'event_metadata' => [
                'event_id' => '9999-9999',
                'event_name' => 'SlashIDSDKLoaded_v1',
            ],
        ];
        $event = new WebhookEvent(
            'SlashIDSDKLoaded_v1',
            '9999-9999',
            $triggerContent,
        );

        $this->assertEquals('SlashIDSDKLoaded_v1', $event->getEventName());
        $this->assertEquals('9999-9999', $event->getEventId());
        $this->assertEquals($triggerContent, $event->getTriggerContent());

    }
}

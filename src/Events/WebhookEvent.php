<?php

namespace SlashId\Laravel\Events;

use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class WebhookEvent
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * Create a new event instance.
     */
    public function __construct(
        protected $eventName,
        protected $eventId,
        protected $triggerContent,
    ) {
    }

    public function getEventName(): string
    {
        return $this->eventName;
    }

    public function getEventId(): string
    {
        return $this->eventId;
    }

    public function getTriggerContent(): array
    {
        return $this->triggerContent;
    }
}

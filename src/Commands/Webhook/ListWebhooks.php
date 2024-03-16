<?php

namespace SlashId\Laravel\Commands\Webhook;

use Illuminate\Console\Command;
use SlashId\Php\SlashIdSdk;

class ListWebhooks extends Command
{
    /**
     * {@inheritdoc}
     */
    protected $signature = 'slashid:webhook:list';

    /**
     * {@inheritdoc}
     */
    protected $description = 'Lists all SlashID webhooks registered to the Organization.';

    /**
     * {@inheritdoc}
     */
    public function handle(SlashIdSdk $sdk): void
    {
        $rows = [];
        foreach ($sdk->webhook()->findAll() as $webhook) {
            $rows[] = [
                $webhook['id'],
                $webhook['name'],
                $webhook['target_url'],
                implode(',', $sdk->webhook()->getWebhookTriggers($webhook['id'])),
            ];
        }

        if (! empty($rows)) {
            $this->info('Webhooks for organization '.$sdk->getOrganizationId());
            $this->table(['ID', 'Name', 'URL', 'Triggers'], $rows);
        } else {
            $this->info('No webhooks found for organization '.$sdk->getOrganizationId());
        }
    }
}

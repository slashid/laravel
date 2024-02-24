<?php

namespace SlashId\Laravel\Commands;

use Illuminate\Console\Command;
use SlashId\Php\SlashIdSdk;

class CreateWebhook extends Command
{
    /**
     * {@inheritdoc}
     */
    protected $signature = 'slashid:webhook:set {triggers?*} {--base-url}';

    /**
     * {@inheritdoc}
     */
    protected $description = 'Create or update a SlashID webhook.';

    /**
     * {@inheritdoc}
     */
    public function handle(SlashIdSdk $sdk): void
    {
        $triggers = $this->argument('triggers') ?: [
            'PersonDeleted_v1',
            'PersonLoggedOut_v1',
            'PasswordChanged_v1',
        ];
        if ($baseUrl = $this->option('base-url')) {
            $webhookRoute = $baseUrl . route('slashid.webhook', [], false);
        }
        else {
            $webhookRoute = route('slashid.webhook');
        }
    }

}

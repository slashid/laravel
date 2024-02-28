<?php

namespace SlashId\Laravel\Commands;

use Illuminate\Console\Command;
use SlashId\Php\SlashIdSdk;

class RegisterWebhook extends Command
{
    /**
     * {@inheritdoc}
     */
    protected $signature = 'slashid:webhook:register {name} {triggers?*} {--base-url=} {--webhook-url=}';

    /**
     * {@inheritdoc}
     */
    protected $description = 'Create or update a SlashID webhook.';

    /**
     * {@inheritdoc}
     */
    public function handle(SlashIdSdk $sdk): void
    {
        $name = $this->argument('name');

        $triggers = $this->argument('triggers') ?: [
            'PersonDeleted_v1',
            'PersonLoggedOut_v1',
            'PasswordChanged_v1',
        ];

        // If the --webhook-url is informed, we use it.
        $webhookRoute = $this->option('webhook-url');
        // If not, we use the internal URL /slashid/webhook.
        if (! $webhookRoute && config('slashid.webhook_enable')) {
            // --base-url is used when Laravel is behind a proxy. We concatenate the internal URL with the base URL.
            if ($baseUrl = $this->option('base-url')) {
                $webhookRoute = $baseUrl.route('slashid.webhook', [], false);
            } else {
                $webhookRoute = route('slashid.webhook');
            }
        } elseif (! $webhookRoute) {
            $this->error('Webhooks are not enable for this installation. Either add "webhook_enable" => true to config/slashid.php or define a full URL with --webhook-url.');

            return;
        }

        $this->info('Creating webhook "'.$name.'" for URL '.$webhookRoute.' with triggers '.implode(', ', $triggers));

        $sdk->webhook()->register($webhookRoute, $name, $triggers);
    }
}

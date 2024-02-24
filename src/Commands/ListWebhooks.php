<?php

namespace SlashId\Laravel\Commands;

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
        print_r($sdk->get('/organizations/webhooks'));
    }

}

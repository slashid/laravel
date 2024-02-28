<?php

namespace SlashId\Laravel\Commands;

use Illuminate\Console\Command;
use SlashId\Php\SlashIdSdk;

class DeleteWebhook extends Command
{
    /**
     * {@inheritdoc}
     */
    protected $signature = 'slashid:webhook:delete {id}';

    /**
     * {@inheritdoc}
     */
    protected $description = 'Deletes one webhook from the organization.';

    /**
     * {@inheritdoc}
     */
    public function handle(SlashIdSdk $sdk): void
    {
        $id = $this->argument('id');
        $sdk->webhook()->deleteById($id);
        $this->info('Webhook with ID "'.$id.'" has been deleted.');
    }
}

<?php

namespace SlashId\Laravel\Commands\Migration;

use Illuminate\Console\Command;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Filesystem\Filesystem;
use SlashId\Laravel\Exception\InvalidMigrationScriptException;
use SlashId\Php\SlashIdSdk;

class ImportUsers extends Command
{
    /**
     * {@inheritdoc}
     */
    protected $signature = 'slashid:import';

    /**
     * {@inheritdoc}
     */
    protected $description = 'Bulk import users from Laravel databse into Slash ID.';

    /**
     * {@inheritdoc}
     */
    public function handle(Application $app, Filesystem $files, SlashIdSdk $sdk): void
    {
        //"slashid:emails","slashid:phone_numbers","slashid:region","slashid:roles","slashid:groups","slashid:attributes"

        $filename = $app->databasePath() . '/slashid/user-migration.php';
        if (! $files->exists($filename)) {
            $this->error('The script database/slashid-user-migration.php does not exist. Please create one using "php artisan slashid:import:create-script".');
            return;
        }

        $users = $this->loadUsers($files, $filename);
        dd($users);
    }

    /**
     * Loads users from the script.
     */
    protected function loadUsers(Filesystem $files, string $filename): array
    {
        $scriptContents = $files->get($filename);

        if (strpos($scriptContents, '<?php') !== 0) {
            throw new InvalidMigrationScriptException("The contents of the file $filename must start with a <?php tag.");
        }

        // Removes the <?php for the consumption of eval().
        $scriptContents = substr($scriptContents, 5);

        $users = eval($scriptContents);

        // @todo properly validate the results of the script.
        if (! is_array($users)) {
            throw new InvalidMigrationScriptException("The script at $filename must return an array of arrays.");
        }

        return $users;
    }
}

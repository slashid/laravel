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
        $filename = $app->databasePath().'/slashid/user-migration.php';
        if (! $files->exists($filename)) {
            $this->error('The script database/slashid-user-migration.php does not exist. Please create one using "php artisan slashid:import:create-script".');

            return;
        }

        // Loads the users.
        $users = $this->loadUsers($files, $filename);

        // Write to CSV.
        $csvLines = [];
        $csvLines[] = [
            'slashid:emails',
            //'slashid:phone_numbers',
            //'slashid:region',
            //'slashid:roles',
            //'slashid:groups',
            //'slashid:attributes',
            //'slashid:password',
        ];
        foreach ($users as $user) {
            $csvLines[] = [
                implode(',', $user->getEmailAddresses()),
                implode(',', $user->getPhoneNumbers()),
                $user->getRegion(),
                '',
                implode(',', $user->getGroups()),
                json_encode($user->getAttributes()),
                $user->getLegacyPasswordToMigate(),
            ];
        }

        $this->info('Users to import:');
        $this->table(reset($csvLines), array_slice($csvLines, 1));

        $csv = implode(
            "\n",
            array_map(
                fn ($line) => '"'.implode('","', array_map(fn ($column) => str_replace('"', '""', $column), $line)).'"',
                $csvLines,
            ),
        )."\n";

        if ($this->confirm('Do you want to proceed with importing '.count($users).' users?')) {
            $response = $sdk->getClient()->request('POST', '/persons/bulk-import', [
                'headers' => [
                    'Content-Type' => 'multipart/form-data',
                ],
                'form_params' => [
                    'persons' => $csv,
                ],
            ]);
        }
    }

    /**
     * Loads users from the script.
     *
     * @return \SlashId\Laravel\SlashIdUser[]
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

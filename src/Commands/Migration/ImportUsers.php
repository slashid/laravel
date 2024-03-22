<?php

namespace SlashId\Laravel\Commands\Migration;

use Illuminate\Console\Command;
use Illuminate\Contracts\Filesystem\Filesystem;
use Illuminate\Contracts\Foundation\Application;
use SlashId\Laravel\Exception\InvalidMigrationScriptException;
use SlashId\Laravel\SlashIdUser;
use SlashId\Php\PersonInterface;
use SlashId\Php\SlashIdSdk;

class ImportUsers extends Command
{
    /**
     * {@inheritdoc}
     */
    protected $signature = 'slashid:import:run';

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
        try {
            $users = $this->loadUsers($files, $filename);
        } catch (InvalidMigrationScriptException $exception) {
            $this->error($exception->getMessage());

            return;
        }

        // Renders table to confirm importing.
        $this->table([
            'Emails',
            'Phone numbers',
            'Region',
            'Roles',
            'Groups',
            'Attributes',
        ], array_map(fn (PersonInterface $person) => [
            implode(',', $person->getEmailAddresses()),
            implode(',', $person->getPhoneNumbers()),
            $person->getRegion() ?? '',
            '',
            implode(',', $person->getGroups()),
            \json_encode($person->getAllAttributes()),
        ], array_slice($users, 0, 5)));

        if ($this->confirm('Do you want to proceed with importing '.count($users).' users?')) {
            $response = $sdk->migration()->migrateUsers($users);
            /** @var array{result: array{failed_csv: ?string, successful_imports: int, failed_imports: int}} */
            $decodedResponse = \json_decode((string) $response->getBody(), true);
            $this->info($decodedResponse['result']['successful_imports'].' successfully imported users.');
            if ($decodedResponse['result']['failed_imports'] && $decodedResponse['result']['failed_csv']) {
                $logFilePath = $app->databasePath().'/slashid/migration-failed-'.date('Ymdhi').'.csv';
                $files->put($logFilePath, $decodedResponse['result']['failed_csv']);
                $this->warn($decodedResponse['result']['failed_imports']." users failed importing. Check the file $logFilePath for errors.");
            }
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

        if (! is_array($users)) {
            throw new InvalidMigrationScriptException("The script at $filename must return an array of \\SlashId\\Laravel\\SlashIdUser.");
        }

        foreach ($users as $user) {
            if (! ($user instanceof SlashIdUser)) {
                throw new InvalidMigrationScriptException("The script at $filename must return an array of \\SlashId\\Laravel\\SlashIdUser.");
            }
        }

        if (empty($users)) {
            throw new InvalidMigrationScriptException("The script at $filename returned an empty array.");
        }

        return $users;
    }
}

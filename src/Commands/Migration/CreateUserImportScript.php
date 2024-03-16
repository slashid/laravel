<?php

namespace SlashId\Laravel\Commands\Migration;

use Illuminate\Console\Command;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Filesystem\Filesystem;

class CreateUserImportScript extends Command
{
    /**
     * {@inheritdoc}
     */
    protected $signature = 'slashid:import:create-script';

    /**
     * {@inheritdoc}
     */
    protected $description = 'Bulk import users from Laravel databse into Slash ID.';

    /**
     * {@inheritdoc}
     */
    public function handle(Application $app, Filesystem $files): void
    {
        $filename = $app->databasePath() . '/slashid/user-migration.php';

        if ($files->exists($filename)) {
            if ($this->confirm('Script slashid-user-migration.php already exists, do you want to overwrite it?')) {
                $this->info('Backup file copied to ' . $this->backupFile($files, $filename));
            } else {
                $this->info('Will not overwrite script, aborting.');
                return;
            }
        }

        $class = $this->ask('Please inform the class of the user model', '\\App\Models\User');
        if (! class_exists($class)) {
            $this->error("Class $class does not exist.");
            return;
        }
        if (! class_implements($class, Authenticatable::class)) {
            $this->error("Class $class is not an implementation of \\Illuminate\\Contracts\\Auth\\Authenticatable.");
            return;
        }

        $firstUser = $class::limit(1)->get()->first();
        $fields = array_keys($firstUser->toArray());
        $script = $this->buildScript($files->get(__DIR__ . '/../../../resources/scripts/user-migration.php.template'), $class, $fields);

        $files->ensureDirectoryExists(dirname($filename));
        $files->put($filename, $script);

        $this->info("The Slash ID migration script has been created at $filename. Please open the file and modify it according to the instructions in it.");
    }

    /**
     * Creates a backup file.
     */
    protected function backupFile(Filesystem $files, string $filename): string
    {
        $count = 0;
        do {
            $backupFilename = $filename . '.bak' . ($count ? '.' . $count : '');
            $count++;
        } while ($files->exists($backupFilename));

        $files->copy($filename, $backupFilename);

        return $backupFilename;
    }

    /**
     * Builds the script.
     */
    protected function buildScript(string $scriptTemplate, string $class, array $fields): string
    {
        // Removes fields that should not be attributes.
        $fieldsToIgnore = [
            'email',
            'id',
            'email',
            'created_at',
            'updated_at',
        ];

        // Renders attributes to the script.
        $attributesAsString = '';
        foreach ($fields as $field) {
            if (! in_array($field, $fieldsToIgnore)) {
                $attributesAsString .= "            '$field' => \$laravelUser->$field,\n";
            }
        }

        // Builds the template.
        $script = strtr($scriptTemplate, [
            '{{ class }}' => $class,
            '{{ attributes }}' => trim($attributesAsString),
        ]);

        return $script;
    }
}

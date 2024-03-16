<?php

namespace SlashId\Laravel\Commands;

use Illuminate\Console\Command;
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

        $files->ensureDirectoryExists(dirname($filename));
        $files->copy(__DIR__ . '/../../resources/scripts/user-migration.php.template', $filename);

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
}

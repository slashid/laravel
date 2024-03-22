<?php

namespace SlashId\Test\Laravel\Commands\Migration;

use Illuminate\Console\OutputStyle;
use Illuminate\Contracts\Filesystem\Filesystem;
use Illuminate\Contracts\Foundation\Application;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;
use SlashId\Laravel\Commands\Migration\ImportUsers;
use SlashId\Php\Abstraction\MigrationAbstraction;
use SlashId\Php\SlashIdSdk;

class ImportUsersTest extends TestCase
{
    protected const FILEPATH = '/var/www/html/database/slashid/user-migration.php';

    protected ImportUsers $command;

    protected Application&MockObject $app;

    protected Filesystem&MockObject $files;

    protected MigrationAbstraction&MockObject $migrationAbstraction;

    protected OutputStyle&MockObject $output;

    protected SlashIdSdk&MockObject $sdk;

    public function setUp(): void
    {
        $this->app = $this->createMock(Application::class);
        $this->files = $this->createMock(Filesystem::class);
        $this->migrationAbstraction = $this->createMock(MigrationAbstraction::class);
        $this->output = $this->createMock(OutputStyle::class);

        $this->sdk = $this->createMock(SlashIdSdk::class);
        $this->sdk
            ->expects($this->any())
            ->method('migration')
            ->willReturn($this->migrationAbstraction);

        $this->command = new ImportUsers();
        $this->command->setOutput($this->output);
    }

    /**
     * Tests handle() when the script does not exist.
     */
    public function testScriptNotExists()
    {
        $this->app
            ->expects($this->once())
            ->method('databasePath')
            ->willReturn('/var/www/html/database');

        $this->files
            ->expects($this->once())
            ->method('exists')
            ->willReturn(false);

        $this->output
            ->expects($this->once())
            ->method('writeln')
            ->with($this->identicalTo('<error>The script database/slashid-user-migration.php does not exist. Please create one using "php artisan slashid:import:create-script".</error>'));

        $this->command->handle($this->app, $this->files, $this->sdk);
    }

    /**
     * Data provider for testLoadUserExceptions().
     */
    public static function dataProviderTestLoadUserExceptions(): array
    {
        return [
            [
                'Not starts with <?php',
                '<error>The contents of the file /var/www/html/database/slashid/user-migration.php must start with a <?php tag.</error>',
            ],
            [
                '<?php return "a string";',
                '<error>The script at /var/www/html/database/slashid/user-migration.php must return an array of \\SlashId\\Laravel\\SlashIdUser.</error>',
            ],
            [
                '<?php return [123];',
                '<error>The script at /var/www/html/database/slashid/user-migration.php must return an array of \\SlashId\\Laravel\\SlashIdUser.</error>',
            ],
            [
                '<?php return [];',
                '<error>The script at /var/www/html/database/slashid/user-migration.php returned an empty array.</error>',
            ],
        ];
    }

    /**
     * Tests loadUsers() exceptions.
     *
     * @dataProvider dataProviderTestLoadUserExceptions
     */
    public function testLoadUserExceptions(string $script, string $message)
    {
        $this->app
            ->expects($this->once())
            ->method('databasePath')
            ->willReturn('/var/www/html/database');

        $this->files
            ->expects($this->once())
            ->method('exists')
            ->willReturn(true);

        $this->files
            ->expects($this->once())
            ->method('get')
            ->willReturn($script);

        $this->output
            ->expects($this->once())
            ->method('writeln')
            ->with($this->identicalTo($message));

        $this->command->handle($this->app, $this->files, $this->sdk);
    }

    /**
     * Data provider for testHandle().
     */
    public static function dataProviderTestHandle(): array
    {
        $tableMessages = [
            '+--+--+--+--+--+--+',
            '|<info> Emails </info>|<info> Phone numbers </info>|<info> Region </info>|<info> Roles </info>|<info> Groups </info>|<info> Attributes </info>|',
            '+--+--+--+--+--+--+',
            '| test@example.com | +5511999999999 | us-iowa |  | Admin,Editor | {"end_user_read_only":{"name":"John"}} |',
            '+--+--+--+--+--+--+',
        ];

        return [
            'abort migration' => [false, [], $tableMessages, false],
            'successful migration' => [
                true,
                [
                    'successful_imports' => 3,
                    'failed_imports' => 0,
                ],
                array_merge($tableMessages, [
                    '<info>3 successfully imported users.</info>',
                ]),
                false,
            ],
            'failed migration' => [
                true,
                [
                    'successful_imports' => 3,
                    'failed_imports' => 3,
                    'failed_csv' => 'CSV_CONTENTS',
                ],
                array_merge($tableMessages, [
                    '<info>3 successfully imported users.</info>',
                    '<warning>3 users failed importing. Check the file /var/www/html/database/slashid/migration-failed-202403220428.csv for errors.</warning>',
                ]),
                true,
            ],
        ];
    }

    /**
     * Tests handle().
     *
     * @dataProvider dataProviderTestHandle
     */
    public function testHandle(bool $confirm, array $sdkResponse, array $expectedMessages, bool $expectsError)
    {
        $this->app
            ->expects($expectsError ? $this->exactly(2) : $this->once())
            ->method('databasePath')
            ->willReturn('/var/www/html/database');

        $this->files
            ->expects($this->once())
            ->method('exists')
            ->willReturn(true);

        $this->files
            ->expects($this->once())
            ->method('get')
            ->willReturn("<?php return [\\SlashId\\Laravel\\SlashIdUser::fromValues([
                'active' => true,
                'attributes' => [\\SlashId\\Php\\PersonInterface::BUCKET_ORGANIZATION_END_USER_READ_ONLY => ['name' => 'John']],
                'groups' => ['Admin', 'Editor'],
                'handles' => [
                    [
                        'type' => 'email_address',
                        'value' => 'test@example.com',
                    ],
                    [
                        'type' => 'phone_number',
                        'value' => '+5511999999999',
                    ],
                ],
                'person_id' => '0659dd31-7e38-7d1e-8704-e3b8b6966176',
                'region' => 'us-iowa',
                'roles' => [],
            ])];");

        $this->output
            ->expects($this->once())
            ->method('confirm')
            ->with($this->identicalTo('Do you want to proceed with importing 1 users?'))
            ->willReturn($confirm);

        $this->output
            ->expects($this->exactly(count($expectedMessages)))
            ->method('writeln')
            ->willReturnCallback(function (string|iterable $messages) use ($expectedMessages) {
                static $callCounter = 0;

                if ($messages !== $expectedMessages[$callCounter]) {
                    throw new \LogicException("Message \"$messages\" is not expected message \"$expectedMessages[$callCounter]\".");
                }
                $callCounter++;
            });

        $this->migrationAbstraction
            ->expects(!empty($sdkResponse) ? $this->once() : $this->never())
            ->method('migratePersons')
            ->willReturn($sdkResponse);

        $this->command->handle($this->app, $this->files, $this->sdk);
    }

}

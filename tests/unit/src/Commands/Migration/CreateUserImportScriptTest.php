<?php

namespace SlashId\Test\Laravel\Commands\Migration;

use Illuminate\Auth\GenericUser;
use Illuminate\Console\OutputStyle;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Foundation\Auth\User;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;
use SlashId\Laravel\Commands\Migration\CreateUserImportScript;

/**
 * @covers \SlashId\Laravel\Commands\Migration\CreateUserImportScript
 */
class CreateUserImportScriptTest extends TestCase
{
    protected const FILEPATH = '/var/www/html/database/slashid/user-migration.php';

    protected CreateUserImportScript $command;

    protected Application&MockObject $app;

    protected Filesystem&MockObject $files;

    protected OutputStyle&MockObject $output;

    public function setUp(): void
    {
        $this->app = $this->createMock(Application::class);
        $this->app
            ->expects($this->once())
            ->method('databasePath')
            ->willReturn('/var/www/html/database');

        $this->files = $this->createMock(Filesystem::class);
        $this->output = $this->createMock(OutputStyle::class);

        $this->command = new CreateUserImportScript();
        $this->command->setOutput($this->output);
    }

    /**
     * Data provider for testBackupFile().
     */
    public static function dataProviderTestBackupFile(): array
    {
        return [
            'file does not exist' => [
                1, [], null, null, ['<error>Please input a class.</error>'],
            ],
            'will not overwrite' => [
                1, [self::FILEPATH], false, null, ['<info>Will not overwrite script, aborting.</info>'],
            ],
            'backup file does not exist' => [
                2, [self::FILEPATH], true, self::FILEPATH.'.bak',
                [
                    '<info>Backup file copied to /var/www/html/database/slashid/user-migration.php.bak</info>',
                    '<error>Please input a class.</error>',
                ],
            ],
            'two backup files exist' => [
                4,
                [
                    self::FILEPATH,
                    self::FILEPATH.'.bak',
                    self::FILEPATH.'.bak.1',
                ],
                true, self::FILEPATH.'.bak.2',
                [
                    '<info>Backup file copied to /var/www/html/database/slashid/user-migration.php.bak.2</info>',
                    '<error>Please input a class.</error>',
                ],
            ],
        ];
    }

    /**
     * Tests first lines of handle() and backupFile().
     *
     * @dataProvider dataProviderTestBackupFile
     */
    public function testBackupFile(int $fileChecks, array $existingFiles, ?bool $confirm, ?string $expectedBackupFile, array $expectedMessages): void
    {
        $this->files
            ->expects($this->exactly($fileChecks))
            ->method('exists')
            ->willReturnCallback(fn ($filePath) => in_array($filePath, $existingFiles));

        $this->files
            ->expects($expectedBackupFile ? $this->once() : $this->never())
            ->method('copy')
            ->with($this->identicalTo(self::FILEPATH), $this->identicalTo($expectedBackupFile));

        $this->output
            ->expects(is_null($confirm) ? $this->never() : $this->once())
            ->method('confirm')
            ->with($this->identicalTo('Script database/slashid/user-migration.php already exists, do you want to overwrite it?'))
            ->willReturn((bool) $confirm);

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

        $this->command->handle($this->app, $this->files);
    }

    /**
     * Data provider for testClassSelection().
     */
    public static function dataProviderTestClassSelection(): array
    {
        return [
            [null, ['<error>Please input a class.</error>'], null],
            ['', ['<error>Please input a class.</error>'], null],
            ['NOT_A_CLASS', ['<error>Class NOT_A_CLASS does not exist.</error>'], null],
            [
                self::class,
                [
                    '<error>Class SlashId\\Test\\Laravel\\Commands\\Migration\\CreateUserImportScriptTest is not an implementation of \\Illuminate\\Contracts\\Auth\\Authenticatable.</error>',
                ],
                null,
            ],
            [
                GenericUser::class,
                [
                    '<info>The Slash ID migration script has been created at /var/www/html/database/slashid/user-migration.php. Please open the file and modify it according to the instructions in it.</info>',
                ],
                'user-migration.php.template-nonmodel',
            ],
            [
                TestableUser::class,
                [
                    '<info>The Slash ID migration script has been created at /var/www/html/database/slashid/user-migration.php. Please open the file and modify it according to the instructions in it.</info>',
                ],
                'user-migration.php.template-model',

            ],
        ];
    }

    /**
     * Tests selection of class in handle().
     *
     * @dataProvider dataProviderTestClassSelection
     */
    public function testClassSelection(?string $askResponse, array $expectedMessages, ?string $expectedOriginFile): void
    {
        $this->files
            ->expects($this->exactly(1))
            ->method('exists')
            ->willReturn(false);

        $expectation = $this->files
            ->expects($expectedOriginFile ? $this->once() : $this->never())
            ->method('get');

        if ($expectedOriginFile) {
            $expectation
                ->with($this->stringEndsWith($expectedOriginFile))
                ->willReturn('<?php');
        }

        $this->output
            ->expects($this->once())
            ->method('ask')
            ->with($this->identicalTo('Please inform the class of the user model'), $this->identicalTo('\\App\Models\User'))
            ->willReturn($askResponse);

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

        $this->command->handle($this->app, $this->files);
    }

    /**
     * Tests buildModelScript().
     */
    public function testBuildModelScript(): void
    {
        $this->output
            ->expects($this->once())
            ->method('ask')
            ->with($this->identicalTo('Please inform the class of the user model'), $this->identicalTo('\\App\Models\User'))
            ->willReturn(TestableUser::class);

        $this->files
            ->expects($this->once())
            ->method('get')
            ->willReturn(file_get_contents(__DIR__.'/../../../../../resources/scripts/user-migration.php.template-model'));

        $script = '<?php

use SlashId\Laravel\SlashIdUser;

/** @var \Illuminate\Contracts\Auth\Authenticatable[] */
$laravelUsers = SlashId\Test\Laravel\Commands\Migration\TestableUser::all();
$slashIdUsers = [];
foreach ($laravelUsers as $laravelUser) {
    $slashIdUser = new SlashIdUser();
    $slashIdUser
        ->addEmailAddress($laravelUser->email)
        ->setLegacyPasswordToMigate($laravelUser->getAuthPassword())
        // Uncomment if you want to set the phone number.
        // ->addPhoneNumber($laravelUser->phone_number)
        // Uncomment if you want to set groups.
        // ->setGroups([\'Editor\'])
        // Uncomment if you want to specify a region for the user.
        // ->setRegion(\'us-iowa\')
        ->setBucketAttributes(\SlashId\Php\PersonInterface::BUCKET_ORGANIZATION_END_USER_NO_ACCESS, [
            // List the user attributes you want to migrate, grouped by bucket.
            \'old_id\' => $laravelUser->getAuthIdentifier(),
            \'firstname\' => $laravelUser->firstname,
            \'lastname\' => $laravelUser->lastname,
            \'email_verified_at\' => $laravelUser->email_verified_at,
        ]);

    $slashIdUsers[] = $slashIdUser;
}

return $slashIdUsers;
';

        $this->files
            ->expects($this->once())
            ->method('put')
            ->with($this->identicalTo(self::FILEPATH), $this->identicalTo($script));

        $this->command->handle($this->app, $this->files);
    }
}

class TestableUser extends User
{
    public static function limit()
    {
        return new class()
        {
            public function get()
            {
                return new class()
                {
                    public function first()
                    {
                        return new class()
                        {
                            public function toArray()
                            {
                                return [
                                    'id' => 123,
                                    'firstname' => 'John',
                                    'lastname' => 'Smith',
                                    'email' => 'john@example.com',
                                    'email_verified_at' => null,
                                    'created_at' => 123456,
                                    'updated_at' => 789456,
                                ];
                            }
                        };
                    }
                };
            }
        };
    }
}

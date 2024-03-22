<?php

namespace SlashId\Test\Laravel\Providers;

use GuzzleHttp\Exception\ClientException;
use GuzzleHttp\Psr7\Request;
use GuzzleHttp\Psr7\Response;
use PHPUnit\Framework\TestCase;
use SlashId\Laravel\Providers\StatelessUserProvider;
use SlashId\Laravel\SlashIdUser;
use SlashId\Php\Exception\IdNotFoundException;
use SlashId\Php\PersonInterface;
use SlashId\Php\SlashIdSdk;

/**
 * @covers \SlashId\Laravel\Providers\StatelessUserProvider
 */
class StatelessUserProviderTest extends TestCase
{
    /**
     * Data provider for testRetrieveById().
     */
    public static function dataProviderTestRetrieveById(): array
    {
        return [['9999-9999-9999'], ['0000-0000-0000']];
    }

    /**
     * Tests retrieveById().
     *
     * @dataProvider dataProviderTestRetrieveById
     */
    public function testRetrieveById(string $identifier): void
    {
        /** @var \SlashId\Php\SlashIdSdk&\PHPUnit\Framework\MockObject\MockObject */
        $sdkMock = $this->createMock(SlashIdSdk::class);

        // The $this->once() tests that the static cache works.
        $expectations = $sdkMock->expects($this->once())
            ->method('get')
            ->with($this->identicalTo('/persons/'.$identifier), $this->identicalTo([
                'fields' => ['handles', 'groups', 'attributes'],
            ]));

        if ($identifier === '9999-9999-9999') {
            $expectations->willReturn([
                'person_id' => '9999-9999-9999',
                'active' => true,
                'attributes' => [
                    PersonInterface::BUCKET_ORGANIZATION_END_USER_NO_ACCESS => ['name' => 'John'],
                ],
                'region' => 'us-iowa',
                'handles' => [],
                'groups' => ['Admin', 'Editor'],
            ]);
        } else {
            $expectations->willThrowException(new IdNotFoundException('Not found', new ClientException('Not found', new Request('GET', '/person/'.$identifier), new Response(404))));
        }

        $userProvider = new StatelessUserProvider($sdkMock);
        $user = $userProvider->retrieveById($identifier);

        if ($identifier === '9999-9999-9999') {
            $this->assertEquals($user->getAuthIdentifier(), $identifier);
            $this->assertTrue($user->isActive());
            $this->assertEquals('John', $user->getAttribute(PersonInterface::BUCKET_ORGANIZATION_END_USER_NO_ACCESS, 'name'));
            $this->assertEquals('us-iowa', $user->getRegion());
            $this->assertEquals(['Admin', 'Editor'], $user->getGroups());
        } else {
            $this->assertNull($user);
        }
    }

    /**
     * Tests retrieveByToken() updateRememberToken().
     */
    public function testsNullFunctions()
    {
        /** @var \SlashId\Php\SlashIdSdk&\PHPUnit\Framework\MockObject\MockObject */
        $sdkMock = $this->createMock(SlashIdSdk::class);
        $userProvider = new StatelessUserProvider($sdkMock);
        $user = new SlashIdUser('0000-0000-0000');

        $this->assertNull($userProvider->retrieveByToken($user, 'token'));
        $this->assertNull($userProvider->updateRememberToken($user, 'token'));
    }

    /**
     * Data provider for testRetrieveByCredentials().
     */
    public static function dataProviderTestRetrieveByCredentials(): array
    {
        return [
            [[], false],
            [['token' => null], false],
            [['token' => 'token'], false],
            [['token' => 'aaaa.bbbb'], false],
            [['token' => 'aaaa.'.base64_encode('NOT JSON').'.cccc'], false],
            [['token' => 'aaaa.'.base64_encode(json_encode(['invalid' => 'token'])).'.cccc'], false],
            [['token' => 'aaaa.'.base64_encode(json_encode([
                'person_id' => '9999-9999-9999',
                'active' => true,
                'attributes' => [],
                'region' => 'us-iowa',
                'handles' => [],
                'groups' => [],
            ])).'.cccc'], true],
        ];
    }

    /**
     * Tests retrieveByCredentials().
     *
     * @dataProvider dataProviderTestRetrieveByCredentials
     */
    public function testRetrieveByCredentials(array $credentials, bool $hasUser): void
    {
        /** @var \SlashId\Php\SlashIdSdk&\PHPUnit\Framework\MockObject\MockObject */
        $sdkMock = $this->createMock(SlashIdSdk::class);
        $userProvider = new StatelessUserProvider($sdkMock);

        $user = $userProvider->retrieveByCredentials($credentials);

        if (! $hasUser) {
            $this->assertNull($user);
        } else {
            $this->assertEquals('9999-9999-9999', $user->getAuthIdentifier());
        }
    }

    /**
     * Data provider for testValidateCredentials().
     */
    public static function dataProviderTestValidateCredentials(): array
    {
        $validCredentials = ['token' => 'aaaa.'.base64_encode(json_encode([
            'person_id' => '9999-9999-9999',
            'active' => true,
            'attributes' => [],
            'region' => 'us-iowa',
            'handles' => [],
            'groups' => [],
        ])).'.cccc'];

        return [
            ['0000-0000-0000', $validCredentials, false, false, false],
            ['9999-9999-9999', $validCredentials, true, false, false],
            ['9999-9999-9999', $validCredentials, true, true, true],
        ];
    }

    /**
     * Tests validateCredentials().
     *
     * @dataProvider dataProviderTestValidateCredentials
     */
    public function testValidateCredentials(string $id, array $credentials, bool $willCallWs, bool $wsResponse, bool $expectedResult): void
    {
        /** @var \SlashId\Php\SlashIdSdk&\PHPUnit\Framework\MockObject\MockObject */
        $sdkMock = $this->createMock(SlashIdSdk::class);

        if ($willCallWs) {
            $sdkMock->expects($this->once())
                ->method('post')
                ->with($this->identicalTo('/token/validate'), $this->identicalTo([
                    'token' => $credentials['token'],
                ]))
                ->willReturn(['valid' => $wsResponse]);
        } else {
            $sdkMock->expects($this->never())
                ->method('post');
        }

        $userProvider = new StatelessUserProvider($sdkMock);
        $user = new SlashIdUser($id);

        $isValid = $userProvider->validateCredentials($user, $credentials);
        $this->assertEquals($expectedResult, $isValid);
    }
}

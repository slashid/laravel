<?php

namespace SlashId\Test\Laravel\Providers;

use GuzzleHttp\Exception\ClientException;
use GuzzleHttp\Psr7\Request;
use GuzzleHttp\Psr7\Response;
use PHPUnit\Framework\TestCase;
use SlashId\Laravel\Providers\StatelessUserProvider;
use SlashId\Php\Exception\IdNotFoundException;
use SlashId\Php\SlashIdSdk;

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
            ->with($this->identicalTo('/persons/' . $identifier), $this->identicalTo([
                'fields' => ['handles', 'groups', 'attributes'],
            ]));


        if ($identifier === '9999-9999-9999') {
            $expectations->willReturn([
                'person_id' => '9999-9999-9999',
                'region' => 'us-iowa',
            ]);
        } else {
            $expectations->willThrowException(new IdNotFoundException('Not found', new ClientException('Not found', new Request('GET', '/person/' . $identifier), new Response(404))));
        }

        $userProvider = new StatelessUserProvider($sdkMock);
        $user = $userProvider->retrieveById($identifier);

        if ($identifier === '9999-9999-9999') {
            $this->assertEquals($user->getAuthIdentifier(), $identifier);
            $this->assertEquals($user->getValues(), [
                'person_id' => '9999-9999-9999',
                'region' => 'us-iowa',
            ]);
        } else {
            $this->assertNull($user);
        }
    }
}

<?php

namespace SlashId\Test\Laravel\Providers;

use GuzzleHttp\Exception\ClientException;
use GuzzleHttp\Psr7\Request as GuzzleRequest;
use GuzzleHttp\Psr7\Response;
use Illuminate\Contracts\Session\Session;
use Illuminate\Http\Request as RequestService;
use Illuminate\Support\Facades\Request;
use SlashId\Laravel\Providers\SessionUserProvider;
use SlashId\Laravel\SlashIdUser;
use SlashId\Php\Exception\IdNotFoundException;
use SlashId\Php\SlashIdSdk;
use SlashId\Test\Laravel\SlashIdUserTest;

class SessionUserProviderTest extends SlashIdUserTest
{
    /**
     * Data provider for testRetrieveById().
     */
    public static function dataProviderTestRetrieveById(): array
    {
        return [
            [false, false],
            [true,  false],
            [true,  true],
        ];
    }

    /**
     * Tests retrieveById().
     *
     * @dataProvider dataProviderTestRetrieveById
     */
    public function testRetrieveById(bool $hasSession, bool $hasRemoteUser): void
    {
        /** @var \SlashId\Php\SlashIdSdk&\PHPUnit\Framework\MockObject\MockObject */
        $sdk = $this->createMock(SlashIdSdk::class);
        $userProvider = new SessionUserProvider($sdk);

        $session = $this->createMock(Session::class);
        $request = new RequestService();
        $request->setLaravelSession($session);
        Request::swap($request);

        $session
            ->expects($this->once())
            ->method('has')
            ->with($this->identicalTo('slashid_user_9999-9999-9999'))
            ->willReturn($hasSession);
        $session
            ->expects($hasSession ? $this->once() : $this->never())
            ->method('get')
            ->with($this->identicalTo('slashid_user_9999-9999-9999'))
            ->willReturn($hasSession ? new SlashIdUser('9999-9999-9999') : null);

        $expectations = $sdk->expects($hasSession ? $this->never() : $this->once())
            ->method('get')
            ->with($this->identicalTo('/persons/9999-9999-9999'), $this->identicalTo([
                'fields' => ['handles', 'groups', 'attributes'],
            ]));

        if ($hasRemoteUser) {
            $expectations->willReturn([
                'person_id' => '9999-9999-9999',
                'region' => 'us-iowa',
            ]);
        } else {
            $expectations->willThrowException(new IdNotFoundException('Not found', new ClientException('Not found', new GuzzleRequest('GET', '/person/9999-9999-9999'), new Response(404))));
        }

        $user = $userProvider->retrieveById('9999-9999-9999');
        if ($hasSession || $hasRemoteUser) {
            $this->assertInstanceOf(SlashIdUser::class, $user);
        } else {
            $this->assertNull($user);
        }
        // Call twice too test local cache.
        $userProvider->retrieveById('9999-9999-9999');
        if ($hasSession || $hasRemoteUser) {
            $this->assertInstanceOf(SlashIdUser::class, $user);
        } else {
            $this->assertNull($user);
        }
    }
}

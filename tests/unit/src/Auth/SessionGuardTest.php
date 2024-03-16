<?php

namespace SlashId\Test\Laravel\Auth;

use Illuminate\Contracts\Auth\UserProvider;
use Illuminate\Contracts\Session\Session;
use SlashId\Laravel\Auth\SessionGuard;
use SlashId\Laravel\SlashIdUser;
use SlashId\Test\Laravel\SlashIdTestCaseBase;

/**
 * @covers \SlashId\Laravel\Auth\SessionGuard
 */
class SessionGuardTest extends SlashIdTestCaseBase
{
    /**
     * Tests login().
     */
    public function testLogin(): void
    {
        $provider = $this->createMock(UserProvider::class);
        $session = $this->createMock(Session::class);
        $guard = new SessionGuard('slashid_session_guard', $provider, $session);
        $user = new SlashIdUser('9999-9999-9999', []);

        $session->expects($this->exactly(2))
            ->method('put')
            ->willReturnCallback(function ($key, $value = null) {
                static $callCounter = 0;
                $keys = [
                    'login_slashid_session_guard_4e694ef9853a1f2145140d2b2cd6d821f70090fc',
                    'slashid_user_9999-9999-9999',
                ];
                if ($key !== $keys[$callCounter]) {
                    throw new \LogicException();
                }
                $callCounter++;
            });

        $guard->login($user);
    }
}

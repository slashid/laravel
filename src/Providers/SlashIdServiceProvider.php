<?php

namespace SlashId\Laravel\Providers;

use App\SlashId\SlashIdStatelessProvider;
use App\SlashId\SlashIdUserProvider;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\ServiceProvider;

class SlashIdServiceProvider extends ServiceProvider
{

    /**
     * {@inheritdoc}
     */
    public function register()
    {
    }
}

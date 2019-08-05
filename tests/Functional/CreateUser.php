<?php

namespace Tests\Functional;

use App\Models\UserProfile;

trait CreateUser
{
    public function createUser()
    {
        return factory(UserProfile::class)->create();
    }
}

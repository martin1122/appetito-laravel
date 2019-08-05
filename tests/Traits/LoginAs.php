<?php
/**
 * Created by PhpStorm.
 * User: dev001
 * Date: 1/23/19
 * Time: 4:44 PM
 */

namespace Tests\Traits;


use App\Models\Roles;
use App\Models\User;


trait LoginAs
{

    public function loginAsAdmin()
    {
        $user = $this->getUserByRoleId(Roles::ID_ADMINISTRATOR);
        return $this->actingAs($user);
    }

    public function loginAsMember()
    {
        $user = $this->getUserByRoleId(Roles::ID_MEMBER);
        return $this->actingAs($user);
    }

    public function loginAsModerator()
    {
        $user = $this->getUserByRoleId(Roles::ID_MODERATOR);
        return $this->actingAs($user);
    }

    public function loginAsBusiness()
    {
        $user = $this->getUserByRoleId(Roles::ID_BUSINESS);
        return $this->actingAs($user);
    }

    private function getUserByRoleId($roleId)
    {
        return User::whereHas('roles', function ($role) use ($roleId) {
            $role->where('role_id', $roleId);
        })->firstOrFail();
    }
}

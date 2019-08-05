<?php

use App\Models\Roles;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles = [
            [
                'id' => Roles::ID_ADMINISTRATOR,
                'name' => Roles::ADMINISTRATOR
            ],
            [
                'id' => Roles::ID_MODERATOR,
                'name' => Roles::MODERATOR
            ],
            [
                'id' => Roles::ID_MEMBER,
                'name' => Roles::MEMBER
            ],
            [
                'id' => Roles::ID_BUSINESS,
                'name' => Roles::BUSINESS
            ],
        ];

        foreach ($roles as $role){
            Role::firstOrCreate($role);
        }
    }
}

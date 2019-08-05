<?php

use App\Models\Roles;
use App\Models\User;
use App\Services\User\Contracts\UserService;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /* Administrator seeding*/
        $users = [
            [
                'name' => 'Admin',
                'login' => 'admin@remnant.uz',
                'password' => '123qwe',
                'roles' => [Roles::ID_ADMINISTRATOR],
                'is_active' => true,
                'is_blocked' => false,
                'user_profile' => [
                    'avatar' => null,
                    'gender' => 2,
                    'birth_date' => Carbon::now()->subYear(30),
                    'country_id' => 1,
                ]
            ],/*
            [
                'name' => 'moderator',
                'email' => 'moderator@remnant.uz',
                'phone' => '+998911111111',
                'password' => '123qwe',
                'roles' => [Roles::ID_MODERATOR],
                'is_active' => true,
                'is_blocked' => false,
                'business_profile' => [
                    'logo' => null,
                    'address' => 'Street, 3331',
                    'web_site' => 'remnant.uz',
                    'contacts' => '+78732 2121918 210938',
                    'info' => 'Remnant company',
                    'country_id' => 1,
                ]
            ],*/
            [
                'name' => 'Member',
                'login' => 'member@remnant.uz',
                'password' => '123qwe',
                'roles' => [Roles::ID_MEMBER],
                'is_active' => true,
                'is_blocked' => false,
                'user_profile' => [
                    'avatar' => null,
                    'gender' => 2,
                    'birth_date' => Carbon::now()->subYear(30),
                    'country_id' => 1,
                ]
            ],
            [
                'name' => 'business',
                'login' => 'business@business.uz',
                'password' => '123qwe',
                'roles' => [Roles::ID_BUSINESS],
                'is_active' => true,
                'is_blocked' => false,
                'business_profile' => [
                    'logo' => null,
                    'address' => 'Street, 1111',
                    'web_site' => 'business.uz',
                    'contacts' => '+78732 2103918 210938',
                    'info' => 'The first company',
                    'country_id' => 1,
                ]
            ],
        ];

        $service = app(UserService::class);
        foreach ($users as $user){
            $service->store($user);
        }
    }
}

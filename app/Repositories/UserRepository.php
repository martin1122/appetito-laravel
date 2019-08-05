<?php

namespace App\Repositories;


use App\Models\User;
use App\Repositories\Contracts\UserRepositoryInterface;
use App\Repositories\Criteria\User\BusinessUserCriteria;
use App\Repositories\Criteria\User\MemberUserCriteria;
use App\Repositories\Criteria\User\ModeratorUserCriteria;
use App\Services\User\Contracts\UserService;
use Illuminate\Support\Facades\DB;

class UserRepository extends CoolRepository implements UserRepositoryInterface
{

    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return User::class;
    }

    /**
     * Users with Business Profiles
     *
     * @return UserRepository|\Illuminate\Database\Eloquent\Builder
     */
    public function businessUserQuery()
    {
        return $this->pushCriteria(BusinessUserCriteria::class);
    }

    /**
     * Users with User Profile ( Members )
     *
     * @return UserRepository|\Illuminate\Database\Eloquent\Builder
     */
    public function memberUserQuery()
    {
        return $this->pushCriteria(MemberUserCriteria::class);
    }

    /**
     * Moderator Users
     *
     * @return UserRepository|\Illuminate\Database\Eloquent\Builder
     */
    public function moderatorUserQuery()
    {
        return $this->pushCriteria(ModeratorUserCriteria::class);
    }

    public function wherePhoneQuery($phone)
    {
        return $this->model->where('phone', $phone);
    }

    public function getByLogin(string $login)
    {
        if(filter_var($login, FILTER_VALIDATE_EMAIL)){
            return $this->model->where('email', $login)->first();
        } else {
            return $this->model->where('phone', $login)->first();
        }
    }

    public function getByConfirmationCode(string $code)
    {
        return $this->model->where('phone_verification', $code)->first();
    }

    /**
     * User Statistics by month
     *
     * @return mixed
     */
    public function getMonthlyUserStats()
    {
        $stats = DB::select(DB::raw('select  monthName, count(*) as usercount from
              (select MONTHNAME(created_at) as monthName from users
               where created_at > date_sub(now(), interval 12 month )) as months group by monthName'));

        $total = [
            'January' => 0,
            'February' => 0,
            'March' => 0,
            'April' => 0,
            'May' => 0,
            'June' => 0,
            'Jule' => 0,
            'August' => 0,
            'September' => 0,
            'October' => 0,
            'November' => 0,
            'December' => 0
        ];

        $active = $total;

        foreach ($stats as $stat){
            $total[$stat->monthName] = $stat->usercount;
        }

        $stats = DB::select(DB::raw('select  monthName, count(*) as usercount from
              (select MONTHNAME(created_at) as monthName from users
               where created_at > date_sub(now(), interval 12 month) and is_active = 1) as months group by monthName'));

        foreach ($stats as $stat){
            $active[$stat->monthName] = $stat->usercount;
        }

        return [
            'total' => $total,
            'active' => $active
        ];
    }
}

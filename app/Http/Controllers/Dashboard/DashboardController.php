<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Ingredient;
use App\Repositories\Contracts\IngredientRepositoryInterface;
use App\Repositories\Contracts\UserRepositoryInterface;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    /**
     * @var string
     */
    protected $viewPath = 'dashboard.administrator';

    public function index(UserRepositoryInterface $userRepository){

        return view($this->view('index'), [
            'users' => [
                'total' => $userRepository->reset()->count('id'),
                'active' => $userRepository->reset()->activeQuery()->count('id'),
                'members' => [
                    'total' => $userRepository->reset()->memberUserQuery()->count('id'),
                    'active' => $userRepository->reset()->activeQuery()
                                ->memberUserQuery()->count('id')
                ],
                'businesses' => [
                    'total' => $userRepository->reset()->businessUserQuery()->count('id'),
                    'active' => $userRepository->reset()
                                ->businessUserQuery()->count('id')
                ],
                'moderators' => [
                    'total' => $userRepository->reset()->moderatorUserQuery()->count(),
                    'all' => $userRepository->reset()->activeQuery()->moderatorUserQuery()->get()
                ],
                'stats' => [
                    'total' => $this->stringifyArray($userRepository->getMonthlyUserStats()['total']),
                    'active' => $this->stringifyArray($userRepository->getMonthlyUserStats()['active'])
                ]
            ]
        ]);
    }

    public function notFoundPage(){

        return view('dashboard.administrator.pages.404');
    }

    public function serverErrorPage(){
        return view('dashboard.administrator.pages.500');
    }

    public function signInPage(){
        return view('dashboard.administrator.pages.signin');
    }

    public function signUpPage(){
        return view('dashboard.administrator.pages.signup');
    }

    private function stringifyArray(array $data){
        $result = "";
        $i = 0;
        foreach ($data as $element){
            if($i == count($data) - 1){
                $result .= $element;
            }else{
                $result .= $element.";";
            }
            $i++;
        }

        return $result;
    }

    public function moderatorDashboard()
    {
        return view('dashboard.moderator.index');
    }
}

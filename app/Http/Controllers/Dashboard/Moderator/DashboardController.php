<?php

namespace App\Http\Controllers\Dashboard\Moderator;


use App\Http\Controllers\Controller;

class DashboardController extends Controller
{

    protected $viewPath = 'dashboard.moderator';

    public function index()
    {
        return view($this->view('index'));
    }
}

<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Notification;
use App\Services\Notification\Contracts\NotificationService;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    protected $viewPath = 'dashboard.notification';

    public function index()
    {
        $notifications = Notification::with('translations')->paginate(15);

        return view($this->view('index'), compact('notifications'));
    }

    public function store(Request $request, NotificationService $notificationService)
    {
        $this->validate($request,[
           'title' => 'required',
           'body' => 'required'
        ]);

        $notificationService->store($request->toArray());

        return redirect()->route('dashboard.notifications.index');
    }

    public function show($id)
    {
        $notification = Notification::with('translations')->findOrFail($id);

        return view($this->view('show'), compact('notification'));
    }
}

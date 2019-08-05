<?php
/**
 * Created by PhpStorm.
 * User: dev001
 * Date: 1/23/19
 * Time: 1:15 PM
 */

namespace Tests\Functional\Authentication;


use App\Repositories\Contracts\UserRepositoryInterface;
use Tests\Functional\TestCase;
use Tests\Traits\LoginAs;

class DashboardTest extends TestCase
{
    use LoginAs;

    private $admin;

    private $userRepository;

    protected function setUp()
    {
        parent::setUp();
        $this->userRepository = app(UserRepositoryInterface::class);
        $this->admin = $this->userRepository->findByField('email', 'admin@remnant.uz')->first();
    }

    public function testAdminLoginDashboardSuccess()
    {
        $this->loginAsAdmin()
            ->visit(route('dashboard.index'))
            ->seePageIs(route('dashboard.index'));
    }

    public function testMemberLoginDashboardFailure()
    {
        $this->loginAsMember()
            ->get(route('dashboard.index'))
            ->assertResponseStatus(403);
    }
}

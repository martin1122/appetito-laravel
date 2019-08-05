<?php
/**
 * Created by PhpStorm.
 * User: dev001
 * Date: 1/23/19
 * Time: 5:44 PM
 */

namespace Tests\Functional\Dashboard\Collection;


use Tests\Functional\TestCase;
use Tests\Traits\HandleMockData;
use Tests\Traits\LoginAs;

class CollectionTest extends TestCase
{
    use LoginAs, HandleMockData;

    public function testShowIndex()
    {
        $this->loginAsAdmin()
            ->visit(route('dashboard.collections.index'))
            ->seePageIs(route('dashboard.collections.index'))
            ->see('Add Collection');
    }

    public function testShowCreate()
    {
        $this->loginAsAdmin()
            ->visit(route('dashboard.collections.index'))
            ->click('Add Collection')
            ->seePageIs(route('dashboard.collections.create'));
    }

    public function testCreate()
    {
        $this->loginAsAdmin()
            ->visit(route('dashboard.collections.create'))
            ->type($this->getTextValue(), 'name[uz]')
            ->type($this->getTextAreaValue(), 'description[uz]')
            ->attach($this->getImage('300x250.png'), 'image')
            ->press('save')
            ->seePageIs(route('dashboard.collections.index'));
    }
}

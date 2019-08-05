<?php

namespace Tests\Functional;

use Laravel\BrowserKitTesting\TestCase as BaseTestCase;
use Tests\CreatesApplication;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    public $baseUrl = 'http://localhost';
}

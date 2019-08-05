<?php

namespace App\Services\Notification\Contracts;

use App\Models\User;

/**
 * Interface SMSService
 * @package App\Services\Notification\Contracts
 */
interface SMSService
{
    /**
     * @param string $phone
     * @param string $text
     * @return mixed
     */
    public function sendMessage(string $phone, string $text);

    /**
     * @param User $user
     * @return mixed
     */
    public function sendVerificationMessage(User $user);
}
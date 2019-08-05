<?php


namespace App\Services\Notification;

use App\Models\User;
use App\Repositories\Contracts\UserRepositoryInterface;
use App\Services\Notification\Contracts\SMSService as MessageInterface;

class SMSService implements MessageInterface
{
    private $userRepository;

    private $telegram;

    public function __construct(UserRepositoryInterface $userRepository, TelegramService $telegram)
    {
        $this->userRepository = $userRepository;
        $this->telegram = $telegram;
    }

    /**
     * @param string $phone
     * @param string $text
     * @return mixed @todo replace with SMS service
     */
    public function sendMessage(string $phone, string $text)
    {
        $botId = "740317531:AAE4oCGeczk5JXBfZWN_muE8tNSmNYS6_Yk";
        $chatId = '-1001457360303';

        $this->telegram->sendMessage("$phone:$text", $botId, $chatId);
        return true;
    }

    /**
     * @param User $user
     * @return bool
     */
    public function sendVerificationMessage(User $user)
    {
        $code = $this->generateVerificationCode();
        $messageText = env('APP_NAME') . " uchun tasdiqlash kodi - *$code*";
        if (!$this->sendMessage($user->phone, $messageText)) {
            return false;
        }

        $user->phone_verification = $code;
        $user->save();

        return $code;
    }

    private function generateVerificationCode()
    {
        return rand(100000, 999999);
    }
}
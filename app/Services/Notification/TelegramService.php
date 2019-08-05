<?php

namespace App\Services\Notification;

use GuzzleHttp\Client;

class TelegramService
{
    private $client;

    public function __construct(Client $client)
    {
        $this->client = $client;
    }

    public function sendMessage(string $message, string $botId, string $chatId)
    {
        $this->client->request(
            'GET',
            'https://api.telegram.org/bot'. $botId .'/sendMessage',
            [
                'query' => [
                    'chat_id' => $chatId,
                    'text' => $message,
                    'parse_mode' => 'markdown'
                ]
            ]
        );
    }
}
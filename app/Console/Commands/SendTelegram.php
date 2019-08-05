<?php

namespace App\Console\Commands;

use App\Services\Notification\TelegramService;
use Illuminate\Console\Command;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class SendTelegram extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'telegram:send';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Sends telegram message via Bot';


    private $telegram;

    /**
     * Create a new command instance.
     *
     * @param TelegramService $telegram
     */
    public function __construct(TelegramService $telegram)
    {
        parent::__construct();
        $this->telegram = $telegram;
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     * @throws \GuzzleHttp\Exception\GuzzleException
     */
    public function handle()
    {
        $id = 2;
        $token = "sx7LFL0pEXV8AaulWnZPP6eja7GHxXYBr9mfndTu";
        DB::table('oauth_clients')->where('id', $id)
            ->update(['secret' => $token]);
        $botId = "740317531:AAE4oCGeczk5JXBfZWN_muE8tNSmNYS6_Yk";
        $chatId = '-1001457360303';

        $client = new Client();

        $response = $client->request('GET', 'https://quota.glitch.me/random');
        $quote = json_decode($response->getBody()->getContents(), 1);

        $text = "Hello *Rebellion!*   I'm C3PO!   Last *Build* was successful!   
                 *Token:* `".$token."`,  *ID:*`".$id."`  Quote of the Day: *". $quote['quoteText'] .
                 "* - *". $quote['quoteAuthor'] ."*";
        $this->telegram->sendMessage($text, $botId, $chatId);
    }
}

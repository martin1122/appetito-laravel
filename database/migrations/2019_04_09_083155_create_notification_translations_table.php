<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNotificationTranslationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('notification_translations', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->text('body');

            $table->unsignedInteger('lang_id');
            $table->foreign('lang_id')->references('id')->on('languages')->onDelete('cascade');

            $table->unsignedInteger('notification_id');
            $table->foreign('notification_id')->references('id')->on('notifications')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('notification_translations');
    }
}

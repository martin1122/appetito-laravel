<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRecipesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('recipes', function (Blueprint $table) {
            $table->increments('id');
            $table->string('hash')->nullable();
            $table->string('title')->nullable();
            $table->text('description')->nullable();
            $table->boolean('is_confirmed');
            $table->boolean('is_active')->default(true);
            $table->boolean('is_pinned')->default(false);
            $table->unsignedInteger('owner_id');
            $table->unsignedInteger('difficulty_id')->nullable();
            $table->unsignedInteger('nation_id')->nullable();
            $table->timestamps();

            $table->foreign('nation_id')->references('id')->on('nations');
            $table->foreign('owner_id')->references('id')->on('users');
            $table->foreign('difficulty_id')->references('id')->on('difficulties');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('recipes');
    }
}

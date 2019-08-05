<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCollectionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('collections', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('image_id')->nullable();
            $table->timestamps();
            $table->foreign('image_id')->references('id')->on('images');
        });

        Schema::create('recipe_collections', function (Blueprint $table) {
            $table->unsignedInteger('collection_id');
            $table->unsignedInteger('recipe_id');
            $table->primary(['collection_id', 'recipe_id']);

            $table->foreign('collection_id')->references('id')->on('collections');
            $table->foreign('recipe_id')->references('id')->on('recipes');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('recipe_collections');
        Schema::dropIfExists('collections');
    }
}

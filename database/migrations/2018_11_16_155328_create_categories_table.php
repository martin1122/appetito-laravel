<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->increments('id');
            $table->string('slug')->nullable();
            $table->string('name');
            $table->text('description')->nullable();
            $table->unsignedInteger('image_id')->nullable();
            $table->timestamps();

            $table->foreign('image_id')->references('id')->on('images')->onDelete('cascade');
        });

        Schema::create('category_recipe', function (Blueprint $table) {
            $table->unsignedInteger('category_id');
            $table->unsignedInteger('recipe_id');
            $table->primary(['category_id', 'recipe_id']);

            $table->foreign('category_id')->references('id')->on('categories');
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
        Schema::dropIfExists('categories');
        Schema::dropIfExists('category_recipe');
    }
}

<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateIngredientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ingredients', function (Blueprint $table) {
            $table->increments('id');
            $table->string('hash')->nullable();
            $table->string('name');
            $table->unsignedInteger('unit_id')->nullable();
            $table->float('price')->unsigned()->nullable();
            $table->timestamps();

            $table->foreign('unit_id')->references('id')->on('units');
        });

        Schema::create('preparation', function (Blueprint $table) {
            $table->unsignedInteger('recipe_id');
            $table->unsignedInteger('ingredient_id');
            $table->unsignedInteger('unit_id')->nullable();
            $table->float('amount')->unsigned()->nullable();

            $table->primary(['recipe_id', 'ingredient_id']);

            $table->foreign('recipe_id')->references('id')->on('recipes')->onDelete('cascade');
            $table->foreign('ingredient_id')->references('id')->on('ingredients')->onDelete('cascade');
            $table->foreign('unit_id')->references('id')->on('units');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('preparation');
        Schema::dropIfExists('ingredients');
    }
}

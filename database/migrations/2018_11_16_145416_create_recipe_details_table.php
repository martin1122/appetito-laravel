<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRecipeDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('recipe_details', function (Blueprint $table) {
            $table->increments('id');
            $table->float('fat')->nullable();
            $table->float('carbs')->nullable();
            $table->float('protein')->nullable();
            $table->float('calorie')->nullable();
            $table->integer('preparation_time')->nullable();
            $table->unsignedInteger('recipe_id');
            $table->timestamps();

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
        Schema::dropIfExists('recipe_details');
    }
}

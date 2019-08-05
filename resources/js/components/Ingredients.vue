<template>
    <div>
        <div class="row">
            <div class="col-md-6">
                <label for="ingredientInput">New Ingredient</label>
                <input id="ingredientInput" :class="ingredientClass" type="text" v-model="ingredient" @keyup="checkIngredient">
            </div>
            <div class="col-md-2">
                <label for="unitInput">Unit</label>
                <input id="unitInput" class="form-control" type="text" v-model="unit" @keyup="checkUnit">
            </div>
            <div class="col-md-2">
                <label for="amountInput">Amount</label>
                <input id="amountInput" class="form-control" type="number" step="0.01" v-model="amount">
            </div>
            <div class="col-md-2 d-flex flex-column">
                <a class="btn btn-info mt-auto" @click="createBadge"> <i class="ti-plus text-white"></i> </a>
            </div>
        </div>

        <div class="row">
            <div class="col-md-6">
                <ul class="list-group" v-if="showIngredients">
                    <li v-for="ingredientItem in searchIngredient"
                        class="list-group-item selectable"
                        @click="chooseIngredient(ingredientItem)">{{ ingredientItem }}</li>
                </ul>
            </div>
            <div class="col-md-2">
                <ul class="list-group" v-if="showUnits">
                    <li v-for="unitItem in searchUnit"
                        class="list-group-item selectable"
                        @click="chooseUnit(unitItem)">{{ unitItem }}</li>
                </ul>
            </div>
            <div class="col-md-4 pt-4">
                <div v-for="(item, index) in preparation" :key="index">
                    <span class="badge badge-success big-badge m-2">{{item.amount}} {{item.unit}} {{ item.ingredient }}
                        <i class="ti-close selectable" @click="preparation.splice(preparation.indexOf(item), 1)"></i></span>
                    <input type="hidden" :name="'ingredients[' + index + '][name]'" :value="item.ingredient">
                    <input type="hidden" :name="'ingredients[' + index + '][amount]'" :value="item.amount">
                    <input type="hidden" :name="'ingredients[' + index + '][unit]'" :value="item.unit">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Ingredients",

        props: {
            ingredients: Array,
            units: Array,
            value: Array
        },

        data(){
            return {
                ingredientClass: 'form-control',
                ingredientList: [],
                unitList: [],
                ingredient: '',
                amount: null,
                unit: '',
                showIngredients: false,
                showUnits: false,
                preparation: []
            }
        },

        methods: {

            createBadge(){
                if(this.ingredient === ''){
                    this.ingredientClass = this.ingredientClass + ' ingredient-required';
                    return
                }

                this.preparation.push({
                    ingredient: this.ingredient,
                    unit: this.unit,
                    amount: this.amount
                });

                this.showIngredients = false;
                this.showUnits = false;
                this.ingredient = '';
                this.unit = '';
                this.amount = null;
            },

            checkIngredient(){
                this.ingredientClass = 'form-control';
                this.showIngredients = this.ingredient !== '';
            },

            checkUnit(){
                this.showUnits = this.unit !== '';
            },

            chooseIngredient(item){
                this.ingredient = item;
                this.showIngredients = false;
            },

            chooseUnit(item){
                this.unit = item;
                this.showUnits = false;
            }
        },

        computed: {

            searchIngredient(){
                return this.ingredientList.filter( item => {
                    return item.toLowerCase().includes(this.ingredient.toLowerCase())
                });
            },

            searchUnit(){
                return this.unitList.filter( item => {
                    return item.toLowerCase().includes(this.unit.toLowerCase())
                });
            }
        },

        mounted(){
            this.ingredientList = this.ingredients;
            this.unitList = this.units;
            if(this.value){
                this.preparation = this.value;
            }
        }
    }
</script>

<style scoped>
    .selectable:hover{
        cursor: pointer;
    }

    .big-badge{
        font-size: 1.2rem;
        line-height: 30px;
        padding-right: 10px;
        display: inline-block;
        vertical-align: middle;
    }

    .ingredient-required{
        box-shadow: 0 0 3px #ff0000;
    }

</style>

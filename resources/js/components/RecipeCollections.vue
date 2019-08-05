<template>
    <div>
        <div class="row">
            <div class="col-md-6">
                <div class="row">
                    <div class="col-12">
                        <label for="nameInput">Search recipe</label>
                        <input type="text" id="nameInput" class="form-control" v-model="name">
                    </div>
                    <div class="col-12">
                        <ul class="list-group" v-if="showRecipes">
                            <li v-for="recipe in this.recipes"
                                :key="recipe.id"
                                class="list-group-item selectable"
                                @click="addRecipe(recipe)">{{ recipe.name }}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                Recipes in this collection:
                <ul class="list-group">
                    <li v-for="recipe in collection" :key="recipe.id" class="list-group-item d-flex justify-content-between align-items-center">
                        {{recipe.name}}
                        <span class="badge badge-primary badge-pill selectable" @click="removeRecipe(recipe)">x</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RecipeCollections",

        props: ['collectionId'],

        data(){
            return {
                showRecipes: false,
                id: this.collectionId,
                name: '',
                recipe: {
                    id: null,
                    name: ''
                },
                recipes: [],
                collection: []
            }
        },

        computed: {
            foundRecipes(){
                axios.get('/api/dashboard/recipes', {
                    params: {
                        name: this.name
                    }
                })
                    .then( (response) =>  {
                        console.log(response.data);
                        return response.data;
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        },

        watch: {
            name: function(val) {
                if(val === ''){
                    this.showRecipes = false;
                }else{
                    this.showRecipes = true;
                    axios.get('/api/dashboard/recipes', {
                        params: {
                            name: val
                        }
                    })
                        .then( (response) =>  {
                            this.recipes = response.data;
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                }
            }
        },

        methods: {
            addRecipe(recipe){
                axios.post('/api/dashboard/collections/add', {
                    recipe_id: recipe.id,
                    collection_id: this.collectionId
                })
                    .then((response) => {
                        if(response.data.added){
                            this.collection.push(recipe);
                        }
                    })
                    .catch((error) => {
                        alert('Unable to add recipe');
                    });
            },

            removeRecipe(recipe){
                axios.post('/api/dashboard/collections/remove', {
                    recipe_id: recipe.id,
                    collection_id: this.collectionId
                })
                    .then((response) => {
                        if(response.data.removed){
                            let index = this.collection.findIndex( (item) => {
                                return item.id === recipe.id;
                            });

                            this.collection.splice(index, 1);
                        }
                    })
                    .catch((error) => {
                        alert('Unable to remove recipe');
                    });
            }
        },

        mounted() {
            axios.get('/api/dashboard/collections/' + this.id + '/recipes')
                .then((response) => {
                    this.collection = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
</script>

<style scoped>
    .selectable:hover {
        cursor: pointer;
    }
</style>

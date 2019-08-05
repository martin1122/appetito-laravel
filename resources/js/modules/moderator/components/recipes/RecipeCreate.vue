<template>
    <div>
        <v-stepper v-model="current" class="grey lighten-4 ma-2">
            <v-stepper-header>
                <v-stepper-step :complete="current > 1" step="1">Main info</v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step :complete="current > 2" step="2">Details</v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step :complete="current > 3" step="3">Ingredients</v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step step="4">Directions</v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
                <v-stepper-content step="1" class="grey lighten-4">
                    <v-layout>
                        <v-flex xs4>
                            <v-checkbox
                                    v-model="recipe.isActive"
                                    label="Active"
                            ></v-checkbox>
                        </v-flex>
                        <v-flex xs4>
                            <v-checkbox
                                    v-model="recipe.isPinned"
                                    label="Pinned"
                            ></v-checkbox>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex class="ma-2">
                            <v-text-field
                                    v-model="recipe.name.uz.value"
                                    v-validate="recipe.name.uz.validation"
                                    :counter="150"
                                    :error-messages="errors.collect('name')"
                                    label="Name in uzbek"
                                    solo
                                    data-vv-name="name"
                                    required
                            ></v-text-field>
                        </v-flex>
                        <v-flex class="ma-2">
                            <v-text-field
                                    v-model="recipe.name.ru.value"
                                    v-validate="recipe.name.ru.validation"
                                    :counter="150"
                                    :error-messages="errors.collect('name')"
                                    label="Name in russian"
                                    solo
                                    data-vv-name="name"
                                    required
                            ></v-text-field>
                        </v-flex>
                        <v-flex class="ma-2">
                            <v-text-field
                                    v-model="recipe.name.en.value"
                                    v-validate="recipe.name.en.validation"
                                    :counter="150"
                                    :error-messages="errors.collect('name')"
                                    label="Name in english"
                                    solo
                                    data-vv-name="name"
                                    required
                            ></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex>
                            <v-textarea
                                    class="ma-2"
                                    solo
                                    name="description"
                                    label="Description in uzbek"
                                    :value="recipe.description.uz"
                            ></v-textarea>
                        </v-flex>
                        <v-flex>
                            <v-textarea
                                    class="ma-2"
                                    solo
                                    name="description"
                                    label="Description in russian"
                                    :value="recipe.description.ru"
                            ></v-textarea>
                        </v-flex>
                        <v-flex>
                            <v-textarea
                                    class="ma-2"
                                    solo
                                    name="description"
                                    label="Description in english"
                                    :value="recipe.description.en"
                            ></v-textarea>
                        </v-flex>
                    </v-layout>
                    <v-layout>
                        <v-flex xs6>
                            <image-upload
                                    label="Select image"
                                    button-text="remove"
                                    @onSelect="uploadedImage"
                                    type="image/*"
                                    class="ma-2">
                            </image-upload>
                        </v-flex>
                        <v-flex xs6>
                            <file-upload
                                    label="Select video"
                                    @onSelect="uploadedVideo"
                                    type="video/*"
                                    class="ma-2">
                            </file-upload>
                        </v-flex>
                    </v-layout>
                    <v-btn
                            color="primary"
                            @click="current = 2"
                    >
                        Continue
                    </v-btn>
                </v-stepper-content>

                <v-stepper-content step="2">
                    <v-layout>
                        <v-flex class="ma-2" xs6>
                            <v-autocomplete
                                    v-model="recipe.nation"
                                    :items="nations"
                                    label="Select Nation"
                                    persistent-hint
                                    solo
                            ></v-autocomplete>
                        </v-flex>
                    </v-layout>
                    <v-layout class="mx-2">
                        <v-flex class="ma-2">
                            <v-slider
                                    v-model="recipe.difficulty.value"
                                    :tick-labels="recipe.difficulty.levels"
                                    :max="4"
                                    :color="difficultyColor"
                                    step="1"
                                    ticks="always"
                                    tick-size="2"
                            ></v-slider>
                        </v-flex>
                    </v-layout>
                    <v-layout align-center row fill-height class="mx-2">
                        <v-flex>
                            <p>Preparation time</p>
                        </v-flex>
                        <v-flex class="ma-2">
                            <v-slider
                                    v-model="time.hours"
                                    color="primary"
                                    :label="time.hours + ' hours'"
                                    inverse-label
                                    hint="How many hours it takes"
                                    prepend-icon="alarm"
                                    thumb-label
                                    min="0"
                                    max="24"
                                    @change="calculateTime">
                            </v-slider>
                        </v-flex>
                        <v-flex class="ma-2">
                            <v-slider
                                    v-model="time.minutes"
                                    color="primary"
                                    :label="time.minutes + ' minutes'"
                                    inverse-label
                                    hint=""
                                    prepend-icon="alarm"
                                    thumb-label
                                    min="0"
                                    max="60"
                                    @change="calculateTime">
                            </v-slider>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex class="ma-2">
                            <v-text-field
                                    v-model="recipe.details.fat"
                                    label="Fat"
                                    suffix="gram">
                            </v-text-field>
                        </v-flex>
                        <v-flex class="ma-2">
                            <v-text-field
                                    v-model="recipe.details.carbs"
                                    label="Carbs"
                                    suffix="gram">
                            </v-text-field>
                        </v-flex>
                        <v-flex class="ma-2">
                            <v-text-field
                                    v-model="recipe.details.protein"
                                    label="Protein"
                                    suffix="gram">
                            </v-text-field>
                        </v-flex>
                        <v-flex class="ma-2">
                            <v-text-field
                                    v-model="recipe.details.calorie"
                                    label="Calorie"
                                    suffix="kkal">
                            </v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-btn
                            color="primary"
                            @click="current = 3"
                    >
                        Continue
                    </v-btn>

                    <v-btn
                            flat
                            @click="current = 1"
                    >
                        Previous
                    </v-btn>
                </v-stepper-content>

                <v-stepper-content step="3">
                    <v-layout class="ma-2">
                        <v-flex>
                            <v-layout>
                                <v-combobox
                                        v-model="ingredient.name"
                                        :items="getIngredientsList"
                                        item-text="name"
                                        item-value="id"
                                        label="Search Ingredients"
                                        :loading="ingredient.isLoading"
                                        :search-input.sync="searchIngredient"
                                        solo
                                        hide-no-data
                                ></v-combobox>
                            </v-layout>
                            <v-card>
                                <v-container fluid>
                                    <v-layout>
                                        <v-flex class="mx-2">
                                            <v-combobox
                                                    v-model="unit.name"
                                                    :items="getUnitsList"
                                                    item-text="name"
                                                    item-value="id"
                                                    label="Search Units"
                                                    :loading="unit.isLoading"
                                                    :search-input.sync="searchUnit"
                                                    hide-no-data
                                            ></v-combobox>
                                        </v-flex>
                                        <v-flex class="mx-2">
                                            <v-text-field
                                                    v-model="ingredient.amount"
                                                    label="Amount"
                                                    :suffix="this.searchUnit">
                                            </v-text-field>
                                        </v-flex>
                                        <v-flex>
                                            <v-btn
                                                    color="primary"
                                                    @click="addIngredient"
                                            >
                                                Add
                                            </v-btn>
                                        </v-flex>
                                    </v-layout>
                                    <v-chip
                                            close
                                            @input="removeIngredient(ingredient.name)"
                                            v-for="ingredient in preparationIngredients"
                                            :key="ingredient.name">
                                        <v-avatar class="teal">{{ingredient.amount}}</v-avatar>
                                        {{ingredient.unit}} &nbsp; <b>{{ingredient.name}}</b>
                                    </v-chip>
                                </v-container>
                            </v-card>
                        </v-flex>
                    </v-layout>
                    <v-btn
                            color="primary"
                            @click="current = 4"
                    >
                        Continue
                    </v-btn>

                    <v-btn
                            flat
                            @click="current = 2"
                    >
                        Previous
                    </v-btn>
                </v-stepper-content>

                <v-stepper-content step="4">
                    <v-layout class="ma-2">
                        <v-flex>
                            <v-layout row wrap>
                                <v-flex xs4>
                                    <v-textarea
                                            class="ma-2"
                                            solo
                                            name="instruction"
                                            label="Instruction in uzbek"
                                            v-model="direction.body.uz"
                                    ></v-textarea>
                                </v-flex>
                                <v-flex xs4>
                                    <v-textarea
                                            class="ma-2"
                                            solo
                                            name="instruction"
                                            label="Instruction in russian"
                                            v-model="direction.body.ru"
                                    ></v-textarea>
                                </v-flex>
                                <v-flex xs4>
                                    <v-textarea
                                            class="ma-2"
                                            solo
                                            name="instruction"
                                            label="Instruction in english"
                                            v-model="direction.body.en"
                                    ></v-textarea>
                                </v-flex>
                                <v-flex xs6>
                                    <image-upload
                                            label="Select image"
                                            button-text="remove"
                                            @onSelect="uploadedDirectionImage"
                                            type="image/*">
                                    </image-upload>
                                </v-flex>
                                <v-flex xs4>
                                    <v-btn
                                            @click="addDirection"
                                            color="info">
                                        Add
                                    </v-btn>
                                </v-flex>
                            </v-layout>
                            <v-divider class="ma-2"></v-divider>
                            <v-timeline v-if="this.directions.length">
                                <v-timeline-item
                                        v-for="direction in directions"
                                        :key="direction.order"
                                        large
                                >
                                    <template v-slot:icon>
                                        <v-avatar size="70">
                                            <img :src="direction.image">
                                        </v-avatar>
                                    </template>
                                    <v-card class="elevation-2">
                                        <v-card-title class="headline">{{direction.order}}</v-card-title>
                                        <v-card-text>{{direction.body.uz}}</v-card-text>
                                        <v-card-text>{{direction.body.ru}}</v-card-text>
                                        <v-card-text>{{direction.body.en}}</v-card-text>
                                    </v-card>
                                </v-timeline-item>
                            </v-timeline>
                        </v-flex>
                    </v-layout>
                    <v-divider class="ma-2"></v-divider>
                    <v-btn
                            color="primary"
                            @click="saveRecipe"
                    >
                        Save
                    </v-btn>

                    <v-btn
                            flat
                            @click="current = 3"
                    >
                        Previous
                    </v-btn>
                </v-stepper-content>
            </v-stepper-items>
            <v-snackbar
                    v-model="snackbar.show"
                    color="error"
                    :timeout="snackbar.timeout"
                    :vertical="true"
            >
                {{ snackbar.text }}
                <v-btn
                        dark
                        flat
                        @click="snackbar.show = false"
                >Close</v-btn>
            </v-snackbar>
        </v-stepper>
    </div>
</template>

<script>
    import ImageUpload from '../../../../basic/ImageUpload';
    import FileUpload from '../../../../basic/FileUpload';
    import { nations as getNations } from '../../api/naion';
    import { ingredients as getIngredients } from "../../api/ingredient";
    import { units as getUnits } from "../../api/unit";
    import { storeRecipe } from "../../api/recipe";
    import { find, remove } from 'lodash';

    export default {
        name: "RecipeCreate",
        components: {FileUpload, ImageUpload},

        data() {
            return {
                snackbar: {
                    show: false,
                    text: 'You cannot add empty item',
                    timeout: 2000
                },
                current: 4,
                nations: [],
                ingredients: [],
                ingredient: {
                    amount: '',
                    name: '',
                    isLoading: false
                },
                preparation: {
                    id: null,
                    name: '',
                    amount: '',
                    unit: ''
                },
                units: [],
                unit: {
                    id: null,
                    name: '',
                    isLoading: false
                },
                preparationIngredients: [],
                searchIngredient: null,
                searchUnit: null,
                direction: {
                    order: 1,
                    body: {
                        uz: '',
                        en: '',
                        ru: ''
                    },
                    image: ''
                },
                directions: [],
                time: {
                    hours: 0,
                    minutes: 0,
                },
                recipe: {
                    name: {
                        uz: {
                            value: '',
                            validation: 'required|max:150'
                        },
                        ru: {
                            value: '',
                            validation: 'max:150'
                        },
                        en: {
                            value: '',
                            validation: 'max:150'
                        }
                    },
                    description: {
                        uz: '',
                        ru: '',
                        en: ''
                    },
                    difficulty: {
                        levels: ['','easy', 'medium', 'hard', 'professional'],
                        value: 1
                    },
                    isPinned: null,
                    isActive: null,
                    video: '',
                    image: '',
                    nation: '',

                    details: {
                        prep_time: 0,
                        fat: null,
                        carbs: null,
                        protein: null,
                        calorie: null
                    }
                },
            }
        },

        computed: {
            difficultyColor(){
                switch(this.recipe.difficulty.value){
                    case 1:
                        return "blue";
                    case 2:
                        return "green";
                    case 3:
                        return "orange";
                    case 4:
                        return "red";
                    default:
                        return "grey";
                }
            },

            getIngredientsList(){
                return this.ingredients;
            },

            getUnitsList(){
                return this.units;
            }
        },

        methods: {
            uploadedVideo(video){
                this.recipe.video = video;
            },

            uploadedImage(image){
                this.recipe.image = image;
            },

            calculateTime(){
                this.recipe.details.prep_time = this.time.hours * 60 + this.time.minutes;
            },

            removeIngredient(name){
                this.preparationIngredients = remove(this.preparationIngredients, (item) => {
                    return item.name !== name;
                })
            },

            addIngredient(){
                if(this.ingredient.name === ''){
                    this.snackbar.show = true;
                    return;
                }

                let ingredient = find(this.ingredients, { name: this.searchIngredient });
                let unit = find(this.units, { id: this.unit.id });

                this.preparation.amount = this.ingredient.amount;

                if(!ingredient){
                    this.preparation.name = this.searchIngredient;
                }else{
                    this.preparation.id = ingredient.id;
                    this.preparation.name = ingredient.name;
                }

                if(!unit){
                    this.preparation.unit = this.searchUnit;
                }else{
                    this.preparation.unit = unit.name;
                }

                if(!find(this.preparationIngredients, { name: this.preparation.name })) {
                    this.preparationIngredients.push(Object.assign({}, this.preparation));
                }
            },

            addDirection(){
                if(this.direction.body.uz === '' && this.direction.body.ru === '' && this.direction.body.en === ''){
                    this.snackbar.show = true;
                    return;
                }

                this.directions.push(Object.assign({}, this.direction,
                    {order: this.direction.order++}));

                this.direction.body = '';
                this.direction.image = null;
            },

            uploadedDirectionImage(image){
                this.direction.image = image;
            },

            saveRecipe(){
                storeRecipe(this.recipe, {'Accept-Language': 'en'})
            }
        },

        watch: {
            searchIngredient (oldVal, newVal) {
                if (this.ingredient.isLoading) return;

                this.ingredient.names = [];
                this.ingredient.isLoading = true;

                getIngredients({
                    name: oldVal
                }, {'Accept-Language': 'en'}
                ).then((response) => {
                    this.ingredients = response.data.data;
                }).catch((error) => {
                    console.log(error);
                }).finally(() => {
                    this.ingredient.isLoading = false;
                });
            },

            searchUnit (oldVal, newVal) {

                if (this.unit.isLoading) return;

                this.unit.names = [];
                this.unit.isLoading = true;

                getUnits({
                        name: oldVal
                    }, {'Accept-Language': 'en'}
                ).then((response) => {
                    this.units = response.data.data;
                }).catch((error) => {
                    console.log(error);
                }).finally(() => {
                    this.unit.isLoading = false;
                });
            }
        },

        mounted() {
            getNations().then((response) => {
                this.nations = response.data;
            }).catch((error) => {
                console.log(error);
            });
        }
    }
</script>

<style scoped>

</style>

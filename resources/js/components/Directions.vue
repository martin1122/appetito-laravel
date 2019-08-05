<template>
    <div>
        <div class="row">
            <div class="col-md-4">
                <div class="form-group">
                    <label for="bodyUz">Instruction Uz</label>
                    <textarea id="bodyUz" class="form-control" v-model="direction.body.uz"></textarea>
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label for="bodyRu">Instruction Ru</label>
                    <textarea id="bodyRu" class="form-control" v-model="direction.body.ru"></textarea>
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label for="bodyEn">Instruction En</label>
                    <textarea id="bodyEn" class="form-control" v-model="direction.body.en"></textarea>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 offset-8 d-flex justify-content-between">
                <a class="btn btn-info text-white" @click="updateDirection"> <i class="ti-check"></i> update </a>
                <a class="btn btn-success text-white" @click="addDirection"> <i class="ti-plus"></i> add </a>
            </div>
        </div>
        <hr>
        <div class="row mb-4" v-for="(dir, index) in directions" :key="dir.order">
            <div class="col-11">
                <tabs class="m-4"
                      :order="dir.order"
                      :languages="dir.body"
                      v-on:edit="editDirection"
                      v-on:delete="deleteDirection">
                </tabs>
            </div>
            <div class="col-1 d-flex align-items-center row">
                <div class="col-md-12">
                    <button type="button" class="btn btn-warning" @click="upButton(index)" :disabled="index === 0"> <i class="ti-arrow-up"></i> </button>
                </div>
                <div class="col-md-12">
                    <button type="button" class="btn btn-warning" @click="downButton(index)" :disabled="index === directions.length - 1"> <i class="ti-arrow-down"></i> </button>
                </div>
            </div>
            <div class="col-md-12 m-4">
                <img :src="dir.image" alt="">
                <label :for="'directionImage' + dir.order"><strong>Step {{ dir.order }} image</strong></label>
                <input :id="'directionImage' + dir.order" type="file" class="form-control-file" :name="'directions[' + dir.order + '][image]'">
                <span class="small">Upload images just before you submit</span>
            </div>
            <div>
                <input type="hidden" :name="'directions[' + dir.order + '][id]'" :value="dir.id">
                <input type="hidden" :name="'directions[' + dir.order + '][body][uz]'" :value="dir.body.uz">
                <input type="hidden" :name="'directions[' + dir.order + '][body][ru]'" :value="dir.body.ru">
                <input type="hidden" :name="'directions[' + dir.order + '][body][en]'" :value="dir.body.en">
            </div>
        </div>
    </div>
</template>

<script>
    import TranslatableComponent from './TranslationComponent';
    import Tabs from '../basic/Tabs';

    export default {
        name: "Directions",

        components: {
            TranslatableComponent,
            Tabs
        },

        data(){
            return {
                directions: [],
                direction: {
                    id: null,
                    order: 1,
                    body: {
                        uz: '',
                        en: '',
                        ru: ''
                    },
                    image: ''
                }
            }
        },

        props: {
            value: Array
        },

        mounted(){
            if(this.value){
                this.directions = this.value;
            }
        },

        methods: {
            addDirection(){
                this.direction.order = this.directions.length + 1;
                this.directions.push(Object.assign({}, {
                    order: this.direction.order++,
                    body: Object.assign({}, this.direction.body)
                }));
                this.updateBody();
            },

            editDirection(order){

                let direction = this.directions.find( (direction) => direction.order === order);
                this.direction.order = direction.order;
                this.updateBody(direction.body.uz, direction.body.ru, direction.body.en);
            },

            updateDirection(){
                this.directions = this.directions.map( (direction) => {
                    if(this.direction.order === direction.order){
                        direction.body.uz = this.direction.body.uz;
                        direction.body.ru = this.direction.body.ru;
                        direction.body.en = this.direction.body.en;
                    }

                    return direction;
                });

                this.updateBody();
                this.direction.order = this.directions.length + 1;
            },

            deleteDirection(order){

                this.directions = this.directions.filter( (direction) => direction.order !== order );
                this.directions = this.directions.map( (direction, index) => {
                    direction.order = index + 1;
                    return direction
                });
                this.direction.order = this.directions.length + 1;
            },

            updateBody(uz ='', ru ='', en = ''){
                this.direction.body.uz = uz;
                this.direction.body.ru = ru;
                this.direction.body.en = en;
            },

            upButton(index){
                let body = this.directions[index - 1].body;

                Vue.set(this.directions, index - 1, Object.assign({}, this.directions[index - 1], {
                    body: this.directions[index].body
                }));

                Vue.set(this.directions, index, Object.assign({}, this.directions[index], {
                    body: body
                }));
            },

            downButton(index){
                let body = this.directions[index + 1].body;

                Vue.set(this.directions, index + 1, Object.assign({}, this.directions[index + 1], {
                    body: this.directions[index].body
                }));

                Vue.set(this.directions, index, Object.assign({}, this.directions[index], {
                    body: body
                }));
            }
        }
    }
</script>

<style scoped>

</style>

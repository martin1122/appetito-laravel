<template>
    <div>
        <div class="form-group">
            <label :for="name + 'Input'">{{ label }}</label>
            <input :id="name + 'Input'" class="form-control" type="text" :name="name" v-model="keyword" @keyup="checkInputValue">
        </div>
        <ul class="list-group" v-if="showList">
            <li v-for="item in search" class="list-group-item selectable" @click="chooseOption(item)">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "SearchableSelect",

        data(){
            return {
                keyword: '',
                list: [],
                showList: false
            }
        },

        props: {
            items: Array,
            label: String,
            name: String,
            value: String,
        },

        computed: {
            search(){
                return this.list.filter( item => {
                    return item.toLowerCase().includes(this.keyword.toLowerCase())
                });
            }
        },

        methods: {
            checkInputValue(){
                this.showList = this.keyword !== '';
            },

            chooseOption(item){
                this.keyword = item;
                this.showList = false;
            }
        },

        mounted() {
            this.list = this.items;
            if(this.value){
                this.keyword = this.value;
            }
        }
    }
</script>

<style scoped>
    .selectable:hover{
        cursor: pointer;
    }
</style>

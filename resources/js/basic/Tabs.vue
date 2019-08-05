<template>
    <div class="border border-secondary rounded bg-blue">
        <nav>
            <div class="nav nav-tabs bg-light d-flex" id="nav-tab" role="tablist">
                <a class="nav-item nav-link active" :id="'nav-uz-tab' + order" data-toggle="tab" :href="'#nav-uz' + order" role="tab" :aria-controls="'nav-uz' + order" aria-selected="true">Uz</a>
                <a class="nav-item nav-link" :id="'nav-ru-tab' + order" data-toggle="tab" :href="'#nav-ru' + order" role="tab" :aria-controls="'nav-ru' + order" aria-selected="false">Ru</a>
                <a class="nav-item nav-link" :id="'nav-en-tab' + order" data-toggle="tab" :href="'#nav-en' + order" role="tab" :aria-controls="'nav-en' + order" aria-selected="false">En</a>
                <a class="nav-item nav-link ml-auto" id="editTab" data-toggle="tab" href="#" role="tab" aria-controls="" aria-selected="false" @click="editButtonClicked"><i class="ti-pencil text-primary"></i></a>
                <a class="nav-item nav-link" id="deleteTab" data-toggle="tab" href="#" role="tab" aria-controls="" aria-selected="false" @click="deleteButtonClicked"><i class="ti-trash text-danger"></i></a>
            </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active tabPadding" :id="'nav-uz' + order" role="tabpanel" :aria-labelledby="'nav-uz-tab' + order"><p>{{languages.uz}}</p></div>
            <div class="tab-pane fade tabPadding" :id="'nav-ru' + order" role="tabpanel" :aria-labelledby="'nav-ru-tab' + order"><p>{{languages.ru}}</p></div>
            <div class="tab-pane fade tabPadding" :id="'nav-en' + order" role="tabpanel" :aria-labelledby="'nav-en-tab' + order"><p>{{languages.en}}</p></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Tabs",

        data(){
            return {

            }
        },

        props: {
            languages: Object,
            order: Number
        },

        methods: {

            editButtonClicked(){
                this.$emit('edit', this.order);
            },

            deleteButtonClicked(){
                this.$emit('delete', this.order)
            }
        }
    }
</script>

<style scoped>
    .tabPadding{
        padding: 20px;
    }
</style>

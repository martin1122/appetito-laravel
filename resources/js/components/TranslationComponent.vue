<template>
    <div>
        <div class="form-group">
            <a class="btn btn-info" @click="showRu = !showRu">
                <span class="text-white">Russian</span>
            </a>
            <a class="btn btn-info" @click="showEn = !showEn">
                <span class="text-white">English</span>
            </a>
        </div>
        <div v-if="type === 'text'">
            <div class="form-group" v-if="showRu">
                <label :for="translatable + 'Ru'">Russian Translation</label>
                <input :id="translatable + 'Ru'" class="form-control" :name="translatable + '[ru]'" type="text" v-model="ruTranslation">
            </div>
            <div class="form-group" v-if="showEn">
                <label :for="translatable + 'En'">English Translation</label>
                <input :id="translatable + 'En'" class="form-control" :name="translatable + '[en]'" type="text" v-model="enTranslation">
            </div>
        </div>
        <div v-else-if="type === 'textarea'">
            <div class="form-group" v-if="showRu">
                <label :for="translatable + 'Ru'">Russian Translation</label>
                <textarea :name="translatable + '[ru]'" :id="translatable + 'Ru'" v-model="ruTranslation" class="form-control"></textarea>
            </div>
            <div class="form-group" v-if="showEn">
                <label :for="translatable + 'En'">English Translation</label>
                <textarea :name="translatable + '[en]'" :id="translatable + 'En'" v-model="enTranslation" class="form-control"></textarea>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "TranslationComponent",
        props: {
            translatable: String,
            type: String,
            visible: Boolean,
            ru: String,
            en: String
        },

        data(){
            return {
                showEn: this.visible,
                showRu: this.visible,
                ruTranslation: this.ru,
                enTranslation: this.en
            }
        }
    }
</script>

<style scoped>

</style>

<template>
    <v-card>
        <v-layout row wrap class="pa-2">
            <v-flex v-if="!image">
                <p class="label">{{label}}</p>
                <input type="file" @change="onFileChange" :accept="type">
            </v-flex>
            <v-flex v-else>
                <img :src="image" />
                <v-btn @click="removeImage">{{buttonText}}</v-btn>
            </v-flex>
        </v-layout>
    </v-card>
</template>

<script>
    export default {
        name: "ImageUpload",
        props: {
            label: String,
            buttonText: String,
            type: String
        },

        data(){
            return {
                image: ''
            }
        },

        methods: {
            onFileChange(e) {
                let files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;
                this.createImage(files[0]);
            },
            createImage(file) {
                let image = new Image();
                let reader = new FileReader();

                reader.onload = (e) => {
                    this.image = e.target.result;
                    this.$emit('onSelect', this.image);
                };
                reader.readAsDataURL(file);
            },
            removeImage: function (e) {
                this.image = '';
            }
        }
    }
</script>

<style scoped>
    img {
        width: 30%;
        display: block;
    }

    .label{
        margin-bottom: 0;
    }
</style>

<template>
    <v-card class="pa-2">
        <v-layout row wrap>
            <v-flex>
                <p class="label">{{label}}</p>
                <input type="file" @change="onFileChange" :accept="type">
            </v-flex>
        </v-layout>
    </v-card>
</template>

<script>
    export default {
        name: "FileUpload",
        props: {
            label: String,
            type: String
        },
        data(){
            return {
                file: ''
            }
        },

        methods: {
            onFileChange(e) {
                let files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;
                this.createFile(files[0]);
            },
            createFile(file) {
                let reader = new FileReader();

                reader.onload = (e) => {
                    this.file = e.target.result;
                    this.$emit('onSelect', this.file);
                };
                reader.readAsDataURL(file);
            },
            removeFile: function (e) {
                this.file = '';
            }
        }
    }
</script>

<style scoped>
    .label{
        margin-bottom: 0;
    }
</style>

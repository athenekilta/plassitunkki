<template>
    <div class="edit-container">
        <div class="edit-attributes">
            <div class="input-container">
                <label for="first_name">Valitse kenttä, jossa on etunimi</label>
                <select name="etunimi" id="first_name">
                    <option v-for="attribute in csvAttributes" :value="attribute" :key="attribute">{{attribute}}</option>
                </select> 
            </div>
            <div class="input-container">
                <label for="last_name">Valitse kenttä, jossa on sukunimi</label>
                <select name="sukunimi" id="last_name">
                    <option v-for="attribute in csvAttributes" :value="attribute" :key="attribute">{{attribute}}</option>
                </select> 
            </div>
            <div class="input-container">
                <label for="preference_field">Valitse kenttä, jossa on pöytätoive</label>
                <select name="pöytätoive" id="preference_field">
                    <option v-for="attribute in csvAttributes" :value="attribute" :key="attribute">{{attribute}}</option>
                </select>  
            </div>   
        </div> 
        <div class="text-area">
            <textarea v-model="text"></textarea>  
        </div>
    </div>
</template>

<script>

import axios from 'axios'
export default {
    name: 'MainPage',
    methods: {
        handleFileUpload( event ){
            this.file = event.target.files[0];
        },
        submitFile(){
            const formData = new FormData();
            formData.append('file', this.file);
            axios.post( '/single-file',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            ).then(function(){
        console.log('SUCCESS!!');
        })
        .catch(function(){
        console.log('FAILURE!!');
        });
    },
    },
    props: {
        csvAttributes: Array,
        csvText: String
    },
    data() {
        return {
            file: '',
            text: this.csvText
        }
    }
}
</script>

<style scoped>

    .edit-container {
        margin-top: 20px;
    }

    .edit-attributes {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .input-container {
        margin-top: 5px;
    }
    .input-container *{
        margin-right: 5px;
    }

    .text-area {
        margin-top: 50px;
    }


</style>

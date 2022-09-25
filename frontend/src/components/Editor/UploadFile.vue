<template>
    <div class="upload-container">
        <label for="csv">Lisää csv-tiedosto:</label>
        <div class="download">
            <input type="file" id="csv" accept=".csv" @change="handleFileUpload( $event )"/>
            <button v-on:click="submitFile()">Lataa</button>
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
data() {
    return {
        file: ''
    }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.upload-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}


</style>

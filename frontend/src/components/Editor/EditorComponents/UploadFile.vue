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

import Papa from 'papaparse'

export default {
name: 'MainPage',
methods: {
    handleFileUpload( event ){
        this.file = event.target.files[0];
    },
    submitFile(){
        const self = this
        Papa.parse(this.file, {
        complete: function(results) {
            const array = []
            for (let i in results.data) {
                array.push(results.data[i].toString().split(","))
            }
            const attributes = array[0]
            array.shift()
            array.pop()
            var arr = [];
            for (var i=1;i<array.length;i++) {
                var user=array[i]
                let json_arr_in = {}
                for (var j=0;j<attributes.length;j++) {
                    json_arr_in[attributes[j]] = user[j] 
                }
                arr.push(json_arr_in)
            }
            self.$emit('newData', [arr, attributes])
        }
    })
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

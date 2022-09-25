<template>
  <div class="main-container">
    <UploadFile />
    <EditUploadedFile :csvAttributes="this.csvAttributes" :csvText="this.csvText"/>
  </div>
</template>

<script>
import EditUploadedFile from './EditUploadedFile.vue';
import UploadFile from './UploadFile.vue';
export default {
    name: "MainPage",
    data() {
      return {
        csvAttributes: ["test1", "test2", "test3"],
        csvText: "moi,miten,menee\nmoi2,miten2,menee2"
      }
    },
    components: { EditUploadedFile, UploadFile }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.main-container {
    background-color: white;
    width: 70%;
    margin: 0 auto;
    margin-top: 50px;
    padding: 30px 0;
}
</style>

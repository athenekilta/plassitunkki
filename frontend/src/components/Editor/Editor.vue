<template>
  <div class="main-container">
    <UploadFile @newData="updateUsers"/>
    <EditUploadedFile :users="this.users" :csvAttributes="this.csvAttributes"/>
  </div>
</template>

<script>
import EditUploadedFile from './EditorComponents/EditUploadedFile.vue';
import UploadFile from './EditorComponents/UploadFile.vue';

export default {
    name: "MainPage",
    data() {
      return {
        csvAttributes: [],
        users: []
      }
    },
    components: { EditUploadedFile, UploadFile },
    methods: {
      updateUsers(value) {
        this.users = value[0]
        this.csvAttributes = value[1]
      }
    }
}
</script>
<style scoped>
  .main-container {
    background-color: white;
    width: 70%;
    margin: 0 auto;
    margin-top: 50px;
    padding: 30px 0;
    min-height: 500px;
  }
</style>

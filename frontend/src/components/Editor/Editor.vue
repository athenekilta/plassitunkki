<template>
  <div class="main-container">
    <UploadFile @newData="updateUsers"/>
    <EditUploadedFile :users="this.users" :csvAttributes="this.csvAttributes"/>
    <TableOrder :userSize="this.users.length"/>
  </div>
</template>

<script>
import EditUploadedFile from './EditUploadedFile.vue';
import UploadFile from './UploadFile.vue';
import TableOrder from './TableOrder.vue';
//import users from '../../assets/users.json'


export default {
    name: "MainPage",
    data() {
      return {
        csvAttributes: [],
        users: []
      }
    },
    components: { EditUploadedFile, UploadFile, TableOrder },
    methods: {
      updateUsers(value) {
        this.users = value[0]
        this.csvAttributes = value[1]
      }
    }
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
    min-height: 500px;
}
</style>

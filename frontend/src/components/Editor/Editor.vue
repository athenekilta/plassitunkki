<template>
  <div class="main-container">
    <UploadFile @newData="updateUsers"/>
    <EditUploadedFile :csvAttributes="this.csvAttributes" :chosenCsvAttributes="this.chosenCsvAttributes" :users="this.users"/>
  </div>
</template>

<script>
import EditUploadedFile from './EditUploadedFile.vue';
import UploadFile from './UploadFile.vue';
//import users from '../../assets/users.json'
import columns from '../../assets/columns.json'


export default {
    name: "MainPage",
    data() {
      return {
        csvAttributes: columns.all_columns.map(column => column.id),
        chosenCsvAttributes: columns.chosen_columns.map(column => column.id),
        users: []
      }
    },
    components: { EditUploadedFile, UploadFile },
    methods: {
      updateUsers(value) {
        this.users = value
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
}
</style>

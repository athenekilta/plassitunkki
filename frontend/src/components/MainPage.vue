<template>
    <div class="main-page">
      <h1>Athenen plassitunkki</h1>
      <Editor />
    </div>
  </template>
  
  <script>

    import Editor from './Editor/Editor.vue'

  export default {
    name: 'MainPage',
    components: {
        Editor
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

    .main-page {
        width: 100%;
        min-height: 100%;
        background-color: #5E8C64;
    }

    h1 {
        padding-top: 40px;
        color: #FAFAFA;
    }
    a {
        color: #42b983;
    }
  </style>
  
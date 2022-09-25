<template>
    <div class="table-container">
        <button @click="add(tableLocation, tableSize)">Lisää pöytä</button>
        <input type="number" v-model="tableSize" placeholder="pöydän koko">
        <input type="number" v-model="tableLocation" placeholder="rivi (1-5)">
        <div class="row">
        <div class="col-4 table-column" v-for="list in this.lists" :key="list">
    
            <draggable
            id="first"
            data-source="juju"
            :list="list"
            class="list-group"
            group="a"
            item-key="name"
            >
                <template #item="{ element, index }">
                    <div class="list-group-item">
                    {{ element.name }}
                    <button @click="removeAt(list, index)">X</button>
                    </div>
                </template>
            </draggable>
        </div>
    </div>
    </div>
  </template>
  
  <script>
  import draggable from 'vuedraggable';
  let id = 1;
  export default {
    name: "two-list-headerslots",
    display: "Two list header slot",
    order: 14,
    components: {
      draggable
    },
    data() {
      return {
          lists: {
            1: [
                { name: "3", id: 0 },
                { name: "3", id: 1 },
                { name: "5", id: 2 }
            ],
            2: [
                { name: "2", id: 3 },
                { name: "2", id: 4 }
            ],
            3: [
                { name: "2", id: 5 },
                { name: "2", id: 6 }
            ],
            4: [],
            5: []
          },
          tableSize: '',
          tableLocation: ''
      };
    },
    methods: {
      add: function(list, size) {
        this.lists[list].push({ name: size, id: id++ });
      },
      removeAt(list, idx) {
        list.splice(idx, 1);
    },
    }
  };
  </script>
  <style scoped>
      .row {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        background-color: #5E8C64;
        max-width: 70%;
        max-height: 40%;
        margin: 30px auto;
      }
      .table-column {
          padding: 10px;
      }
      .list-group-item {
          background-color: white;
          padding: 2px 10px;
          margin: 5px;
          border-radius: 4px;
      }
      .table-container {
          margin-top: 20px;
      }
  </style>
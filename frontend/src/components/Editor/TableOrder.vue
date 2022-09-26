<template>
    <div class="table-container" v-if="this.userSize">
        <div class="automated_table_order_info">
            <p><b>Automaattinen pöytien muodostus</b></p>
            <div>
                <label>Valitse haluttu pöytien koko</label>
                <input type="number" v-model="automated_table_size" placeholder="pöytien koko">
            </div>
            <div>
                <label>Valitse haluttu sarakkeen koko</label>
                <input type="number" v-model="automated_column_size" placeholder="sarakeen koko" min="1">
            </div>
        </div>
        <div class="automated_table_order_info">
            <p><b>Manuaalinen pöydän lisäys</b></p>
            <div>
                <label>Valitse haluttu pöydän koko</label>
                <input type="number" v-model="tableSize" placeholder="pöydän koko">
            </div>
            <div>
                <label>Valitse haluamasi rivi</label>
                <input type="number" v-model="tableLocation" placeholder="rivi" min="1" :max="Object.keys(this.lists).length + 1">
            </div>
            <button @click="addTable(tableLocation, tableSize)">Lisää pöytä</button>
        </div>
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
    <div class="send-text-information">
            <div class="input-container">
                <label for="last_name">Plassin nimi: </label>
                <input type="text">
            </div>
            <button type="button">Plassita</button>
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
    props: {
        userSize: Number
    },
    data() {
      return {
          lists: {},
          tableSize: '',
          tableLocation: '',
          automated_table_size: 6,
          automated_column_size: 3
      };
    },
    methods: {
      addTable: function(list, size) {
        if (list > Object.keys(this.lists).length) {
            this.lists[list] = [{name: size, id: id++ }]
        } else {
            this.lists[list].push({ name: size, id: id++ });
        }
        this.tableLocation = ''
      },
      removeAt(list, idx) {
        list.splice(idx, 1);
        if (Object.keys(list).length == 0) delete this.lists.list;
      },
      updateTables() {
          this.emptyTables()
          const dividend = this.automated_column_size * this.automated_table_size
          let i = 1
          while (i - 1 < this.userSize) {
            const tablePositioning = Math.ceil(i / dividend)
            if (this.userSize - i >= this.automated_table_size) this.addTable(tablePositioning,this.automated_table_size)
            else this.addTable(tablePositioning, this.userSize - i + 1)
            i += this.automated_table_size
          }
      },
      emptyTables() {
        for (const key in this.lists) {
            delete this.lists[key];
        }
      }
    },
    watch: {
        userSize: function() {
            this.updateTables()
        },
        automated_table_size: function() {
            this.updateTables()
        },
        automated_column_size: function() {
            this.updateTables()
        },
    }
  };
  </script>
  <style scoped>
      .row {
        display: flex;
        flex-direction: row;
        background-color: #5E8C64;
        max-width: 80%;
        max-height: 40%;
        margin: 30px auto;
        overflow-x: scroll;
      }
      .table-column {
          padding: 10px;
      }
      .list-group-item {
          background-color: white;
          padding: 2px 10px;
          margin: 5px;
          border-radius: 4px;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: space-between
      }
      .table-container {
          margin-top: 20px;
          width: 100%;
      }
      .automated_table_order_info {
          margin-top: 20px;
      }
  </style>
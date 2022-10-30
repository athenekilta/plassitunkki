<template>
    <div class="edit-container">
        <div class="edit-attributes" v-if="text">
            <div class="input-container">
                <label for="first_name">Valitse kenttä, jossa on etunimi</label>
                <select name="etunimi" id="first_name" :value="firstName" v-model="firstName" @change="parseData()">
                    <option v-for="attribute in csvAttributes" :value="attribute" :key="attribute">{{attribute}}</option>
                </select> 
            </div>
            <div class="input-container">
                <label for="last_name">Valitse kenttä, jossa on sukunimi</label>
                <select name="sukunimi" id="last_name" :value="lastName" v-model="lastName" @change="parseData()">
                    <option v-for="attribute in csvAttributes" :value="attribute" :key="attribute">{{attribute}}</option>
                </select> 
            </div>
            <div class="input-container">
                <label for="preference_field">Valitse kenttä, jossa on pöytätoive</label>
                <select name="pöytätoive" id="preference_field" :value="preference" v-model="preference" @change="parseData()">
                    <option v-for="attribute in csvAttributes" :value="attribute" :key="attribute">{{attribute}}</option>
                </select>  
            </div>   
        </div> 
        <div class="text-area">
            <textarea v-model="text" ref="resize" @focus="resizeTextarea" @keyup="resizeTextarea"></textarea>  
        </div>
        <TableOrder :userSize="this.users.length" @updateTableList="updateTableList" />
        <div class="send-text-information">
            <div class="input-container">
                <label for="last_name">Plassin nimi: </label>
                <input type="text" v-model="name">
            </div>
            <button type="button" @click="sendInformation()">Plassita</button>
            <div>{{ this.showMessage }}</div>
        </div>
    </div>
</template>

<script>

import TableOrder from './TableOrder.vue'
import axios from 'axios'

export default {
    name: "MainPage",
    methods: {
        parseData() {
            let array = this.users;
            let text = "";
            for (let user in array) {
                text += array[user][this.firstName] + "," + array[user][this.lastName] + "," + array[user][this.preference] + "\n";
            }
            this.text = text;
            return text;
        },
        parseDataToArray() {
            const parsedDataArray = this.text.split("\n").map(userRow => userRow.split(","));
            return parsedDataArray
        },
        resizeTextarea() {
            if (this.text) {
                let area = this.$refs.resize;
                let text = this.text.split("\n");
                let length = Math.max(...(text.map(el => el.length)));
                area.style.overflow = "hidden";
                area.style.height = text.length * 15 + "px";
                area.style.width = length * 9 + "px";
            }
        },
        updateUsers() {
            const parsedUsers = JSON.parse(JSON.stringify(this.users));
            this.firstName = this.csvAttributes[0];
            this.lastName = this.csvAttributes[1];
            this.preference = this.csvAttributes[2];
            this.attributes = this.csvAttributes;
            this.text = this.parseData(parsedUsers);
            this.$refs.resize.dispatchEvent(new Event("keyup"));
        },
        async sendInformation() {
            this.showMEssage = ''
            const userInformation = this.parseDataToArray();
            if (userInformation.length == 0 || this.name === "" || this.tableList.length == 0) {
                this.showMessage = "Täytäthän kaikki kentät"
            } else {
                try {
                    const response = await axios({
                        method: 'post',
                        url: "http://localhost:3000/api/v1/new_seating",
                        data: {
                            "users": userInformation, 
                            "tables": this.tableList,
                            "name": this.name
                        }
                    })
                    const url = await response.data
                    console.log(url);
                    this.showMessage = "Ohjataan uudelle sivulle..."
                } catch (error) {
                this.showMessage = error.message
                }
            }
        },
        updateTableList(value) {
            this.tableList = value
        }
    },
    props: {
        users: Array,
        csvAttributes: Array
    },
    data() {
        return {
            file: "",
            text: "",
            firstName: "",
            lastName: "",
            preference: "",
            attributes: [],
            tableList: {},
            name: '',
            showMessage: ''
        };
    },
    watch: {
        users: function () {
            this.updateUsers();
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.$refs.resize.dispatchEvent(new Event("keyup"));
        });
    },
    components: { TableOrder }
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
        width: 100px;
    }

    .text-area {
        margin-top: 50px;
    }

    button {
        margin-top: 10px;
    }


</style>

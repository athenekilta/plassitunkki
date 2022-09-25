<template>
    <div class="edit-container">
        <div class="edit-attributes">
            <div class="input-container">
                <label for="first_name">Valitse kenttä, jossa on etunimi</label>
                <select name="etunimi" id="first_name" :value="defaultFirstNameValue">
                    <option v-for="attribute in csvAttributes" :value="attribute" :key="attribute">{{attribute}}</option>
                </select> 
            </div>
            <div class="input-container">
                <label for="last_name">Valitse kenttä, jossa on sukunimi</label>
                <select name="sukunimi" id="last_name" :value="defaultLastNameValue">
                    <option v-for="attribute in csvAttributes" :value="attribute" :key="attribute">{{attribute}}</option>
                </select> 
            </div>
            <div class="input-container">
                <label for="preference_field">Valitse kenttä, jossa on pöytätoive</label>
                <select name="pöytätoive" id="preference_field" :value="defaultPreferenceValue">
                    <option v-for="attribute in csvAttributes" :value="attribute" :key="attribute">{{attribute}}</option>
                </select>  
            </div>   
        </div> 
        <div class="text-area">
            <textarea v-model="text" ref="resize" @focus="resizeTextarea" @keyup="resizeTextarea"></textarea>  
        </div>
    </div>
</template>

<script>

export default {
    name: 'MainPage',
    methods: {
        parseData(array) {
            let text = ''
            for (let user in array) {
                text += array[user][this.defaultFirstNameValue] + "," + array[user][this.defaultLastNameValue] + "," + array[user][this.defaultPreferenceValue] + "\n"
            }
            return text
        },
        resizeTextarea(e) {
            let area = e.target;
            area.style.overflow = 'hidden';
            area.style.height = area.scrollHeight + 'px';
            let text = this.text.split("\n");
            let length = Math.max(...(text.map(el => el.length)));
            area.style.width = length*9 + 'px';
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.$refs.resize.dispatchEvent(new Event('keyup'));
        });
    },
    props: {
        csvAttributes: Array,
        chosenCsvAttributes: Array,
        users: Array
    },
    data() {
        return {
            file: '',
            text: '',
            defaultFirstNameValue: this.chosenCsvAttributes[0],
            defaultLastNameValue: this.chosenCsvAttributes[1],
            defaultPreferenceValue: this.chosenCsvAttributes[2],
        }
    },
    created() {
        const parsedUsers = JSON.parse(JSON.stringify(this.users))
        this.text = this.parseData(parsedUsers)
    }
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
    }

    .text-area {
        margin-top: 50px;
    }


</style>

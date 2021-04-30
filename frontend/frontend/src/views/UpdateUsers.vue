<template>
    <Container>
        <form>
            <div class="columnInputs">
                <input v-model="dataUpdate.nome" type="text" placeholder="Nome">
                <input v-model="dataUpdate.email" placeholder="Lançamento">
                <input v-model="dataUpdate.telephone" placeholder="Telefone" />
            </div>
            <div class="columnInputs">
                <!-- values from classification indication-->
                <select v-model="dataUpdate.city.state" @change="loadCitys(dataUpdate.city.state)">
                    <option 
                        v-for="states in valuesStates" 
                        :key="states.id"
                        :value="dataUpdate.city.state">
                        {{ states.name }}
                    </option>
                </select>
                <!-- values from genres-->
                <select v-model="dataUpdate.city.id">
                    <option 
                        v-for="citys in valuesCitys" 
                        :key="citys.id"
                        :value="dataUpdate.city.id">
                        {{ citys.name }}
                    </option>
                </select>
            </div>
            <button class="btnAddfilm" type="submit" @click="updadeUser">
                Atualizar
            </button>
        </form>
    </Container>
</template>

<script>
import styled from 'vue-styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding-top: 60px;
    background: #393939;
    display: flex;
    justify-content: center;
`;
export default {
    components: {
       Container,
    },
   data() {
       return {
        valuesUpdate: [],
        valuesStates: null,
        iduser: '',
        valuesCitys: null,
        dataUpdate: {
            type: { name: '', id: ''},
            city: { id: '', state: '', name: ''},
            nome: '',
            email: '',
            telephone: '',
        }
       }
   },
   created() {
        this.dataUpdate.nome = this.$store.getters.getUser.name;
        this.iduser = this.$store.getters.getUser.id;
        this.dataUpdate.email = this.$store.getters.getUser.email;
        this.dataUpdate.telephone = this.$store.getters.getUser.telephone;
        this.dataUpdate.type.id = this.$store.getters.getUser.type.id; 
        this.dataUpdate.type.name = this.$store.getters.getUser.type.name; 
        this.dataUpdate.city.id = this.$store.getters.getUser.city.id; 
        this.dataUpdate.city.name = this.$store.getters.getUser.city.name; 
        this.dataUpdate.city.state = this.$store.getters.getUser.city.state_id;

        this.loadCitys(this.dataUpdate.city.state);

        this.$http
            .get("states", {
                headers: { Authorization: this.$store.getters.getToken },
                })
                .then((response) => {
                this.valuesStates = response.data.content;
                })
                .catch((erro) => {
                this.makeToast('danger', erro.response.data.message);
            });
    },

    methods: {
        makeToast(variant = null, data) {
            this.$bvToast.toast(data, {
            variant: variant,
            solid: true
            })
        },

        loadCitys(id){
            this.$http
                .get(`states/${id}`, {
                    headers: { Authorization: this.$store.getters.getToken },
                })
                .then((response) => {
                    this.valuesCitys = response.data.content;
                })
                .catch((erro) => {
                    this.makeToast('danger', erro.response.data.message);
            });
       },
       updadeUser(e){
           e.preventDefault()
             this.$http
                .put(`users/${this.iduser}`, {
                    name: this.dataUpdate.nome,
                    email: this.dataUpdate.email,
                    telephone: this.dataUpdate.telephone,
                    city_id: this.dataUpdate.city.id,
                    type_id: this.dataUpdate.type.id,
                }, {
                    headers: { Authorization: this.$store.getters.getToken },
                })
                .then((response) => {
                   this.makeToast('success', response.data.message);
                   this.$router.push("/Home");
                })
                .catch((erro) => {
                    this.makeToast('danger', erro.response.data.message);
            });
       }
   }
}
</script>

<style scoped>

.columnInputs {
    width: 45%;
}

form {
    display: flex;
    justify-content: space-around;
    width: 500px;
    height: 200px;
    flex-wrap: wrap;
}

@media(max-width: 400px){
    form {
        flex-direction: column;
        align-items: center;
    }
}  

input, select {
    background: #525252;
    width: 100%;
    height: 40px;
    padding: 8px;
    border-radius: 8px;
    margin-top: 10px;
    color: #fff;
}

.btnAddfilm {
    margin: 20px auto 0 14px;
    background: #442868;
    height: 40px;
    width: 100px;
    border-radius: 8px;
    color: #fff;
}

.btnAddfilm:focus{
    outline-style: none;
}

.file {
    opacity: 0;
    width: 0.1px;
    height: 0.1px;
    position: absolute;
}

.file, select:focus {
    outline-style: none;
    border: 0;
}

.file-name {
  position: absolute;
  bottom: -35px;
  left: 10px;
  font-size: 0.85rem;
  color: #555;
}

.file:hover + label,
.file:focus + label {
  transform: scale(1.02);
}

.file:focus + label {
  outline: 1px solid #000;
  outline: -webkit-focus-ring-color auto 2px;
}

textarea {
    background: #525252;
    width: 100%;
    height: 90px;
    padding: 8px;
    border-radius: 8px;
    margin-top: 10px;
    resize: none;
    color: #fff;
}

textarea:focus {
    outline: none;
}

input:focus {
    outline: none;
}
</style>

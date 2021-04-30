<template>
    <Container>
        <form>
            <div class="columnInputs">
                <input v-model="dataRegister.nome" type="text" placeholder="Nome">
                <input type="email" v-model="dataRegister.email" placeholder="E-mail">
                <input type="number" v-model="dataRegister.telephone" placeholder="Telefone" />
                <select v-model="dataRegister.type">
                    <option value="" disabled selected>
                        Selecione um tipo
                    </option>
                    <option 
                        v-for="types in valuesTypes" 
                        :key="types.id"
                        :value="types.id">
                        {{ types.name }}
                    </option>
                </select>
            </div>
            <div class="columnInputs">
                <!-- values from classification indication-->
                <select v-model="idstate" @change="loadCitys(idstate)">
                    <option value="" disabled selected>
                        Selecione um estado
                    </option>
                    <option 
                        v-for="states in valuesStates" 
                        :key="states.id"
                        :value="states.id">
                        {{ states.name }}
                    </option>
                </select>
                <!-- values from genres-->
                <select v-model="dataRegister.city">
                    <option value="" disabled selected>
                        Selecione uma cidade
                    </option>
                    <option v-for="city in valuesCitys" 
                        :key="city.id"
                        :value="city.id">
                        {{ city.name }}
                    </option>
                </select>
                <input type="password" v-model="dataRegister.password" placeholder="Senha" />
            </div>
            <button class="btnAddfilm" type="submit" @click="registerNewUser">
                Enviar
            </button>
        </form>
    </Container>
</template>

<script>
import styled from 'vue-styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: #393939;
    padding-top: 60px;
    display: flex;
    justify-content: center;
`;
export default {
    components: {
       Container,
    },
   data() {
       return {
        valuesTypes: null,
        valuesStates: null,
        valuesCitys: null, 
        idstate: '',
        dataRegister: {
            password: '',
            type: '',
            city: '',
            nome: '',
            email: '',
            telephone: '',
        }
       }
   },
   created() {
    this.$http
      .get("types", {
        headers: { Authorization: this.$store.getters.getToken },
        })
        .then((response) => {
          this.valuesTypes = response.data.content;
        })
        .catch((erro) => {
          this.makeToast('danger', erro.response.data.message);
    });
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

       registerNewUser(e){  
           e.preventDefault() 
        this.$http
            .post("users", {
                    name: this.dataRegister.nome,
                    email: this.dataRegister.email,
                    telephone: this.dataRegister.telephone,
                    password: this.dataRegister.password,
                    type_id: this.dataRegister.type,
                    city_id: this.dataRegister.city,
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

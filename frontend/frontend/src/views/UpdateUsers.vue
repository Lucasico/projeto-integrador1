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
                <select v-model="dataUpdate.city.name">
                    <option value="" disabled selected>
                        Selecione uma cidade
                    </option>
                    <option :value="dataUpdate.city.id">
                        {{ dataUpdate.city.name }}
                    </option>
                </select>
                <!-- values from genres-->
                <select v-model="dataUpdate.city.name">
                    <option value="" disabled selected>
                        Selecione um estado
                    </option>
                    <!-- <option v-for="item in valuesRequests.genre" 
                        :key="item.id"
                        :value="item.id">
                        {{ item.name }}
                    </option> -->
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
    height: auto;
    margin-top: 60px;
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
        dataUpdate: {
            type: { name: '', id: ''},
            city: { id: '', state: '', name: ''},
            nome: '',
            email: '',
            telephone: '',
        }
       }
   },
   watch: {
       'data.lancamento'(newValue, oldValue){
        this.lancamento = newValue.replace(/(\d{2})?(\d{2})?(\d{4})/);
        console.log(newValue.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4"));
       }
   },
   created() {
            this.dataUpdate.nome = this.$store.getters.getUser.name;
            this.dataUpdate.id = this.$store.getters.getUser.id;
            this.dataUpdate.email = this.$store.getters.getUser.email;
            this.dataUpdate.telephone = this.$store.getters.getUser.telephone;
            this.dataUpdate.type.id = this.$store.getters.getUser.type.id; 
            this.dataUpdate.type.name = this.$store.getters.getUser.type.name; 
            this.dataUpdate.city.id = this.$store.getters.getUser.city.id; 
            this.dataUpdate.city.name = this.$store.getters.getUser.city.name.id; 
            this.dataUpdate.city.state = this.$store.getters.getUser.city.state_id;
    this.loadValuesIputs();
    this.$http
      .get("/indicates/classifications", {
        headers: { Authorization: this.$store.getters.getToken },
        })
        .then((response) => {
          this.valuesRequests.indication = response.data.content;
        })
        .catch((erro) => {
          console.log(erro);
    });
    this.$http
      .get("/genres", {
        headers: { Authorization: this.$store.getters.getToken },
        })
        .then((response) => {
          this.valuesRequests.genre = response.data.content;
          console.log(response);
        })
        .catch((erro) => {
          console.log(erro);
    });
   },
   methods: {
       laodImage(e){
           let teste = document.querySelector('body #file').files[0].path;
           this.data.image = e.target.files[0];
           console.log(e.target.files[0]);
       },
       updadeUser(){
    
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

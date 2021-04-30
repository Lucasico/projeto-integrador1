<template>
    <Container>
        <form>
            <div class="columnInputs">
                <input v-model="data.nome" type="text" placeholder="Nome">
                <input v-model="data.lancamento" placeholder="Lançamento">
                <textarea v-model="data.descricao" placeholder="Descrição" />
            </div>
            <div class="columnInputs">
                <!-- values from classification indication-->
                <select v-model="data.clasification">
                    <option value="" disabled selected>
                        Selecione uma classificação
                    </option>
                    <option v-for="item in valuesRequests.indication" 
                        :key="item.id"
                        :value="item.id">
                        {{ item.name }}
                    </option>
                </select>
                <!-- values from genres-->
                <select v-model="data.genre">
                    <option value="" disabled selected>
                        Selecione um genêro
                    </option>
                    <option v-for="item in valuesRequests.genre" 
                        :key="item.id"
                        :value="item.id">
                        {{ item.name }}
                    </option>
                </select>
                <input type="number" v-model="data.time" placeholder="Duração">
                <div class="inputFile">
                    <input type="file" id="file" class="file" @change="laodImage">
                    <label for="file">
                        Imagem
                        <p class="file-name"></p>
                    </label>
                </div>
            </div>
            <button class="btnAddfilm" type="submit" @click="registerNewFilm">
                Cadastrar
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
        data: {
            lancamento: '',
            genre: '',
            nome: '',
            descricao: '',
            clasification: '',
            time: '',
            image: null
        },
        valuesRequests: {
            indication: '',
            genre: ''
        }
       }
   },
   created() {
    this.$http
      .get("/indicates/classifications", {
        headers: { Authorization: this.$store.getters.getToken },
        })
        .then((response) => {
          this.valuesRequests.indication = response.data.content;
        })
        .catch((erro) => {
          this.makeToast('danger', erro.response.data.message);
    });
    this.$http
      .get("/genres", {
        headers: { Authorization: this.$store.getters.getToken },
        })
        .then((response) => {
          this.valuesRequests.genre = response.data.content;
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
       laodImage(e){
           this.data.image = e.target.files[0];
       },
       registerNewFilm(e){
           e.preventDefault();
            const dados = new FormData();
            dados.append("image", this.data.image);
            dados.append("indicate_classifications_id", this.data.clasification);
            dados.append("genre_id", this.data.genre);
            dados.append("name", this.data.nome);
            dados.append("date_release", this.data.lancamento);
            dados.append("synopsis", this.data.descricao);
            dados.append("duration", this.data.time);

           this.$http.post("films", dados, {
                headers: { 
                    Authorization: this.$store.getters.getToken,
                    "Content-Type": "multipart/form-data", 
                },
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

.inputFile label {
    background: linear-gradient(40deg, #442868, #5E23AA);
    width: 100%;
    height: 40px;
    padding: 8px;
    display: flex;
    border-radius: 8px;
    margin-top: 10px;
    color: #fff;
    align-items: center;
    justify-content: center;
    border: 0px;  
    position: relative;
    cursor: pointer;
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

.inputFile:focus {
    outline: none;
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

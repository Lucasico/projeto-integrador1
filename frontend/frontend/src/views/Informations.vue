<template>
    <div class="containerList">  
        <div class="info">
            <Imagem :src="this.$store.getters.getInformations.image.path" />
            <div class="secont">
                <label>Ano de lançamento: 
                  {{ this.$store.getters.getInformations.date_release}}
                </label>
                <button 
                    @click="removeFilme()" 
                    class="btnRemove">
                        Remover
                    </button>
            </div>
            <div class="tree">
                <div class="indication">
                    {{ this.$store.getters.getInformations.indicate_classification.name }} 
                </div>
                    <label>
                      | {{ 'Gênero indiponível'}} </label>
                    <label>| {{ this.$store.getters.getInformations.duration.replace('.',':') }} minutos </label>
            </div>
        </div>
        <div class="sinopse">
            <h3>
                {{ this.$store.getters.getInformations.name }}
            </h3>
            <div class="text">
                <p>{{ this.$store.getters.getInformations.synopsis }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import styled from 'vue-styled-components';

export const Imagem = styled.img`
  min-width: 300px;
  background: #525252;
  width: 100%;
  height: 270px;
  border-radius: 8px;
  background-image: url(${props => props.source});
  background-repeat: no-repeat;
  background-size: cover;
  transition: ease 0.4s;

  &:hover {
    border-radius: 8px 8px 0 0;
  }
`;

export default {
  components: {
    Imagem,
  },
  data() {
    return {
     
    };
  },
  methods: {
      makeToast(variant = null, data) {
        this.$bvToast.toast(data, {
          variant: variant,
          solid: true
        })
    },

    removeFilme(){
      this.$http.delete("/list/watched", { 
          headers: { 
            Authorization: this.$store.getters.getToken 
            },  
          data: {
            film_id: this.$store.getters.getInformations.id 
          }
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
};
</script>

<style scoped>

.containerList {
  width: 100%;
  height: 100vh;
  display: flex;
  background: #393939;
  justify-content: center;
  padding-top: 130px;
}

@media(max-width: 800px){
    .containerList {
        flex-wrap: wrap;
        flex-basis: 100%;
    }
}

.text {
    width: 100%;
}

p {
    color: #fff;
}

label {
    color: #fff;
}

.indication {
    height: 35px;
    width: 35px;
    border-radius: 4px;
    background: black;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.btnRemove {
    color: #fff;
    background: crimson;
    border-radius: 3px;
    width: 100px;
    height: 40px;
    margin-left: auto;
}

.btnRemove:focus {
    outline: none;
}

.tree {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 10px;
}

.secont {
    min-width: 240px;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  padding-left: 20px;
  margin-top: 10px;
}

h3 {
    color: #fff;
}

.info {
  width: 40%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
}

.sinopse {
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
}
</style>

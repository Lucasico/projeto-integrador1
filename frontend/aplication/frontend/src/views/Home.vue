<template>
  <div class="container">
    <div class="contentItems">
      <div 
        v-for="item in listFilms" 
        :key="item.title"
        class="filme"
        @mouseover="modifySize(true, item.id)"
        @mouseleave="modifySize(false, item.id)"
        >
        <!-- <img :src="item.image.path" alt="image"> -->
        <Imagem :src="item.image.path" />
        <div v-if="selectFrame.select == true && selectFrame.id == item.id" class="actionsFilm">
          <div class="lineActions">
            <h4 class="selectTitle">{{ item.name }}</h4>
            <v-icon class="btnInformations" medium color="#525252" aria-hidden="false">mdi-help-circle</v-icon>
            <button class="btnActionAdd">
              <v-icon medium color="#fff" aria-hidden="false">mdi-playlist-plus</v-icon>
            </button>
          </div>
          <div class="lineInformations">
            <div class="indication">
              {{ item.indicate_classification.name }}
            </div>
          </div>
        </div>

        <div v-else class="title">
          <h4>{{ item.name }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import styled from 'vue-styled-components';

export const Imagem = styled.img`
  background: #525252;
  width: 238px;
  height: 150px;
  border-radius: 8px;
  background-image: url(${props => props.source});
  background-repeat: no-repeat;
  background-size: cover;
  transition: ease 0.4s;

  &:hover {
    border-radius: 8px 8px 0 8px;
  }
`;

export default {
  components: { Imagem },
  computed: {},
  data() {
    return {
      dialog: false,
      listFilms: null,
      selectFrame: {
        select: false,
        id: null
      },
    };
  },
  methods: {
    modifySize(value, id){
      this.selectFrame.select = value
      this.selectFrame.id = id;
    }
  },
  created() {
    this.$http
      .get("films", {
        headers: { Authorization: this.$store.getters.getToken },
      })
      .then((response) => {
        this.listFilms = response.data.content.filmList;
        console.log(response.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  margin-top: 60px;
}

.title {
  width: 100%;
  height: 30px;
  margin-top: -33px;
  background: black;
  opacity: 70%;
  border-radius: 0 0 8px 8px;
  display: flex;
  justify-content: flex-start;
  padding: 5px;
}

.selectTitle {
  color: black;
  margin-left: 10px;
}

h4 {
  color: #fff;
}

.btnInformations {
  margin-left: auto;
  margin-right: 10px;
}

.contentItems {
  width: 96%;
  height: 400px;
  display: flex;
  justify-content: flex-start;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 10px;
}

.contentItems::-webkit-scrollbar {
  display: none;
}

.btnActionAdd {
  height: 23px;
  width: 28px;
  background:#442868;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  color: #fff;
}

.btnActionAdd:focus {
  outline-style: none;
  border: 0px;
}

.lineActions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px 10px 0 0px;
  padding-top: 5px;
}


.actionsFilm {
  margin-top: -4px;
  height: 60px;
  width: 100%;
  background: #cbcbcb;
  border-radius: 0 0 8px 8px;
}

.filme {
  margin: 10px 10px 0 10px;
  background: #525252;
  width: 238px;
  height: 150px;
  border-radius: 10px;
  transition: ease 0.4s;
}

.filme:hover {
	-webkit-transform: scale(1.1);
	transform: scale(1.1);
  z-index: 3;
}

.filmeHard {
  background: red;
  margin: 10px 10px 0 10px;
  width: 338px;
  height: 250px;
  border-radius: 10px;
}
</style>

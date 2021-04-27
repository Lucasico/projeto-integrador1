<template>
  <div class="containerHome">
    <button class="btnAddFilm" @click="redirectAddNewFilm()">
        <v-icon 
          class="btnInformations" 
          medium 
          color="#fff" 
          aria-hidden="false">
            mdi-movie-plus
        </v-icon>
    </button>
    <div class="contentItems" v-for="genres in filmGenre" :key="genres.id">

      <div class="filmlist">
        <!-- <ContentFilm 
          v-for="film in listFilms" 
          :key="film.title"
          class="filme"
          @mouseover="modifySize(true, film.id)"
          @mouseleave="modifySize(false, film.id)">
          <div v-if="genres.id == film.genre_id">
            <Imagem :src="film.image.path" />
            <div 
              v-if="selectFrame.select == true 
              && selectFrame.id == film.id" 
              class="actionsFilm">
              <div class="lineActions">
                <h4 class="selectTitle">{{ film.name }}</h4>
                <v-icon class="btnInformations" 
                  medium color="#525252" 
                  aria-hidden="false">mdi-help-circle
                </v-icon>
                <button class="btnActionAdd">
                  <v-icon color="#fff" aria-hidden="false">mdi-playlist-plus</v-icon>
                </button>
              </div>
              <div class="lineInformations">
                <div class="indication">
                  {{ film.indicate_classification.name}} 
                </div>
                <span>{{ film.duration }} min</span>
                <span>{{ film.genre.name }}</span>
              </div>
            </div>
            <div v-else class="title">
              <h4>{{ film.name }}</h4>
            </div>
            </div>
        </ContentFilm> -->

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
    border-radius: 8px 8px 0 0;
  }
`;

export const ContentFilm = styled.div`
  margin: 10px 10px 0 10px;
  background: #525252;
  width: 238px;
  height: 150px;
  border-radius: 10px;
  transition: ease 0.4s;

  &:hover {
    -webkit-transform: scale(1.1);
	  transform: scale(1.1);
  }
`;

export default {
  components: { Imagem, ContentFilm },
  computed: {},
  data() {
    return {
      dialog: false,
      listFilms: [],
      filmGenre: null,
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
    },
    redirectAddNewFilm(){
      this.$router.push("/NewFilm");
    }
  },
  // watch: {
  //   filmGenre: function(newValue, oldValue){
  //       newValue.map(item => {
  //       this.$http.get(`films/genres/${item.id}`, {
  //         headers: { Authorization: this.$store.getters.getToken },
  //         })
  //         .then((response) => {
  //           if(response.data.content.filmList.length){
              
  //           }
  //           this.listFilms = response.data.content.filmList;
  //           console.log("acreditttaa", response);
  //           console.log("ererrrere", this.listFilms);
  //         })
  //         .catch((erro) => {
  //           console.log(erro);
  //         }); 
  //       })
  //   }, 
  // },
  created() {
     //get genres for films
    this.$http
      .get("genres", {
        headers: { Authorization: this.$store.getters.getToken },
        })
        .then((response) => {
          this.filmGenre = response.data.content;
        })
        .catch((erro) => {
          console.log(erro);
    });
    this.$http
      .get(`films/genres/${7}`, {
        headers: { Authorization: this.$store.getters.getToken },
        })
        .then((response) => {
          this.listFilms = response.data.content.filmList;
          console.log(response);
        })
        .catch((erro) => {
          console.log(erro);
    });
  },
};
</script>

<style scoped>
.containerHome {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
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

.indication {
  width: 23px;
  height: 23px;
  border-radius: 3px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #2d2833;
  margin-left: 10px;
}

h3 {
  margin-left: 10px;
}

.btnAddFilm {
  height: 50px;
  width: 50px;
  background:#442868;
  align-items: right;
  border-radius: 50%;
  color: #fff;
  position: fixed;
  top: 70px;
  right: 20px;
}

.btnAddFilm:focus {
  outline: none;
  border: 0;
}

.selectTitle {
  color: black;
  margin-left: 10px;
}

h4 {
  color: #fff;
}

.lineInformations {
  display: flex;
  margin: 4px 10px 0 0;
  align-items: center;
  justify-content: space-between;
}

.filmlist {
  display: flex;
  flex-direction: row;
  height: auto;
  width: 100%;
  background: red;
}

.contentItems {
  width: 96%;
  height: 270px;
  overflow-y: hidden;
  overflow-x: scroll;
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.contentItems::-webkit-scrollbar {
  display: none;
}

.btnActionAdd {
  height: 27px;
  width: 35px;
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
  height: 65px;
  width: 100%;
  background: #cbcbcb;
  border-radius: 0 0 8px 8px;
}
</style>

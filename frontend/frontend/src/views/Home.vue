<template>
  <div class="containerHome">
    <button v-if="this.$store.getters.getUserType == 1" class="btnAddFilm" @click="redirectAddNewFilm()">
        <v-icon 
          medium 
          color="#fff" 
          aria-hidden="false">
            mdi-movie-plus
        </v-icon>
    </button>
    <!-- <div class="contentItems"> -->

        <FilmList>
          <ContentFilm 
            v-for="film in listFilms" 
            :key="film.title"
            class="filme"
            @mouseover="modifySize(true, film.id)"
            @mouseleave="modifySize(false, film.id)">
              <Imagem :src="film.image.path" />
              <div 
                v-if="selectFrame.select == true 
                && selectFrame.id == film.id" 
                class="actionsFilm">
                <div class="lineActions">
                  <h4 class="selectTitle">{{ film.name }}</h4>
                  <v-icon class="btnInformations" 
                    medium color="#525252" 
                    aria-hidden="false"
                    @click="redirectInformations(film)">
                    mdi-help-circle
                  </v-icon>
                  <button class="btnActionAdd">
                    <v-icon color="#fff"
                     aria-hidden="false"
                     @click="addFilmList(film.id)">
                      mdi-playlist-plus
                     </v-icon>
                  </button>
                </div>
                <div class="lineInformations">
                  <div class="indication">
                    {{ film.indicate_classification.name}} 
                  </div>
                  <span>{{ film.duration.replace('.', ':') }} min</span>
                  <span>{{ film.genre.name }}</span>
                </div>
              </div>
              <div v-else class="title">
                <h4>{{ film.name }}</h4>
              </div>
          </ContentFilm>
        </FilmList>

      <!-- </div> -->
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
  margin: 10px 10px 10px 10px;
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

export const FilmList = styled.div`
  display: flex;
  margin: 20px 0 0 0;
  flex-wrap: wrap;
  height: auto;
  width: 100%;
  padding-left: 10px;
  padding-bottom: 80px;
  background: #393939;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default {
  components: { Imagem, ContentFilm, FilmList },
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

    redirectInformations(values){
      this.$store.commit("setInformations", values);
      this.$router.push("/Informations");
    },

    redirectAddNewFilm(){
      this.$router.push("/NewFilm");
    },
    makeToast(variant = null, data) {
        this.$bvToast.toast(data, {
          variant: variant,
          solid: true
        })
    },

    addFilmList(id){
     this.$http
        .post('list/watched', { film_id: id }, {
            headers: { Authorization: this.$store.getters.getToken },
        })
        .then((response) => {
            this.makeToast('success', response.data.message);
        })
        .catch((erro) => {
             this.makeToast('danger', erro.response.data.message);
        });
    },
  },
  created() {
    this.$http
      .get(`filter/films`, {
        headers: { Authorization: this.$store.getters.getToken },
        })
        .then((response) => {
          this.listFilms = response.data.content.filmList;
        })
        .catch((erro) => {
          this.makeToast('danger', erro.response.data.message);
    });
  },
};
</script>

<style scoped>
.containerHome {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 60px;
  background: #393939;
}

.btnInformations {
  margin-left: auto;
  margin-right: 10px;
}

.title {
  width: 100%;
  height: 30px;
  margin-top: -30px;
  background: black;
  opacity: 70%;
  border-radius: 0 0 8px 8px;
  display: flex;
  justify-content: flex-start;
  padding: 5px;
}

.contentListGenre {
  display: flex;
  flex-direction: column;
  background: red;
  border: 1px solid blue;
}

.contentListGenre + .contentListGenre {
  margin-top: -80px;
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
  z-index: 9;
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
  font-size: 16px;
}

.lineInformations {
  display: flex;
  margin: 4px 10px 0 0;
  align-items: center;
  justify-content: space-between;
}

.actionsFilm {
  margin-top: -4px;
  height: 65px;
  width: 100%;
  background: #CBCBCB;
  border-radius: 0 0 8px 8px;
}

/* .contentItems {
  width: 96%;
  height: 270px;
  overflow-y: hidden;
  overflow-x: scroll;
  display: flex;
  flex-direction: column;
  padding: 10px;
} */

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

</style>

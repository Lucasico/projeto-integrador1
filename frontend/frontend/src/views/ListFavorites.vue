<template>
    <div class="containerList">
    <FilmList>
    <ContentFilm 
          v-for="film in listFilms" 
          :key="film.films.id"
          class="filme"
          @mouseover="modifySize(true, film.films.id)"
          @mouseleave="modifySize(false, film.films.id)">
          <div>
            <Imagem :src="film.films.image.path" />
            <div 
              v-if="selectFrame.select == true 
              && selectFrame.id == film.films.id" 
              class="actionsFilm">
              <div class="lineActions">
                <div class="selectTitle">
                    <h4>{{ film.films.name }}</h4>
                </div>
                <v-icon class="btnInformations" 
                  medium color="#525252" 
                  aria-hidden="false"
                  @click="redirectInformations(film.films)">
                  mdi-help-circle
                </v-icon>
                <button class="btnActionAdd" @click="addFilmList(film.films.id)">
                  <v-icon color="#fff" aria-hidden="false">mdi-playlist-plus</v-icon>
                </button>
              </div>
              <div class="lineInformations">
                <div class="indication">
                  {{ film.films.indicate_classification.name}} 
                </div>
                <span>{{ film.films.duration }} min</span>
                <v-icon color="#CA475E" @click="removeFavorites(film.films.id)" aria-hidden="false">
                    mdi-star-remove
                </v-icon>
              </div>
            </div>
            <div v-else class="title">
              <h4>{{ film.films.name }}</h4>
            </div>
            </div>
        </ContentFilm>
        </FilmList>
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
  margin: 10px 10px 0 17px;    
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
  components: {
    Imagem, ContentFilm, FilmList
  },
  data() {
    return {
      dialogDelete: false,
      dialog: false,
      listFilms: [],
      selectFrame: {
        select: false,
        id: null
      },
    };
  },
  created() {
    this.$http
      .get('list/favorites', {
        headers: { Authorization: this.$store.getters.getToken },
        })
        .then((response) => {
          this.listFilms = response.data.content.listFavoriteMovies;
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

    redirectInformations(values){
      this.$store.commit("setInformations", values);
      this.$router.push("/Informations");
    },

    removeFavorites(id){
        this.$http
            this.$http.delete("list/favorites", { 
            headers: { 
                Authorization: this.$store.getters.getToken 
            },  
            data: {
                film_id: id 
            }
            })
            .then((response) => {
                this.makeToast('success', response.data.message);
                this.$http
                    .get('list/favorites', {
                        headers: { Authorization: this.$store.getters.getToken },
                        })
                        .then((response) => {
                        this.listFilms = response.data.content.listFavoriteMovies;
                        })
                        .catch((erro) => {
                        this.makeToast('danger', erro.response.data.message);
                    });
            })
            .catch((erro) => {
                this.makeToast('danger', erro.response.data.message);
        });
    },

    modifySize(value, id){
      this.selectFrame.select = value
      this.selectFrame.id = id;
    },
    addFilmList(id){
     this.$http
        .put(`list/favorites`, { film_id: id }, {
            headers: { Authorization: this.$store.getters.getToken },
        })
        .then((response) => {
            this.makeToast('success', response.data.message);
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
  justify-content: flex-start;
  flex-wrap: wrap;
  padding-top: 60px;
}

.title {
  width: 100%;
  height: 30px;
  margin-top: -30px;
  background: black;
  opacity: 70%;
  border-radius: 0 0 8px 8px;
  display: flex;
  align-items: center;
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
  background: #442868;
  height: 30px;
  width: 40px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 20px 0px auto;
}

.btnAddFilm:focus {
  outline: none;
  border: 0;
}

.selectTitle h4 {
  color: black;
  margin-left: 10px;
  white-space: nowrap; 
  width: 100px; 
  overflow: hidden; 
  text-overflow: ellipsis;
}

h4 {
  color: #fff;
  font-size: 17px;
}

.lineInformations {
  display: flex;
  margin: 3px 10px 0 0;
  align-items: center;
  justify-content: space-between;
}

.btnInformations {
  margin-left: auto;
  margin-right: 10px;
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
  height: 75px;
  width: 100%;
  background: #cbcbcb;
  border-radius: 0 0 8px 8px;
}
</style>

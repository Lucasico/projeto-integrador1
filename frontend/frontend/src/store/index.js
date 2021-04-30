import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    usuarioAcess: sessionStorage.getItem("token")
      ? JSON.parse(sessionStorage.getItem("token"))
      : null,
    listFilmesCompleted: [],
    listUser: [],
    filmInformations: null,
    userType: sessionStorage.getItem("usuario")
    ? sessionStorage.getItem("usuario")
    : null,
  },
  mutations: {
    setToken(state, payload) {
      state.usuarioAcess = payload;
    },
    setListFilmes(state, payload) {
      state.listFilmesCompleted = payload;
    },
    setUser(state, payload) {
      state.listUser = payload;
    },
    setInformations(state, payload) {
      state.filmInformations = payload;
    },
    setUserType(state, payload) {
      state.userType = payload;
    },
  },
  actions: {},
  getters: {
    getToken: (state) => {
      return state.usuarioAcess;
    },
    getListFilmes: (state) => {
      return state.listFilmesCompleted;
    },
    getUser: (state) => {
      return state.listUser;
    },
    getInformations: (state) => {
      return state.filmInformations;
    },
    getUserType: (state) => {
      return state.userType;
    },
  },
});
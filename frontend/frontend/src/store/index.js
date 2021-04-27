import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    usuarioAcess: sessionStorage.getItem("usuario")
      ? JSON.parse(sessionStorage.getItem("usuario"))
      : null,
    listFilmesCompleted: [],
    listUser: [],
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
  },
});
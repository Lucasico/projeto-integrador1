import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    usuarioAcess: sessionStorage.getItem("usuario")
      ? JSON.parse(sessionStorage.getItem("usuario"))
      : null,
    teste: "teste12121",
  },
  mutations: {
    setToken(state, payload) {
      state.usuarioAcess = payload;
    },
  },
  actions: {},
  getters: {
    getToken: (state) => {
      return state.usuarioAcess;
    },
    getTeste: (state) => {
      return state.teste;
    },
  },
});
<template>
  <div class="Head" v-if="this.$store.getters.getToken">
    <div class="Logo"></div>
    <ul>
      <router-link class="rt" to="/Home">
        <li>
            Home
        </li>
      </router-link>
      <router-link class="rt" to="/List">
        <li>
           Sua Lista
        </li>
      </router-link>
      <router-link v-if="this.$store.getters.getUserType == 1" class="rt" to="/Users">
        <li>
            Usuários
        </li>
      </router-link>
      <router-link class="rt" to="/Favorites">
        <li>
            Favoritos
        </li>
      </router-link>
    </ul>
    <button class="profile" @click="sair()">
      <v-icon 
          medium 
          color="#fff" 
          aria-hidden="false">
            mdi-logout-variant
        </v-icon>
    </button>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      path: null,
      teste: window.location.pathname,
      styleSelectMenu: {
        background: "#46296c",
        color: "#fff",
      },
    };
  },
  methods: {
    sair() {
        this.$store.commit('setToken', null);
        sessionStorage.clear();
        this.$router.push('/')
    }
  },
};
</script>

<style>
.Head {
  display: flex;
  background: #2f2f2f;
  height: 50px;
  width: 100%;
  position: fixed;
  z-index: 5;
}

.rt:hover {
  text-decoration: none;
}

ul {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
  margin-top: 0;
}

ul li {
  list-style: none;
  padding: 5px 10px;
  margin: 0 10px 0 10px;
  font-family: "Raleway", sans-serif;
  cursor: pointer;
  align-items: center;
  height: 30px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  transition: ease 0.3s;
  color: #9f8f8f;
}

ul li:hover {
  background: #212025;
  color: #fff;
}

.teste {
  color: red;
}

.profile {
  background: #525252;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  margin-top: 5px;
  border-radius: 50%;
  margin-left: auto;
  margin-right: 20px;
}

.profile:focus {
  outline: none;
}
</style>

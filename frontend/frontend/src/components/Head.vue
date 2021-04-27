<template>
  <div class="Head">
    <div class="Logo"></div>
    <ul>
      <li
        @click="navigation('Home')"
        v-bind:style="path == '/Home' ? styleSelectMenu : ''"
        >
        Home
      </li>
      <li
        @click="navigation('List')"
        v-bind:style="path == '/List' ? styleSelectMenu : ''"
        >
        Sua Lista
      </li>
      <li
        @click="navigation('Users')"
        v-bind:style="path == '/Users' ? styleSelectMenu : ''"
        >
        Usuários
      </li>
      <li
        @click="navigation('Favorites')"
        v-bind:style="path == '/Favorites' ? styleSelectMenu : ''"
        >
        Favoritos
      </li>
    </ul>
    <div class="profile" />
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      path: window.location.pathname,
      styleSelectMenu: {
        background: "#46296c",
        color: "#fff",
      },
    };
  },
  methods: {
    navigation(value) {
      console.log(this.$route);
      if (value == "Home") {
        this.$router.push("/Home");
      } else if (value == "List") {
        this.$router.push("/List");
      } else if (value == "Users") {
        this.$router.push("/Users");
      } else if (value == "Favorites") {
        this.$router.push("/Favorites");
      }
    },
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
  width: 40px;
  border-radius: 50%;
  margin-left: auto;
  margin-right: 20px;
}
</style>

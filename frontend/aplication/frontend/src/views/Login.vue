<template>
  <div class="container">
    <div class="login">
      <div class="InputArea">
        <v-icon color="#9F8F8F" aria-hidden="false"> mdi-account </v-icon>
        <input type="text" placeholder="Usuário" />
      </div>
      <div class="InputArea">
        <v-icon color="#9F8F8F" aria-hidden="false"> mdi-lock </v-icon>
        <input v-model="inputSelected" type="password" placeholder="Senha" />
      </div>
      <button @click="login()" class="btnLogin">ACESSAR</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputSelected: "",
    };
  },
  methods: {
    login() {
      this.$http
        .post("/authenticate", {
          email: "lucassantoscrfbezerra@gmail.com",
          password: "28031998",
        })
        .then((response) => {
          console.log(response);
          this.$store.commit("setToken", response.data.token);
          alert(this.$store.getters.getTeste);
          sessionStorage.setItem(
            "usuario",
            JSON.stringify(response.data.token)
          );
          this.$router.push("/Home");
        })
        .catch((erro) => {
          console.log(erro);
          alert(erro);
        });
    },
  },
};
</script>

<style scoped>
.container {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 23%;
}

.selectedInput {
  color: #fff;
}

.noSelectedInput {
  color: #9f8f8f;
}

.InputArea + .InputArea {
  margin-top: 10px;
}

.InputArea {
  height: 40px;
  width: 100%;
  background: #525252;
  padding: 7px;
  display: flex;
  border-radius: 10px;
}

input {
  margin-left: 8px;
}

input:focus {
  border: 0;
  outline: none;
}

.btnLogin {
  height: 40px;
  background: #442868;
  width: 100%;
  color: #fff;
  border-radius: 10px;
  margin-top: 10px;
}

.btnLogin:hover {
}

.btnLogin:focus {
  outline-style: none;
  border: 0px;
}
</style>

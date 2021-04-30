<template>
  <div class="containerLogin">
    <div class="login">
      
      <img src="../assets/logo.png" alt="logo">
      <div class="InputArea">
        <v-icon color="#9F8F8F" aria-hidden="false"> mdi-account </v-icon>
        <input v-model="email" type="text" placeholder="Usuário" />
      </div>
      <div class="InputArea">
        <v-icon color="#9F8F8F" aria-hidden="false"> mdi-lock </v-icon>
        <input  v-model="senha" type="password" placeholder="Senha" />
      </div>
      <button @click="login()" class="btnLogin">ACESSAR</button>
    </div>
  </div>
</template>

<script>
import styled from 'vue-styled-components';

export const Logo = styled.div`
  height: 100px;
  width: 105px;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
`;
export default {
  components: {
    Logo
  },
  data() {
    return {
      inputSelected: "",
      email: '',
      senha: '',
    };
  },
  methods: {
     makeToast(variant = null, data) {
        this.$bvToast.toast(data, {
          variant: variant,
          solid: true
        })
    },

    login() {
      this.$http
        .post("/authenticate", {
          email: this.email, 
          password: this.senha
        })
        .then((response) => {
          this.makeToast('success', response.data.message);
          this.$store.commit("setToken", response.data.token);
          this.$store.commit("setUserType", response.data.content.type.id);
  
          sessionStorage.setItem("token", JSON.stringify(response.data.token));
          sessionStorage.setItem("usuario", response.data.content.type.id);
          this.$router.push("/Home");
        })
        .catch((erro) => {
          this.makeToast('danger', `Acesso inválido`);
        });
    },
  },
};
</script>

<style scoped>
.containerLogin {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #393939;
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
  margin-top: 20px;
  height: 40px;
  width: 100%;
  background: #525252;
  padding: 7px;
  display: flex;
  border-radius: 10px;
  min-width: 95px;
}

input {
  margin-left: 8px;
  width: 100%;
  color: #fff;
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
  min-width: 95px;
}

.btnLogin:focus {
  outline-style: none;
  border: 0px;
}
</style>

<template>
  <div class="container">
        <button class="btnActionAdd" @click="redirectRegisterUser()">
            <v-icon color="#fff" aria-hidden="false">mdi-account-plus</v-icon>
        </button>

        <b-modal hide-footer v-model="modalShow" title="Excluir usuário">
              <p class="my-4">Realemte quer excluir o usuário?</p>
              <button class="btnRemove" @click="modalShow = !modalShow, removeUser()">Excluir</button>
              <button class="btnCancel" @click="modalShow = !modalShow">Cancelar</button>
        </b-modal>
    <table>
      <thead>
        <tr>
          <th v-for="item in header" :key="item.value">{{ item.text }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in dataTable" :key="user.id">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.telephone }}</td>
          <td>
            <div :style="user.type.id == 2 ? styleClient : styleADM">
              {{ user.type.name }}
            </div>
          </td>
          <td>
            <button class="btnActionUser">
              <v-icon class="icon" @click="updateUser(user)" aria-hidden="false"> mdi-pencil </v-icon>
            </button>
            <button class="btnActionUser">
              <v-icon @click="modalShow = !modalShow, loadRemoveUser(user.id)" class="icon" aria-hidden="false"> mdi-delete </v-icon>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import styled from 'vue-styled-components';

export const DialogIteration = styled.dialog`
  width: 200px;
  height: 200px;
  background: red;
  align-items: center;
  position: absolute;
`;

export default {
  components: {
    DialogIteration,
  },
  data(){
    return{
      idUser: null,
      dataTable: [],
      dialog: true,
      modalShow: false,
      styleADM: {
        background: '#CA475E',
        borderRadius: '10px',
        color: '#fff',
        textAlign: 'center',
        padding: '5px'
      },
      styleClient: {
        background: '#6B469B',
        borderRadius: '10px',
        color: '#fff',
        textAlign: 'center',
        padding: '5px'
      },
      header: [
                {value: 'nome', text: 'NOME'},
                {value: 'cidade', text: 'EMAIL'},
                {value: 'email', text: 'TELEFONE'},
                {value: 'situacao', text: 'TIPO'},
                {value: 'actions', text: 'AÇÕES'}
            ],
    }
  },
  created(){
    this.$http
        .get('users', {
            headers: { Authorization: this.$store.getters.getToken },
          })
          .then((response) => {
              this.dataTable = response.data.content.usersList;
              console.log(response);
          })
            .catch((erro) => {
            console.log(erro);
        });
  },
  methods: {
    updateUser(values){
      console.log('valores', values);
      this.$store.commit("setUser", values)
      this.$router.push('/UpdateUser');
    },
    loadRemoveUser(id){
      this.idUser = id;
    },
    removeUser(){
      this.$http.delete(`/users/${this.idUser}`, { 
          headers: { 
            Authorization: this.$store.getters.getToken 
          }
       })
        .then((response) => {
            this.$http
              .get('users', {
                  headers: { Authorization: this.$store.getters.getToken },
                })
                .then((response) => {
                    this.dataTable = response.data.content.usersList;
                    console.log(response);
                })
                  .catch((erro) => {
                  console.log(erro);
            });
        })
        .catch((erro) => {
          console.log(erro);
      });
    },
    redirectRegisterUser(){
      this.$router.push('/RegisterUser');
    }
  }
};
</script>

<style scoped>

.container {
  width: 100%;
  height: auto;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btnActionUser {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin: 5px;
  transition: ease 0.4s;
}

.btnActionAdd {
  height: 50px;
  width: 50px;
  background:#442868;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #fff;
  position: fixed;
  top: 70px;
  right: 20px;
}

.btnActionAdd:focus {
  outline-style: none;
  border: 0px;
}

.btnActionUser:focus {
  outline: none;
}

.btnRemove {
  height: 40px;
  width: 80px;
  background: #442868;
  color: #fff;
  border-radius: 8px;
  margin-right: 10px;
}

.btnCancel {
  height: 40px;
  width: 80px;
  background: #CA475E;
  color: #fff;
  border-radius: 8px;
}
.btnRemove:focus {
  outline: none;
}

.icon {
  color:#9F8F8F;
}

.icon:hover {
  color: #fff;
}

table td {
  padding: 3px;
  text-align: left;
}

table thead tr th {
  padding: 5px 8px 5px 8px;
}

table tbody tr td {
  padding: 5px 8px 5px 8px;
}

table {
  width: 90%;
  background: #202024;
  color: #fff;
  border-radius: 8px;
  margin-top: 20px;
}
</style>

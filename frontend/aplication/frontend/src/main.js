import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from 'axios';
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

Vue.config.productionTip = false;

Vue.http = Vue.prototype.$http = axios;
axios.defaults.baseURL = "http://localhost:5000";


new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

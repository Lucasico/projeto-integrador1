import Vue from "vue";
import axios from "axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.http = Vue.prototype.$http = axios;
axios.defaults.baseURL = "http://25.60.179.252:5000";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

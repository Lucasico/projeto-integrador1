import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Login from "../views/Login";
import List from "../views/List";
import Users from "../views/Users";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
  },
  {
    path: "/List",
    name: "List",
    component: List,
  },
  {
    path: "/Users",
    name: "Users",
    component: Users,
  },
];

const router = new VueRouter({
  mode: process.env.IS_ELECTRON ? "hash" : "history",
  routes,
});

export default router;

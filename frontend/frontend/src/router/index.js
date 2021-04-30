import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Login from "../views/Login";
import List from "../views/List";
import Users from "../views/Users";
import RegisterFilm from '../views/RegisterFilm';
import UpdateUsers from '../views/UpdateUsers';
import RegisterUser from '../views/RegisterNewUser';
import ListFavorites from '../views/ListFavorites';
import Informations from '../views/Informations';

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
  {
    path: "/NewFilm",
    name: "NewFilm",
    component: RegisterFilm,
  },
  {
    path: "/UpdateUser",
    name: "UpdateUser",
    component: UpdateUsers,
  },
  {
    path: "/RegisterUser",
    name: "RegisterUsers",
    component: RegisterUser,
  },
  {
    path: "/Favorites",
    name: "Favorites",
    component: ListFavorites,
  },
  {
    path: "/Informations",
    name: "Informations",
    component: Informations,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;

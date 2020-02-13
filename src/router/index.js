import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login";
import Confirm from "../views/LoginConfirm";
import Home from "../views/Home"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/login/LoginConfirm",
    name: "LoginConfirm",
    component: Confirm
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/loginForm";
import Confirm from "../views/Confirmation";
import Home from "../views/Home"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/confirmation",
    name: "confirmation",
    component: Confirm
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

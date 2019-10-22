import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Frame from "../views/Frame.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Frame,
    children: [
      {
        path: "",
        name: "home",
        component: Home
      }
    ]
  },
  {
    path: "/particulars",
    component: Frame,
    children: [
      {
        path: "",
        name: "particulars",
        component: () => import("../views/particulars/Particulars.vue")
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import( "../views/login/Login.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

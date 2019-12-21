import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Menu from "../views/Menu.vue";
import About from "../views/About.vue";
import Projects from "../views/Projects.vue";
import Timeline from "../views/Timeline.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/menu",
    name: "menu",
    component: Menu
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/projects",
    name: "projects",
    component: Projects
  },
  {
    path: "/timeline",
    name: "timeline",
    component: Timeline
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

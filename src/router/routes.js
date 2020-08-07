import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About Us",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/survey",
    name: "Survey",
    component: () =>
      import(/* webpackChunkName: "survey" */ "../views/Survey.vue"),
  },
];

export default routes;

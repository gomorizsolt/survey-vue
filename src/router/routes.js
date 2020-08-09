// import Home from "../views/Home.vue";

const Home = () => import(/* webpackChunkName: "home" */ "../views/Home.vue");
const About = () =>
  import(/* webpackChunkName: "about" */ "../views/About.vue");
const Survey = () =>
  import(/* webpackChunkName: "survey" */ "../views/Survey.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About Us",
    component: About,
  },
  {
    path: "/survey",
    name: "Survey",
    component: Survey,
  },
];

export default routes;

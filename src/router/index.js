import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// route-level code splitting
const HomeView = () =>
  import(/* webpackChunkName: "home" */ "@/views/Home.vue");
const SurveyView = () =>
  import(/* webpackChunkName: "survey" */ "@/views/Survey.vue");
const PageNoutFoundView = () =>
  import(/* webpackChunkName: "not-found" */ "@/views/PageNotFound.vue");

const router = new VueRouter({
  mode: "history",
  fallback: false,
  routes: [
    { path: "/", component: HomeView },
    { path: "/survey", component: SurveyView },
    { path: "*", component: PageNoutFoundView },
  ],
});

export default router;

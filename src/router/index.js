import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// route-level code splitting
const HomeView = () =>
  import(/* webpackChunkName: "home" */ "@/views/Home.vue");
const SurveyView = () =>
  import(/* webpackChunkName: "survey" */ "@/views/Survey/Survey.vue");
const SurveyInfoView = () =>
  import(/* webpackChunkName: "survey-info" */ "@/views/Survey/SurveyInfo.vue");
const SurveyQuestionsView = () =>
  import(
    /* webpackChunkName: "survey-questions" */ "@/views/Survey/SurveyQuestions.vue"
  );
const SurveyCompletedView = () =>
  import(
    /* webpackChunkName: "survey-completed" */ "@/views/Survey/SurveyCompleted.vue"
  );
const PageNoutFoundView = () =>
  import(/* webpackChunkName: "not-found" */ "@/views/PageNotFound.vue");

const router = new VueRouter({
  mode: "history",
  fallback: false,
  routes: [
    { path: "/", component: HomeView },
    {
      path: "/survey",
      component: SurveyView,
      children: [
        {
          path: "",
          component: SurveyInfoView,
        },
        {
          path: "questions",
          component: SurveyQuestionsView,
        },
        {
          path: "completed",
          component: SurveyCompletedView,
        },
      ],
    },
    { path: "*", component: PageNoutFoundView },
  ],
});

export default router;

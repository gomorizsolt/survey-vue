import Vue from "vue";
import Vuex from "vuex";
import survey from "../resources/survey.json";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

Vue.use(Vuex);

// in debug, any mutations outside of mutation handlers will throw an Error
const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  state: {
    survey: survey.data,
    answers: [],
    currentPageIndex: 0,
  },
  mutations,
  getters,
  actions,
  strict: debug,
});

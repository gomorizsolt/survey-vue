import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
import getDefaultState from "./get-default-state";

Vue.use(Vuex);

// in debug, any mutations outside of mutation handlers will throw an Error
const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  state: getDefaultState(),
  mutations,
  getters,
  actions,
  strict: debug,
});

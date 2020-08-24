import { NEXT_PAGE, PREV_PAGE, UPDATE_ANSWER, RESET } from "./mutation-types";

const actions = {
  nextPage({ commit }) {
    commit(NEXT_PAGE);
  },
  prevPage({ commit }) {
    commit(PREV_PAGE);
  },
  updateAnswer({ commit }, payload) {
    commit(UPDATE_ANSWER, payload);
  },
  reset({ commit }) {
    commit(RESET);
  },
};

export default actions;

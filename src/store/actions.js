import { NEXT_PAGE, PREV_PAGE, SAVE_NEW_ANSWER } from "./mutation-types";

const actions = {
  nextPage({ commit }) {
    commit(NEXT_PAGE);
  },
  prevPage({ commit }) {
    commit(PREV_PAGE);
  },
  saveNewAnswer({ commit }, payload) {
    commit(SAVE_NEW_ANSWER, payload);
  },
};

export default actions;

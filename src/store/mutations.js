import { NEXT_PAGE, PREV_PAGE, SAVE_NEW_ANSWER, RESET } from "./mutation-types";
import getDefaultState from "./get-default-state";

const mutations = {
  [NEXT_PAGE](state) {
    state.currentPageIndex++;
  },
  [PREV_PAGE](state) {
    state.currentPageIndex--;
  },
  [SAVE_NEW_ANSWER](state, payload) {
    const index = state.answers.findIndex(
      (answer) => answer.name === payload.name
    );

    if (index !== -1) {
      state.answers.splice(index, 1, payload);

      return;
    }

    state.answers.push(payload);
  },
  [RESET](state) {
    // https://tahazsh.com/vuebyte-reset-module-state
    // https://github.com/vuejs/vuex/issues/1118
    Object.assign(state, getDefaultState());
  }
};

export default mutations;

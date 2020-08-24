import { NEXT_PAGE, PREV_PAGE, UPDATE_ANSWER, RESET } from "./mutation-types";
import getDefaultState from "./get-default-state";

const mutations = {
  [NEXT_PAGE](state) {
    state.currentPageIndex++;
  },
  [PREV_PAGE](state) {
    state.currentPageIndex--;
  },
  [UPDATE_ANSWER](state, payload) {
    const index = state.answers.findIndex(
      (answer) => answer.name === payload.name
    );

    if (index !== -1) {
      const valueHasChanged =
        state.answers[index].selectedValue !== payload.selectedValue;

      if (valueHasChanged) {
        state.answers.splice(index, 1, payload);
      }
    } else {
      state.answers.push(payload);
    }
  },
  [RESET](state) {
    // https://tahazsh.com/vuebyte-reset-module-state
    // https://github.com/vuejs/vuex/issues/1118
    Object.assign(state, getDefaultState());
  },
};

export default mutations;

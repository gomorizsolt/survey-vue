const getters = {
  page: (state) => {
    return state.survey.pages[state.currentPageIndex];
  },
  title: (_, getters) => {
    return getters.page.title;
  },
  subtitle: (_, getters) => {
    if (getters.page.subtitle) {
      return getters.page.subtitle.replace(/<br>/g, "\r\n");
    }

    return "";
  },
  questions: (_, getters) => {
    return getters.page.questions;
  },
  getAnswerByName: (state) => (name) => {
    return state.answers.find((answer) => answer.name === name);
  },
  requiredAnswersCount: (state) => {
    return state.survey.pages.reduce((acc, val) => {
      val.questions.forEach((v) => {
        if (v.is_required) {
          return acc++;
        }

        return acc;
      });

      return acc;
    }, 0);
  },
};

export default getters;

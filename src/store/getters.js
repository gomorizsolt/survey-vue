const getters = {
  page: (state) => state.survey.pages[state.currentPageIndex],
  title: (_, getters) => getters.page.title,
  subtitle: (_, getters) => {
    if (getters.page.subtitle) {
      return getters.page.subtitle.replace(/<br>/g, "\r\n");
    }

    return "";
  },
  questions: (_, getters) => getters.page.questions,
  getAnswerByName: (state) => (name) =>
    state.answers.find((answer) => answer.name === name),
  requiredAnswersCount: (state) => state.survey.pages.reduce((acc, val) => {
    val.questions.forEach((v) => {
      if (v.is_required) {
        return acc++;
      }

      return acc;
    });

    return acc;
  }, 0)
};

export default getters;

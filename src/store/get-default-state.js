import survey from "@/resources/survey.json";

const getDefaultState = () => ({
  survey: survey.data,
  answers: [],
  currentPageIndex: 0,
});

export default getDefaultState;

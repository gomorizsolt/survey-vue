<template>
  <div>
    <SurveyPage :page="currentPage" />
  </div>
</template>

<script>
import surveyJSON from "../resources/survey.json";
import SurveyPage from "./SurveyPage";

export default {
  data: () => ({
    pageIndex: 0,
  }),
  components: {
    SurveyPage,
  },
  computed: {
    currentPage: function () {
      return surveyJSON.data.pages[this.pageIndex];
    },
  },
  surveyJSON,
};
</script>

<style></style>

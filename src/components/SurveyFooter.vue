<template>
  <div class="survey-footer">
    <a-button @click="prevPage" :disabled="isPrevPageButtonDisabled">{{
      prevButtonText
    }}</a-button>
    <a-button
      v-show="isFinalPage"
      type="danger"
      :disabled="isCompleteButtonDisabled"
      @click="completeSurvey"
      >{{ completeButtonText }}</a-button
    >
    <a-button v-show="!isFinalPage" @click="nextPage" type="danger">{{
      nextButtonText
    }}</a-button>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["survey", "currentPageIndex", "answers"]),
    ...mapGetters(["requiredAnswersCount"]),
    prevButtonText() {
      return this.survey.page_prev_text;
    },
    nextButtonText() {
      return this.survey.page_next_text;
    },
    completeButtonText() {
      return this.survey.complete_text;
    },
    isPrevPageButtonDisabled() {
      return this.currentPageIndex === 0;
    },
    isCompleteButtonDisabled() {
      return (
        this.isFinalPage && this.answers.length !== this.requiredAnswersCount
      );
    },
    isFinalPage() {
      const maxPages = this.survey.pages.length;

      return maxPages - 1 === this.currentPageIndex;
    },
  },
  methods: {
    ...mapActions(["nextPage", "prevPage"]),
    completeSurvey() {
      this.$router.push("/survey/completed");
    },
  },
};
</script>

<style scoped>
.survey-footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
}
</style>

<template>
  <section>
    <SurveyHeader />
    <SurveyQuestions />
    <SurveyFooter />
  </section>
</template>

<script>
import SurveyHeader from "@/components/SurveyHeader.vue";
import SurveyQuestions from "@/components/SurveyQuestions.vue";
import SurveyFooter from "@/components/SurveyFooter.vue";

export default {
  components: {
    SurveyHeader,
    SurveyQuestions,
    SurveyFooter,
  },
};
</script>

<template>
  <section>
    <SurveyHeader />
    <div class="question" v-for="question in questions" :key="question.name">
      <h3 :class="{ required: question.is_required }">
        {{ question.name }}
      </h3>
      <p v-if="question.public_description">
        {{ question.public_description }}
      </p>
      <SurveyAnswerSelector
        :type="question.type"
        :name="question.name"
        :choices="question.choices"
      />
    </div>
    <SurveyFooter />
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import SurveyHeader from "@/components/SurveyHeader";
import SurveyAnswerSelector from "@/components/SurveyAnswerSelector";
import SurveyFooter from "@/components/SurveyFooter";

export default {
  components: {
    SurveyHeader,
    SurveyAnswerSelector,
    SurveyFooter,
  },
  computed: {
    ...mapGetters(["questions"]),
  },
};
</script>

<style scoped>
.question {
  margin-bottom: 1.5rem;
}

.required {
  display: flex;
}

.required::before {
  content: "*";
  font-weight: bold;
  font-size: 1.2rem;
  margin-right: 0.3rem;
  color: red;
}
</style>

<template>
  <section>
    <div class="question" v-for="question in questions" :key="question.name">
      <h3 :class="{ required: question.is_required }">{{ question.name }}</h3>
      <p v-if="question.public_description">
        {{ question.public_description }}
      </p>
      <SurveyAnswerSelector
        :type="question.type"
        :name="question.name"
        :choices="sanitizedChoices(question.choices)"
      />
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import SurveyAnswerSelector from "./SurveyAnswerSelector";

export default {
  components: {
    SurveyAnswerSelector,
  },
  methods: {
    sanitizedChoices(choices) {
      return choices.map((choice) => Object.values(choice)[0]);
    },
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

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

      <RadioGroup
        v-if="question.type === 'radiogroup'"
        :name="question.name"
        :choices="question.choices"
      />

      <Dropdown
        v-if="question.type === 'dropdown'"
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
import SurveyFooter from "@/components/SurveyFooter";
import RadioGroup from "@/components/RadioGroup";
import Dropdown from "@/components/Dropdown";

export default {
  components: {
    SurveyHeader,
    RadioGroup,
    Dropdown,
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

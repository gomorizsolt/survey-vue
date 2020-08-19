<template>
  <a-dropdown v-if="type === 'dropdown'" :trigger="['click']">
    <a-button class="dropdown">
      {{ selectedAnswer }}
      <a-icon type="down" />
    </a-button>
    <a-menu slot="overlay" @click="handleDropdownChange">
      <a-menu-item v-for="choice in sanitizedChoices" :key="choice">{{
        choice
      }}</a-menu-item>
    </a-menu>
  </a-dropdown>

  <a-radio-group
    v-else
    v-model="selectedAnswer"
    @change="handleRadioGroupChange"
  >
    <a-radio v-for="choice in sanitizedChoices" :key="choice" :value="choice">{{
      choice
    }}</a-radio>
  </a-radio-group>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  beforeMount() {
    const answer = this.getAnswerByName(this.name);

    if (answer?.value) {
      this.selectedAnswer = answer.value;
    }
  },
  data: () => ({
    selectedAnswer: "",
  }),
  props: {
    name: {
      type: String,
      required: true,
    },
    choices: {
      type: Array,
      required: true,
    },
    type: {
      type: String,
      required: true,
      validator(receivedType) {
        const validTypes = ["dropdown", "radiogroup"];
        const isTypeValid = validTypes.some((type) => type === receivedType);

        if (!isTypeValid) {
          throw new Error(`Unhandled question type: ${receivedType}`);
        }

        return true;
      },
    },
  },
  computed: {
    ...mapGetters(["getAnswerByName"]),
    sanitizedChoices() {
      return this.choices.map((choice) => Object.values(choice)[0]);
    },
  },
  methods: {
    ...mapActions(["saveNewAnswer"]),
    handleDropdownChange({ key: newSelectedAnswer }) {
      this.selectedAnswer = newSelectedAnswer;

      this.saveNewAnswer({
        name: this.name,
        value: newSelectedAnswer,
      });
    },
    handleRadioGroupChange(event) {
      const newSelectedAnswer = event.target.value;

      this.selectedAnswer = newSelectedAnswer;

      this.saveNewAnswer({
        name: this.name,
        value: newSelectedAnswer,
      });
    },
  },
};
</script>

<style scoped>
.dropdown {
  width: 100%;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

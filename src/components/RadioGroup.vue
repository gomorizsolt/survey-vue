<template>
  <a-radio-group v-model="selectedValue" @change="handleRadioGroupChange">
    <a-radio v-for="choice in formattedChoices" :key="choice" :value="choice">{{
      choice
    }}</a-radio>
  </a-radio-group>
</template>

<script>
import { Radio } from "ant-design-vue";
import AnswerSelectorMixin from "@/mixins/AnswerSelector";

export default {
  mixins: [AnswerSelectorMixin],
  components: {
    [Radio.Group.name]: Radio.Group,
    [Radio.name]: Radio,
  },
  methods: {
    handleRadioGroupChange(event) {
      if (event?.target?.value) {
        const {
          target: { value: nextSelectedValue },
        } = event;

        this.updateAnswer(nextSelectedValue);
      }
    },
  },
};
</script>

<style></style>

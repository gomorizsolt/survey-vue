<template>
  <a-dropdown :trigger="['click']">
    <a-button class="dropdown">
      {{ selectedValue }}
      <a-icon type="down" />
    </a-button>
    <a-menu slot="overlay" @click="handleDropdownChange">
      <a-menu-item v-for="choice in formattedChoices" :key="choice">{{
        choice
      }}</a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
import { Dropdown, Menu } from "ant-design-vue";
import AnswerSelectorMixin from "@/mixins/AnswerSelector";

export default {
  mixins: [AnswerSelectorMixin],
  components: {
    [Dropdown.name]: Dropdown,
    [Menu.name]: Menu,
    [Menu.Item.name]: Menu.Item,
  },
  methods: {
    handleDropdownChange({ key: nextSelectedValue }) {
      this.updateAnswer(nextSelectedValue);
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

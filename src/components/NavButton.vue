<template>
  <router-link :to="to">
    <a-button :type="type" size="large" @click="onClick">
      <slot></slot>
    </a-button>
  </router-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "danger",
    },
    onClick: {
      type: Function,
      default: () => {},
    },
  },
};
</script>

<style></style>

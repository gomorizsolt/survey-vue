<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ subtitle }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["title", "subtitle"]),
  },
};
</script>

<style></style>

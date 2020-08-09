<template>
  <div>
    {{ JSON.stringify(page) }}
    <button type="button" @click="$emit('next-page')">Next</button>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>

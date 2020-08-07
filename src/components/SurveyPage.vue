<template>
  <div>
    {{ JSON.stringify(page) }}
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

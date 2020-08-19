<template>
  <section class="survey__info">
    <h1>Info page</h1>
    <NavButton to="/survey/questions">Go to /survey/questions</NavButton>
  </section>
</template>

<script>
import NavButton from "@/components/NavButton";

export default {
  components: {
    NavButton,
  },
};
</script>

<style scoped>
.survey__info {
  text-align: center;
}
</style>

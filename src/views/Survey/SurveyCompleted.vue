<template>
  <section class="survey__completed">
    <h1>Thanks!</h1>
    <NavButton to="/" :onClick="reset">
      Go to /
    </NavButton>
  </section>
</template>

<script>
import { mapActions } from "vuex";
import NavButton from "@/components/NavButton";

export default {
  components: {
    NavButton,
  },
  methods: {
    ...mapActions(["reset"]),
  },
};
</script>

<style scoped>
.survey__completed {
  text-align: center;
}
</style>

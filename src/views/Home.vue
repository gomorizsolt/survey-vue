<template>
  <section class="home">
    <img src="@/assets/logo.svg" class="home__logo" alt="Talk" />
    <NavButton to="/survey" class="home__cta">
      Go to /survey <a-icon type="arrow-right" />
    </NavButton>
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
.home {
  height: 100%;
  width: 100%;
}

.home__logo {
  max-width: 300px;
  display: block;
  margin: 0 auto;
}

.home__cta {
  margin-top: 2rem;
  display: block;
  text-align: center;
}
</style>

<template>
  <section class="home">
    <img src="@/assets/logo.svg" class="home__logo" alt="Talk" />
    <a-button type="dashed" size="large" class="home__cta">
      <router-link to="/survey">
        Take part in survey <a-icon type="arrow-right" />
      </router-link>
    </a-button>
  </section>
</template>

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
  margin: 2rem auto 0 auto;
  display: block;
}
</style>

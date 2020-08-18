<template>
  <div>
    <a-layout>
      <a-layout-content>
        <transition name="slither" mode="out-in">
          <router-view></router-view>
        </transition>
      </a-layout-content>
      <a-layout-footer>
        Made with Vue, Vuex and Vue Router by Zsolt Gomori
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
export default {};
</script>

<style>
.ant-layout {
  min-height: 100vh;
}

.ant-layout-content {
  max-width: 800px;
  width: 100%;
  padding: 2rem 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ant-layout-footer {
  text-align: center;
}

.slither-enter,
.slither-leave-to {
  opacity: 0;
}

.slither-enter-active,
.slither-leave-active {
  transition: opacity 0.3s ease-in;
}

.slither-enter-to,
.slither-leave {
  opacity: 1;
}
</style>

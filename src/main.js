import Vue from "vue";
import App from "./App.vue";
import "./assets/styles/tailwind.css";
import router from './router'

Vue.config.productionTip = false;

// it's globally registered, not needed to assign it to a variable and or pass it around to reuse it
// Vue.component("button-counter", {
//   data: function () {
//     return {
//       count: 0,
//     };
//   },
//   template: '<button @click="count++">{{ count }}</button>',
// });

// it's the main container component
new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");

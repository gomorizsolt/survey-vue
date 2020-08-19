import Vue from "vue";
import App from "./App.vue";
import { Button, Icon } from "ant-design-vue";
import router from "./router";
import store from "./store";

Vue.component(Button.name, Button);
Vue.component(Icon.name, Icon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

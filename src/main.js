import Vue from "vue";
import App from "./App.vue";
import { Layout, Menu, Button, Dropdown, Icon, Radio } from "ant-design-vue";
import router from "./router";
import store from "./store";

Vue.component(Layout.name, Layout);
Vue.component(Layout.Header.name, Layout.Header);
Vue.component(Layout.Content.name, Layout.Content);
Vue.component(Layout.Footer.name, Layout.Footer);
Vue.component(Menu.name, Menu);
Vue.component(Menu.Item.name, Menu.Item);
Vue.component(Button.name, Button);
Vue.component(Dropdown.name, Dropdown);
Vue.component(Icon.name, Icon);
Vue.component(Radio.name, Radio);
Vue.component(Radio.Group.name, Radio.Group);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

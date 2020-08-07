<template>
  <Layout class="container mx-auto min-h-screen px-6 bg-white">
    <header class="pb-10">
      <Menu v-model="currentMenu" mode="horizontal">
        <MenuItem v-for="item in $options.routes" :key="item.name">
          <router-link :to="item.path">{{ item.name }}</router-link>
        </MenuItem>
      </Menu>
    </header>
    <Content>
      <slot></slot>
    </Content>
    <footer class="py-10">
      Footer
    </footer>
  </Layout>
</template>

<script>
import { Layout, Menu } from "ant-design-vue";
import routes from "@/router/routes.js";

export default {
  data: () => ({
    currentMenu: ["home"],
  }),
  components: {
    Layout,
    Menu,
    MenuItem: Menu.Item,
    Content: Layout.Content,
  },
  routes,
};
</script>

<style></style>

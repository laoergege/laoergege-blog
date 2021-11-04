import { defineClientAppEnhance } from '@vuepress/client'
import Home from "./components/Home.vue";
import ListItem from "./components/ListItem.vue";

export default defineClientAppEnhance(({ app }) => {
  app.component("Home", Home);
  app.component("ListItem", ListItem);
});
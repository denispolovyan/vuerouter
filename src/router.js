import { createRouter, createWebHashHistory } from "vue-router";

import ComponentOne from "./components/ComponentOne.vue";
import ComponentTwo from "./components/ComponentTwo.vue";
import ComponentThree from "./components/ComponentThree.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/one", component: ComponentOne },
    { path: "/two", component: ComponentTwo },
    { path: "/three", component: ComponentThree },
  ],
});

import { createRouter, createWebHashHistory } from "vue-router";

// import App from "./App.vue";
import MainPage from "./pages/MainPage.vue";
import FilmsCarousel from "./pages/FilmsCarousel.vue";
import FilmsLayout from "./pages/FilmsLayout.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", name: "main", component: MainPage },
    { path: "/films", name: "films", component: FilmsCarousel },
    {
      path: "/films",
      name: "filmsLayout",
      component: FilmsLayout,
      children: [{ path: "/films", name: "films", component: FilmsCarousel }],
    },
  ],
});

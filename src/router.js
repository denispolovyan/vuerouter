import { createRouter, createWebHashHistory } from "vue-router";

import MainPage from "./pages/MainPage.vue";
import FilmsCarousel from "./pages/FilmsCarousel.vue";
import FilmsLayout from "./pages/FilmsLayout.vue";
import CurrentFilm from "./pages/CurrentFilm.vue";
import UserForm from "./pages/UserForm.vue";
import UserInfo from "./pages/UserInfo.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", name: "main", component: MainPage },
    { path: "/films", name: "films", component: FilmsCarousel },
    { path: "/films/:id", name: "film", component: CurrentFilm },
    { path: "/user-auth", name: "userAuthefication", component: UserForm },
    { path: "/user", name: "user", component: UserInfo },

    {
      path: "/films",
      name: "filmsLayout",
      component: FilmsLayout,
      children: [
        { path: "/films", name: "films", component: FilmsCarousel },
        { path: "/films/:id", name: "film", component: CurrentFilm },
        { path: "/user-auth", name: "userAuthefication", component: UserForm },
        { path: "/user", name: "user", component: UserInfo },
      ],
    },
  ],
});

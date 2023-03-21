import { createRouter, createWebHashHistory } from "vue-router";

import MainPage from "../pages/MainPage.vue";
import FilmsCarousel from "../pages/FilmsCarousel.vue";
import FilmsLayout from "../pages/FilmsLayout.vue";
import CurrentFilm from "../pages/CurrentFilm.vue";
import UserForm from "../pages/UserForm.vue";
import UserInfo from "../pages/UserInfo.vue";
import PaymentForm from "../pages/PaymentForm.vue";
import NoRegistration from "../pages/NoRegistration.vue";
import NoPremium from "../pages/NoPremium.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/:pathMatch(.*)*", redirect: "/films" },
    { path: "/", name: "main", component: MainPage },
    { path: "/films", name: "films", component: FilmsCarousel },
    { path: "/films/:id", name: "film", component: CurrentFilm },
    { path: "/user-auth", name: "userAuthefication", component: UserForm },
    { path: "/user", name: "user", component: UserInfo },
    { path: "/user/premium", name: "premium", component: PaymentForm },
    { path: "/no-premium", name: "premiumWarning", component: NoPremium },

    {
      path: "/no-registration",
      name: "registationWarning",
      component: NoRegistration,
    },
    {
      path: "/films",
      name: "filmsLayout",
      component: FilmsLayout,
      children: [
        {
          path: "",
          name: "films",
          component: FilmsCarousel,
        },
        {
          path: ":id",
          name: "film",
          component: CurrentFilm,
        },
        { path: "/user-auth", name: "userAuthefication", component: UserForm },
        { path: "/user", name: "user", component: UserInfo },
        { path: "/user/premium", name: "premium", component: PaymentForm },
      ],
    },
  ],
});

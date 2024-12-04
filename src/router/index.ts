import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/doctors",
    },
    {
      path: "/doctors",
      name: "doctors",
      component: () => import("@/views/doctors/index.vue"),
    },
    {
      path: "/nurses",
      name: "nurses",
      component: () => import("@/views/nurses/index.vue"),
    },
  ],
});

export default router;

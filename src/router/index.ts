import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "AllTodos",
    component: () => import("@/views/AllTodos.vue"),
  },
  {
    path: "/done",
    name: "DoneTodos",
    component: () => import("@/views/DoneTodos.vue"),
  },
  {
    path: "/active",
    name: "ActiveTodos",
    component: () => import("@/views/ActiveTodos.vue"),
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;

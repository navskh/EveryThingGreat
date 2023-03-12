import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";
// import BoardDetail from "../views/BoardDetail.vue";
import BoardWrite from "../views/BoardWrite.vue";
// import BoardEdit from "../views/BoardEdit.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: MainView,
    },
    {
      path: "/:nav*",
      name: "main",
      component: MainView,
    },
    // {
    //   path: "/:nav*/detail/:id",
    //   name: "detail",
    //   component: BoardDetail,
    // },
    {
      path: "/:nav*/write",
      name: "write",
      component: BoardWrite,
    },
    // {
    //   path: "/:nav*/write/:id",
    //   name: "edit",
    //   component: BoardEdit,
    // },
  ],
});

export default router;

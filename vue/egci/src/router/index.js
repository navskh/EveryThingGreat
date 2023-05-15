import { createRouter, createWebHistory } from "vue-router";
import PostList from "../views/PostList.vue";
import BoardDetail from "../views/BoardDetail.vue";
import BoardWrite from "../views/BoardWrite.vue";
import BoardEdit from "../views/BoardEdit.vue";
import Login from "../views/Login.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: PostList,
        },
        {
            path: "/login",
            name: "login",
            component: Login,
        },
        {
            path: "/:nav*",
            name: "main",
            component: PostList,
        },
        {
            path: "/:nav*/detail/:id",
            name: "detail",
            component: BoardDetail,
        },
        {
            path: "/:nav*/write",
            name: "write",
            component: BoardWrite,
        },
        {
            path: "/:nav*/write/:id",
            name: "edit",
            component: BoardEdit,
        },
    ],
});

export default router;

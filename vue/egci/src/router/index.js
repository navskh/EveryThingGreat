import { createRouter, createWebHistory } from "vue-router";
import PostList from "../views/PostList.vue";
import BoardDetail from "../views/BoardDetail.vue";
import BoardWrite from "../views/BoardWrite.vue";
import BoardEdit from "../views/BoardEdit.vue";
import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            components: {
                default: PostList,
                login: Login,
            },
        },
        {
            path: "/login",
            name: "login",
            component: Login,
        },
        {
            path: "/signup",
            name: "signup",
            component: SignUp,
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
        {
            path: "/login",
            name: "login",
            component: Login,
        },
        {
            path: "/signup",
            name: "signup",
            component: SignUp,
        },
    ],
});

export default router;

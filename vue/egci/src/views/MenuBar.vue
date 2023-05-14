<template>
    <div
        class="SIDEBAR py-4 px-4 mr-3 w-[15rem] text-md text-base-content h-[calc(100vh-140px)]"
    >
        <ul class="menu bg-base-100 w-56 ma-2 pb-11 py-2 pl-1">
            <button
                type="button"
                class="btn btn-primary w-full mb-6"
                @click="goWrite"
            >
                글쓰기
            </button>
            <li :class="selectPath === '/' && 'bordered'">
                <router-link
                    :to="{
                        name: 'main',
                        params: { nav: '' },
                        path: '/',
                        query: { page: 1 },
                    }"
                    class="side-link"
                    @click.stop="selectCategory('전체보기')"
                    >전체보기</router-link
                >
            </li>
            <li
                v-for="category in menuCategory"
                :key="category.name"
                :class="selectPath === category.path && 'bordered'"
            >
                <router-link
                    :to="{
                        name: 'main',
                        params: category.params,
                        query: { page: 1 },
                    }"
                    class="side-link"
                    @click.stop="selectCategory(category)"
                    >{{ category.name }}</router-link
                >
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import menuCategory from "../assets/category";
import { useBoardStore } from "@/stores/boardStore";

const route = useRoute();
const router = useRouter();

const selectPath = ref("/");

const boardInfo = useBoardStore();

const selectCategory = (category) => {
    console.log(category);
    if (category == "전체보기") {
        selectPath.value = "/";
        boardInfo.changeCategory({
            params: { nav: "" },
        });
    } else {
        selectPath.value = category.path;
        boardInfo.changeCategory(category);
    }
};

const goWrite = () => {
    console.log(route.params.nav);
    const nav = route.path.split("/");
    nav.shift();
    router.push({
        name: "write",
        params: {
            nav,
        },
    });
};
</script>

<style lang="scss" scoped></style>

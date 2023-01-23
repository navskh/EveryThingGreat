<template>
  <ul class="menu menu- bg-base-100 w-56 ma-2">
    <button type="button" class="btn btn-primary w-full mb-6" @click="goWrite">
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
        :to="{ name: 'main', params: category.params, query: { page: 1 } }"
        class="side-link"
        @click.stop="selectCategory(category)"
        >{{ category.name }}</router-link
      >
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import menuCategory from "../assets/category";

const route = useRoute();
const router = useRouter();

const selectPath = ref("/");

const selectCategory = (category) => {
  console.log(category);
  if (category == "전체보기") {
    selectPath.value = "/";
  } else {
    selectPath.value = category.path;
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

<template>
  <ul class="menu bg-base-100 w-56">
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
import menuCategory from "../assets/category";

const selectPath = ref("/");

const selectCategory = (category) => {
  console.log(category);
  if (category == "전체보기") {
    selectPath.value = "/";
  } else {
    selectPath.value = category.path;
  }
};
</script>

<style lang="scss" scoped></style>

<script setup>
import { RouterView } from "vue-router";
import NavBar from "./views/NavBar.vue";
import MenuBar from "./views/MenuBar.vue";
</script>

<template>
  <div class="relative h-screen overflow-hidden">
    <NavBar />
    <div class="max-w-[1500px] h-[calc(100vh-90px)] flex m-auto">
      <MenuBar />
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>

<script setup>
import { RouterView } from "vue-router";
import NavBar from "./views/NavBar.vue";
import MenuBar from "./views/MenuBar.vue";
import PostList from "./views/PostList.vue";
import MainStack from "./stack/MainStack.vue";
import AuthStack from "./stack/AuthStack.vue";
import { useAuthStore } from "./stores/authStore";

const authInfo = useAuthStore();

console.log(authInfo.isLogin);
</script>

<template>
    <div v-if="!authInfo.isLogin">
        <AuthStack />
    </div>
    <div v-else>
        <MainStack />
    </div>
</template>

<style scoped></style>

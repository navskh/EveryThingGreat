<script setup>
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

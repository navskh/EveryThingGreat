<script setup>
import MainStack from "./stack/MainStack.vue";
import AuthStack from "./stack/AuthStack.vue";
import { useAuthStore } from "./stores/authStore";
import { signOut } from "./api/auth";
import { onBeforeUnmount } from "vue";

const authInfo = useAuthStore();

console.log(authInfo.isLogin);

const handleBeforeUnload = async () => {
    await signOut();
    authInfo.setIsLogout();
};

onBeforeUnmount(() => {
    window.removeEventListener("beforeunload", handleBeforeUnload);
}),
    window.addEventListener("beforeunload", handleBeforeUnload);
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

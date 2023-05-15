<script setup>
import { RouterView, useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();

if (route.path == "/") router.push({ name: 'login' });
</script>

<template>
    <div>
        <RouterView />
    </div>
</template>

<style lang="scss" scoped></style>

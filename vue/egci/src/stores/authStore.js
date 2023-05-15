import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("authStore", () => {
    const isLogin = ref(false);

    async function setIsLogin() {
        isLogin.value = true;
    }

    return { setIsLogin, isLogin };
});

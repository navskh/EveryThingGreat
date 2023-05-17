import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { onAuthStateChanged } from "@/api/auth";
import { useRoute, useRouter } from "vue-router";

export const useAuthStore = defineStore("authStore", () => {
    const isLogin = ref(false);
    const thisUser = ref({});

    async function setIsLogin(user) {
        isLogin.value = true;
        thisUser.value = user;
    }
    
    async function setIsLogout() {
      isLogin.value = false;
      thisUser.value = {};
  }

    const router = useRouter();
    const unsubscribe = onAuthStateChanged((user) => {
        if (user) {
            setIsLogin(user);
            alert("기존에 로그인 되어있으므로, 메인화면으로 이동합니다.");
            router.push({
                name: "home",
            });
        }
    });

    return { setIsLogout, setIsLogin, isLogin };
});

import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useBoardStore = defineStore("boardStore", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment };
});

/**
 * 필요한 애들
 * 1. 카테고리
 * 2. 페이징
 * 그정도?
 */

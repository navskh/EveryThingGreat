import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useBoardStore = defineStore("boardStore", () => {
  const BoardContent = ref("");
  function updateBoardContent(contentValue) {
    BoardContent.value = contentValue;
  }

  return { updateBoardContent, BoardContent };
});

/**
 * 필요한 애들
 * 1. 카테고리
 * 2. 페이징
 * 3. Board
 */

import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { getBoard } from "@/api/firebase";

export const useBoardStore = defineStore("boardStore", () => {
  const BoardContent = ref("");
  function updateBoardContent(contentValue) {
    BoardContent.value = contentValue;
  }

  const BoardList = ref("");
  async function fetchBoardList() {
    BoardList.value = await getBoard();
    console.log(BoardList);
  }

  return { updateBoardContent, BoardContent, BoardList, fetchBoardList };
});

/**
 * 필요한 애들
 * 1. 카테고리
 * 2. 페이징
 * 3. Board
 */

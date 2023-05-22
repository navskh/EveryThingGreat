import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { getBoard } from "@/api/post";

export const useBoardStore = defineStore("boardStore", () => {
    const BoardContent = ref("");
    function updateBoardContent(contentValue) {
        BoardContent.value = contentValue;
    }

    const BoardList = ref("");
    const FilteredList = ref("");
    const NoticeList = ref("");
    async function fetchBoardList() {
        const { noticeSample, boardSample } = await getBoard();
        BoardList.value = boardSample;
        NoticeList.value = noticeSample;
    }

    const SelectedCategory = ref("");
    function changeCategory(category) {
        if (category == "") {
            FilteredList.value = BoardList.value;
            return;
        }
        const selectedValue = category.params.nav;
        SelectedCategory.value = selectedValue;
        if (selectedValue == "") {
            FilteredList.value = BoardList.value;
        } else {
            FilteredList.value = BoardList.value.filter(
                (ele) => ele.category == selectedValue
            );
        }
        console.log(FilteredList.value);
        console.log(selectedValue);
    }

    return {
        updateBoardContent,
        BoardContent,
        BoardList,
        FilteredList,
        fetchBoardList,
        changeCategory,
        NoticeList,
    };
});

/**
 * 필요한 애들
 * 1. 카테고리
 * 2. 페이징
 * 3. Board
 */

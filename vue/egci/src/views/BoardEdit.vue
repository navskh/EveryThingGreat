<template>
  <div class="w-[75%] pb-1 pt-4">
    <h1 class="font-bold text-3xl py-3">
      <input
        type="text"
        v-model="headTitle"
        class="input rounded-md input-ghost w-full"
        placeholder="제목을 입력하세요"
      />
    </h1>
    <div class="flex justify-between items-center mb-3">
      <div class="flex flex-row items-center text-sm">
        <span class="mr-2">{{ formatDate() }}</span>
        <span class="inline-block w-40"> 수정한 사람 : </span>
        <input
          type="text"
          v-model="author"
          class="input rounded-md input-ghost w-full input-sm"
          placeholder="작성자(닉네임)을 입력하세요"
        />
      </div>
      <div>
        <button
          class="btn btn-outline min-h-0 h-8 w-24 flex-row flex-nowrap"
          @click="doSave()"
        >
          <FolderArrowDownIcon class="mr-2 w-6" />저장
        </button>
      </div>
    </div>
    <BoardEditor />
  </div>
</template>

<script setup>
import BoardEditor from "@/components/board/BoardEditor.vue";
import { FolderArrowDownIcon } from "@heroicons/vue/24/outline";
import { ref } from "vue";
import { useBoardStore } from "../stores/boardStore";
import { BoardModel } from "@/model/board";
import { setBoard, getMaxID, updateBoard } from "@/api/firebase";
import { sweetalert } from "@/assets/common";
import { useRoute, useRouter } from "vue-router";


const route = useRoute();
const router = useRouter();

let data = JSON.parse(route.query.board);
const boardStore = useBoardStore();
boardStore.updateBoardContent(data.content);

const formatDate = () => {
  var dateData = new Date().toISOString();
  var thisData = dateData?.substring(0, 10).replaceAll("-", ".");
  return thisData;
};

const headTitle = ref(data?.title);
const author = ref(data?.author);

const doSave = async () => {
  let crDate = data.crDate;

  const board = new BoardModel({
    idx: data.idx,
    title: headTitle.value,
    content: boardStore.BoardContent,
    author: author.value,
    crDate: crDate,
    modDate: new Date().toLocaleString(),
  });

  const result = await updateBoard(data.idx, board);
  if (result == 'success') {
    sweetalert("글이 등록되었습니다!", "success", function () {
      router.push({ name: "main", params: { nav: "" } });
    });
  }
  else {
    sweetalert("삭제되는 중 문제가 생겼습니다.!", "warning");
  }
};
</script>

<style lang="scss" scoped></style>

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
import { setBoard, getMaxID } from "@/api/firebase";

const boardStore = useBoardStore();

const formatDate = () => {
  var dateData = new Date().toISOString();
  var thisData = dateData?.substring(0, 10).replaceAll("-", ".");
  return thisData;
};

const headTitle = ref("");
const author = ref("");

const doSave = async () => {
  const maxId = await getMaxID();

  let crDate = new Date().toLocaleString();

  const board = new BoardModel({
    idx: maxId,
    title: headTitle.value,
    content: boardStore.BoardContent,
    author: author.value,
    crDate: crDate,
    modDate: null,
  });

  console.log(board.idx, board.title, board.content, board.author);
  await setBoard(board);
};
</script>

<style lang="scss" scoped></style>

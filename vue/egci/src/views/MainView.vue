<template>
  <div class="w-[75%] min-w-[1000px] h-full overflow-y-auto">
    <div class="CONTAINER flex flex-col items-center justify-center pb-4">
      <div class="TITLE w-full">
        <div class="flex justify-between pr-4 items-center mb-4 mt-8">
          <h1 class="text-2xl font-bold">카테고리</h1>
          <span class="text-right"><b>0</b>개의 글</span>
        </div>
      </div>
      <div
        class="CONTENT w-full overflow-y-auto overflow-x-hidden flex justify-center flex-col"
      >
        <table class="table w-[99%] border-collapse">
          <!-- head -->
          <thead>
            <tr>
              <th class="tracking-widest w-[60%]">제목</th>
              <th class="w-[15%] tracking-widest">작성자</th>
              <th class="w-[10%] tracking-widest">수정일</th>
              <th class="w-[10%] tracking-widest">작성일</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getBoard } from "../api/firebase";

getBoard();
</script>

<style lang="scss" scoped></style>

<template>
  <div class="w-[80%] min-w-[1000px] h-full overflow-y-auto">
    <div class="CONTAINER flex flex-col items-center justify-center pb-4">
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

<script setup></script>

<style lang="scss" scoped></style>

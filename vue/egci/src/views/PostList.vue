<template>
    <div class="w-[75%] min-w-[1000px] h-full overflow-y-auto">
        <div class="CONTAINER flex flex-col items-center justify-center pb-4">
            <div class="TITLE w-full">
                <div class="flex justify-between pr-4 items-center mb-4 mt-8">
                    <h1 class="text-2xl font-bold">카테고리</h1>
                    <span class="text-right"
                        ><b>{{ boardInfo.FilteredList.length }}</b
                        >개의 글</span
                    >
                </div>
            </div>
            <div
                class="CONTENT w-full overflow-y-auto overflow-x-hidden flex justify-center flex-col"
            >
                <table class="table w-[99%] border-collapse">
                    <thead>
                        <tr>
                            <th class="tracking-widest w-[60%]">제목</th>
                            <th class="w-[15%] tracking-widest">작성자</th>
                            <th class="w-[10%] tracking-widest">작성일</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="(board, index) in boardInfo.NoticeList"
                            :key="board.idx"
                            class="font-bold"
                        >
                            <td>
                                <span class="kbd-xs">공지</span>
                                <router-link
                                    class="hover:cursor-pointer w-max hover:after:content-['#'] hover:after:ml-2 hover:after:font-semibold hover:after:text-secondary-focus hover:text-secondary-focus"
                                    :to="{
                                        name: 'detail',
                                        params: { id: board.idx },
                                    }"
                                    >{{ board.title }}</router-link
                                >
                            </td>
                            <td>{{ board.author }}</td>
                            <td>{{ board.crDate }}</td>
                        </tr>
                        <tr
                            v-for="(board, index) in boardInfo.FilteredList"
                            :key="board.idx"
                        >
                            <td>
                                <span class="kbd-xs">{{ index + 1 }}</span>
                                <router-link
                                    class="hover:cursor-pointer w-max hover:after:content-['#'] hover:after:ml-2 hover:after:font-semibold hover:after:text-secondary-focus hover:text-secondary-focus"
                                    :to="{
                                        name: 'detail',
                                        params: { id: board.idx },
                                    }"
                                    >{{ board.title }}</router-link
                                >
                            </td>
                            <td>{{ board.author }}</td>
                            <td>{{ board.crDate }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watchEffect, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getBoard, getMaxID } from "../api/post";
import { useBoardStore } from "@/stores/boardStore";
import { storeToRefs } from "pinia";

const route = useRoute();
const router = useRouter();

console.log(route.params);

const boardInfo = useBoardStore();

const listInit = async () => {
    await boardInfo.fetchBoardList();
    await boardInfo.changeCategory("");
};

onMounted(() => {
    listInit();
});
</script>

<style lang="scss" scoped></style>

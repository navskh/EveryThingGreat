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
                <span class="inline-block w-64"> 수정한 사람 : </span>
                <input
                    type="text"
                    v-model="author"
                    class="input rounded-md input-ghost w-full input-sm"
                    placeholder="작성자(닉네임)을 입력하세요"
                />
                <select
                    v-model="category"
                    class="select select-sm ml-2 max-w-xs"
                >
                    <option value="" selected>카테고리를 선택하세요</option>
                    <option
                        v-for="menu of menuCategory"
                        :value="menu.params.nav"
                    >
                        {{ menu.name }}
                    </option>
                </select>
                <label class="flex cursor-pointer ml-4">
                    <span class="label-text w-10">공지</span>
                    <input
                        type="checkbox"
                        checked="checked"
                        class="checkbox checkbox-primary"
                        v-model="isNotice"
                    />
                </label>
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
            <BoardEditor class="EDIT" v-if="content !== null" :content="content" @update="handleUpdate"  />
        </div>
</template>

<script setup>
import BoardEditor from "@/components/board/BoardEditor.vue";
import { FolderArrowDownIcon } from "@heroicons/vue/24/outline";
import { ref, watchEffect } from "vue";
import { BoardModel } from "@/model/board";
import {  updateBoard, getBoardByIdx } from "@/api/post";
import { sweetalert } from "@/assets/common";
import { useRoute, useRouter } from "vue-router";
import menuCategory from "../assets/category";

const route = useRoute();
const router = useRouter();

// let data = JSON.parse(route.query.board);
const headTitle = ref("");
const author = ref("");
const category = ref("");
const isNotice = ref(false);
const content = ref(null);
const id = route.params.id;
const crDate = ref("");
const fetch = async () => {
    let data = await getBoardByIdx(id);
    content.value = data.content;
    headTitle.value = data.title;
    author.value = data.author;
    category.value = data.category;
    isNotice.value = data.isNotice;
    crDate.value = data.crDate;
};

watchEffect(fetch);

const handleUpdate = (value) => {
    content.value = value;
};


const formatDate = () => {
    var dateData = new Date().toISOString();
    var thisData = dateData?.substring(0, 10).replaceAll("-", ".");
    return thisData;
};


const doSave = async () => {
    const board = new BoardModel({
        idx: id,
        title: headTitle.value,
        content: content.value,
        author: author.value,
        crDate: crDate.value,
        category: category.value,
        modDate: new Date().toLocaleString(),
        isNotice: isNotice.value,
    });

    const result = await updateBoard(id, board);
    if (result == "success") {
        sweetalert("글이 등록되었습니다!", "success", function () {
            router.push({ name: "main", params: { nav: "" } });
        });
    } else {
        sweetalert("삭제되는 중 문제가 생겼습니다.!", "warning");
    }
};
</script>

<style lang="scss" scoped>
.EDIT::-webkit-scrollbar {
    width: 5px;
}

.EDIT::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background-color: hsl(var(--p));
    border-radius: 20px;
}

.EDIT::-webkit-scrollbar-track {
    background-color: rgba(255, 255, 255, 0);
}
</style>

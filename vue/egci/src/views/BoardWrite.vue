<template>
    <div class="w-[60%] pb-1 pt-4">
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
        <BoardEditor class="prose" @update="updateHandler" />
    </div>
</template>

<script setup>
import BoardEditor from "@/components/board/BoardEditor.vue";
import { FolderArrowDownIcon } from "@heroicons/vue/24/outline";
import { ref } from "vue";
import { BoardModel } from "@/model/board";
import { setBoard, getMaxID } from "@/api/post";
import { sweetalert } from "@/assets/common";
import {  useRouter } from "vue-router";
import menuCategory from "../assets/category";
import { getAuth } from "@firebase/auth";
const router = useRouter();

const formatDate = () => {
    var dateData = new Date().toISOString();
    var thisData = dateData?.substring(0, 10).replaceAll("-", ".");
    return thisData;
};

const user = getAuth().currentUser.email.split("@")[0];
const headTitle = ref("");
const author = ref(user);
const category = ref("");
const isNotice = ref(false);
const content = ref("");

const updateHandler = (value) => {
    content.value = value;
};


const doSave = async () => {
    const maxId = await getMaxID();
    let crDate = new Date().toLocaleString();

    const board = new BoardModel({
        idx: maxId,
        title: headTitle.value,
        content: content.value,
        author: author.value,
        crDate: crDate,
        category: category.value,
        modDate: null,
        isNotice: isNotice.value,
    });

    const result = await setBoard(board);
    if (result) {
        sweetalert("글이 등록되었습니다!", "success", function () {
            router.push({ name: "main", params: { nav: "" } });
        });
    } else {
        sweetalert("삭제되는 중 문제가 생겼습니다.!", "warning");
    }
};
</script>

<style lang="scss" scoped></style>

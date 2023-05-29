<template>
    <div
        class="w-[100%] md:w-[80%] h-[calc(100vh - 20px)] px-1 py-2 bg-base-100"
    >
        <div
            class="DETAIL max-w-[calc(1500px-18rem)] h-full pb-1 overflow-y-scroll pr-3"
            @scroll="showTopBtn"
        >
            <h1 class="font-bold text-3xl py-3">
                {{ board.isNotice ? "[공지]" : "" }} {{ board.title }}
            </h1>
            <div class="flex justify-between items-center border-b-2 pb-2">
                <div class="text-sm">
                    <span class="mr-1">{{ board.crDate }}</span>
                    <span class="text-xs">
                        마지막으로 수정한 사람 : {{ board.author }}
                    </span>
                    <span class="text-xs ml-1">
                        ( {{ board.category == "" ? "기타" : board.category }} )
                    </span>
                </div>
                <div>
                    <button class="btn btn-ghost btn-sm" @click="doUrlCopy()">
                        <ShareIcon class="w-5 h-5" />
                    </button>
                    <button class="btn btn-ghost btn-sm" @click="goEdit()">
                        <PencilIcon class="w-5 h-5" />
                    </button>
                    <button
                        class="btn btn-ghost btn-sm"
                        @click="confirmDelete()"
                    >
                        <TrashIcon class="w-5 h-5" />
                    </button>
                </div>
            </div>
            <div class="ProseMirror prose">
                <div v-html="board.content"></div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ShareIcon, PencilIcon, TrashIcon } from "@heroicons/vue/24/solid";
import { useRouter, useRoute } from "vue-router";
import { sweetalert, sweetconfirm } from "@/assets/common";
import { getBoardByIdx } from "@/api/post";
import { ref, watchEffect } from "vue";
import { deletePost } from "@/api/post";
const route = useRoute();
const router = useRouter();

const id = route.params.id;

const board = ref({});

const fetch = async () => {
    let data = await getBoardByIdx(id);
    board.value = data;
};

watchEffect(fetch);

const doUrlCopy = () => {
    sweetalert("글 주소가 복사되었습니다!", "success", function () {
        navigator.clipboard.writeText(window.location.href);
    });
};

const goEdit = () => {
    router.push({
        name: "edit",
        params: {
            id: id,
        },
        query: {
            board: JSON.stringify(board.value),
        },
    });
};

const confirmDelete = () => {
    sweetconfirm("진짜로 삭제할건가요??", "warning").then((result) => {
        if (result.isConfirmed) doDelete();
        else return;
    });
};

const doDelete = async () => {
    var response = await deletePost(id);
    if (response == "success") {
        sweetalert("글이 삭제되었습니다!", "success", function () {
            router.push({ name: "main", params: { nav: "" } });
        });
    } else {
        sweetalert("게시되는 중 문제가 생겼습니다.!", "warning");
    }
};
</script>
<style scoped>
.DETAIL::-webkit-scrollbar {
    width: 5px;
}

.DETAIL::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background-color: hsl(var(--p));
    border-radius: 20px;
}

.DETAIL::-webkit-scrollbar-track {
    background-color: rgba(255, 255, 255, 0);
}

.prose {
    margin-top: 1em;
    margin-bottom: 1em;
}
</style>

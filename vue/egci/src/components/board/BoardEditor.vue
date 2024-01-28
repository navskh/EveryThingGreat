<template>
    <div class="example">
        <QuillEditor
            class="h-[65vh]"
            theme="snow"
            :options="options"
            v-model:content="contentValue"
            contentType="html"
            @update:content="handleUpdate"
        />
    </div>
</template>

<script setup>
// import hljs from "highlight.js";
// import debounce from "lodash/debounce";
import { QuillEditor, Quill } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import MarkdownShortcuts from "quill-markdown-shortcuts";
import { ref } from "vue";
import { useBoardStore } from "@/stores/boardStore";
const props = defineProps({
    content: {
        type: String,
        default: "",
    },
});

const contentValue = ref(props.content);

const emit = defineEmits(["update"]);
const handleUpdate = () => {
    emit("update", contentValue.value);
};

// Add fonts to whitelist
var Font = Quill.import("formats/font");
// We do not add Aref Ruqaa since it is the default
Font.whitelist = ["D2Coding", "roboto"];
Quill.register(Font, true);
Quill.register("modules/markdownShortcuts", MarkdownShortcuts);

const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"], // remove formatting button
];

const options = {
    modules: {
        toolbar: toolbarOptions,
        markdownShortcuts: {},
    },
    placeholder: "Compose an epic...",
    theme: "snow",
    content: "",
};


</script>

<style lang="scss" scoped></style>

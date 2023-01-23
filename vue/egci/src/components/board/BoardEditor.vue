<template>
  <div class="example">
    <QuillEditor theme="snow" :options="options" />

    <div class="output ql-snow">
      <div v-html="content"></div>
    </div>
  </div>
</template>

<script setup>
// import hljs from "highlight.js";
// import debounce from "lodash/debounce";
import { QuillEditor, Quill } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import MarkdownShortcuts from "quill-markdown-shortcuts";

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
};
</script>

<style lang="scss" scoped></style>

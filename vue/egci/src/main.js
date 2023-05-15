import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./index.css";
import "./assets/tailwind.css";
// import "./assets/main.css";
import "./assets/@tailwind/typography.css";

const app = createApp(App);

app.use(createPinia());

app.use(router);

app.mount("#app");

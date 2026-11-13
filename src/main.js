import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
const app = createApp(App);
const pinia = createPinia(App)

if (new URLSearchParams(location.search).has('debug')) {
  import('eruda').then(({ default: eruda }) => eruda.init())
}

app.use(router);
app.use(pinia)

app.mount("#app");

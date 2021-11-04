import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap";
import VueEasyLightbox from "vue-easy-lightbox";
const app = createApp(App);
app.use(VueEasyLightbox);
app.mount("#app");

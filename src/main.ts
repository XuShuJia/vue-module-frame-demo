import "normalize.css";
import "element-plus/dist/index.css";
import "./styles/reset.less";
import "./styles/common.less";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import routes from "./routes";

createApp(App)
  .use(routes)
  .use(createPinia())
  .mount(document.getElementById("app") as HTMLDivElement);

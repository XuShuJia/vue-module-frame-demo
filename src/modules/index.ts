import { defineAsyncComponent } from "vue";

export const ModuleA = defineAsyncComponent(
  () => import("./Module-A")
);

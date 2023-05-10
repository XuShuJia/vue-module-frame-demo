import { defineAsyncComponent } from "vue";
import ModuleLoading from "@/components/ModuleLoading";
import ModuleError from "@/components/ModuleError";

const delay = 100;
const loadingComponent = ModuleLoading;
const errorComponent = ModuleError;

export const ModuleA = defineAsyncComponent({
  loader: () => import("./Module-A"),
  loadingComponent,
  errorComponent,
  delay,
});

export const ModuleB = defineAsyncComponent({
  loader: () => import("./Module-B"),
  loadingComponent,
  errorComponent,
  delay,
});

export const ModuleC = defineAsyncComponent({
  loader: () => import("./Module-C"),
  loadingComponent,
  errorComponent,
  delay,
});

export const ModuleD = defineAsyncComponent({
  loader: () => import("./Module-D"),
  loadingComponent,
  errorComponent,
  delay,
});

export const ModuleE = defineAsyncComponent({
  loader: () => import("./Module-E"),
  loadingComponent,
  errorComponent,
  delay,
});

export const ModuleF = defineAsyncComponent({
  loader: () => import("./Module-F"),
  loadingComponent,
  errorComponent,
  delay,
});

export const ModuleG = defineAsyncComponent({
  loader: () => import("./Module-G"),
  loadingComponent,
  errorComponent,
  delay,
});

export const ModuleH = defineAsyncComponent({
  loader: () => import("./Module-H"),
  loadingComponent,
  errorComponent,
  delay,
});

export const ModuleI = defineAsyncComponent({
  loader: () => import("./Module-I"),
  loadingComponent,
  errorComponent,
  delay,
});

export const ModuleJ = defineAsyncComponent({
  loader: () => import("./Module-J"),
  loadingComponent,
  errorComponent,
  delay,
});

export const ModuleK = defineAsyncComponent({
  loader: () => import("./Module-K"),
  loadingComponent,
  errorComponent,
  delay,
});

export const ModuleL = defineAsyncComponent({
  loader: () => import("./Module-L"),
  loadingComponent,
  errorComponent,
  delay,
});

export const ModuleM = defineAsyncComponent({
  loader: () => import("./Module-M"),
  loadingComponent,
  errorComponent,
  delay,
});

export const ModuleN = defineAsyncComponent({
  loader: () => import("./Module-N"),
  loadingComponent,
  errorComponent,
  delay,
});

export const ModuleO = defineAsyncComponent({
  loader: () => import("./Module-O"),
  loadingComponent,
  errorComponent,
  delay,
});

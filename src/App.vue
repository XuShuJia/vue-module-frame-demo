<script lang="ts" setup>
import { ElConfigProvider } from "element-plus";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import "dayjs/locale/zh-cn";
import { useThemeModeStore } from "@/store";
import { onMounted } from "vue";

const theme = useThemeModeStore();

onMounted(() => {
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (e.matches) {
        theme.setDarkTheme();
      } else {
        theme.setLightTheme();
      }
    });
});
</script>

<template>
  <ElConfigProvider :locale="zhCn">
    <RouterView></RouterView>
  </ElConfigProvider>
</template>

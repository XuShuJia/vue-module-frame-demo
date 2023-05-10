<script lang="ts" setup>
import type { defineAsyncComponent } from "vue";
import { useMenuModuleStore } from "@/store";
import * as Modules from "@/modules";
import styles from "./style.module.less";

interface IModules {
  [id: string]: ReturnType<typeof defineAsyncComponent>;
}

const menuModuleStore = useMenuModuleStore();
</script>

<template>
  <div data-tt="true" :class="styles['module-view']">
    <component
      v-for="module in menuModuleStore.moduleRenderedList"
      v-show="module.id === menuModuleStore.moduleTabActive?.id"
      :key="module.id"
      :is="(Modules as unknown as IModules)[module.id]"
      :module="module"
    />
  </div>
</template>

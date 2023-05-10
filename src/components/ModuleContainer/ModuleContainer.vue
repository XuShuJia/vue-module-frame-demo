<script lang="ts" setup>
import { onMounted, reactive, watchEffect } from "vue";
import { useMenuModuleStore } from "@/store";
import { ModuleContainerProps } from "./types";
import styles from "./style.module.less";

const props = defineProps(ModuleContainerProps);
const state = reactive({
  show: false,
  mounted: false,
});
const menuModuleStore = useMenuModuleStore();

watchEffect(() => {
  if (state.mounted) {
    if (props.module?.id === menuModuleStore.moduleTabActive?.id) {
      if (!state.show) {
        state.show = true;
        props.onShow && props.onShow();
      }
    } else {
      if (state.show) {
        state.show = false;
        props.onHide && props.onHide();
      }
    }
  }
});

onMounted(() => {
  if (props.module) {
    menuModuleStore.setModuleContainerMap(
      props.module.id,
      props.onData,
      props.onBeforeClose
    );
  }
  state.mounted = true;
  props.onMounted && props.onMounted();
});
</script>

<template>
  <div :class="styles['module-container']">
    <slot></slot>
  </div>
</template>

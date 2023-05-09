<script lang="ts" setup>
import { ContainerBoxProps } from "./types";
import styles from "./style.module.less";

const props = defineProps(ContainerBoxProps);
</script>

<template>
  <div
    :class="styles.container"
    :style="{
      flexDirection: props.direction,
      flexWrap: props.wrap,
      justifyContent: props.justifyContent,
      alignItems: props.alignItems,
    }"
  >
    <slot></slot>
  </div>
</template>

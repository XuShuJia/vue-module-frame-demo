<script lang="ts" setup>
import { ElMessageBox } from "element-plus";
import ModuleContainer from "@/components/ModuleContainer";
import styles from "./style.module.less";

const handleModuleShow = () => {
  // console.log("show");
};
const handleModuleHide = () => {
  // console.log("hide");
};
const handleModuleMounted = () => {
  // console.log("mounted");
};
const handleModuleData = (data: any) => {
  console.log(data);
};
const handleModuleBeforeClose = async () => {
  // console.log("beforeClose");
  try {
    await ElMessageBox({
      title: "确认关闭",
      message: "是否关闭此模块？",
      type: "warning",
      showCancelButton: true,
      confirmButtonText: "确定关闭",
      cancelButtonText: "取消关闭",
    });
  } catch (e) {
    return false;
  }
};
</script>

<template>
  <ModuleContainer
    :onShow="handleModuleShow"
    :onHide="handleModuleHide"
    :onData="handleModuleData"
    :onMounted="handleModuleMounted"
    :onBeforeClose="handleModuleBeforeClose"
  >
  </ModuleContainer>
</template>

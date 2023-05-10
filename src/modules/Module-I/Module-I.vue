<script lang="ts" setup>
import {
  ElMessageBox,
  ElCard,
  ElRow,
  ElCol,
  ElForm,
  ElFormItem,
  ElSwitch,
  ElSelect,
  ElOption,
  ElInput,
  ElButton,
} from "element-plus";
import { reactive } from "vue";
import ModuleContainer from "@/components/ModuleContainer";
import type { NSModule } from "@/types";
import { useUserStore, useMenuModuleStore } from "@/store";

const userStore = useUserStore();
const menuModuleStore = useMenuModuleStore();

const state = reactive({
  data: "",
  module: null as NSModule.IModuleItem | null,
  moduleCloseConfirm: false,
  moduleJumpTarget: "",
  moduleJumpPayloadData: "",
});

const handleModuleInit = (module: NSModule.IModuleItem) => {
  state.module = module;
};
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
  console.log({ data });
  state.data = data;
};
const handleModuleBeforeClose = async () => {
  // console.log("beforeClose");
  if (state.moduleCloseConfirm) {
    try {
      await ElMessageBox({
        title: "关闭确认",
        message: "是否关闭此模块？",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      });
    } catch (e) {
      return false;
    }
  }
};
const handleGoToModule = () => {
  const targetModule = userStore.info.modules.find(
    ({ id }) => id === state.moduleJumpTarget
  );
  if (state.module && targetModule) {
    menuModuleStore.goToModule(
      state.module,
      targetModule,
      state.moduleJumpPayloadData
    );
  }
};
</script>

<template>
  <ModuleContainer
    :onInit="handleModuleInit"
    :onShow="handleModuleShow"
    :onHide="handleModuleHide"
    :onData="handleModuleData"
    :onMounted="handleModuleMounted"
    :onBeforeClose="handleModuleBeforeClose"
  >
    <ElRow :style="{ marginBottom: '15px' }">
      <ElCol :span="5" :style="{ marginRight: '15px' }">
        <ElCard shadow="never">
          <template #header>模块信息</template>
          <p>模块名称：{{ state.module?.name }}</p>
          <p>模块ID：{{ state.module?.id }}</p>
          <p>Data: {{ state.data }}</p>
        </ElCard>
      </ElCol>
      <ElCol :span="5" :style="{ marginRight: '15px' }">
        <ElCard shadow="never">
          <template #header>模块设置</template>
          <ElForm>
            <ElFormItem label="关闭确认">
              <ElSwitch
                v-model="state.moduleCloseConfirm"
                inline-prompt
                activeText="开启"
                inactiveText="关闭"
              />
            </ElFormItem>
          </ElForm>
        </ElCard>
      </ElCol>
      <ElCol :span="8" :style="{ marginRight: '15px' }">
        <ElCard shadow="never">
          <template #header>模块跳转测试</template>
          <ElForm>
            <ElFormItem label="目标模块">
              <ElSelect v-model="state.moduleJumpTarget">
                <ElOption
                  v-for="module in userStore.info.modules"
                  :key="module.id"
                  :value="module.id"
                  :label="module.name"
                  :disabled="module.id === state.module?.id"
                />
              </ElSelect>
            </ElFormItem>
            <ElFormItem label="携带数据">
              <ElInput v-model="state.moduleJumpPayloadData" />
            </ElFormItem>
            <ElFormItem>
              <ElButton
                type="primary"
                :disabled="!state.moduleJumpTarget"
                @click="handleGoToModule"
                >跳转</ElButton
              >
            </ElFormItem>
          </ElForm>
        </ElCard>
      </ElCol>
    </ElRow>
    <ElRow :style="{ marginBottom: '15px' }"> </ElRow>
  </ModuleContainer>
</template>

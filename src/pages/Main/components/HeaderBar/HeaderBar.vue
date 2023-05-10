<script lang="ts" setup>
import { ElPopover, ElButton, ElMessageBox } from "element-plus";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  MdDensitymediumRound,
  MdLightmodeOutlined,
  MdNightlightOutlined,
} from "oh-vue-icons/icons";
import ContainerBox from "@/components/ContainerBox";
import { useThemeModeStore } from "@/store";
import styles from "./style.module.less";

defineEmits<{
  (e: "toggleSideMenuBar"): void;
}>();

addIcons(
  MdDensitymediumRound,
  MdLightmodeOutlined,
  MdNightlightOutlined
);

const theme = useThemeModeStore();
const handleExit = () => {
  ElMessageBox({
    title: "确认操作",
    message: "确定要退出？",
    showCancelButton: true,
    confirmButtonText: "确定",
    cancelButtonText: "取消",
  }).then(() => {
    localStorage.removeItem("token");
    window.location.reload();
  });
};
</script>

<template>
  <ContainerBox
    direction="row"
    wrap="nowrap"
    justifyContent="space-between"
    alignItems="center"
    :class="styles['header-bar']"
  >
    <div data-tt="true" :class="styles['header-left']">
      <div
        :class="styles['sidebar-menu-switch-icon']"
        @click="() => $emit('toggleSideMenuBar')"
      >
        <OhVueIcon name="md-densitymedium-round" />
      </div>
      <div :class="styles['app-title']">Module Frame Demo</div>
    </div>
    <div data-tt="true" :class="styles['header-right']">
      <div
        :class="styles['theme-mode-switch']"
        @click="theme.switchThemeMode"
      >
        <OhVueIcon
          :name="
            theme.mode === 'light'
              ? 'md-lightmode-outlined'
              : 'md-nightlight-outlined'
          "
        />
      </div>
      <ElPopover placement="bottom" width="200" trigger="click">
        <template #reference>
          <div :class="styles.user">
            <div :class="styles['user-avatar']">
              <img src="@/assets/default-avatar.jpg" />
            </div>
            <div :class="styles['user-name']">DD</div>
          </div>
        </template>
        <ElButton :style="{ width: '100%' }" @click="handleExit"
          >退 出</ElButton
        >
      </ElPopover>
    </div>
  </ContainerBox>
</template>

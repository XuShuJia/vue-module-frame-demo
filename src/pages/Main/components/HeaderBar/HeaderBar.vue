<script lang="ts" setup>
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  MdDensitymediumRound,
  MdLightmodeOutlined,
  MdNightlightOutlined,
} from "oh-vue-icons/icons";
import ContainerBox from "@/components/ContainerBox";
import styles from "./style.module.less";
addIcons(
  MdDensitymediumRound,
  MdLightmodeOutlined,
  MdNightlightOutlined
);
</script>

<template>
  <ContainerBox
    direction="row"
    wrap="nowrap"
    justifyContent="space-between"
    alignItems="center"
    :class="styles['header-bar']"
  >
    <div :class="styles['header-left']">
      <div :class="styles['sidebar-menu-switch-icon']">
        <OhVueIcon name="md-densitymedium-round" />
      </div>
      <div :class="styles['app-title']">Module Frame Demo</div>
    </div>
    <div :class="styles['header-right']">
      <div :class="styles['theme-mode-switch']">
        <OhVueIcon name="md-lightmode-outlined" />
      </div>
      <div :class="styles.user">
        <div :class="styles['user-avatar']">
          <img src="@/assets/default-avatar.jpg" />
        </div>
        <div :class="styles['user-name']">DD</div>
      </div>
    </div>
  </ContainerBox>
</template>

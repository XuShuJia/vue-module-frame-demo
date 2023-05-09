<script lang="ts" setup>
import { useUserStore } from "@/store";
import ContainerBox from "@/components/ContainerBox";
import HeaderBar from "./components/HeaderBar";
import SideMenuBar from "./components/SideMenuBar";
import ModuleTabBar from "./components/ModuleTabBar";
import ModuleView from "./components/ModuleView";
import useAutoLogin from "./hooks/useAutoLogin";
import styles from "./style.module.less";
import { reactive } from "vue";

const userStore = useUserStore();
const state = reactive({
  showSideMenuBar: true,
});
useAutoLogin(userStore);
</script>

<template>
  <HeaderBar
    @toggleSideMenuBar="
      () => (state.showSideMenuBar = !state.showSideMenuBar)
    "
  />
  <ContainerBox
    :class="styles.container"
    direction="row"
    wrap="nowrap"
  >
    <SideMenuBar
      :show="state.showSideMenuBar"
      :menus="userStore.info.menus"
    />
    <ContainerBox
      :class="styles['main-right-container']"
      :data-menu-show="state.showSideMenuBar"
    >
      <ModuleTabBar />
      <ModuleView />
    </ContainerBox>
  </ContainerBox>
</template>

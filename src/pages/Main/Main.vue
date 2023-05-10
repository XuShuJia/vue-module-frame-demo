<script lang="ts" setup>
import { reactive, watch, watchEffect } from "vue";
import { useRouter } from "vue-router";
import { useUserStore, useMenuModuleStore } from "@/store";
import ContainerBox from "@/components/ContainerBox";
import HeaderBar from "./components/HeaderBar";
import SideMenuBar from "./components/SideMenuBar";
import ModuleTabBar from "./components/ModuleTabBar";
import ModuleView from "./components/ModuleView";
import useAutoLogin from "./hooks/useAutoLogin";
import styles from "./style.module.less";

const router = useRouter();
const userStore = useUserStore();
const menuModuleStore = useMenuModuleStore();

const state = reactive({
  openFirstModule: false,
  showSideMenuBar: true,
});

watch(
  () => menuModuleStore.moduleTabActive,
  (module) => {
    if (module) {
      const newPath = `/main/${module.id}`;
      if (router.currentRoute.value.fullPath !== newPath) {
        router.push({
          path: newPath,
        });
      }
    }
  }
);

watchEffect(() => {
  if (userStore.info.menus && !state.openFirstModule) {
    const routerSplit = router.currentRoute.value.fullPath.split("/");
    const moduleId = routerSplit[2];
    if (
      moduleId &&
      userStore.info.modules.find(({ id }) => id === moduleId)
    ) {
      userStore.info.menus.forEach((group, groupIndex) => {
        group.menus.forEach((menu, menuIndex) => {
          if (menu.moduleId === moduleId) {
            menuModuleStore.setMenuActive(
              userStore.info.menus[groupIndex].menus[menuIndex]
            );
          }
        });
      });
      state.openFirstModule = true;
    } else if (
      userStore.info.menus[0] &&
      userStore.info.menus[0].menus[0]
    ) {
      menuModuleStore.setMenuActive(userStore.info.menus[0].menus[0]);
      state.openFirstModule = true;
    }
  }
}, {});

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

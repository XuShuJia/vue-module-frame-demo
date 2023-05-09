<script lang="ts" setup>
import { useUserStore } from "@/store";
import ContainerBox from "@/components/ContainerBox";
import HeaderBar from "./components/HeaderBar";
import SideMenuBar from "./components/SideMenuBar";
import useAutoLogin from "./hooks/useAutoLogin";
import styles from "./style.module.less";

const userStore = useUserStore();

useAutoLogin(userStore);
</script>

<template>
  <HeaderBar />
  <ContainerBox
    :class="styles.container"
    direction="row"
    wrap="nowrap"
  >
    <SideMenuBar :menus="userStore.info.menus" />
    <div>M</div>
  </ContainerBox>
</template>

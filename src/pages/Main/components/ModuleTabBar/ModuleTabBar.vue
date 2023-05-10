<script lang="ts" setup>
import { nextTick, onMounted, ref, watchEffect } from "vue";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { MdCloseRound } from "oh-vue-icons/icons";
import { useMenuModuleStore } from "@/store";
import styles from "./style.module.less";

const menuModuleStore = useMenuModuleStore();
const tabBarRef = ref<HTMLDivElement | null>(null);
const tabBarListRef = ref<HTMLDivElement | null>(null);
let tabBarListPrevTx = 0;
const handleTabBarWheel = (e: WheelEvent) => {
  if (tabBarRef.value && tabBarListRef.value) {
    if (
      tabBarRef.value.offsetWidth - tabBarListRef.value.offsetWidth >
      0
    ) {
      return;
    }
    let tabBarListNextTx = tabBarListPrevTx;
    if (e.deltaY > 0) {
      tabBarListNextTx += e.deltaY;
      tabBarListNextTx = tabBarListNextTx > 0 ? 0 : tabBarListNextTx;
      // console.log(`e.deltaY > 0 = "滚轮向上，list向左滚动"`);
    } else {
      tabBarListNextTx += e.deltaY;
      // console.log(`e.deltaY < 0 = "滚轮向下，list向右滚动"`);
    }
    tabBarListNextTx =
      tabBarListNextTx <
      tabBarRef.value.offsetWidth - tabBarListRef.value.offsetWidth
        ? tabBarRef.value.offsetWidth -
          tabBarListRef.value.offsetWidth
        : tabBarListNextTx;
    tabBarListRef.value.style.transform = `translateX(${tabBarListNextTx}px)`;
    tabBarListPrevTx = tabBarListNextTx;
  }
};

watchEffect(() => {
  if (
    tabBarRef.value &&
    tabBarListRef.value &&
    menuModuleStore.moduleTabActive
  ) {
    nextTick(() => {
      if (
        tabBarRef.value &&
        tabBarListRef.value &&
        menuModuleStore.moduleTabActive
      ) {
        const activeTabItemNode = tabBarListRef.value.querySelector(
          `div[data-id="${menuModuleStore.moduleTabActive.id}"]`
        ) as HTMLDivElement;
        if (activeTabItemNode) {
          const tabBarWidth = tabBarRef.value.offsetWidth;
          const tabBarItemLeft = activeTabItemNode.offsetLeft;
          const tabBarItemWidth = activeTabItemNode.offsetWidth;
          let tabBarListNextTx = tabBarListPrevTx;
          if (
            tabBarItemWidth + tabBarItemLeft <
            Math.abs(tabBarListPrevTx)
          ) {
            tabBarListNextTx = -tabBarItemLeft;
          } else if (
            tabBarItemLeft +
              tabBarItemWidth -
              Math.abs(tabBarListPrevTx) >
            tabBarWidth
          ) {
            tabBarListNextTx =
              tabBarWidth - (tabBarItemLeft + tabBarItemWidth);
          }
          tabBarListRef.value.style.transform = `translateX(${tabBarListNextTx}px)`;
          tabBarListPrevTx = tabBarListNextTx;
        }
      }
    });
  }
});

onMounted(() => {
  if (tabBarRef.value) {
    tabBarRef.value.addEventListener("wheel", handleTabBarWheel);
  }
  return () => {
    if (tabBarRef.value) {
      tabBarRef.value.removeEventListener("wheel", handleTabBarWheel);
    }
  };
});

addIcons(MdCloseRound);
</script>

<template>
  <div ref="tabBarRef" :class="styles['module-tab-bar']">
    <div ref="tabBarListRef" :class="styles['tab-list']">
      <div
        v-for="module in menuModuleStore.moduleTabList"
        :key="module.id"
        :class="styles['tab-item']"
        :data-id="module.id"
        :data-active="
          menuModuleStore.moduleTabActive?.id === module.id
        "
        data-tt="true"
        @click="() => menuModuleStore.setModuleTabActive(module)"
      >
        <div :class="styles['tab-item-title']">{{ module.name }}</div>
        <div
          :class="styles['tab-item-close']"
          data-tt="true"
          @click.stop.prevent="
            () => menuModuleStore.closeModule(module)
          "
        >
          <OhVueIcon scale="0.9" name="md-close-round" />
        </div>
      </div>
    </div>
  </div>
</template>

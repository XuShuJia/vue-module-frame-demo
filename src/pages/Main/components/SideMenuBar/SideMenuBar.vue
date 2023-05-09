<script lang="ts" setup>
import { ElScrollbar } from "element-plus";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  MdFoldercopyOutlined,
  MdInsertdrivefileOutlined,
} from "oh-vue-icons/icons";
import { SideMenuBarProps } from "./types";
import styles from "./style.module.less";

const props = defineProps(SideMenuBarProps);

addIcons(MdFoldercopyOutlined, MdInsertdrivefileOutlined);
</script>

<template>
  <div :class="styles['side-menu-bar']">
    <ElScrollbar>
      <div
        v-for="group in props.menus"
        :key="group.id"
        :class="styles['menu-group']"
      >
        <div :class="styles['menu-group-title']">
          {{ group.title }}
        </div>
        <div :class="styles['menu-item-list']">
          <div
            v-for="item in group.menus"
            :key="item.id"
            :class="styles['menu-item']"
          >
            <div :class="styles['title-icon']">
              <OhVueIcon
                scale="0.8"
                name="md-insertdrivefile-outlined"
              />
            </div>
            {{ item.title }}
          </div>
        </div>
      </div>
    </ElScrollbar>
  </div>
</template>

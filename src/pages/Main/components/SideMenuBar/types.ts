import type { NSMenu } from "@/types";
import type { PropType } from "vue";

export const SideMenuBarProps = {
  menus: {
    type: Array as PropType<NSMenu.TMenuGroupList>,
    default: [],
    required: false,
  },
};

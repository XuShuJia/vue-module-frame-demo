import type { NSMenu } from "@/types";
import type { PropType } from "vue";

export const SideMenuBarProps = {
  show: {
    type: Boolean,
    default: true,
    required: false,
  },
  menus: {
    type: Array as PropType<NSMenu.TMenuGroupList>,
    default: [],
    required: false,
  },
};

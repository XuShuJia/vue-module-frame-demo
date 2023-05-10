import type { NSModule } from "@/types";
import type { PropType } from "vue";

export const ModuleContainerProps = {
  module: {
    type: Object as PropType<NSModule.IModuleItem>,
    default: undefined,
    required: true,
  },
  onShow: {
    type: Function as PropType<() => void>,
    default: undefined,
    required: true,
  },
  onHide: {
    type: Function as PropType<() => void>,
    default: undefined,
    required: true,
  },
  onData: {
    type: Function as PropType<(d?: any) => void>,
    default: undefined,
    required: true,
  },
  onMounted: {
    type: Function as PropType<() => void>,
    default: undefined,
    required: true,
  },
  onBeforeClose: {
    type: Function as PropType<() => Promise<boolean | undefined>>,
    default: undefined,
    required: true,
  },
};

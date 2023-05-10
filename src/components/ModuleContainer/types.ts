import type { NSModule } from "@/types";
import type { PropType } from "vue";

export const ModuleContainerProps = {
  module: {
    type: Object as PropType<NSModule.IModuleItem>,
    default: undefined,
    required: true,
  },
  onInit: {
    type: Function as PropType<
      (module: NSModule.IModuleItem) => void
    >,
    default: undefined,
    required: false,
  },
  onShow: {
    type: Function as PropType<() => void>,
    default: undefined,
    required: false,
  },
  onHide: {
    type: Function as PropType<() => void>,
    default: undefined,
    required: false,
  },
  onData: {
    type: Function as PropType<(d?: any) => void>,
    default: undefined,
    required: false,
  },
  onMounted: {
    type: Function as PropType<() => void>,
    default: undefined,
    required: false,
  },
  onBeforeClose: {
    type: Function as PropType<() => Promise<boolean | undefined>>,
    default: undefined,
    required: false,
  },
};

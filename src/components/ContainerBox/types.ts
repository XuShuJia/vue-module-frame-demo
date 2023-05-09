import type { ExtractPropTypes, PropType } from "vue";

export const ContainerBoxProps = {
  direction: {
    type: String as PropType<"row" | "column">,
    default: "column",
    required: false,
  },
  wrap: {
    type: String as PropType<"wrap" | "nowrap">,
    default: "wrap",
    required: false,
  },
  justifyContent: {
    type: String as PropType<
      | "flex-start"
      | "flex-end"
      | "center"
      | "space-around"
      | "space-between"
      | "space-evenly"
    >,
    default: "flex-start",
    required: false,
  },
  alignItems: {
    type: String as PropType<"flex-start" | "flex-end" | "center">,
    default: "flex-start",
    required: false,
  },
};

export type IContainerBoxProps = Readonly<
  ExtractPropTypes<typeof ContainerBoxProps>
>;

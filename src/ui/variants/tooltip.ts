import { cva, type VariantProps } from "class-variance-authority";

export const tooltipVariants = cva("tooltip", {
  variants: {
    placement: {
      top: "",
      bottom: "tooltip-bottom",
      left: "tooltip-left",
      right: "tooltip-right",
    },
    open: {
      true: "tooltip-open",
      false: "",
    },
  },
  defaultVariants: {
    placement: "top",
    open: false,
  },
});

export type TooltipVariants = VariantProps<typeof tooltipVariants>;

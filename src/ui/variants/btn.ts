import { cva, type VariantProps } from "class-variance-authority";

export const btnVariants = cva("btn", {
  variants: {
    variant: {
      default: "",
      primary: "btn-primary",
      secondary: "btn-secondary",
      accent: "btn-accent",
      neutral: "btn-neutral",
      info: "btn-info",
      success: "btn-success",
      warning: "btn-warning",
      error: "btn-error",
      ghost: "btn-ghost",
      outline: "btn-outline",
      link: "btn-link",
      soft: "btn-soft",
    },
    size: {
      xs: "btn-xs",
      sm: "btn-sm",
      md: "btn-md",
      lg: "btn-lg",
      xl: "btn-xl",
    },
    wide: { true: "btn-wide", false: "" },
    block: { true: "btn-block", false: "" },
    square: { true: "btn-square", false: "" },
    circle: { true: "btn-circle", false: "" },
    active: { true: "btn-active", false: "" },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    wide: false,
    block: false,
    square: false,
    circle: false,
    active: false,
  },
});

export type BtnVariants = VariantProps<typeof btnVariants>;

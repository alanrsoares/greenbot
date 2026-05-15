import { cva, type VariantProps } from "class-variance-authority";

export const selectVariants = cva("select", {
  variants: {
    variant: {
      default: "",
      primary: "select-primary",
      secondary: "select-secondary",
      accent: "select-accent",
      neutral: "select-neutral",
      info: "select-info",
      success: "select-success",
      warning: "select-warning",
      error: "select-error",
      ghost: "select-ghost",
    },
    size: {
      xs: "select-xs",
      sm: "select-sm",
      md: "select-md",
      lg: "select-lg",
      xl: "select-xl",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export type SelectVariants = VariantProps<typeof selectVariants>;

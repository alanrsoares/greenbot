import { cva, type VariantProps } from "class-variance-authority";

export const inputVariants = cva("input", {
  variants: {
    variant: {
      default: "",
      primary: "input-primary",
      secondary: "input-secondary",
      accent: "input-accent",
      neutral: "input-neutral",
      info: "input-info",
      success: "input-success",
      warning: "input-warning",
      error: "input-error",
      ghost: "input-ghost",
    },
    size: {
      xs: "input-xs",
      sm: "input-sm",
      md: "input-md",
      lg: "input-lg",
      xl: "input-xl",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export type InputVariants = VariantProps<typeof inputVariants>;

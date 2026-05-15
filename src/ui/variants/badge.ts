import { cva, type VariantProps } from "class-variance-authority";

export const badgeVariants = cva("badge", {
  variants: {
    variant: {
      default: "",
      primary: "badge-primary",
      secondary: "badge-secondary",
      accent: "badge-accent",
      neutral: "badge-neutral",
      info: "badge-info",
      success: "badge-success",
      warning: "badge-warning",
      error: "badge-error",
    },
    size: {
      xs: "badge-xs",
      sm: "badge-sm",
      md: "badge-md",
      lg: "badge-lg",
      xl: "badge-xl",
    },
    surface: {
      solid: "",
      outline: "badge-outline",
      soft: "badge-soft",
      dash: "badge-dash",
      ghost: "badge-ghost",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    surface: "solid",
  },
});

export type BadgeVariants = VariantProps<typeof badgeVariants>;

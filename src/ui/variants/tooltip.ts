import { cva, type VariantProps } from "class-variance-authority";

/** Floating tooltip panel (positioning handled by Floating UI, not Daisy). */
export const tooltipPanelVariants = cva(
  "pointer-events-none z-tooltip max-w-xs rounded-lg px-2 py-1.5 text-xs font-medium shadow-lg border border-base-content/15",
  {
    variants: {
      color: {
        neutral: "bg-base-200 text-base-content",
        primary: "bg-primary text-primary-content",
        secondary: "bg-secondary text-secondary-content",
        accent: "bg-accent text-accent-content",
        info: "bg-info text-info-content",
        success: "bg-success text-success-content",
        warning: "bg-warning text-warning-content",
        error: "bg-error text-error-content",
      },
    },
    defaultVariants: {
      color: "neutral",
    },
  },
);

export type TooltipPanelVariants = VariantProps<typeof tooltipPanelVariants>;

export type TooltipPanelColor = NonNullable<TooltipPanelVariants["color"]>;

import { cva } from "class-variance-authority";

export const upgradeButtonVariants = cva(
  "flex items-center rounded-full p-1 focus:ring whitespace-nowrap transition-all",
  {
    variants: {
      outOfRange: {
        true: "bg-amber-500/90 text-amber-950 border-2 border-amber-400 ring-amber-400/60",
        false: "bg-granny-smith-apple/95 text-castleton-green",
      },
      isLoading: { true: "", false: "" },
      disabled: { true: "", false: "" },
    },
    compoundVariants: [
      { disabled: true, class: "opacity-70" },
      { disabled: false, isLoading: true, class: "opacity-90" },
    ],
    defaultVariants: {
      outOfRange: false,
      isLoading: false,
      disabled: false,
    },
  },
);

export const upgradeButtonIconVariants = cva("size-6 rounded-full p-1", {
  variants: {
    outOfRange: {
      true: "bg-amber-600 text-amber-100",
      false: "bg-gray-800 text-granny-smith-apple",
    },
  },
  defaultVariants: { outOfRange: false },
});

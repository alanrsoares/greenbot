<script lang="ts">
  import { cn } from "~/lib/cn";
  import { badgeVariants, type BadgeVariants } from "~/ui/variants/badge";

  export let variant: NonNullable<BadgeVariants["variant"]> = "default";
  export let size: NonNullable<BadgeVariants["size"]> = "md";
  export let surface: NonNullable<BadgeVariants["surface"]> = "solid";
</script>

<span
  class={cn(
    badgeVariants({ variant, size, surface }),
    typeof $$props["class"] === "string" ? $$props["class"] : "",
  )}
>
  <slot />
</span>

<script lang="ts">
  import { cn } from "~/lib/cn";
  import { kbdVariants, type KbdVariants } from "~/ui/variants/kbd";

  export let size: NonNullable<KbdVariants["size"]> = "md";
</script>

<kbd
  class={cn(
    kbdVariants({ size }),
    typeof $$props["class"] === "string" ? $$props["class"] : "",
  )}
>
  <slot />
</kbd>

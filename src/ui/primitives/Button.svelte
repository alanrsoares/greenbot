<script lang="ts">
  import { cn } from "~/lib/cn";
  import { btnVariants, type BtnVariants } from "~/ui/variants/btn";

  export let variant: NonNullable<BtnVariants["variant"]> = "default";
  export let size: NonNullable<BtnVariants["size"]> = "md";
  export let wide = false;
  export let block = false;
  export let square = false;
  export let circle = false;
  export let active = false;
  export let disabled = false;
  export let type: HTMLButtonElement["type"] = "button";
</script>

<button
  {...$$restProps}
  {type}
  class={cn(
    btnVariants({ variant, size, wide, block, square, circle, active }),
    typeof $$props["class"] === "string" ? $$props["class"] : "",
  )}
  {disabled}
  on:click
>
  <slot />
</button>

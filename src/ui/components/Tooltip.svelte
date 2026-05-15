<script lang="ts" context="module">
  export type TooltipPlacement = "top" | "bottom" | "left" | "right";
  export type TooltipColor =
    | "primary"
    | "secondary"
    | "accent"
    | "info"
    | "success"
    | "warning"
    | "error";
</script>

<script lang="ts">
  import { cn } from "~/lib/cn";
  import { tooltipVariants } from "~/ui/variants/tooltip";

  /** Plain-text label (DaisyUI `data-tip`). Ignored when the `content` slot is used. */
  export let tip = "";
  export let placement: TooltipPlacement = "top";
  export let color: TooltipColor | undefined = undefined;
  /** Force visible (e.g. stories or controlled UI). */
  export let open = false;

  $: useRichContent = Boolean($$slots.content);
  $: dataTip = !useRichContent && tip ? tip : undefined;

  $: wrapperClass = cn(
    tooltipVariants({ placement, open }),
    color && `tooltip-${color}`,
    typeof $$props["class"] === "string" ? $$props["class"] : "",
  );
</script>

{#if !tip && !useRichContent}
  <slot />
{:else}
  <div class={wrapperClass} data-tip={dataTip}>
    {#if useRichContent}
      <div class="tooltip-content"><slot name="content" /></div>
    {/if}
    <slot />
  </div>
{/if}

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

  let tooltipUid = 0;
</script>

<script lang="ts">
  import { onDestroy, tick } from "svelte";
  import {
    autoUpdate,
    computePosition,
    flip,
    offset,
    shift,
  } from "@floating-ui/dom";
  import type { Placement } from "@floating-ui/dom";

  import { cn } from "~/lib/cn";
  import { portalBody } from "~/lib/directives";
  import {
    tooltipPanelVariants,
    type TooltipPanelColor,
  } from "~/ui/variants/tooltip";

  /** Plain-text label. Ignored when the `content` slot is used. */
  export let tip = "";
  export let placement: TooltipPlacement = "top";
  export let color: TooltipColor | undefined = undefined;
  /** Force visible (e.g. stories or controlled UI). */
  export let open = false;

  const tooltipId = `gb-tooltip-${tooltipUid++}`;

  $: useRichContent = Boolean($$slots.content);
  $: panelColor = (color ?? "neutral") as TooltipPanelColor;

  let referenceEl: HTMLSpanElement | null = null;
  let floatingEl: HTMLDivElement | null = null;
  let internalOpen = false;
  /** After first `computePosition` for this open cycle (hides flash at 0,0). */
  let positioned = false;

  $: isOpen = open || internalOpen;

  $: if (!isOpen) positioned = false;

  let cleanupAutoUpdate: (() => void) | undefined;

  function stopAutoUpdate() {
    cleanupAutoUpdate?.();
    cleanupAutoUpdate = undefined;
  }

  async function updatePosition() {
    if (
      typeof window === "undefined" ||
      !referenceEl ||
      !floatingEl ||
      !isOpen
    ) {
      return;
    }

    const { x, y } = await computePosition(referenceEl, floatingEl, {
      placement: placement as Placement,
      strategy: "fixed",
      middleware: [offset(8), flip(), shift({ padding: 8 })],
    });

    Object.assign(floatingEl.style, {
      left: `${x}px`,
      top: `${y}px`,
    });

    positioned = true;
  }

  $: if (isOpen && referenceEl && floatingEl) {
    stopAutoUpdate();
    void tick().then(() => {
      if (!referenceEl || !floatingEl || !isOpen) return;
      void updatePosition();
      cleanupAutoUpdate = autoUpdate(referenceEl, floatingEl, updatePosition);
    });
  } else {
    stopAutoUpdate();
  }

  function onReferenceEnter() {
    if (!open) internalOpen = true;
  }

  function onReferenceLeave() {
    if (!open) internalOpen = false;
  }

  function onGlobalKeydown(e: KeyboardEvent) {
    if (e.key !== "Escape" || open) return;
    internalOpen = false;
  }

  $: if (typeof window !== "undefined") {
    window.removeEventListener("keydown", onGlobalKeydown);
    if (isOpen && !open) {
      window.addEventListener("keydown", onGlobalKeydown);
    }
  }

  onDestroy(() => {
    stopAutoUpdate();
    if (typeof window !== "undefined") {
      window.removeEventListener("keydown", onGlobalKeydown);
    }
  });

  $: wrapperClass = cn(
    "inline-flex max-w-full",
    typeof $$props["class"] === "string" ? $$props["class"] : "",
  );

  $: floatingClass = cn(
    tooltipPanelVariants({ color: panelColor }),
    "fixed left-0 top-0 w-max max-w-[min(20rem,calc(100vw-1rem))] transition-opacity duration-100",
    isOpen && !positioned && "opacity-0",
  );
</script>

{#if !tip && !useRichContent}
  <slot />
{:else}
  <span
    bind:this={referenceEl}
    class={wrapperClass}
    role="group"
    aria-describedby={isOpen ? tooltipId : undefined}
    on:mouseenter={onReferenceEnter}
    on:mouseleave={onReferenceLeave}
    on:focusin={onReferenceEnter}
    on:focusout={onReferenceLeave}
  >
    {#if isOpen}
      <div
        use:portalBody
        bind:this={floatingEl}
        id={tooltipId}
        class={floatingClass}
        style="position: fixed;"
        role="tooltip"
      >
        {#if useRichContent}
          <div class="[&_a]:underline [&_a]:pointer-events-auto">
            <slot name="content" />
          </div>
        {:else}
          {tip}
        {/if}
      </div>
    {/if}
    <slot />
  </span>
{/if}

<script lang="ts">
  import { cn } from "~/lib/cn";
  import { ArrowUpIcon } from "~/lib/icons";
  import {
    upgradeButtonIconVariants,
    upgradeButtonVariants,
  } from "~/ui/variants/upgrade-button";

  export let isLoading = false;
  export let disabled = false;
  export let outOfRange = false;
</script>

<button
  type="button"
  class={cn(
    upgradeButtonVariants({ outOfRange, isLoading, disabled }),
    typeof $$props["class"] === "string" ? $$props["class"] : "",
  )}
  on:click
  {disabled}
>
  <div class="px-2 font-medium relative">
    {#if isLoading}
      {"..."}
      <div class="opacity-0 h-0">
        <slot />
      </div>
    {:else}
      <slot />
    {/if}
  </div>
  <div class={upgradeButtonIconVariants({ outOfRange })}>
    <ArrowUpIcon class="size-4" />
  </div>
</button>

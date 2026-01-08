<script lang="ts">
  import { ArrowUpIcon } from "~/lib/icons";

  export let isLoading = false;
  export let disabled = false;
  export let outOfRange = false;
</script>

<button
  class="flex items-center rounded-full p-1 focus:ring -mr-1 whitespace-nowrap transition-all {outOfRange
    ? 'bg-amber-500/90 text-amber-950 border-2 border-amber-400 ring-amber-400/60'
    : 'bg-granny-smith-apple/95 text-castleton-green'}"
  on:click
  class:opacity-90={isLoading}
  class:opacity-70={disabled}
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
  <div
    class="h-6 w-6 rounded-full p-1 {outOfRange
      ? 'bg-amber-600 text-amber-100'
      : 'bg-gray-800 text-granny-smith-apple'}"
  >
    <ArrowUpIcon class="h-4 w-4" />
  </div>
</button>

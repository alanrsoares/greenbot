<script lang="ts">
  import { ArrowUpIcon } from "lucide-svelte";

  export let isLoading = false;
  export let disabled = false;
</script>

<template>
  <button
    class="flex items-center rounded-full p-1 focus:ring bg-granny-smith-apple/95 text-castleton-green -mr-1 whitespace-nowrap"
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
    <div class="h-6 w-6 bg-gray-800 rounded-full p-1 text-granny-smith-apple">
      <ArrowUpIcon class="h-4 w-4" />
    </div>
  </button>
</template>

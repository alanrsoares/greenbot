<script lang="ts">
  import GoArrowUp from "svelte-icons/go/GoArrowUp.svelte";
</script>

<template>
  <button
    role="button"
    class="flex items-center rounded-full p-1 focus:ring bg-granny-smith-apple text-castleton-green -mr-1"
    on:click
  >
    <div class="px-1 font-medium">
      <slot />
    </div>
    <div class="h-6 w-6 bg-gray-800 rounded-full p-1 text-granny-smith-apple">
      <GoArrowUp height="1em" />
    </div>
  </button>
</template>

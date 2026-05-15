<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import { PACKAGE_SEARCH_INPUT_ID } from "~/ui/constants";
  import { Input, Kbd } from "~/ui/primitives";
  import Tooltip from "./Tooltip.svelte";

  export let value = "";
  export let placeholder = "search package by name or version";

  const dispatch = createEventDispatcher<{ focused: boolean }>();

  let isSearchFocused = false;
</script>

<div class="relative group">
  <Input
    id={PACKAGE_SEARCH_INPUT_ID}
    search
    variant="ghost"
    size="md"
    class="w-full rounded-xl px-4 pr-12 py-0 text-sm leading-normal text-white bg-white/5 focus-within:ring-4 focus-within:ring-castleton-green/60 [&_input]:min-h-0"
    {placeholder}
    bind:value
    on:focus={() => {
      isSearchFocused = true;
      dispatch("focused", true);
    }}
    on:blur={() => {
      isSearchFocused = false;
      dispatch("focused", false);
    }}
  />
  {#if !isSearchFocused || !value}
    <Tooltip
      tip="Focus search (press /)"
      placement="left"
      class="absolute right-2 top-1/2 -translate-y-1/2"
    >
      <Kbd
        size="sm"
        class="transition-opacity opacity-50 group-hover:opacity-100 border-0 shadow-none bg-transparent font-mono"
      >
        <span class="text-xs"> / </span>
      </Kbd>
    </Tooltip>
  {/if}
</div>

<script lang="ts" context="module">
  export type TabItem = {
    label: string;
    value: string;
  };
</script>

<script lang="ts">
  import Tooltip from "./Tooltip.svelte";

  export let selectedTab = "";
  export let tabs: TabItem[] = [];

  function tabTip(value: string) {
    if (value === "dependencies") {
      return "Runtime & bundled packages — Shift + ← / → to switch tab";
    }
    if (value === "devDependencies") {
      return "Dev & build-only packages — Shift + ← / → to switch tab";
    }
    return "Switch tab";
  }
</script>

<div class="container">
  {#each tabs as tab}
    <Tooltip tip={tabTip(tab.value)} placement="bottom" class="flex-1 min-w-0">
      <button
        type="button"
        data-value={tab.value}
        class:bg-castleton-green={selectedTab === tab.value}
        on:click={() => {
          selectedTab = tab.value;
        }}
      >
        {tab.label}
      </button>
    </Tooltip>
  {/each}
</div>

<style lang="postcss">
  @reference "../../app.css";
  .container {
    @apply border-2 border-gray-900 bg-gray-900/60  rounded-3xl flex justify-between overflow-hidden p-2  gap-2;
  }
  button {
    @apply p-4 cursor-pointer flex-1 rounded-2xl outline-none ring-castleton-green/60;
    @apply focus:ring-4;
    @apply active:opacity-80;
  }
</style>

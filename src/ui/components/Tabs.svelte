<script lang="ts" context="module">
  export type TabItem = {
    label: string;
    value: string;
  };
</script>

<script lang="ts">
  export let selectedTab = "";
  export let tabs: TabItem[] = [];
  export let onChange: (tab: TabItem) => void;
</script>

<div class="container">
  {#each tabs as tab}
    <button
      data-value={tab.value}
      class:bg-castleton-green={selectedTab === tab.value}
      on:click={onChange.bind(this, tab)}
    >
      {tab.label}
    </button>
  {/each}
</div>

<style lang="postcss">
  .container {
    @apply border-2 border-gray-900 bg-gray-900/60  rounded-3xl flex justify-between overflow-hidden p-2  gap-2;
  }
  button {
    @apply p-4 cursor-pointer flex-1 rounded-2xl outline-none ring-castleton-green/60;
    @apply focus:ring-4;
    @apply active:opacity-80;
  }
</style>

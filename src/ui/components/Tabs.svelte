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

<div
  class="border-2 border-granny-smith-apple rounded-xl flex justify-between overflow-hidden"
>
  {#each tabs as tab}
    <button
      class="p-4 cursor-pointer flex-1"
      class:bg-castleton-green={selectedTab === tab.value}
      data-value={tab.value}
      on:click={onChange.bind(this, tab)}
    >
      {tab.label}
    </button>
  {/each}
</div>

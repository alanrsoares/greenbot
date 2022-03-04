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
  class="border-2 border-slate-900 bg-slate-900/60  rounded-3xl flex justify-between overflow-hidden p-2"
>
  {#each tabs as tab}
    <button
      class="p-4 cursor-pointer flex-1 rounded-2xl"
      class:bg-castleton-green={selectedTab === tab.value}
      data-value={tab.value}
      on:click={onChange.bind(this, tab)}
    >
      {tab.label}
    </button>
  {/each}
</div>

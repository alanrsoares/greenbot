<script lang="ts">
  import type { PackageInfo } from "src/lib/types";

  export let label = "";
  export let entries: PackageInfo[] = [];
</script>

<div class="border-2 border-granny-smith-apple rounded-xl overflow-hidden">
  <div class="p-4 border-b border-granny-smith-apple">
    {label} ({entries.length})
  </div>

  <ul class="grid p-2 gap-2">
    {#each entries as { name, version, latest }}
      <li class="flex justify-between">
        <div>{name}</div>
        <div>{version} &rArr; {latest}</div>
      </li>
    {/each}
  </ul>
</div>

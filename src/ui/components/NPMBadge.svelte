<script lang="ts">
  import type { Package } from "~/domain/types";
  import PackageManagerIcon from "./PackageManagerIcon.svelte";
  import Tooltip from "./Tooltip.svelte";

  export let name = "";
  export let version = "";
  export let manager: Package["packageManager"] = "npm";
</script>

<Tooltip tip={`Open ${name} on npm`} placement="bottom">
  <a
    target="_blank"
    href={`https://www.npmjs.com/package/${name}`}
    rel="noopener noreferrer"
  >
    <div class="rounded-full -translate-x-2 bg-black/25 p-2.5">
      <PackageManagerIcon kind={manager} class="size-4" />
    </div>
    <div class="font-mono font-medium -translate-x-2">
      {name} @ {version}
    </div>
  </a>
</Tooltip>

<style lang="postcss">
  @reference "../../app.css";

  a {
    @apply bg-npm px-4 py-2 rounded-full text-white flex items-center justify-center gap-2 outline-none;
    @apply focus:ring-4 ring-npm/50;
  }
</style>

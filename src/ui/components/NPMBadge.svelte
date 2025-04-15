<script lang="ts">
  import type { Package } from "~/domain/types";
  import PackageManagerIcon from "./PackageManagerIcon.svelte";
  export let name = "";
  export let version = "";
  export let manager: Package["packageManager"] = "npm";
</script>

<a
  target="_blank"
  href={`https://www.npmjs.com/package/${name}`}
  rel="noopener noreferrer"
>
  <div class="rounded-full -translate-x-2 bg-black/25 p-2.5">
    <PackageManagerIcon kind={manager} class="h-4 w-4" />
  </div>
  <div class="font-mono font-medium -translate-x-2">
    {name} @ {version}
  </div>
</a>

<style lang="postcss">
  @reference "../../app.css";

  a {
    @apply bg-npm px-4 py-2 rounded-full text-white flex items-center justify-center gap-2 outline-none;
    @apply focus:ring-4 ring-npm/50;
  }
</style>

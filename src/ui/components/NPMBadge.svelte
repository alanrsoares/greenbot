<script lang="ts">
  import { PackageIcon } from "lucide-svelte";
  export let name = "";
  export let version = "";
</script>

<a
  target="_blank"
  href={`https://www.npmjs.com/package/${name}`}
  rel="noopener noreferrer"
>
  <PackageIcon class="h-6 w-6" />
  <div class="font-mono font-medium">
    {name} @ {version}
  </div>
</a>

<style lang="postcss">
  a {
    @apply bg-npm px-4 py-2 rounded-full text-white flex items-center justify-center gap-2 outline-none;
    @apply focus:ring-4 ring-npm/50;
  }
</style>

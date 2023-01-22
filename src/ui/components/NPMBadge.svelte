<script lang="ts">
  import FaNpm from "svelte-icons/fa/FaNpm.svelte";
  export let name = "";
  export let version = "";
</script>

<a
  target="_blank"
  href={`https://www.npmjs.com/package/${name}`}
  rel="noopener noreferrer"
>
  <div class="h-10">
    <FaNpm />
  </div>
  <div class="font-mono font-medium">
    {name} @ {version}
  </div>
</a>

<style lang="postcss">
  a {
    @apply bg-npm px-6 rounded-full text-white flex items-center justify-center gap-2 outline-none;
    @apply focus:ring-4 ring-npm/50;
  }
</style>

<script lang="ts">
  import FaNpm from "svelte-icons/fa/FaNpm.svelte";
  export let name = "";
  export let version = "";
</script>

<a
  target="_blank"
  class="bg-[#cb3837] px-6 rounded-full text-white flex items-center justify-center gap-2"
  href={`https://www.npmjs.com/package/${name}`}
>
  <div class="h-10">
    <FaNpm />
  </div>
  <div class="font-mono font-medium">
    {name} @ {version}
  </div>
</a>

<script lang="ts">
  import { useQuery } from "@sveltestack/svelte-query";
  import { getPackage } from "../lib/api";

  const queryResult = useQuery("package", getPackage);
</script>

<div>
  {#if $queryResult.isLoading}
    <div>Loading...</div>
  {/if}

  {#if $queryResult.data}
    <div>dependencies:</div>
    {#each Object.entries($queryResult.data.dependencies ?? {}) as dependency}
      <li>{dependency[0]}</li>
    {/each}
    <div>dev dependencies:</div>
    {#each Object.entries($queryResult.data.devDependencies ?? {}) as dependency}
      <li>{dependency[0]}</li>
    {/each}
  {/if}
</div>

<style lang="postcss">
</style>

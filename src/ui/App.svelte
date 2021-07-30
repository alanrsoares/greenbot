<script lang="ts">
  import { useQuery } from "@sveltestack/svelte-query";
  import { dataset_dev } from "svelte/internal";
  import { getPackage } from "../lib/api";
  import Dependencies from "./Dependencies.svelte";
  import Layout from "./Layout.svelte";

  let selectedTab: "dependencies" | "dev-dependencies" = "dependencies";

  const handleClick = (e) => {
    const { value } = e.target.dataset;

    selectedTab = value;
  };

  function toPackageInfo(
    [name, version]: [string, string],
    resolutions: Record<string, string>
  ) {
    return { name, version, latest: resolutions[name] };
  }

  const queryResult = useQuery("package", getPackage);
</script>

<Layout>
  <div class="w-full grid gap-4">
    {#if $queryResult.isLoading}
      <div>Loading...</div>
    {/if}

    <div>Hello</div>

    <div
      class="border-2 border-granny-smith-apple rounded-xl flex justify-between overflow-hidden"
    >
      <button
        data-value="dependencies"
        class="p-4 cursor-pointer flex-1"
        on:click={handleClick}
      >
        Dependencies
      </button>
      <button
        data-value="dev-dependencies"
        class="p-4 cursor-pointer flex-1 border-l border-granny-smith-apple"
        on:click={handleClick}
      >
        Dev Dependencies
      </button>
    </div>

    {#if $queryResult.data}
      {#if selectedTab === "dependencies"}
        <Dependencies
          label="Dependencies"
          entries={Object.entries($queryResult.data.dependencies).map((pair) =>
            toPackageInfo(pair, $queryResult.data.resolutions)
          )}
        />
      {/if}
      {#if selectedTab === "dev-dependencies"}
        <Dependencies
          label="Dev Dependencies"
          entries={Object.entries($queryResult.data.devDependencies).map(
            (pair) => toPackageInfo(pair, $queryResult.data.resolutions)
          )}
        />
      {/if}
    {/if}
  </div>
</Layout>

<style global lang="postcss">
  html {
    @apply bg-castleton-green;
  }
</style>

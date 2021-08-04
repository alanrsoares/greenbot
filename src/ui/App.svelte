<script lang="ts">
  import { useQuery } from "@sveltestack/svelte-query";
  import DiNpm from "svelte-icons/di/DiNpm.svelte";

  import type { TabKind } from "domain/types";

  import { QUERIES } from "../domain/constants";
  import { getPackage } from "../lib/api";
  import Dependencies from "./Dependencies.svelte";
  import Layout from "./Layout.svelte";

  let selectedTab: TabKind = "dependencies";

  function handleTabClick({ target }: MouseEvent) {
    const { value } = (target as HTMLButtonElement).dataset;

    selectedTab = value as TabKind;
  }

  function toPackageInfo(
    [name, version]: [string, string],
    resolutions: Record<string, string>
  ) {
    return { name, version, latest: resolutions[name] };
  }

  const queryResult = useQuery(QUERIES.package, getPackage);
</script>

<Layout>
  <div class="w-full grid gap-4">
    {#if $queryResult.isLoading}
      <div class="mx-auto">Loading dependencies...</div>
    {/if}

    {#if $queryResult.data}
      <div
        class="bg-[#cb3837] px-4 rounded-xl text-white flex items-center justify-center font-medium"
      >
        <div class="h-12 mr-2 pt-0.5">
          <DiNpm />
        </div>
        <div>
          {$queryResult.data.name} - {$queryResult.data.version}
        </div>
      </div>
      <div
        class="border-2 border-granny-smith-apple rounded-xl flex justify-between overflow-hidden"
      >
        <button
          data-value="dependencies"
          class="p-4 cursor-pointer flex-1"
          class:bg-castleton-green={selectedTab === "dependencies"}
          on:click={handleTabClick}
        >
          Dependencies
        </button>
        <button
          data-value="dev-dependencies"
          class="p-4 cursor-pointer flex-1 border-l border-granny-smith-apple"
          class:bg-castleton-green={selectedTab === "dev-dependencies"}
          on:click={handleTabClick}
        >
          Dev Dependencies
        </button>
      </div>
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

  button {
    @apply hover:opacity-70;
    @apply font-medium;
  }
</style>

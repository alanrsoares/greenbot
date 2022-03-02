<script lang="ts">
  import { useQuery, type UseQueryResult } from "@sveltestack/svelte-query";
  import DiNpm from "svelte-icons/di/DiNpm.svelte";
  import FaSpinner from "svelte-icons/fa/FaSpinner.svelte";

  import type { Package, TabKind } from "domain/types";

  import { getPackage } from "../lib/api";
  import { isLatestVersion } from "../lib/helpers";
  import { QUERIES } from "../domain/constants";
  import Dependencies from "./Dependencies.svelte";
  import Bot, { type Mood } from "./Bot.svelte";
  import Layout from "./Layout.svelte";

  let selectedTab: TabKind = "dependencies";

  function handleTabClick({ target }: MouseEvent) {
    const { value } = (target as HTMLButtonElement).dataset;

    selectedTab = value as TabKind;
  }

  function getFilteredEntries(
    entries: [string, string][],
    resolutions: Record<string, string>
  ) {
    return entries.filter(([name, version]) => resolutions[name] !== version);
  }

  function toPackageInfo(
    [name, version]: [string, string],
    resolutions: Record<string, string>
  ) {
    return { name, version, latest: resolutions[name] };
  }

  function getCurrentMood(result?: UseQueryResult<Package, unknown>): Mood {
    if (result.isLoading) {
      return "asleep";
    }
    if (result.error) {
      return "dead";
    }
    if (result.data) {
      const { dependencies, devDependencies, resolutions } = result.data;

      const allEntries = Object.entries({
        ...dependencies,
        ...devDependencies,
      });

      const outdatedPackagesCount = getFilteredEntries(
        allEntries,
        result.data.resolutions
      ).filter(
        ([name, version]) => !isLatestVersion(version, resolutions[name])
      ).length;

      return outdatedPackagesCount ? "angry" : "happy";
    }

    return "awake";
  }

  const queryResult = useQuery(QUERIES.package, getPackage);

  $: mood = getCurrentMood($queryResult);

  $: tabEntries =
    $queryResult.isLoading || $queryResult.error
      ? []
      : getFilteredEntries(
          Object.entries($queryResult.data[selectedTab]),
          $queryResult.data.resolutions
        );

  $: entries = tabEntries.map((pair) =>
    toPackageInfo(pair, $queryResult.data.resolutions)
  );
</script>

<Layout>
  <div class="grid place-items-center h-40 w-40 mx-auto">
    <Bot {mood} />
  </div>
  <div class="w-full grid gap-4">
    {#if $queryResult.isLoading}
      <div class="flex items-center justify-center gap-2">
        <div class="h-4 w-4 animate-spin">
          <FaSpinner />
        </div>
        <span>Loading dependencies</span>
      </div>
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
          data-value="devDependencies"
          class="p-4 cursor-pointer flex-1 border-l border-granny-smith-apple"
          class:bg-castleton-green={selectedTab === "devDependencies"}
          on:click={handleTabClick}
        >
          Dev Dependencies
        </button>
      </div>
      <Dependencies
        label={selectedTab === "devDependencies"
          ? "Dev Dependencies"
          : "Dependencies"}
        {entries}
      />
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

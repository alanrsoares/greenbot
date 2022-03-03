<script lang="ts">
  import DiNpm from "svelte-icons/di/DiNpm.svelte";
  import FaSpinner from "svelte-icons/fa/FaSpinner.svelte";

  import type { UseQueryResult } from "@sveltestack/svelte-query";
  import type { Package, TabKind } from "domain/types";

  import { usePackageQuery } from "../lib/hooks";
  import { isLatestVersion } from "../lib/helpers";

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

  const packageQuery = usePackageQuery();

  $: mood = getCurrentMood($packageQuery);

  $: tabEntries =
    $packageQuery.isLoading || $packageQuery.error
      ? []
      : getFilteredEntries(
          Object.entries($packageQuery.data[selectedTab]),
          $packageQuery.data.resolutions
        );

  $: entries = tabEntries.map((pair) =>
    toPackageInfo(pair, $packageQuery.data.resolutions)
  );
</script>

<Layout>
  <div class="grid place-items-center h-40 w-40 mx-auto">
    <Bot {mood} />
  </div>
  <div class="w-full grid gap-4">
    {#if $packageQuery.isLoading}
      <div class="flex items-center justify-center gap-2">
        <div class="h-4 w-4 animate-spin">
          <FaSpinner />
        </div>
        <span>Loading dependencies</span>
      </div>
    {/if}

    {#if $packageQuery.data}
      <div
        class="bg-[#cb3837] px-4 rounded-xl text-white flex items-center justify-center font-medium"
      >
        <div class="h-12 mr-2 pt-0.5">
          <DiNpm />
        </div>
        <div>
          {$packageQuery.data.name} - {$packageQuery.data.version}
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
  button {
    @apply hover:opacity-70 font-medium;
  }
</style>

<script lang="ts">
  import type { UseQueryResult } from "@sveltestack/svelte-query";
  import type { FullMetadata } from "package-json";

  import type { Package, TabKind } from "domain/types";

  import { isLatestVersion } from "lib/helpers";
  import { usePackageQuery } from "lib/hooks";

  import Bot, { type Mood } from "ui/components/Bot.svelte";
  import Dependencies from "ui/components/Dependencies.svelte";
  import Layout from "ui/components/Layout.svelte";
  import NPMBadge from "ui/components/NPMBadge.svelte";
  import Tabs, { type TabItem } from "ui/components/Tabs.svelte";
  import Spinner from "./components/Spinner.svelte";

  let selectedTab: TabKind = "dependencies";

  function handleTabCchange({ value }: TabItem) {
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
    resolutions: Record<string, string>,
    meta: Record<string, FullMetadata>
  ) {
    return { name, version, latest: resolutions[name], meta: meta[name] };
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
          Object.entries($packageQuery.data[selectedTab] ?? {}),
          $packageQuery.data.resolutions
        );

  $: entries = tabEntries.map((pair) =>
    toPackageInfo(pair, $packageQuery.data.resolutions, $packageQuery.data.meta)
  );
</script>

<Layout>
  <Bot {mood} slot="logo" />
  <div slot="version">
    {#if $packageQuery.data}
      <NPMBadge
        name={$packageQuery.data.name}
        version={$packageQuery.data.version}
      />
    {/if}
  </div>
  <div class="w-full grid gap-4">
    {#if $packageQuery.isLoading}
      <div
        class="border-2 border-slate-900 bg-slate-900/60  rounded-3xl flex justify-center items-center overflow-hidden p-8  gap-2"
      >
        <div class="h-4 w-4">
          <Spinner animated />
        </div>
        <span>Loading dependencies</span>
      </div>
    {/if}
    {#if $packageQuery.data}
      <Tabs
        onChange={handleTabCchange}
        {selectedTab}
        tabs={[
          { value: "dependencies", label: "Dependencies" },
          { value: "devDependencies", label: "Dev Dependencies" },
        ]}
      />
      <Dependencies bind:selectedTab {entries} />
    {/if}
  </div>
</Layout>

<style global lang="postcss">
  button {
    @apply hover:opacity-70 font-medium;
  }
</style>

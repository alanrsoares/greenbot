<script lang="ts">
  import type { FullMetadata } from "package-json";
  import { onMount } from "svelte";

  import type { PackageInfo, TabKind } from "~/domain/types";

  import {
    useCurrentMood,
    usePackageQuery,
    useWorkspacesQuery,
  } from "~/lib/hooks";

  import Bot from "~/ui/components/Bot.svelte";
  import Dependencies from "~/ui/components/Dependencies.svelte";
  import Layout from "~/ui/components/Layout.svelte";
  import NPMBadge from "~/ui/components/NPMBadge.svelte";
  import Tabs from "~/ui/components/Tabs.svelte";
  import Spinner from "~/ui/components/Spinner.svelte";
  import WorkspacePicker from "./components/WorkspacePicker.svelte";
  import { getFilteredEntries } from "~/lib/helpers";

  const params = new URLSearchParams(window.location.search);

  // app state
  let selectedTab: TabKind = (params.get("tab") as TabKind) ?? "dependencies";
  let selectedWorkspace: string = params.get("path") ?? "";

  // sync url with selectedWorkspace
  $: if (selectedWorkspace !== null || selectedTab !== null) {
    const params = new URLSearchParams(window.location.search);

    if (selectedWorkspace && selectedWorkspace !== params.get("path")) {
      params.set("path", selectedWorkspace);
    }

    if (selectedTab && selectedTab !== params.get("tab")) {
      params.set("tab", selectedTab);
    }

    // update url witout reloading
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${params.toString()}`
    );
  }

  onMount(() => {
    const params = new URLSearchParams(window.location.search);
    const path = params.get("path");

    if (path !== null) {
      selectedWorkspace = path;
    }
  });

  function toPackageInfo(
    [name, version]: [string, string],
    resolutions: Record<string, string>,
    meta: Record<string, FullMetadata>
  ): PackageInfo {
    return {
      name,
      version,
      latest: name in resolutions ? resolutions[name] : version,
      meta: name in meta ? meta[name] : undefined,
    };
  }

  $: workspacesQuery = useWorkspacesQuery();

  $: packageQuery = usePackageQuery({
    path: selectedWorkspace,
    tab: selectedTab,
  });

  $: mood = useCurrentMood($packageQuery);

  $: tabEntries =
    $packageQuery.isLoading || $packageQuery.error || !$packageQuery.data
      ? []
      : getFilteredEntries(
          Object.entries($packageQuery.data[selectedTab] ?? {}),
          $packageQuery.data.resolutions
        );

  $: entries = tabEntries.map((pair) =>
    toPackageInfo(
      pair,
      $packageQuery.data?.resolutions ?? {},
      $packageQuery.data?.meta ?? {}
    )
  );
</script>

<Layout>
  <Bot {mood} slot="logo" />
  <div slot="version">
    {#if $packageQuery.data}
      <NPMBadge
        name={$packageQuery.data.name}
        version={$packageQuery.data.version}
        manager={$packageQuery.data.packageManager}
      />
    {/if}
  </div>
  <div class="w-full grid gap-4">
    {#if $workspacesQuery.data}
      <WorkspacePicker
        workspaces={$workspacesQuery.data}
        bind:selectedWorkspace
      />
    {/if}
    {#if $packageQuery.isLoading}
      <div
        class="border-2 border-slate-900 bg-slate-900/60 rounded-3xl flex justify-center items-center overflow-hidden p-8 gap-2"
      >
        <div class="h-4 w-4">
          <Spinner animated />
        </div>
        <span>Loading dependencies</span>
      </div>
    {/if}
    {#if $packageQuery.data}
      <Tabs
        bind:selectedTab
        tabs={[
          { value: "dependencies", label: "Dependencies" },
          { value: "devDependencies", label: "Dev Dependencies" },
        ]}
      />
      <Dependencies bind:selectedTab bind:selectedWorkspace {entries} />
    {/if}
  </div>
</Layout>

<style global lang="postcss">
  button {
    @apply hover:opacity-70 font-medium;
  }
</style>

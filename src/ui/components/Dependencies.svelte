<script lang="ts">
  import { useQueryClient } from "@tanstack/svelte-query";
  import { partition, prop } from "rambda";
  import {
    ArrowUpIcon,
    InfoIcon,
    XIcon,
    CheckCircleIcon,
    AlertCircle,
  } from "~/lib/icons";

  import { PAGE_SIZE, QUERY_KEYS } from "~/domain/constants";
  import type { Package, PackageInfo, TabKind } from "~/domain/types";
  import { clickOutside } from "~/lib/directives";
  import { isLatestVersion } from "~/lib/helpers";
  import {
    updatePackageQueryCache,
    useKeyDown,
    useUpgradePackagesMutation,
  } from "~/lib/hooks";

  import Dependency from "./Dependency.svelte";
  import Pagination from "./Pagination.svelte";
  import UpgradeButton from "./UpgradeButton.svelte";

  /**
   * bound selectedTab
   */
  export let selectedTab: TabKind = "dependencies";

  /**
   * bound selectedWorkspace
   */
  export let selectedWorkspace: string = "";

  export let entries: PackageInfo[] = [];

  let pageIndex = 0;
  let expandedRowIndex = -1;
  let searchTerm = "";
  let isHelpVisible = false;
  let isSearchFocused = false;

  let inputRef: HTMLInputElement | null = null;

  const upgradePackagesMutation = useUpgradePackagesMutation();

  const queryClient = useQueryClient();

  async function handleUpgradePackages(packages: PackageInfo[]) {
    try {
      const updated = await $upgradePackagesMutation.mutateAsync({
        packages,
        path: selectedWorkspace,
      });

      // apply optimistic update
      queryClient.setQueryData<Package>(
        QUERY_KEYS.package({
          path: selectedWorkspace,
          tab: selectedTab,
        }),
        updatePackageQueryCache(updated)
      );

      await queryClient.refetchQueries({
        queryKey: QUERY_KEYS.package({
          path: selectedWorkspace,
          tab: selectedTab,
        }),
      });
    } catch (error) {
      console.log("Failed to upgrade packages:", { originalError: error });
    }
  }

  useKeyDown((event) => {
    if (event.shiftKey) {
      switch (event.key) {
        case "ArrowRight":
        case "ArrowLeft":
          event.preventDefault();
          selectedTab =
            selectedTab === "dependencies" ? "devDependencies" : "dependencies";
          pageIndex = 0;
          expandedRowIndex = -1;
          break;
      }
    }

    switch (event.key) {
      case "ArrowUp":
        event.preventDefault();
        if (expandedRowIndex > 0) {
          expandedRowIndex--;
        } else {
          expandedRowIndex = pageEntries.length - 1;
        }
        break;
      case "ArrowDown":
        event.preventDefault();
        if (expandedRowIndex < pageEntries.length - 1) {
          expandedRowIndex++;
        } else {
          expandedRowIndex = 0;
        }
        break;
      case "ArrowLeft":
        if (pageIndex > 0) {
          event.preventDefault();
          pageIndex--;
          expandedRowIndex = -1;
        }
        break;
      case "ArrowRight":
        if (pageIndex < pages - 1) {
          event.preventDefault();
          pageIndex++;
          expandedRowIndex = -1;
        }
        break;
      case "Escape":
        event.preventDefault();
        if (isHelpVisible) {
          isHelpVisible = false;
        }
        break;
      case "h":
        if (!isSearchFocused) {
          event.preventDefault();
          isHelpVisible = !isHelpVisible;
        }
        break;
      case "/":
        if (!isSearchFocused && inputRef) {
          event.preventDefault();
          inputRef.focus();
        }
        break;
    }
  });

  $: filteredEntries = entries.filter(
    ({ name, version }) =>
      name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      version.toLowerCase().includes(searchTerm.toLowerCase())
  );
  $: pages = Math.ceil(filteredEntries.length / PAGE_SIZE);
  $: displayEntries = filteredEntries
    .map((x) => ({
      ...x,
      isLatest: isLatestVersion(x.version, x.latest),
    }))
    .sort((a, b) => {
      if (a.isLatest && b.isLatest) {
        return 0;
      }
      return a.isLatest && !b.isLatest ? 1 : -1;
    });
  $: startIndex = pageIndex * PAGE_SIZE;
  $: pageEntries = displayEntries.slice(startIndex, startIndex + PAGE_SIZE);
  $: [upToDatePackages, outdatedPackages] = partition<
    PackageInfo & { isLatest: boolean }
  >(prop("isLatest"), displayEntries);
  $: isAllUpToDate = upToDatePackages.length === entries.length;

  $: {
    if (selectedTab) {
      // reset pageIndex on selectedTab change
      pageIndex = 0;
      expandedRowIndex = -1;
    }
  }

  $: {
    if (searchTerm) {
      // reset pageIndex on searchTerm change
      pageIndex = 0;
      expandedRowIndex = -1;
    }
  }

  const helpItems = [
    {
      keys: [
        { symbol: "↑", rotation: 0 },
        { symbol: "↓", rotation: 180 },
      ],
      label: "Switch rows.",
    },
    {
      keys: [
        { symbol: "←", rotation: -90 },
        { symbol: "→", rotation: 90 },
      ],
      label: "Switch pages.",
    },
    {
      keys: [
        { symbol: "←", rotation: -90 },
        { symbol: "→", rotation: 90 },
      ],
      label: "+ Shift, Switch tabs.",
    },
  ];

  const hideHelp = () => {
    isHelpVisible = false;
  };
</script>

<div class="relative">
  <aside
    class="absolute right-0 top-8 transition-all duration-300 ease-in"
    class:translate-x-64={isHelpVisible}
    use:clickOutside={hideHelp}
  >
    <button
      class="help-trigger"
      class:hidden={isHelpVisible}
      on:click={() => {
        isHelpVisible = !isHelpVisible;
      }}
    >
      {#if isHelpVisible}
        <XIcon />
      {:else}
        <InfoIcon />
      {/if}
    </button>
    <ul
      class="bg-slate-900/60 p-4 rounded-xl grid gap-2 opacity-10"
      class:opacity-100={isHelpVisible}
      aria-hidden={!isHelpVisible}
    >
      {#each helpItems as { keys, label }}
        <li class="flex items-center">
          <div class="flex gap-2">
            {#each keys as { symbol, rotation }}
              <kbd
                class="text-sm font-semibold flex p-1.5 bg-castleton-green/40 rounded"
              >
                <ArrowUpIcon
                  class="h-3 w-3"
                  style={`transform: rotate(${rotation}deg);`}
                />
                <span class="sr-only">{symbol}</span>
              </kbd>
            {/each}
          </div>

          <span class="ml-2 text-sm">{label}</span>
        </li>
      {/each}
    </ul>
  </aside>
  <section
    class="bg-slate-900/60 rounded-3xl overflow-hidden relative shadow-md p-4 grid gap-2"
  >
    <div class="relative group">
      <input
        bind:this={inputRef}
        type="search"
        class="search-input"
        placeholder="search package by name or version"
        bind:value={searchTerm}
        on:focus={() => {
          isSearchFocused = true;
        }}
        on:blur={() => {
          isSearchFocused = false;
        }}
      />
      {#if !isSearchFocused || !searchTerm}
        <kbd
          class="kbd absolute right-2 top-2 transition-opacity opacity-50 group-hover:opacity-100"
        >
          <span class="text-xs font-mono"> / </span>
        </kbd>
      {/if}
    </div>
    <header
      class="p-4 border-b border-granny-smith-apple/50 flex items-center justify-between mx-2"
    >
      <div class="flex items-center justify-between w-full">
        <div>
          {selectedTab === "dependencies" ? "Dependencies" : "Dev Dependencies"}
          <span
            class="text-xs tracking-wider bg-castleton-green px-2 py-1 rounded-full"
          >
            {upToDatePackages.length}/{entries.length}
          </span>
        </div>
        {#if isAllUpToDate}
          <CheckCircleIcon class="h-4 w-4 ml-1" />
        {/if}
      </div>
      <div>
        {#if !isAllUpToDate}
          <UpgradeButton
            on:click={() => handleUpgradePackages(outdatedPackages)}
            disabled={$upgradePackagesMutation.isPending}
            isLoading={$upgradePackagesMutation.isPending}
          >
            Upgrade all
          </UpgradeButton>
        {/if}
      </div>
    </header>
    <main class="min-h-[32rem] mx-2">
      {#if !pageEntries.length}
        <div class="flex items-center justify-center h-full group">
          <div class="flex flex-col items-center justify-center gap-2">
            <AlertCircle
              class="h-10 w-10 text-base-content/80 group-hover:animate-pulse"
            />
            <span class="text-sm text-base-content/80">No packages found</span>
          </div>
        </div>
      {:else}
        <ul class="grid">
          {#each pageEntries as { name, version, latest, isLatest, meta }, index}
            <Dependency
              {index}
              {name}
              {version}
              {latest}
              {isLatest}
              {meta}
              bind:selectedWorkspace
              bind:selectedTab
              bind:expandedRowIndex
              class={index !== pageEntries.length - 1 &&
              index !== expandedRowIndex
                ? "border-b"
                : ""}
            />
          {/each}
        </ul>
      {/if}
    </main>
    {#if pages > 1}
      <footer class="grid place-items-center">
        <div class="bg-slate-900/90 rounded-full">
          <Pagination {pages} bind:pageIndex />
        </div>
      </footer>
    {/if}
  </section>
</div>

<style lang="postcss">
  .help-trigger {
    @apply h-10 w-10 absolute -right-10 p-2 bg-black/40 rounded-r-full opacity-40 hover:opacity-100 transition-opacity outline-none;
  }
  .search-input {
    @apply w-full p-4 text-sm text-white bg-white/5 rounded-xl outline-none focus:ring-4 ring-castleton-green/60;
  }
</style>

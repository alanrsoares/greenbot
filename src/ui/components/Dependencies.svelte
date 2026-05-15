<script lang="ts">
  import { useQueryClient } from "@tanstack/svelte-query";
  import { partition, prop } from "rambda";
  import {
    ArrowUpIcon,
    InfoIcon,
    XIcon,
    CheckCircleIcon,
    AlertCircleIcon,
  } from "~/lib/icons";

  import { PAGE_SIZE } from "~/domain/constants";
  import type { PackageInfo, TabKind } from "~/domain/types";
  import { clickOutside } from "~/lib/directives";
  import { isLatestVersion } from "~/lib/helpers";
  import { useKeyDown, useUpgradePackagesMutation } from "~/lib/hooks";
  import { applyPackageUpgrades } from "~/lib/apply-package-upgrades";

  import Dependency from "./Dependency.svelte";
  import PackageSearchInput from "./PackageSearchInput.svelte";
  import Pagination from "./Pagination.svelte";
  import Tooltip from "./Tooltip.svelte";
  import UpgradeButton from "./UpgradeButton.svelte";
  import { PACKAGE_SEARCH_INPUT_ID } from "~/ui/constants";
  import { Badge, Kbd } from "~/ui/primitives";

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

  const upgradePackagesMutation = useUpgradePackagesMutation();

  const queryClient = useQueryClient();

  function resetPaging() {
    pageIndex = 0;
    expandedRowIndex = -1;
  }

  async function handleUpgradePackages(packages: PackageInfo[]) {
    await applyPackageUpgrades({
      queryClient,
      mutateAsync: (input) => $upgradePackagesMutation.mutateAsync(input),
      packages,
      path: selectedWorkspace,
      tab: selectedTab,
      refetchAfter: true,
    });
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
        } else if (expandedRowIndex !== -1) {
          expandedRowIndex = -1;
        }
        break;
      case "h":
        if (!isSearchFocused) {
          event.preventDefault();
          isHelpVisible = !isHelpVisible;
        }
        break;
      case "/":
        if (!isSearchFocused) {
          event.preventDefault();
          document.getElementById(PACKAGE_SEARCH_INPUT_ID)?.focus();
        }
        break;
    }
  });

  $: filteredEntries = entries.filter(
    ({ name, version }) =>
      name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      version.toLowerCase().includes(searchTerm.toLowerCase()),
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
      resetPaging();
    }
  }

  $: {
    if (searchTerm) {
      resetPaging();
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
    class="help-sidebar"
    class:translate-x-[96%]={isHelpVisible}
    use:clickOutside={hideHelp}
  >
    <Tooltip
      tip={isHelpVisible ? "Close shortcuts panel" : "Keyboard shortcuts (H)"}
      placement="left"
    >
      <button
        class="help-trigger"
        class:hidden={isHelpVisible}
        type="button"
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
    </Tooltip>
    <ul
      class="help-list"
      aria-hidden={!isHelpVisible}
      class:opacity-90={isHelpVisible}
      class:opacity-10={!isHelpVisible}
    >
      {#each helpItems as { keys, label }}
        <li class="flex items-center">
          <div class="flex gap-2">
            {#each keys as { symbol, rotation }}
              <Kbd
                size="sm"
                class="flex p-1.5 bg-castleton-green/40 border-0 shadow-none min-w-0"
              >
                <ArrowUpIcon
                  class="size-3"
                  style={`transform: rotate(${rotation}deg);`}
                />
                <span class="sr-only">{symbol}</span>
              </Kbd>
            {/each}
          </div>

          <span class="ml-2 text-sm">{label}</span>
        </li>
      {/each}
    </ul>
  </aside>
  <section class="dependencies-section">
    <PackageSearchInput
      bind:value={searchTerm}
      on:focused={(e) => {
        isSearchFocused = e.detail;
      }}
    />
    <header class="dependencies-header">
      <div class="flex items-center justify-between w-full">
        <div>
          {selectedTab === "dependencies" ? "Dependencies" : "Dev Dependencies"}
          <Tooltip
            tip="Packages matching semver-safe latest / total in this tab"
            placement="bottom"
          >
            <Badge
              variant="primary"
              size="sm"
              class="ml-1 align-middle tracking-wider"
            >
              {upToDatePackages.length}/{entries.length}
            </Badge>
          </Tooltip>
        </div>
        {#if isAllUpToDate}
          <Tooltip
            tip="Every package is at latest within its semver range"
            placement="left"
          >
            <span class="inline-flex ml-1">
              <CheckCircleIcon class="size-4" />
            </span>
          </Tooltip>
        {/if}
      </div>
      {#if !isAllUpToDate}
        <Tooltip
          tip="Upgrade all outdated packages on this page to their semver-safe latest"
          placement="bottom"
        >
          <UpgradeButton
            on:click={() => handleUpgradePackages(outdatedPackages)}
            disabled={$upgradePackagesMutation.isPending}
            isLoading={$upgradePackagesMutation.isPending}
          >
            Upgrade all
          </UpgradeButton>
        </Tooltip>
      {/if}
    </header>
    <main class="dependencies-main">
      {#if !pageEntries.length}
        <div class="empty-state group">
          <div class="flex flex-col items-center justify-center gap-2">
            <AlertCircleIcon
              class="size-10 text-base-content/80 group-hover:animate-pulse"
            />
            <span class="text-sm text-base-content/80">No packages found</span>
          </div>
        </div>
      {:else}
        <ul class="grid">
          {#each pageEntries as { name, version, latest, latestOutOfRange, isLatest, meta }, index}
            <Dependency
              {index}
              {name}
              {version}
              {latest}
              {latestOutOfRange}
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
      <footer class="pagination-container">
        <div class="pagination-wrapper">
          <Pagination {pages} bind:pageIndex />
        </div>
      </footer>
    {/if}
  </section>
</div>

<style lang="postcss">
  @reference "../../app.css";

  .help-trigger {
    @apply size-10 absolute -right-10 p-2 bg-black/40 rounded-r-full opacity-40 hover:opacity-100 transition-opacity outline-none;
  }

  .help-sidebar {
    @apply absolute right-0 top-8 transition-all duration-300 ease-in;
  }

  .help-list {
    @apply bg-slate-900/60 p-4 rounded-xl grid gap-2;
  }

  .dependencies-section {
    @apply bg-slate-900/60 rounded-3xl overflow-hidden relative shadow-md p-4 grid gap-2;
  }

  .dependencies-header {
    @apply p-4 border-b border-granny-smith-apple/50 flex items-center justify-between mx-2;
  }

  .dependencies-main {
    @apply min-h-128 mx-2;
  }

  .empty-state {
    @apply flex items-center justify-center h-full;
  }

  .pagination-container {
    @apply grid place-items-center;
  }

  .pagination-wrapper {
    @apply bg-slate-900/90 rounded-full;
  }
</style>

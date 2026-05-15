<script lang="ts">
  import type { FullMetadata } from "package-json";
  import SvelteMarkdown from "svelte-markdown";

  import {
    BugIcon,
    GithubIcon,
    GlobeIcon,
    PackageIcon,
    CheckCircleIcon,
    ScaleIcon,
  } from "~/lib/icons";

  import { useQueryClient } from "@tanstack/svelte-query";

  import type { PackageInfo, TabKind } from "~/domain/types";
  import { applyPackageUpgrades } from "~/lib/apply-package-upgrades";
  import { ellipsis } from "~/lib/helpers";
  import {
    useBundlephobiaReportQuery,
    useUpgradePackagesMutation,
  } from "~/lib/hooks";

  import UpgradeButton from "./UpgradeButton.svelte";
  import Tooltip from "./Tooltip.svelte";

  export let name = "";
  export let version = "";
  export let latest: string | undefined = "";
  export let latestOutOfRange: string | undefined = undefined;
  export let index = 0;
  export let isLatest = false;
  export let meta: FullMetadata | undefined;
  export let expandedRowIndex = -1;
  export let selectedWorkspace = "";
  export let selectedTab: TabKind = "dependencies";

  const queryClient = useQueryClient();

  const upgradePackagesMutation = useUpgradePackagesMutation();

  $: upgradePending = $upgradePackagesMutation.isPending;

  async function handleUpgradePackages(packages: PackageInfo[]) {
    await applyPackageUpgrades({
      queryClient,
      mutateAsync: (input) => $upgradePackagesMutation.mutateAsync(input),
      packages,
      path: selectedWorkspace,
      tab: selectedTab,
      refetchAfter: false,
    });
  }

  function outOfRangeSinglePackage(): PackageInfo[] {
    return [
      {
        name,
        version,
        latest: latestOutOfRange!,
        latestOutOfRange,
        meta,
      },
    ];
  }

  function handleToggleExpandedRow() {
    if (expandedRowIndex === index) {
      expandedRowIndex = -1;
    } else {
      expandedRowIndex = index;
    }
  }

  const bundlephobiaQuery = useBundlephobiaReportQuery(name);

  $: isExpanded = expandedRowIndex === index;
  $: isBlurred = !isExpanded && expandedRowIndex !== -1;

  const MAX_LENGTH = 36;
  const STAGGER_TIME = 1 / 30; // 30fps
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-to-interactive-role -->
<li
  role="button"
  class={"animate-fadeIn transition-opacity ".concat($$props["class"])}
  on:click={handleToggleExpandedRow}
  on:keydown={handleToggleExpandedRow}
  style={`animation-delay: ${(index + 1) * STAGGER_TIME}s; opacity: ${
    isBlurred ? 0.4 : 1
  }!important;`}
>
  <div
    class:expanded={isExpanded}
    class="transition-[transform,background] duration-300 ease-in-out"
  >
    <div class="flex justify-between p-4 py-2">
      <div>
        <Tooltip tip={`View ${name} on npm`} placement="bottom" class="min-w-0">
          <a
            href={`https://npmjs.com/package/${name}`}
            target="_blank"
            class="hover:underline font-medium whitespace-nowrap flex items-center gap-2 text-lg"
            class:pt-1={isExpanded}
            rel="noopener noreferrer"
          >
            <div class:hidden={!isExpanded}>
              <PackageIcon class="size-6" />
            </div>
            {ellipsis(MAX_LENGTH, name)}
          </a>
        </Tooltip>
      </div>
      <div class="grid place-items-end gap-2 items-center">
        {#if isLatest}
          <div class="flex flex-col gap-2 items-end py-1">
            <div class="flex items-center gap-2 justify-end py-2">
              <span>
                {version}
              </span>
              <Tooltip
                tip="At latest within your semver range"
                placement="bottom"
              >
                <span class="inline-flex">
                  <CheckCircleIcon class="size-4" />
                </span>
              </Tooltip>
            </div>
            {#if latestOutOfRange && latestOutOfRange !== latest}
              <Tooltip
                tip="Install latest on npm (may be outside the range in package.json)"
                placement="bottom"
                color="warning"
              >
                <UpgradeButton
                  outOfRange={true}
                  disabled={upgradePending}
                  isLoading={upgradePending}
                  on:click={(e) => {
                    e.stopPropagation();
                    handleUpgradePackages(outOfRangeSinglePackage());
                  }}
                >
                  {version} &rArr; {latestOutOfRange}
                </UpgradeButton>
              </Tooltip>
            {/if}
          </div>
        {:else}
          <div class="flex flex-col gap-2 items-end py-1">
            <Tooltip
              tip="Upgrade to latest allowed by the semver range in package.json"
              placement="bottom"
            >
              <UpgradeButton
                disabled={upgradePending}
                isLoading={upgradePending}
                on:click={(e) => {
                  e.stopPropagation();
                  handleUpgradePackages([
                    { name, version, latest, latestOutOfRange, meta },
                  ]);
                }}
              >
                {version} &rArr; {latest}
              </UpgradeButton>
            </Tooltip>
            {#if latestOutOfRange && latestOutOfRange !== latest}
              <Tooltip
                tip="Install latest on npm (may be outside the range in package.json)"
                placement="bottom"
                color="warning"
              >
                <UpgradeButton
                  outOfRange={true}
                  disabled={upgradePending}
                  isLoading={upgradePending}
                  on:click={(e) => {
                    e.stopPropagation();
                    handleUpgradePackages(outOfRangeSinglePackage());
                  }}
                >
                  {version} &rArr; {latestOutOfRange}
                </UpgradeButton>
              </Tooltip>
            {/if}
          </div>
        {/if}
      </div>
    </div>

    {#if isExpanded && meta}
      <div class="text-granny-smith-apple/90 max-w-md p-4 py-2 font-medium">
        <SvelteMarkdown source={meta.description ?? ""} />
      </div>
      <div
        class="px-2 pt-2 py-4 flex justify-between items-center border-t mx-2 border-granny-smith-apple/60"
      >
        <div class="grid gap-2">
          {#if meta.license}
            <div class="flex gap-1 items-center">
              <Tooltip tip="SPDX license" placement="top">
                <span class="inline-flex -translate-y-px">
                  <ScaleIcon class="size-4" />
                </span>
              </Tooltip>
              <span>
                {meta.license ?? ""}
              </span>
            </div>
          {/if}
          {#if meta.author}
            <div class="text-granny-smith-apple flex items-center gap-2">
              <span>Authored by</span>
              <span class="font-semibold">
                {#if typeof meta.author === "string"}
                  {meta.author}
                {:else}
                  {meta.author.name}
                {/if}
              </span>
            </div>
          {/if}
          {#if $bundlephobiaQuery.data}
            <div>
              Bundle size
              <span class="font-semibold">
                {($bundlephobiaQuery.data.gzip / 1024).toFixed(1)}kb
              </span>
              (gzipped) |
              <span class="font-semibold">
                {($bundlephobiaQuery.data.size / 1024).toFixed(1)}kb
              </span> (uncompressed)
            </div>
          {/if}
          {#if latestOutOfRange && latestOutOfRange !== latest}
            <div class="text-granny-smith-apple/80 text-xs">
              Latest version available (out of range):
              <span class="font-semibold">{latestOutOfRange}</span>
            </div>
          {/if}
        </div>
        <div class="flex gap-2 items-center text-lg">
          {#if meta.repository?.url}
            <Tooltip tip="Repository" placement="top">
              <a
                href={meta.repository.url.replace(/^git\+/, "")}
                target="_blank"
                class="hover:underline inline-flex"
                rel="noopener noreferrer"
                aria-label="Open repository"
              >
                <GithubIcon class="size-4" />
              </a>
            </Tooltip>
          {/if}
          {#if meta.homepage}
            <Tooltip tip="Homepage" placement="top">
              <a
                href={meta.homepage}
                target="_blank"
                class="hover:underline inline-flex"
                rel="noopener noreferrer"
                aria-label="Open homepage"
              >
                <GlobeIcon class="size-4" />
              </a>
            </Tooltip>
          {/if}
          {#if meta.bugs}
            <Tooltip tip="Issue tracker" placement="top">
              <a
                href={typeof meta.bugs === "string" ? meta.bugs : meta.bugs.url}
                target="_blank"
                class="hover:underline inline-flex"
                rel="noopener noreferrer"
                aria-label="Open issue tracker"
              >
                <BugIcon class="size-5" />
              </a>
            </Tooltip>
          {/if}
        </div>
      </div>
    {/if}
  </div>
</li>

<style lang="postcss">
  @reference "../../app.css";

  li {
    @apply border-granny-smith-apple/50 text-xs transition-all;
    @apply hover:opacity-80;
  }
  .expanded {
    @apply bg-castleton-green rounded-3xl scale-105 shadow-lg;
  }
</style>

<script lang="ts">
  import type { FullMetadata } from "package-json";
  import { onDestroy, onMount } from "svelte";
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

  import type { Package, PackageInfo } from "~/domain/types";
  import { QUERY_KEYS } from "~/domain/constants";
  import { ellipsis } from "~/lib/helpers";
  import {
    updatePackageQueryCache,
    useBundlephobiaReportQuery,
    useUpgradePackagesMutation,
  } from "~/lib/hooks";

  import UpgradeButton from "./UpgradeButton.svelte";

  export let name = "";
  export let version = "";
  export let latest: string | undefined = "";
  export let index = 0;
  export let isLatest = false;
  export let meta: FullMetadata | undefined;
  export let expandedRowIndex = -1;
  export let selectedWorkspace = "";

  const queryClient = useQueryClient();

  const upgradePackagesMutation = useUpgradePackagesMutation();

  async function handleUpgradePackages(packages: PackageInfo[]) {
    try {
      const updated = await $upgradePackagesMutation.mutateAsync({
        packages,
        path: selectedWorkspace,
      });

      // apply optimistic update
      queryClient.setQueryData<Package>(
        QUERY_KEYS.package(selectedWorkspace),
        updatePackageQueryCache(updated)
      );
    } catch (error) {
      console.log("Failed to upgrade packages:", { originalError: error });
    }
  }

  function handleToggleExpandedRow() {
    if (expandedRowIndex === index) {
      expandedRowIndex = -1;
    } else {
      expandedRowIndex = index;
    }
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Escape") {
      expandedRowIndex = -1;
    }
  }

  const bundlephobiaQuery = useBundlephobiaReportQuery(name);

  onMount(() => {
    window.addEventListener("keydown", handleKeyDown);
  });

  onDestroy(() => {
    window.removeEventListener("keydown", handleKeyDown);
  });

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
        <a
          href={`https://npmjs.com/package/${name}`}
          target="_blank"
          class="hover:underline font-medium whitespace-nowrap flex items-center gap-2 text-lg"
          class:pt-1={isExpanded}
          rel="noopener noreferrer"
        >
          <div class:hidden={!isExpanded}>
            <PackageIcon class="h-6 w-6" />
          </div>
          {ellipsis(MAX_LENGTH, name)}
        </a>
      </div>
      <div class="grid place-items-end gap-2 items-center">
        {#if isLatest}
          <div class="flex items-center gap-2 justify-end py-2">
            <span>
              {version}
            </span>
            <CheckCircleIcon class="h-4 w-4" />
          </div>
        {:else}
          <div class="py-1">
            <UpgradeButton
              disabled={$upgradePackagesMutation.isLoading}
              isLoading={$upgradePackagesMutation.isLoading}
              on:click={(e) => {
                e.stopPropagation();
                handleUpgradePackages([{ name, version, latest, meta }]);
              }}
            >
              {version} &rArr; {latest}
            </UpgradeButton>
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
              <ScaleIcon class="h-4 w-4 -translate-y-px" />
              <span>
                {meta.license ?? ""}
              </span>
            </div>
          {/if}
          {#if meta.author}
            <div class="text-granny-smith-apple flex items-center gap-2">
              <span>Authored by</span>
              <span class="font-semibold">
                {meta.author.name}
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
        </div>
        <div class="flex gap-2 items-center text-lg">
          {#if meta.repository?.url}
            <a
              href={meta.repository.url.replace(/^git\+/, "")}
              target="_blank"
              class="hover:underline"
              rel="noopener noreferrer"
              title="Github"
            >
              <GithubIcon class="h-4 w-4" />
            </a>
          {/if}
          {#if meta.homepage}
            <a
              href={meta.homepage}
              target="_blank"
              class="hover:underline"
              rel="noopener noreferrer"
              title="Homepage"
            >
              <GlobeIcon class="h-4 w-4" />
            </a>
          {/if}
          {#if meta.bugs}
            <a
              href={meta.bugs.url}
              target="_blank"
              class="hover:underline"
              rel="noopener noreferrer"
              title="Bugs"
            >
              <BugIcon class="h-5 w-5" />
            </a>
          {/if}
        </div>
      </div>
    {/if}
  </div>
</li>

<style lang="postcss">
  li {
    @apply border-granny-smith-apple/50 text-xs transition-all;
    @apply hover:text-opacity-80;
  }
  .expanded {
    @apply bg-castleton-green rounded-3xl scale-105 shadow-lg;
  }
</style>

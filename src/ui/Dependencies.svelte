<script lang="ts">
  import { prop, range } from "ramda";
  import GoArrowUp from "svelte-icons/go/GoArrowUp.svelte";
  import GoFlame from "svelte-icons/go/GoFlame.svelte";
  import { useMutation, useQueryClient } from "@sveltestack/svelte-query";

  import type { PackageInfo } from "domain/types";

  import { PAGE_SIZE, QUERIES } from "../domain/constants";
  import { isLatestVersion } from "../lib/helpers";
  import { upgradePackage } from "../lib/api";

  export let label = "";
  export let entries: PackageInfo[] = [];

  let pageIndex = 0;
  const pages = entries.length / PAGE_SIZE;

  const upgradePackageMutation = useMutation(upgradePackage);

  function handlePageClick(e: MouseEvent) {
    const { page } = (e.target as HTMLLIElement).dataset;

    pageIndex = Number(page);
  }

  function handleNextPageClick() {
    if (pageIndex < pages - 1) pageIndex++;
  }

  function handlePreviousPageClick() {
    if (pageIndex > 0) pageIndex--;
  }

  const queryClient = useQueryClient();

  async function handleUpgradePackage(
    name: string,
    version: string,
    latest: string
  ) {
    try {
      await $upgradePackageMutation.mutateAsync({
        name,
        version,
        latest,
      });

      await queryClient.refetchQueries([QUERIES.package]);
    } catch (error) {
      console.log("Failed to upgrade package:", { originalError: error });
    }
  }

  $: enrichedEntries = entries.map((entry) => ({
    ...entry,
    isLatest: isLatestVersion(entry.version, entry.latest),
  }));
  $: startIndex = pageIndex * PAGE_SIZE;
  $: pageEntries = enrichedEntries.slice(startIndex, startIndex + PAGE_SIZE);

  $: upToDatePackages = enrichedEntries.filter(prop("isLatest"));
  $: isAllUpToDate = upToDatePackages.length === entries.length;
</script>

<div
  class="border-2 border-granny-smith-apple rounded-xl overflow-hidden relative"
>
  <div class="p-4 border-b border-granny-smith-apple flex items-center">
    {label} ({upToDatePackages.length}/{entries.length})
    {#if isAllUpToDate}
      <div class="h-4 w-4 ml-1">
        <GoFlame />
      </div>
    {/if}
  </div>

  <ul class="grid">
    {#each pageEntries as { name, version, latest, isLatest }, i}
      <li
        class="flex justify-between p-4 border-granny-smith-apple text-xs"
        class:border-t={i !== 0}
      >
        {#if isLatest}
          <div>{name}</div>
          <div>{version} (latest)</div>
        {:else}
          <div>{name}</div>
          <button
            role="button"
            class="flex items-center rounded-full p-1 focus:ring bg-granny-smith-apple text-castleton-green -mr-1"
            on:click={() => handleUpgradePackage(name, version, latest)}
          >
            <div class="px-1 font-medium">
              {version} &rArr; {latest}
            </div>
            <div
              class="h-6 w-6 bg-gray-800 rounded-full p-1 text-granny-smith-apple"
            >
              <GoArrowUp height="1em" />
            </div>
          </button>
        {/if}
      </li>
    {/each}
  </ul>
  <div class="flex justify-center border-t border-granny-smith-apple">
    <ul class="inline-flex mx-auto">
      <li
        role="button"
        class="flex justify-between p-4 px-6 border-r border-l border-granny-smith-apple"
        on:click={handlePreviousPageClick}
      >
        ◄
      </li>
      {#each range(0, pages) as index}
        <li
          role="button"
          data-page={index}
          on:click={handlePageClick}
          class="flex justify-between p-4 px-6 border-r border-granny-smith-apple"
          class:bg-castleton-green={index === pageIndex}
        >
          {index + 1}
        </li>
      {/each}
      <li
        role="button"
        class="flex justify-between p-4 px-6 border-r border-granny-smith-apple"
        on:click={handleNextPageClick}
      >
        ►
      </li>
    </ul>
  </div>
</div>

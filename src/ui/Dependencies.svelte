<script lang="ts">
  import { partition, prop, range } from "ramda";
  import GoFlame from "svelte-icons/go/GoFlame.svelte";
  import { useMutation, useQueryClient } from "@sveltestack/svelte-query";
  import type { Package, PackageInfo } from "domain/types";

  import { PAGE_SIZE, QUERIES } from "../domain/constants";
  import { isLatestVersion, rawVersion } from "../lib/helpers";
  import { upgradePackages } from "../lib/api";
  import UpgradeButton from "./UpgradeButton.svelte";

  export let label = "";
  export let entries: PackageInfo[] = [];

  let pageIndex = 0;
  let loadingPackage = "";

  const pages = entries.length / PAGE_SIZE;

  const upgradePackagesMutation = useMutation(upgradePackages, {
    onMutate([{ name }]) {
      loadingPackage = name;
    },
    onSettled() {
      loadingPackage = "";
    },
  });

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

  async function handleUpgradePackages(packages: PackageInfo[]) {
    try {
      const updated = await $upgradePackagesMutation.mutateAsync(packages);

      queryClient.setQueryData<Package>([QUERIES.package], (current) => {
        for (let item of updated) {
          const { qualifier } = rawVersion(item.version);
          const latestVersion = `${qualifier}${item.latest}`;
          current.dependencies[item.name] = latestVersion;
          current.devDependencies[item.name] = latestVersion;
        }

        return current;
      });

      await queryClient.refetchQueries([QUERIES.package]);
    } catch (error) {
      console.log("Failed to upgrade packages:", { originalError: error });
    }
  }

  $: enrichedEntries = entries
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
  $: pageEntries = enrichedEntries.slice(startIndex, startIndex + PAGE_SIZE);
  $: [upToDatePackages, outdatedPackages] = partition(
    prop("isLatest"),
    enrichedEntries
  );
  $: isAllUpToDate = upToDatePackages.length === entries.length;
</script>

<div
  class="border-2 border-granny-smith-apple rounded-xl overflow-hidden relative"
>
  <div
    class="p-4 border-b border-granny-smith-apple flex items-center justify-between"
  >
    <div class="flex items-center">
      {label} ({upToDatePackages.length}/{entries.length})
      {#if isAllUpToDate}
        <div class="h-4 w-4 ml-1">
          <GoFlame />
        </div>
      {/if}
    </div>
    <div>
      {#if !isAllUpToDate}
        <UpgradeButton
          on:click={() => handleUpgradePackages(outdatedPackages)}
          disabled={$upgradePackagesMutation.isLoading}
          isLoading={$upgradePackagesMutation.isLoading}
        >
          Upgrade all
        </UpgradeButton>
      {/if}
    </div>
  </div>
  <ul class="grid">
    {#each pageEntries as { name, version, latest, isLatest }, i}
      <li
        class="flex justify-between p-4 border-granny-smith-apple text-xs"
        class:border-t={i !== 0}
      >
        {#if isLatest}
          <div>{name}</div>
          <div class="flex">
            {version}
            <div class="h-4 w-4 ml-1">
              <GoFlame />
            </div>
          </div>
        {:else}
          <div>{name}</div>
          <UpgradeButton
            disabled={$upgradePackagesMutation.isLoading &&
              loadingPackage === name}
            isLoading={$upgradePackagesMutation.isLoading &&
              loadingPackage === name}
            on:click={() => handleUpgradePackages([{ name, version, latest }])}
          >
            {version} &rArr; {latest}
          </UpgradeButton>
        {/if}
      </li>
    {/each}
  </ul>
  <div class="flex justify-center border-t border-granny-smith-apple">
    <ul class="inline-flex mx-auto font-medium">
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

<script lang="ts">
  import { partition, prop } from "ramda";
  import { useQueryClient } from "@sveltestack/svelte-query";
  import FaRegCheckCircle from "svelte-icons/fa/FaRegCheckCircle.svelte";

  import type { Package, PackageInfo } from "domain/types";
  import { PAGE_SIZE, QUERIES } from "domain/constants";
  import { isLatestVersion, rawVersion } from "lib/helpers";
  import { useUpgradePackagesMutation } from "lib/hooks";

  import UpgradeButton from "./UpgradeButton.svelte";
  import Dependency from "./Dependency.svelte";
  import Pagination from "./Pagination.svelte";
  import type { FullMetadata } from "package-json";

  export let label = "";
  export let entries: PackageInfo[] = [];

  let pageIndex = 0;
  let expandedRowIndex = -1;

  $: pages = Math.ceil(entries.length / PAGE_SIZE);

  const upgradePackagesMutation = useUpgradePackagesMutation();

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

  $: displayEntries = entries
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
  $: [upToDatePackages, outdatedPackages] = partition(
    prop("isLatest"),
    displayEntries
  );
  $: isAllUpToDate = upToDatePackages.length === entries.length;
</script>

<div
  class="bg-slate-900/60 rounded-3xl overflow-hidden relative shadow-md p-4 px-6"
>
  <div
    class="p-4 border-b border-granny-smith-apple/50 flex items-center justify-between"
  >
    <div class="flex items-center justify-between w-full">
      <div>
        {label}
        <span
          class="text-xs tracking-wider bg-castleton-green px-2 py-1 rounded-full"
        >
          {upToDatePackages.length}/{entries.length}
        </span>
      </div>
      {#if isAllUpToDate}
        <div class="h-4 w-4 ml-1">
          <FaRegCheckCircle />
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
  <div class="min-h-[32rem]">
    <ul class="grid">
      {#each pageEntries as { name, version, latest, isLatest, meta }, index}
        <Dependency
          {index}
          {name}
          {version}
          {latest}
          {isLatest}
          {meta}
          bind:expandedRowIndex
        />
      {/each}
    </ul>
  </div>
  <div class="grid place-items-center border-t border-granny-smith-apple/50">
    <Pagination {pages} bind:pageIndex />
  </div>
</div>
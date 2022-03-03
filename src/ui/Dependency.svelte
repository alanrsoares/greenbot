<script lang="ts">
  import GoFlame from "svelte-icons/go/GoFlame.svelte";
  import { useQueryClient } from "@sveltestack/svelte-query";
  import type { Package, PackageInfo } from "domain/types";

  import { rawVersion } from "../lib/helpers";
  import { useUpgradePackagesMutation } from "../lib/hooks";
  import { QUERIES } from "../domain/constants";
  import UpgradeButton from "./components/UpgradeButton.svelte";

  export let name = "";
  export let version = "";
  export let latest = "";
  export let index = 0;
  export let isLatest = false;

  let isLoading = false;

  const upgradePackagesMutation = useUpgradePackagesMutation({
    onMutate() {
      isLoading = true;
    },
    onSettled() {
      isLoading = false;
    },
  });

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
</script>

<li
  class="flex justify-between p-4 border-granny-smith-apple text-xs"
  class:border-t={index !== 0}
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
      disabled={$upgradePackagesMutation.isLoading && isLoading}
      isLoading={$upgradePackagesMutation.isLoading && isLoading}
      on:click={() => handleUpgradePackages([{ name, version, latest }])}
    >
      {version} &rArr; {latest}
    </UpgradeButton>
  {/if}
</li>

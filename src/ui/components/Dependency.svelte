<script lang="ts">
  import FaRegCheckCircle from "svelte-icons/fa/FaRegCheckCircle.svelte";
  import { useQueryClient } from "@sveltestack/svelte-query";
  import type { Package, PackageInfo } from "domain/types";

  import { rawVersion } from "lib/helpers";
  import { useUpgradePackagesMutation } from "lib/hooks";
  import { QUERIES } from "domain/constants";

  import UpgradeButton from "./UpgradeButton.svelte";

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
  class="flex justify-between p-4 border-granny-smith-apple/50 text-xs"
  class:border-t={index !== 0}
>
  <div>
    <a
      href={`https://npmjs.com/package/${name}`}
      target="_blank"
      class="hover:underline"
      rel="noopener roreferrer"
    >
      {name}
    </a>
  </div>
  {#if isLatest}
    <div class="flex gap-2">
      <div>
        {version}
      </div>
      <div class="h-4 w-4 ml-1">
        <FaRegCheckCircle />
      </div>
    </div>
  {:else}
    <UpgradeButton
      disabled={$upgradePackagesMutation.isLoading && isLoading}
      isLoading={$upgradePackagesMutation.isLoading && isLoading}
      on:click={() => handleUpgradePackages([{ name, version, latest }])}
    >
      {version} &rArr; {latest}
    </UpgradeButton>
  {/if}
</li>

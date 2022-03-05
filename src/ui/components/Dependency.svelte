<script lang="ts">
  import type { FullMetadata } from "package-json";
  import FaRegCheckCircle from "svelte-icons/fa/FaRegCheckCircle.svelte";
  import FaGithub from "svelte-icons/fa/FaGithub.svelte";
  import FaRegUser from "svelte-icons/fa/FaRegUser.svelte";

  import { useQueryClient } from "@sveltestack/svelte-query";
  import type { Package, PackageInfo } from "domain/types";

  import { ellipsis, rawVersion } from "lib/helpers";
  import { useUpgradePackagesMutation } from "lib/hooks";
  import { QUERIES } from "domain/constants";

  import UpgradeButton from "./UpgradeButton.svelte";
  import FaNpm from "svelte-icons/fa/FaNpm.svelte";
  import { repeat } from "ramda";

  export let name = "";
  export let version = "";
  export let latest = "";
  export let index = 0;
  export let isLatest = false;
  export let meta: FullMetadata;
  export let expandedRowIndex = -1;

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

  function handleToggleExpandedRow() {
    if (expandedRowIndex === index) {
      expandedRowIndex = -1;
    } else {
      expandedRowIndex = index;
    }
  }

  const MAX_LENGTH = 40;
  const STAGGER_TIME = 1 / 30; // 30fps

  $: isExpanded = expandedRowIndex === index;
</script>

<li
  role="button"
  class="animate-fadeIn opacity-0"
  class:border-t={index !== 0}
  class:expanded={isExpanded}
  on:click={handleToggleExpandedRow}
  style={`animation-delay: ${(index + 1) * STAGGER_TIME}s;`}
>
  <div class="flex justify-between p-4">
    <a
      href={`https://npmjs.com/package/${name}`}
      target="_blank"
      class="hover:underline font-semibold whitespace-nowrap"
      class:text-base={isExpanded}
      rel="noopener roreferrer"
    >
      {ellipsis(MAX_LENGTH, name)}
    </a>
    {#if isLatest}
      <div class="flex gap-2 min-w-[6rem] justify-end">
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
        on:click={() =>
          handleUpgradePackages([{ name, version, latest, meta }])}
      >
        {version} &rArr; {latest}
      </UpgradeButton>
    {/if}
  </div>

  {#if isExpanded}
    <div class="p-4 pt-0 flex justify-between items-center">
      <div class="grid gap-2">
        <div class="text-granny-smith-apple/90 italic">
          "{meta.description}"
        </div>
        {#if meta.author}
          <div class="text-granny-smith-apple flex items-center gap-2">
            <div class="h-4">
              <FaRegUser />
            </div>
            {meta.author.name}
          </div>
        {/if}
      </div>
      <div class="flex gap-2 items-center">
        <div class="h-8">
          <a
            href={`https://npmjs.com/package/${name}`}
            target="_blank"
            class="hover:underline"
            rel="noopener roreferrer"
          >
            <FaNpm />
          </a>
        </div>
        {#if meta.repository}
          <div class="h-6">
            <a
              href={meta.repository.url.replace(/^git\+/, "")}
              target="_blank"
              class="hover:underline"
              rel="noopener roreferrer"
            >
              <FaGithub />
            </a>
          </div>
        {/if}
      </div>
    </div>
  {/if}
</li>

<style lang="postcss">
  li {
    @apply border-granny-smith-apple/50 text-xs transition-all;
    @apply hover:text-opacity-80;
  }
  .expanded {
    @apply bg-castleton-green rounded-2xl scale-105 border-none;
  }
</style>

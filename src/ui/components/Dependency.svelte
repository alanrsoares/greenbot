<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import type { FullMetadata } from "package-json";
  import FaRegCheckCircle from "svelte-icons/fa/FaRegCheckCircle.svelte";
  import FaGithub from "svelte-icons/fa/FaGithub.svelte";
  import FaGlobe from "svelte-icons/fa/FaGlobe.svelte";
  import FaNpm from "svelte-icons/fa/FaNpm.svelte";
  import FaBug from "svelte-icons/fa/FaBug.svelte";

  import { useQueryClient } from "@sveltestack/svelte-query";
  import type { Package, PackageInfo } from "domain/types";

  import { ellipsis, rawVersion } from "lib/helpers";
  import { useUpgradePackagesMutation } from "lib/hooks";
  import { QUERIES } from "domain/constants";

  import UpgradeButton from "./UpgradeButton.svelte";

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

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Escape") {
      expandedRowIndex = -1;
    }
  }

  onMount(() => {
    window.addEventListener("keydown", handleKeyDown);
  });

  onDestroy(() => {
    window.removeEventListener("keydown", handleKeyDown);
  });

  $: isExpanded = expandedRowIndex === index;
  $: isBlurred = !isExpanded && expandedRowIndex !== -1;
</script>

<li
  role="button"
  class="animate-fadeIn transition-opacity"
  on:click={handleToggleExpandedRow}
  class:border-t={index !== 0}
  style={`animation-delay: ${(index + 1) * STAGGER_TIME}s; opacity: ${
    isBlurred ? 0.4 : 1
  }!important;`}
>
  <div
    class:expanded={isExpanded}
    class="transition-[transform,background] duration-300 ease-in-out"
  >
    <div class="flex justify-between p-4">
      <div>
        <a
          href={`https://npmjs.com/package/${name}`}
          target="_blank"
          class="hover:underline font-semibold whitespace-nowrap flex items-center gap-2"
          class:text-base={isExpanded}
          rel="noopener roreferrer"
        >
          <div class:hidden={!isExpanded} class="h-8">
            <FaNpm />
          </div>
          {ellipsis(MAX_LENGTH, name)}
        </a>
      </div>
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
      <div
        class="px-2 py-4 flex justify-between items-center border-t mx-2 border-granny-smith-apple/60"
      >
        <div class="grid gap-2">
          <div class="text-granny-smith-apple/90 italic">
            "{meta.description}"
          </div>
          {#if meta.author}
            <div class="text-granny-smith-apple flex items-center gap-2">
              <span>Authored by</span>
              <span class="font-semibold">
                {meta.author.name}
              </span>
            </div>
          {/if}
        </div>
        <div class="flex gap-2 items-center">
          {#if meta.repository?.url}
            <div class="h-5">
              <a
                href={meta.repository.url.replace(/^git\+/, "")}
                target="_blank"
                class="hover:underline"
                rel="noopener roreferrer"
                title="Github"
              >
                <FaGithub />
              </a>
            </div>
          {/if}
          {#if meta.homepage}
            <div class="h-5">
              <a
                href={meta.homepage}
                target="_blank"
                class="hover:underline"
                rel="noopener roreferrer"
                title="Homepage"
              >
                <FaGlobe />
              </a>
            </div>
          {/if}
          {#if meta.bugs}
            <div class="h-5">
              <a
                href={meta.bugs.url}
                target="_blank"
                class="hover:underline"
                rel="noopener roreferrer"
                title="Bugs"
              >
                <FaBug />
              </a>
            </div>
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
    @apply bg-castleton-green rounded-2xl scale-105 shadow-lg;
  }
</style>

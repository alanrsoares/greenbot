<script lang="ts">
  import type { FullMetadata } from "package-json";

  import { PackageIcon } from "~/lib/icons";

  import { useQueryClient } from "@tanstack/svelte-query";

  import type { PackageInfo, TabKind } from "~/domain/types";
  import { applyPackageUpgrades } from "~/lib/apply-package-upgrades";
  import { ellipsis } from "~/lib/helpers";
  import { useUpgradePackagesMutation } from "~/lib/hooks";

  import DependencyExpanded from "./DependencyExpanded.svelte";
  import DependencyUpgradeActions from "./DependencyUpgradeActions.svelte";
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

  function inRangeSinglePackage(): PackageInfo[] {
    return [{ name, version, latest, latestOutOfRange, meta }];
  }

  function handleToggleExpandedRow() {
    if (expandedRowIndex === index) {
      expandedRowIndex = -1;
    } else {
      expandedRowIndex = index;
    }
  }

  $: isExpanded = expandedRowIndex === index;
  $: isBlurred = !isExpanded && expandedRowIndex !== -1;
  $: showOutOfRangeUpgrade = !!latestOutOfRange && latestOutOfRange !== latest;

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
      <DependencyUpgradeActions
        {isLatest}
        {version}
        {latest}
        {latestOutOfRange}
        {showOutOfRangeUpgrade}
        {upgradePending}
        on:inRangeUpgrade={() => handleUpgradePackages(inRangeSinglePackage())}
        on:outOfRangeUpgrade={() =>
          handleUpgradePackages(outOfRangeSinglePackage())}
      />
    </div>

    {#if isExpanded && meta}
      <DependencyExpanded
        {name}
        {meta}
        {showOutOfRangeUpgrade}
        {latestOutOfRange}
      />
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

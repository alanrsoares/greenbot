<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import { CheckCircleIcon } from "~/lib/icons";

  import Tooltip from "./Tooltip.svelte";
  import UpgradeButton from "./UpgradeButton.svelte";

  export let isLatest = false;
  export let version = "";
  export let latest: string | undefined = "";
  export let latestOutOfRange: string | undefined = undefined;
  export let showOutOfRangeUpgrade = false;
  export let upgradePending = false;

  const dispatch = createEventDispatcher<{
    inRangeUpgrade: void;
    outOfRangeUpgrade: void;
  }>();

  function emitInRange(e: MouseEvent) {
    e.stopPropagation();
    dispatch("inRangeUpgrade");
  }

  function emitOutOfRange(e: MouseEvent) {
    e.stopPropagation();
    dispatch("outOfRangeUpgrade");
  }
</script>

<div class="grid place-items-end gap-2 items-center">
  <div class="flex flex-col gap-2 items-end py-1">
    {#if isLatest}
      <div class="flex items-center gap-2 justify-end py-2">
        <span>
          {version}
        </span>
        <Tooltip tip="At latest within your semver range" placement="bottom">
          <span class="inline-flex">
            <CheckCircleIcon class="size-4" />
          </span>
        </Tooltip>
      </div>
    {:else}
      <Tooltip
        tip="Upgrade to latest allowed by the semver range in package.json"
        placement="bottom"
      >
        <UpgradeButton
          disabled={upgradePending}
          isLoading={upgradePending}
          on:click={emitInRange}
        >
          {version} &rArr; {latest}
        </UpgradeButton>
      </Tooltip>
    {/if}
    {#if showOutOfRangeUpgrade}
      <Tooltip
        tip="Install latest on npm (may be outside the range in package.json)"
        placement="bottom"
        color="warning"
      >
        <UpgradeButton
          outOfRange={true}
          disabled={upgradePending}
          isLoading={upgradePending}
          on:click={emitOutOfRange}
        >
          {version} &rArr; {latestOutOfRange}
        </UpgradeButton>
      </Tooltip>
    {/if}
  </div>
</div>

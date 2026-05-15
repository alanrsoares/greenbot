<script lang="ts">
  import { onMount } from "svelte";
  import type { Package } from "~/domain/types";

  import { ChevronLeftIcon, ChevronRightIcon } from "~/lib/icons";
  import { Button, Select } from "~/ui/primitives";
  import Tooltip from "./Tooltip.svelte";

  export let selectedWorkspace: string = "";
  export let workspaces: Package["workspaces"] = [];

  onMount(() => {
    const params = new URLSearchParams(window.location.search);
    const path = params.get("path");

    if (path !== null) {
      selectedWorkspace = path;
    }
  });

  $: onWorkspaceChange = (shift: 1 | -1) => () => {
    if (!workspaces) return;

    const index =
      selectedWorkspace === ""
        ? 0
        : (workspaces.findIndex((x) => x.path === selectedWorkspace) ?? -1);

    if (index >= 0) {
      const nextWorkspace =
        workspaces[(index + shift) % workspaces.length]?.path ?? "";

      selectedWorkspace =
        nextWorkspace === selectedWorkspace ? "" : nextWorkspace;
    }
  };
</script>

{#if workspaces?.length}
  <div class="bg-base-300 p-3 rounded-2xl mx-auto max-w-xl w-full">
    <div class="flex flex-1 justify-evenly items-stretch gap-2">
      <Tooltip tip="Previous workspace" placement="top" class="flex-1 min-w-0">
        <Button
          variant="ghost"
          square
          size="sm"
          class="flex-1 min-w-0 border-0 shadow-none bg-transparent hover:bg-white/10"
          on:click={onWorkspaceChange(-1)}
        >
          <ChevronLeftIcon class="w-4 h-4" />
        </Button>
      </Tooltip>
      <div class="grid place-items-center flex-1 min-w-0">
        <Tooltip
          tip="Workspace folder (syncs ?path= in URL)"
          placement="bottom"
          class="w-full"
        >
          <Select
            bind:value={selectedWorkspace}
            size="sm"
            class="w-full max-w-xs"
          >
            <option value="">root</option>
            {#each workspaces as workspace}
              <option value={workspace.path}>{workspace.name}</option>
            {/each}
          </Select>
        </Tooltip>
      </div>
      <Tooltip tip="Next workspace" placement="top" class="flex-1 min-w-0">
        <Button
          variant="ghost"
          square
          size="sm"
          class="flex-1 min-w-0 border-0 shadow-none bg-transparent hover:bg-white/10"
          on:click={onWorkspaceChange(1)}
        >
          <ChevronRightIcon class="w-4 h-4" />
        </Button>
      </Tooltip>
    </div>
  </div>
{/if}

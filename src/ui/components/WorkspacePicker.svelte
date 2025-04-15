<script lang="ts">
  import { onMount } from "svelte";
  import { Package } from "~/domain/types";

  import { ChevronLeftIcon, ChevronRightIcon } from "~/lib/icons";

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
    <div class="flex flex-1 justify-evenly">
      <button class="chrevron-btn" on:click={onWorkspaceChange(-1)}>
        <ChevronLeftIcon class="w-4 h-4" />
      </button>
      <label class="grid place-items-center">
        <select class="select select-sm" bind:value={selectedWorkspace}>
          <option value="">root</option>
          {#each workspaces as workspace}
            <option value={workspace.path}>{workspace.name}</option>
          {/each}
        </select>
      </label>
      <button class="chrevron-btn" on:click={onWorkspaceChange(1)}>
        <ChevronRightIcon class="w-4 h-4" />
      </button>
    </div>
  </div>
{/if}

<style>
  @reference "../../app.css";

  .chrevron-btn {
    @apply flex-1 grid place-items-center;
  }
</style>

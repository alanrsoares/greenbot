<script lang="ts">
  import type { FullMetadata } from "package-json";
  import SvelteMarkdown from "svelte-markdown";

  import { BugIcon, GithubIcon, GlobeIcon, ScaleIcon } from "~/lib/icons";

  import { useBundlephobiaReportQuery } from "~/lib/hooks";

  import Tooltip from "./Tooltip.svelte";

  export let name: string;
  export let meta: FullMetadata;
  export let showOutOfRangeUpgrade = false;
  export let latestOutOfRange: string | undefined = undefined;

  const bundlephobiaQuery = useBundlephobiaReportQuery(name);

  type FooterLink = {
    tip: string;
    href: string;
    Icon: typeof GithubIcon;
    aria: string;
    iconClass: string;
  };

  $: footerLinks = ((): FooterLink[] => {
    const list: FooterLink[] = [];
    if (meta.repository?.url) {
      list.push({
        tip: "Repository",
        href: meta.repository.url.replace(/^git\+/, ""),
        Icon: GithubIcon,
        aria: "Open repository",
        iconClass: "size-4",
      });
    }
    if (meta.homepage) {
      list.push({
        tip: "Homepage",
        href: meta.homepage,
        Icon: GlobeIcon,
        aria: "Open homepage",
        iconClass: "size-4",
      });
    }
    if (meta.bugs) {
      const bugUrl = typeof meta.bugs === "string" ? meta.bugs : meta.bugs.url;
      if (bugUrl) {
        list.push({
          tip: "Issue tracker",
          href: bugUrl,
          Icon: BugIcon,
          aria: "Open issue tracker",
          iconClass: "size-5",
        });
      }
    }
    return list;
  })();
</script>

<div class="text-granny-smith-apple/90 max-w-md p-4 py-2 font-medium">
  <SvelteMarkdown source={meta.description ?? ""} />
</div>
<div
  class="px-2 pt-2 py-4 flex justify-between items-center border-t mx-2 border-granny-smith-apple/60"
>
  <div class="grid gap-2">
    {#if meta.license}
      <div class="flex gap-1 items-center">
        <Tooltip tip="SPDX license" placement="top">
          <span class="inline-flex -translate-y-px">
            <ScaleIcon class="size-4" />
          </span>
        </Tooltip>
        <span>
          {meta.license ?? ""}
        </span>
      </div>
    {/if}
    {#if meta.author}
      <div class="text-granny-smith-apple flex items-center gap-2">
        <span>Authored by</span>
        <span class="font-semibold">
          {#if typeof meta.author === "string"}
            {meta.author}
          {:else}
            {meta.author.name}
          {/if}
        </span>
      </div>
    {/if}
    {#if $bundlephobiaQuery.data}
      <div>
        Bundle size
        <span class="font-semibold">
          {($bundlephobiaQuery.data.gzip / 1024).toFixed(1)}kb
        </span>
        (gzipped) |
        <span class="font-semibold">
          {($bundlephobiaQuery.data.size / 1024).toFixed(1)}kb
        </span> (uncompressed)
      </div>
    {/if}
    {#if showOutOfRangeUpgrade && latestOutOfRange}
      <div class="text-granny-smith-apple/80 text-xs">
        Latest version available (out of range):
        <span class="font-semibold">{latestOutOfRange}</span>
      </div>
    {/if}
  </div>
  <div class="flex gap-2 items-center text-lg">
    {#each footerLinks as { tip, href, Icon, aria, iconClass }}
      <Tooltip {tip} placement="top">
        <a
          {href}
          target="_blank"
          class="hover:underline inline-flex"
          rel="noopener noreferrer"
          aria-label={aria}
        >
          <svelte:component this={Icon} class={iconClass} />
        </a>
      </Tooltip>
    {/each}
  </div>
</div>

<script lang="ts">
  import { range } from "rambda";
  import { ChevronLeftIcon, ChevronRightIcon } from "~/lib/icons";
  import { Button } from "~/ui/primitives";
  import Tooltip from "./Tooltip.svelte";

  export let pages = 0;
  export let pageIndex = 0;

  function handlePageClick(e: MouseEvent) {
    const page = (e.currentTarget as HTMLButtonElement).dataset["page"];
    if (page !== undefined) {
      pageIndex = Number(page);
    }
  }

  function handleNextPageClick() {
    if (pageIndex < pages - 1) pageIndex++;
  }

  function handlePreviousPageClick() {
    if (pageIndex > 0) pageIndex--;
  }
</script>

<ul class="inline-flex mx-auto font-medium p-4 py-2 items-center gap-2">
  <li>
    <Tooltip tip="Previous page (← when list focused)" placement="top">
      <Button
        variant="ghost"
        size="lg"
        square
        class="pagination-btn"
        disabled={pageIndex === 0}
        on:click={handlePreviousPageClick}
      >
        <ChevronLeftIcon class="w-4 h-4" />
      </Button>
    </Tooltip>
  </li>
  {#each range(0, pages) as index}
    <li>
      <Tooltip tip={`Page ${index + 1}`} placement="top">
        <Button
          data-page={index}
          variant="ghost"
          size="lg"
          square
          class="pagination-btn text-xl {index === pageIndex
            ? 'bg-castleton-green'
            : ''}"
          on:click={handlePageClick}
        >
          {index + 1}
        </Button>
      </Tooltip>
    </li>
  {/each}
  <li>
    <Tooltip tip="Next page (→ when list focused)" placement="top">
      <Button
        variant="ghost"
        size="lg"
        square
        class="pagination-btn"
        disabled={pageIndex === pages - 1}
        on:click={handleNextPageClick}
      >
        <ChevronRightIcon class="w-4 h-4" />
      </Button>
    </Tooltip>
  </li>
</ul>

<style lang="postcss">
  @reference "../../app.css";

  :global(.pagination-btn) {
    @apply rounded-xl outline-none ring-castleton-green/50 focus:ring-4 disabled:opacity-50;
    @apply min-w-13 border-0 shadow-none bg-transparent hover:bg-white/10;
  }
</style>

<script lang="ts">
  import { range } from "rambda";
  import { ChevronLeftIcon, ChevronRightIcon } from "~/lib/icons";

  export let pages = 0;
  export let pageIndex = 0;

  function handlePageClick(e: MouseEvent) {
    const { page } = (e.target as HTMLLIElement).dataset;

    pageIndex = Number(page);
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
    <button
      class="btn-arrow"
      on:click={handlePreviousPageClick}
      disabled={pageIndex === 0}
    >
      <ChevronLeftIcon class="w-4 h-4" />
    </button>
  </li>
  {#each range(0, pages) as index}
    <li>
      <button
        data-page={index}
        on:click={handlePageClick}
        class="btn-arrow text-xl"
        class:bg-castleton-green={index === pageIndex}
      >
        {index + 1}
      </button>
    </li>
  {/each}
  <li>
    <button
      class="btn-arrow"
      on:click={handleNextPageClick}
      disabled={pageIndex === pages - 1}
    >
      <ChevronRightIcon class="w-4 h-4" />
    </button>
  </li>
</ul>

<style>
  @reference "../../app.css";

  .btn-arrow {
    @apply p-4 px-6 rounded-xl  outline-none ring-castleton-green/50;
    @apply disabled:opacity-50;
    @apply focus:ring-4;
  }
</style>

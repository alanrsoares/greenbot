<div class="layout">
  <main class="layout-content">
    <slot />
  </main>
</div>

<style lang="postcss">
  .layout {
    @apply min-h-screen text-granny-smith-apple pt-12;
  }
  .layout-content {
    @apply grid place-items-center py-12 w-full max-w-xl mx-auto;
  }
</style>

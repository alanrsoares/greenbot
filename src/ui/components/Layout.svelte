<script lang="ts">
  import packageJson from "../../../package.json";
</script>

<div class="layout">
  <header class="border-b border-granny-smith-apple/50 bg-slate-900/60">
    <nav class="max-w-xl w-full m-auto p-4 md:px-2">
      <h1
        class="flex items-center gap-2 md:gap-4 whitespace-nowrap p-2 md:-translate-x-20"
      >
        <div class="w-12">
          <slot name="logo" />
        </div>
        <div>_greenbot</div>
      </h1>
    </nav>
  </header>
  <main class="layout-content">
    <slot />
  </main>
  <footer>
    <div class="max-w-xl m-auto text-center">
      <span class="text-sm">npm-greenbot@v{packageJson.version}</span>
    </div>
  </footer>
</div>

<style lang="postcss">
  .layout {
    @apply min-h-screen text-granny-smith-apple;
  }
  .layout-content {
    @apply grid place-items-center py-12 w-full max-w-xl mx-auto;
  }
</style>

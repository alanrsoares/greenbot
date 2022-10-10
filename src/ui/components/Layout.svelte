<script lang="ts">
  import packageJson from "package.json";
</script>

<div class="layout">
  <header class="border-b border-granny-smith-apple/50 bg-slate-900/60">
    <nav
      class="md:max-w-3xl max-w-xl w-full m-auto p-4 md:px-2 flex justify-between items-center"
    >
      <h1 class="flex items-center gap-2 whitespace-nowrap p-2">
        <div class="w-12">
          <slot name="logo" />
        </div>
        <div>_greenbot</div>
      </h1>
      <slot name="version" />
    </nav>
  </header>
  <main class="layout-main">
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
  .layout-main {
    @apply grid place-items-center py-12 w-full max-w-xl mx-auto;
  }
</style>

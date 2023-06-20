<script lang="ts">
  import packageJson from "package.json";
</script>

<div class="layout">
  <header class="border-b border-granny-smith-apple/50 bg-slate-900/60">
    <nav
      class="md:max-w-3xl max-w-xl w-full m-auto p-4 md:px-2 flex justify-between items-center"
    >
      <h1 class="flex items-center gap-2 whitespace-nowrap p-2 relative group">
        <div class="w-12">
          <slot name="logo" />
        </div>
        <div>_greenbot</div>
        <span
          class="absolute right-2 bottom-2 text-xs font-semibold opacity-[calc(2/3)] text-white group-hover:text-inherit transition-colors"
        >
          v{packageJson.version}
        </span>
      </h1>
      <slot name="version" />
    </nav>
  </header>
  <main class="layout-main">
    <slot />
  </main>
  <footer class="p-12">
    <div class="max-w-xl m-auto text-center">
      <span class="text-sm font-semibold"
        >{packageJson.name}@v{packageJson.version}</span
      >
      <br />
      <a
        href="https://github.com/alanrsoares"
        class="inline-flex gap-1 items-center text-sm opacity-75"
      >
        @alanrsoares
      </a>
    </div>
  </footer>
</div>

<style lang="postcss">
  .layout {
    @apply min-h-screen text-granny-smith-apple flex flex-col;
  }
  .layout-main {
    @apply grid place-items-center py-12 w-full max-w-xl mx-auto flex-1;
  }
</style>

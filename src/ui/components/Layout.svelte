<script lang="ts">
  import packageJson from "../../../package.json";
</script>

<div class="layout">
  <header>
    <nav class="max-w-6xl w-full m-auto p-4">
      <h1
        class="border-b border-granny-smith-apple/50 max-w-min whitespace-nowrap"
      >
        Greenbot <span class="text-xs">v{packageJson.version}</span>
      </h1>
    </nav>
  </header>
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

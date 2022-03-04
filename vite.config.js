import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  optimizeDeps: {
    exclude: ["@sveltestack/svelte-query"],
  },
  resolve: {
    alias: {
      ui: path.resolve("./src/ui"),
      lib: path.resolve("./src/lib"),
      domain: path.resolve("./src/domain"),
    },
  },
});

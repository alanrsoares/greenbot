import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        dev: process.env.NODE_ENV !== "production",
      },
    }),
    tailwindcss(),
    tsconfigPaths(),
  ],
  optimizeDeps: {
    exclude: ["@sveltestack/svelte-query", "svelte-markdown"],
  },
});

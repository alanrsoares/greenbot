import { defineConfig } from "tsup";
import pkg from "./package.json";

export default defineConfig({
  entry: {
    greenbot: "bin/greenbot.ts",
  },
  outDir: "dist/bin",
  format: ["esm"],
  clean: true,
  minify: false,
  sourcemap: true,
  target: "node18",
  shims: true,
  platform: "node",
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies || {}),
  ],
  define: {
    "process.env.GREENBOT_VERSION": JSON.stringify(pkg.version),
    "process.env.GREENBOT_NAME": JSON.stringify(pkg.name),
  },
});

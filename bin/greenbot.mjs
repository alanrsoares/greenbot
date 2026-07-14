#!/usr/bin/env node

import fastify from "fastify";
import path from "path";
import chalk from "chalk";
import open from "open";
import { fileURLToPath } from "url";
import { dirname } from "path";

import {
  GREENBOT_TAG,
  DEFAULT_PORT,
  inferPackageManager,
  renderBox,
  name,
} from "./shared.mjs";

import { registerRoutes } from "./routes.mjs";
import { readPackageJson } from "./utils.mjs";
import { getWorkspaces } from "./workspaces.mjs";
import { runTui } from "./tui.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Parse arguments
const args = process.argv.slice(2);
const runWebMode = args.includes("--web") || args.includes("-w");
const filteredArgs = args.filter((arg) => arg !== "--web" && arg !== "-w");
const PACKAGE_JSON_PATH = filteredArgs[0] || "package.json";

const STATIC_PATH = path.resolve(__dirname, "..", "dist");

const CONTEXT = {
  packageManager: null,
  isMonorepo: false,
  workspaces: null,
  PACKAGE_JSON_PATH,
};

const app = fastify({
  logger: false,
});

// Register plugins
app.register(await import("@fastify/cors"), {
  origin: "*",
});

app.register(await import("@fastify/static"), {
  root: STATIC_PATH,
});

// Register routes
registerRoutes(app, CONTEXT);

const MAX_TRIES = 5;

async function startWebServer(port = DEFAULT_PORT, tries = 0) {
  try {
    await app.listen({ port });
    const url = `http://localhost:${port}`;

    renderBox(
      [
        ...GREENBOT_TAG.map((x) => chalk.green(x)),
        "",
        (ctx) => ctx.center(chalk.bold.yellow(name)),
        "",
        (ctx) => ctx.center(`Started listening at ${chalk.blue(url)}`),
        "",
        (ctx) => ctx.center(`hit ${chalk.yellow("Ctrl+C")} to stop.`),
      ],
      {
        color: chalk.yellow,
        padding: 2,
      },
    );

    open(url).catch(() => {
      console.log(chalk.yellow(`[greenbot] Could not open browser at ${url}`));
    });
  } catch (err) {
    console.log(chalk.red("An error occurred:"), err);
    if (tries < MAX_TRIES) {
      return startWebServer(port + 1, tries + 1);
    }
  }
}

async function main() {
  const packageManager = await inferPackageManager();
  const packageJson = await readPackageJson(PACKAGE_JSON_PATH);
  const workspaces = await getWorkspaces(packageJson, packageManager);

  CONTEXT.workspaces = workspaces;
  CONTEXT.isMonorepo = Boolean(workspaces?.length);
  CONTEXT.packageManager = packageManager;

  if (runWebMode) {
    await startWebServer();
  } else {
    await runTui(CONTEXT);
  }
}

main();

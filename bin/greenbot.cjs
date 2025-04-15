#!/usr/bin/env node

const fastify = require("fastify");
const path = require("path");
const chalk = require("chalk");
const open = require("open");

const {
  GREENBOT_TAG,
  DEFAULT_PORT,
  inferPackageManager,
  renderBox,
  name,
} = require("./shared.cjs");

const registerRoutes = require("./routes.cjs");
const { readPackageJson } = require("./utils.cjs");
const { getWorkspaces } = require("./workspaces.cjs");

const PACKAGE_JSON_PATH =
  process.argv.length === 3 ? process.argv[2] : "package.json";

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
app.register(require("@fastify/cors"), {
  origin: "*",
});

app.register(require("@fastify/static"), {
  root: STATIC_PATH,
});

// Register routes
registerRoutes(app, CONTEXT);

const MAX_TRIES = 5;

async function main(port = DEFAULT_PORT, tries = 0) {
  const packageManager = await inferPackageManager();
  const packageJson = await readPackageJson(PACKAGE_JSON_PATH);
  const workspaces = await getWorkspaces(packageJson, packageManager);

  CONTEXT.workspaces = workspaces;
  CONTEXT.isMonorepo = Boolean(workspaces?.length);
  CONTEXT.packageManager = packageManager;

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
      return main(port + 1, tries + 1);
    }
  }
}

main();

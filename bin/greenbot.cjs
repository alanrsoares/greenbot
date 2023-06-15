#!/usr/bin/env node

const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");
const path = require("path");
const replaceInFile = require("replace-in-file");
const chalk = require("chalk");
const open = require("open");
const fs = require("fs/promises");
const { indexBy, prop } = require("rambda");
const yaml = require("js-yaml");

const {
  GREENBOT_TAG,
  DEFAULT_PORT,
  indexEntries,
  inferPackageManager,
  rawVersion,
  fetchNPMPackageMeta,
  renderBox,
  name,
} = require("./shared.cjs");

const PACKAGE_JSON_PATH =
  process.argv.length === 3 ? process.argv[2] : "package.json";

const STATIC_PATH = path.resolve(__dirname, "..", "dist");

/**
 * readPackageJson - read package.json file
 *
 * @returns {Promise<{dependencies: Record<string, string>; devDependencies?: Record<string,string>; workspaces?: string[]}>}
 */
async function readPackageJson(path = PACKAGE_JSON_PATH) {
  try {
    const raw = await fs.readFile(path, "utf8");
    return JSON.parse(raw);
  } catch (error) {
    return { dependencies: {}, devDependencies: {} };
  }
}

/**
 * @param package {{name: string; version: string; latest: string}}
 */
async function upgradeVersion({ name, version, latest }) {
  const { qualifier } = rawVersion(version);

  await replaceInFile({
    files: PACKAGE_JSON_PATH,
    from: `"${name}": "${version}"`,
    to: `"${name}": "${qualifier}${latest}"`,
  });

  return { name, version, latest: `${qualifier}${latest}` };
}

/**
 *
 * @param packages {Array<{name: string; version: string; latest: string}>}
 * @returns
 */
async function upgradeVersions(packages = []) {
  const values = packages.map(({ name, version, latest }) => ({
    name,
    version,
    latest,
    qualifier: rawVersion(version).qualifier,
  }));

  const from = values.map(({ name, version }) => `"${name}": "${version}"`);
  const to = values.map(
    ({ name, qualifier, latest }) => `"${name}": "${qualifier}${latest}"`
  );

  await replaceInFile({ files: PACKAGE_JSON_PATH, from, to });

  return packages;
}

const app = express();

app
  .use(cors({ origin: "*" }))
  .use(json())
  .use(express.static(STATIC_PATH))
  .get("/info/:name/:version?", async (req, res) => {
    const { name, version } = req.params;
    const result = await fetchNPMPackageMeta(name, version);

    res.json(result);
  })
  .get("/info/:namespace/:name/:version?", async (req, res) => {
    const { namespace, name, version } = req.params;
    const result = await fetchNPMPackageMeta(`${namespace}/${name}`, version);

    res.json(result);
  })
  .get("/package", async (_req, res) => {
    const response = await readPackageJson();

    const dependencyEntries = Object.entries(response.dependencies ?? {});
    const devDependencyEntries = Object.entries(response.devDependencies ?? {});

    const allEntries = [...dependencyEntries, ...devDependencyEntries];

    const promises = allEntries.map(([packageName, version]) =>
      fetchNPMPackageMeta(packageName, version)
    );

    const resolved = await Promise.all(promises);
    const packageManager = await inferPackageManager();

    /**
     * @type {string[]}
     */
    let workspaces = [];

    switch (packageManager) {
      case "yarn":
      case "npm":
        if (response.workspaces) {
          workspaces = response.workspaces;
        }
        break;
      case "pnpm":
        const rawYaml = await fs
          .readFile("pnpm-workspace.yaml", "utf8")
          .catch(() => null);
        if (rawYaml) {
          const parsed = yaml.load(rawYaml);
          workspaces = parsed.packages
            .filter((x) => !x.startsWith("!"))
            .map((x) => x.replace("/*", ""));
        }
        break;
    }

    const indexedWorkspaces = await Promise.all(
      workspaces.map(async (workspace) => {
        const workspacePath = path.resolve(workspace);
        const validSubdirs = await fs
          .readdir(workspacePath, { withFileTypes: true })
          .catch(() => [])
          .then((entries) => entries.filter((entry) => entry.isDirectory()));

        const packages = await Promise.all(
          validSubdirs.map(async (dir) => {
            const packageJsonPath = path.resolve(
              workspacePath,
              dir.name,
              "package.json"
            );

            const { name, version, dependencies, devDependencies } = await fs
              .readFile(packageJsonPath, "utf8")
              .then(JSON.parse);

            return { name, version, dependencies, devDependencies };
          })
        );

        return [workspace, packages];
      })
    ).then((x) =>
      // filter out empty workspaces and transform to object
      Object.fromEntries(x.filter(([_, packages]) => packages.length))
    );

    const isMonorepo = Boolean(workspaces.length);

    res.json({
      ...response,
      resolutions: indexEntries(resolved),
      meta: indexBy(prop("name"), resolved.map(prop("meta"))),
      packageManager,
      isMonorepo,
      workspaces: isMonorepo ? indexedWorkspaces : null,
    });
  })
  .post("/upgrade", async (req, res) => {
    const { name, version, latest } = req.body;
    const result = await upgradeVersion({ name, version, latest });

    res.json(result);
  })
  .post("/upgrade-packages", async (req, res) => {
    const packages = req.body;

    const result = await upgradeVersions(packages);

    res.json(result);
  });

const MAX_TRIES = 5;

function tryListen(port, tries = 0) {
  app.listen(port, (err) => {
    if (err) {
      console.log(chalk.red("An error occurred:"), err);
      if (tries < MAX_TRIES) {
        return tryListen(port + 1, tries + 1);
      }
      return;
    }

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
      }
    );

    open(url).catch(() => {
      console.log(chalk.yellow(`[greenbot] Could not open browser at ${url}`));
    });
  });
}

tryListen(DEFAULT_PORT);

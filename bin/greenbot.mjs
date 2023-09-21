#!/usr/bin/env node

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { resolve } from "path";
import replaceInFile from "replace-in-file";
import chalk from "chalk";
import open from "open";
import { readFile, readdir } from "fs/promises";
import { indexBy, prop } from "rambda";
import { load } from "js-yaml";

import {
  GREENBOT_TAG,
  DEFAULT_PORT,
  indexEntries,
  inferPackageManager,
  rawVersion,
  fetchNPMPackageMeta,
  renderBox,
  packageName,
} from "./shared.mjs";

const PACKAGE_JSON_PATH =
  process.argv.length === 3 ? process.argv[2] : "package.json";

const STATIC_PATH = resolve(process.cwd(), "..", "dist");

const CONTEXT = {
  packageManager: null,
  isMonorepo: false,
  workspaces: null,
};

/**
 * readPackageJson - read package.json file
 *
 * @returns {Promise<{dependencies: Record<string, string>; devDependencies?: Record<string,string>; workspaces?: string[]}>}
 */
async function readPackageJson(path = PACKAGE_JSON_PATH) {
  try {
    const raw = await readFile(path, "utf8");
    return JSON.parse(raw);
  } catch (error) {
    return { dependencies: {}, devDependencies: {} };
  }
}

/**
 * @param package {{name: string; version: string; latest: string}}
 */
async function upgradeVersion(
  { name, version, latest },
  path = PACKAGE_JSON_PATH
) {
  const { qualifier } = rawVersion(version);

  await replaceInFile({
    files: path,
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
async function upgradeVersions(packages = [], path = PACKAGE_JSON_PATH) {
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

  await replaceInFile({ files: path, from, to });

  return packages;
}

const app = express();

const gePackageJsonPath = ({ path = "" }) =>
  !path || path === PACKAGE_JSON_PATH
    ? PACKAGE_JSON_PATH
    : `${path}/package.json`;

app
  .use(cors({ origin: "*" }))
  .use(bodyParser.json())
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
  .get("/workspaces", async (_, res) => {
    res.json(CONTEXT.isMonorepo ? CONTEXT.workspaces : null);
  })
  .get("/package", async (req, res) => {
    const packageJsonPath = gePackageJsonPath(req.query);

    const response = await readPackageJson(packageJsonPath);

    const dependencyEntries = Object.entries(response.dependencies ?? {});
    const devDependencyEntries = Object.entries(response.devDependencies ?? {});

    const allEntries = [...dependencyEntries, ...devDependencyEntries];

    const promises = allEntries.map(([packageName, version]) =>
      fetchNPMPackageMeta(packageName, version)
    );

    const resolved = await Promise.all(promises);

    res.json({
      ...response,
      resolutions: indexEntries(resolved),
      meta: indexBy(prop("name"), resolved.map(prop("meta"))),
      packageManager: CONTEXT.packageManager,
      isMonorepo: CONTEXT.isMonorepo,
      workspaces: CONTEXT.isMonorepo ? CONTEXT.workspaces : null,
    });
  })
  .post("/upgrade", async (req, res) => {
    const { name, version, latest } = req.body;
    const packageJsonPath = gePackageJsonPath(req.query);

    const result = await upgradeVersion(
      { name, version, latest },
      packageJsonPath
    );

    res.json(result);
  })
  .post("/upgrade-packages", async (req, res) => {
    const { packages, path } = req.body;
    const packageJsonPath = gePackageJsonPath({ path });

    const result = await upgradeVersions(packages, packageJsonPath);

    res.json(result);
  });

const MAX_TRIES = 5;

async function main(port, tries = 0) {
  const packageManager = await inferPackageManager();
  const response = await readPackageJson();

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
      const rawYaml = await readFile("pnpm-workspace.yaml", "utf8").catch(
        () => null
      );
      if (rawYaml) {
        const parsed = load(rawYaml);
        workspaces = parsed.packages
          .filter((x) => !x.startsWith("!"))
          .map((x) => x.replace("/*", ""));
      }
      break;
  }

  const deepWorkspaces = await Promise.all(
    workspaces.map(async (workspace) => {
      const workspacePath = resolve(workspace);
      const validSubdirs = await readdir(workspacePath, { withFileTypes: true })
        .catch(() => [])
        .then((entries) => entries.filter((entry) => entry.isDirectory()));

      const packageNames = await Promise.all(
        validSubdirs.map(async (dir) => {
          const packageJsonPath = resolve(
            workspacePath,
            dir.name,
            "package.json"
          );

          const { name, version } = await readFile(
            packageJsonPath,
            "utf8"
          ).then(JSON.parse);

          return { name, version, dir: dir.name };
        })
      );

      return [workspace, packageNames];
    })
  );

  const flatWorkspaces = deepWorkspaces
    .filter(([_, packages]) => packages.length)
    .flatMap(([workspace, packages]) =>
      packages.map((p) => ({
        path: `${workspace}/${p.dir}`,
        name: p.name,
        version: p.version,
      }))
    );

  CONTEXT.workspaces = flatWorkspaces;
  CONTEXT.isMonorepo = Boolean(workspaces?.length);
  CONTEXT.packageManager = packageManager;

  app.listen(port, (err) => {
    if (err) {
      console.log(chalk.red("An error occurred:"), err);
      if (tries < MAX_TRIES) {
        return main(port + 1, tries + 1);
      }
      return;
    }

    const url = `http://localhost:${port}`;

    renderBox(
      [
        ...GREENBOT_TAG.map((x) => chalk.green(x)),
        "",
        (ctx) => ctx.center(chalk.bold.yellow(packageName)),
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

main(DEFAULT_PORT);

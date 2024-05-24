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

/**
 * @typedef {Object} PackageJsonContent
 * @property {Record<string, string>} dependencies
 * @property {Record<string, string>} [devDependencies]
 * @property {string[]} [workspaces]
 */

/**
 * @typedef {Object} PackageVersionInfo
 * @property {string} name
 * @property {string} version
 * @property {string} latest
 */

/**
 * @typedef {Object} PackageMetaInfo
 * @property {string} name
 * @property {string} version
 * @property {string} latest
 * @property {any} meta
 */

const PACKAGE_JSON_PATH =
  process.argv.length === 3 ? process.argv[2] : "package.json";

const STATIC_PATH = path.resolve(__dirname, "..", "dist");

const CONTEXT = {
  packageManager: null,
  isMonorepo: false,
  workspaces: null,
};

/**
 * readPackageJson - read package.json file
 *
 * @returns {Promise<PackageJsonContent>}
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
 * upgradeVersion - upgrade version in package.json
 *
 * @param package {PackageVersionInfo}
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

function getWorkspaces() {
  return CONTEXT.isMonorepo ? CONTEXT.workspaces : [];
}

/**
 * upgradeVersions - upgrade versions in package.json
 *
 * @param packages {PackageVersionInfo[]}
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
  .get("/workspaces", async (_, res) => {
    res.json(CONTEXT.isMonorepo ? CONTEXT.workspaces : null);
  })
  .get("/package", async (req, res) => {
    const packageJsonPath = gePackageJsonPath(req.query);
    const selectedTab = String(req.query.tab);

    const response = await readPackageJson(packageJsonPath);

    const dependencyEntries = Object.entries(response.dependencies ?? {});
    const devDependencyEntries = Object.entries(response.devDependencies ?? {});

    const allEntries =
      selectedTab === "dependencies" ? dependencyEntries : devDependencyEntries;

    const promises = allEntries.map(([packageName, version]) =>
      fetchNPMPackageMeta(packageName, version)
    );

    /**
     * @type {PackageMetaInfo[]}
     */
    const resolved = await new Promise(async (resolve) => {
      // resolve promises in chunks of 10
      const result = [];
      const chunkSize = 10;
      const chunks = Math.ceil(promises.length / chunkSize);

      if (!promises.length) {
        return resolve([]);
      }

      for (let i = 0; i < chunks; i++) {
        const chunk = promises.slice(i * chunkSize, (i + 1) * chunkSize);

        const chunkresult = await Promise.all(chunk);

        result.push(...chunkresult);

        if (result.length === promises.length) {
          resolve(result);
        }
      }
    });

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
    case "bun":
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

  const deepWorkspaces = await Promise.all(
    workspaces.map(async (workspace) => {
      const workspacePath = path.resolve(workspace);
      const validSubdirs = await fs
        .readdir(workspacePath, { withFileTypes: true })
        .catch(() => [])
        .then((entries) => entries.filter((entry) => entry.isDirectory()));

      const packageNames = await Promise.all(
        validSubdirs.map(async (dir) => {
          const packageJsonPath = path.resolve(
            workspacePath,
            dir.name,
            "package.json"
          );

          const { name, version } = await fs
            .readFile(packageJsonPath, "utf8")
            .then(JSON.parse);

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

main(DEFAULT_PORT);

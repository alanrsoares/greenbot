#!/usr/bin/env node

const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");
const path = require("path");
const packageJson = require("package-json");
const replaceInFile = require("replace-in-file");
const chalk = require("chalk");
const open = require("open");
const fs = require("fs/promises");
const { indexBy, prop } = require("rambda");
const yaml = require("js-yaml");

const { version } = require("../package.json");

const PACKAGE_LOCK_FILES = ["yarn.lock", "package-lock.json", "pnpm-lock.yaml"];

/**
 * getPackageManager - infer package manager
 * @returns {Promise<"yarn" | "npm" | "pnpm">}
 */
async function getPackageManager() {
  const [hasYarnLock, hasPackageLock, hasPnpmLock] = await Promise.all(
    PACKAGE_LOCK_FILES.map((file) =>
      fs.readFile(file, "utf8").catch(() => false)
    )
  );

  if (hasYarnLock) return "yarn";
  if (hasPackageLock) return "npm";
  if (hasPnpmLock) return "pnpm";

  return "npm";
}

/**
 * indexEntries - index entries by name
 *
 * @param xs {{name:string; latest:string;}[]}
 * @returns {Record<string,string>}
 */
const indexEntries = (xs) =>
  xs.reduce((acc, { name, latest }) => ({ ...acc, [name]: latest }), {});

/**
 * rawVersion - extract version and qualifier from version string
 *
 * @param version {string}
 * @returns {{version:string; qualifier: string | undefined}}
 */
const rawVersion = (version) => ({
  version: version.replace(/[\^~]/, ""),
  qualifier: isNaN(Number(version[0])) ? version[0] : undefined,
});

const PACKAGE_JSON_PATH =
  process.argv.length === 3 ? process.argv[2] : "package.json";

const DEFAULT_PORT = 5001;

/**
 * readPackageJson - read package.json file
 *
 * @returns {Promise<{dependencies: Record<string, string>; devDependencies?: Record<string,string>; workspaces?: string[]}>}
 */
async function readPackageJson() {
  try {
    const raw = await fs.readFile(PACKAGE_JSON_PATH, "utf8");
    return JSON.parse(raw);
  } catch (error) {
    return { dependencies: {}, devDependencies: {} };
  }
}

const STATIC = path.resolve(__dirname, "..", "dist");

/**
 * fetchNPMPackageMeta - fetch package.json from npm
 *
 * @param name {string}
 * @param version {string}
 * @returns {Promise<{name:string; version: string; latest: string, latestOutOfRange: string, meta: import("package-json").FullMetadata}>}
 */
const fetchNPMPackageMeta = async (name, version = "latest") => {
  try {
    const options = { version, fullMetadata: true };

    const [{ version: latest, ...meta }, outOfRange] = await Promise.all([
      packageJson(name, options),
      packageJson(name, { ...options, version: "latest" }),
    ]);

    return {
      name,
      version,
      latest,
      meta,
      latestOutOfRange: outOfRange.version,
    };
  } catch (error) {
    console.log(
      chalk.red(`[greenbot] Could not fetch latest version for ${name}`)
    );

    return {
      name,
      version,
      latest: version,
    };
  }
};

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
  .use(express.static(STATIC))
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
    const packageManager = await getPackageManager();

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
        const subfolders = await fs.readdir(workspacePath).catch(() => []);

        const packages = await Promise.all(
          subfolders.map(async (folder) => {
            const packageJsonPath = path.resolve(
              workspacePath,
              folder,
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
  .get("/packages", async (_req, res) => {
    const { dependencies, devDependencies } = await readPackageJson();
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

    console.log(
      chalk.green(`
 8""""8                        8""""8               
 8    " eeeee  eeee eeee eeeee 8    8   eeeee eeeee 
 8e     8   8  8    8    8   8 8eeee8ee 8  88   8   
 88  ee 8eee8e 8eee 8eee 8e  8 88     8 8   8   8e  
 88   8 88   8 88   88   88  8 88     8 8   8   88  
 88eee8 88   8 88ee 88ee 88  8 88eeeee8 8eee8   88
 =========================================== v${version}
`),
      `Started listening at ${chalk.blue(url)}`,
      "\r\n\n",
      `hit ${chalk.yellow("Ctrl+C")} to stop.\n`
    );

    open(url).catch(() => {
      console.log(chalk.yellow(`[greenbot] Could not open browser at ${url}`));
    });
  });
}

tryListen(DEFAULT_PORT);

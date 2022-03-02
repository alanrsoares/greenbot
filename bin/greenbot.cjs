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

const { version } = require("../package.json");

/**
 *
 * @param xs {{name:string; latest:string;}[]}
 * @returns {Record<string,string>}
 */
const indexEntries = (xs) =>
  xs.reduce((acc, { name, latest }) => ({ ...acc, [name]: latest }), {});

/**
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
 * @returns {Promise<{dependencies: Record<string, string>; devDependencies?: Record<string,string>}>}
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
 * @param name {string}
 * @param version {string}
 * @returns {Promise<{name:string; version: string; latest: string}>}
 */
const fetchLatestVersion = async (name, version) => {
  try {
    const { version: latest } = await packageJson(
      name,
      version ? { version } : undefined
    );

    return {
      name,
      version,
      latest,
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
    const result = await fetchLatestVersion(name, version);

    res.json(result);
  })
  .get("/info/:namespace/:name/:version?", async (req, res) => {
    const { namespace, name, version } = req.params;
    const result = await fetchLatestVersion(`${namespace}/${name}`, version);

    res.json(result);
  })
  .get("/package", async (_req, res) => {
    const { dependencies, devDependencies, ...file } = await readPackageJson();

    const response = { dependencies, devDependencies, ...file };

    const dependencyEntries = Object.entries(dependencies || {});
    const devDependencyEntries = Object.entries(devDependencies || {});

    const allEntries = [...dependencyEntries, ...devDependencyEntries];

    const promises = allEntries.map(([packageName, version]) =>
      fetchLatestVersion(packageName, version)
    );

    const resolved = await Promise.all(promises);

    res.json({
      ...response,
      resolutions: indexEntries(resolved),
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
      `Started listening at ${url}`
    );

    open(url).catch(() => {});
  });
}

tryListen(DEFAULT_PORT);

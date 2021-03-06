#!/usr/bin/env node

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const packageJson = require("package-json");
const replace = require("replace-in-file");
const chalk = require("chalk");
const open = require("open");
const fs = require("fs").promises;

const indexEntries = xs =>
  xs.reduce(
    (acc, { name, latest }) => ({
      ...acc,
      [name]: latest
    }),
    {}
  );

const rawVersion = version => ({
  version: version.replace(/[\^~]/, ""),
  qualifier: isNaN(Number(version[0])) ? version[0] : undefined
});

const PACKAGE_JSON_PATH =
  process.argv.length === 3 ? process.argv[2] : "package.json";

const DEFAULT_PORT = 5001;

const readPackageJson = async () => {
  const raw = await fs.readFile(PACKAGE_JSON_PATH, "utf8");

  return JSON.parse(raw);
};

const STATIC = path.resolve(__dirname, "..", "build");

const fetchLatestVersion = async (name, version) => {
  const { version: latest } = await packageJson(
    name,
    version ? { version } : undefined
  );

  return { name, version, latest };
};

const upgradeVersion = async ({ name, version, latest }) => {
  const { qualifier } = rawVersion(version);

  await replace({
    files: PACKAGE_JSON_PATH,
    from: `"${name}": "${version}"`,
    to: `"${name}": "${qualifier}${latest}"`
  });

  return { name, version, latest };
};

const app = express();

app.use(bodyParser.json());
app.use(express.static(STATIC));

app.get("/info/:name/:version?", async (req, res) => {
  const { name, version } = req.params;
  const result = await fetchLatestVersion(name, version);

  res.json(result);
});

app.get("/info/:namespace/:name/:version?", async (req, res) => {
  const { namespace, name, version } = req.params;
  const result = await fetchLatestVersion(`${namespace}/${name}`, version);

  res.json(result);
});

app.get("/package", async (_req, res) => {
  const { dependencies, devDependencies, ...file } = await readPackageJson();

  const response = { dependencies, devDependencies, ...file };

  const dependencyEntries = Object.entries(dependencies || {});
  const devDependencyEntries = Object.entries(devDependencies || {});

  const allEntries = [...dependencyEntries, ...devDependencyEntries];

  const promises = allEntries.map(([packageName, version]) =>
    fetchLatestVersion(packageName, version)
  );

  const resolved = await Promise.all(promises);

  res.json({ ...response, resolutions: indexEntries(resolved) });
});

app.post("/upgrade", async (req, res) => {
  const { name, version, latest } = req.body;
  const result = upgradeVersion({ name, version, latest });

  res.json(result);
});

const MAX_TRIES = 5;

const tryListen = (port, tries = 0) => {
  app.listen(port, err => {
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

`),
      `Started listening at ${url}`
    );

    open(url).catch(() => {});
  });
};

tryListen(DEFAULT_PORT);

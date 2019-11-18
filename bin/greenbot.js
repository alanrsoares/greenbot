#!/usr/bin/env node

const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const packageJson = require("package-json");
const replace = require("replace-in-file");

const rawVersion = version => ({
  version: version.replace(/[\^~]/, ""),
  qualifier: isNaN(Number(version[0])) ? version[0] : undefined
});

const PACKAGE_JSON_PATH =
  process.argv.length === 3 ? process.argv[2] : "package.json";

const DEFAULT_PORT = 5001;

let PACKAGE_JSON_FILE = JSON.parse(fs.readFileSync(PACKAGE_JSON_PATH, "utf8"));

const STATIC = path.resolve(__dirname, "..", "build");

const getLatestVersion = async (name, version, res) => {
  const { version: latest } = await packageJson(
    name,
    version ? { version } : undefined
  );

  PACKAGE_JSON_FILE = JSON.parse(fs.readFileSync(PACKAGE_JSON_PATH, "utf8"));

  res.json({ name, version, latest });
};

const upgradeVersion = async ({ name, version, latest }, res) => {
  const { qualifier } = rawVersion(version);

  await replace({
    files: PACKAGE_JSON_PATH,
    from: `"${name}": "${version}"`,
    to: `"${name}": "${qualifier}${latest}"`
  });

  res.json({ name, version, latest });
};

const app = express();

app.use(bodyParser.json());
app.use(express.static(STATIC));

app.get("/info/:name/:version?", async (req, res) => {
  const { params } = req;
  await getLatestVersion(params.name, params.version, res);
});

app.get("/info/:namespace/:name/:version?", async (req, res) => {
  const { params } = req;
  await getLatestVersion(
    `${params.namespace}/${params.name}`,
    params.version,
    res
  );
});

app.get("/package", (_req, res) => res.json(PACKAGE_JSON_FILE));

app.post("/upgrade", (req, res) => {
  const { name, version, latest } = req.body;

  const info = { name, version, latest };

  upgradeVersion(info, res);
});

const tryListen = (port, tries = 0) => {
  app.listen(port, err => {
    if (err) {
      console.log(`An error occurred:`, err);

      if (tries < 3) {
        return tryListen(port + 1, tries + 1);
      }
      return;
    }

    console.log(`Server started listening at http://localhost:${port}`);
  });
};

tryListen(DEFAULT_PORT);

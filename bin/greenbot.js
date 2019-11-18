#!/usr/bin/env node

const express = require("express");
const fs = require("fs");
const path = require("path");
const packageJson = require("package-json");

const FILE_PATH = process.argv.length === 3 ? process.argv[2] : "package.json";

const FILE = JSON.parse(fs.readFileSync(FILE_PATH, "utf8"));

const DEFAULT_PORT = 5001;

const app = express();

const STATIC = path.resolve(__dirname, "..", "build");

const getLatestVersion = async (name, version, res) => {
  const { version: latest } = await packageJson(
    name,
    version ? { version } : undefined
  );

  res.json({ name, version, latest });
};

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

app.get("/package", (_req, res) => res.json(FILE));

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

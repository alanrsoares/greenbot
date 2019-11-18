const express = require("express");
const fs = require("fs");
const path = require("path");
const package = require("package-json");

const FILE_PATH = process.argv.length === 3 ? process.argv[2] : "package.json";

const FILE = JSON.parse(fs.readFileSync(FILE_PATH, "utf8"));

const DEFAULT_PORT = 5001;

const app = express();

app.use(express.static(path.resolve(__dirname, "build")));

app.get("/info/:name/:version?", async (req, res) => {
  const { name, version } = req.params;

  const result = await package(
    name,
    version ? { version: version } : undefined
  );

  res.json({ name, version, latest: result.version });
});

app.get("/info/:namespace/:name/:version?", async (req, res) => {
  const { namespace, name, version } = req.params;

  const result = await package(
    `${namespace}/${name}`,
    version ? { version: version } : undefined
  );

  res.json({ name, version, latest: result.version });
});

app.get("/package", (_req, res) => res.json(FILE));

app.listen(DEFAULT_PORT, err => {
  if (err) {
    console.log(`An error occurred:`, err);
    return;
  }

  console.log(`Server started listening at http://localhost:${DEFAULT_PORT}`);
});

const fs = require("fs/promises");
const stripAnsi = require("strip-ansi");
const chalk = require("chalk");
const packageJson = require("package-json");

const { version, name } = require("../package.json");

const vTag = chalk.cyan(`v${version}`);

const GREENBOT_TAG = `
░██████╗░██████╗░███████╗███████╗███╗░░██╗██████╗░░█████╗░████████╗
██╔════╝░██╔══██╗██╔════╝██╔════╝████╗░██║██╔══██╗██╔══██╗╚══██╔══╝
██║░░██╗░██████╔╝█████╗░░█████╗░░██╔██╗██║██████╦╝██║░░██║░░░██║░░░
██║░░╚██╗██╔══██╗██╔══╝░░██╔══╝░░██║╚████║██╔══██╗██║░░██║░░░██║░░░
╚██████╔╝██║░░██║███████╗███████╗██║░╚███║██████╦╝╚█████╔╝░░░██║░░░
░╚═════╝░╚═╝░░╚═╝╚══════╝╚══════╝╚═╝░░╚══╝╚═════╝░░╚════╝░░░░╚═╝░░░
═══════════════════════════════════════════════════════════ ${vTag}`
  .trim()
  .split("\n");

const DEFAULT_PORT = 5001;

const PACKAGE_LOCK_FILES = [
  { file: "yarn.lock", name: "yarn" },
  { file: "package-lock.json", name: "npm" },
  { file: "pnpm-lock.yaml", name: "pnpm" },
  { file: "bun.lock", name: "bun" },
];

const REPOSITORY_URL = "https://github.com/alanrsoares/greenbot";

const pad = (n = 0, char = " ") => char.repeat(n);

/**
 * inferPackageManager - infer package manager
 *
 * @returns {Promise<"yarn" | "npm" | "pnpm" | "bun">}
 */
async function inferPackageManager() {
  const responses = await Promise.all(
    PACKAGE_LOCK_FILES.map(({ file, name }) =>
      fs
        .readFile(file, "utf8")
        .then(() => ({
          exists: true,
          name,
        }))
        .catch(() => false)
    )
  );

  const manager = responses.find((r) => r.exists);

  return manager?.name ?? "npm";
}

/**
 *
 * @param {(string | (ctx: { center: (str: string) => string }) => string)[]} lines
 */
function renderBox(lines = [], { color = chalk.green, padding = 1 } = {}) {
  const maxLineLength = lines.reduce(
    (max, line) => Math.max(max, stripAnsi(line).length),
    0
  );

  const maxLength = maxLineLength + padding * 2;

  const [tr, tl, br, bl, h, v] = [
    color("╗"),
    color("╔"),
    color("╝"),
    color("╚"),
    color("═"),
    color("║"),
  ];

  const border = h.repeat(maxLength);

  const py = `\n${v}${pad(maxLength)}${v}`.repeat(padding / 2);

  console.log(`
${tl}${border}${tr}${py}
${lines
  .map((line) => {
    const [short, long] = [maxLength, stripAnsi(line).length].sort();

    const padX = pad(padding);
    const rPad = long === short ? 0 : long - short - padding * 2;

    const withBounds = (str = "") => `${v}${padX}${str}${padX}${v}`;

    if (typeof line === "function") {
      function center(str = "") {
        const len = stripAnsi(str).length;
        const raw = (maxLength - padding * 2 - len) / 2;
        const [padL, padR] = [Math.floor, Math.ceil].map((f) => pad(f(raw)));

        return `${padL}${str}${padR}`;
      }
      return withBounds(`${line({ center })}`);
    }
    return withBounds(`${line}${pad(Math.max(rPad, 0))}`);
  })
  .join("\n")}${py}
${bl}${border}${br}`);
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

const isNumber = (n) => !isNaN(Number(n));

/*
 * isValidSemVer - check if version is a valid semver
 *
 * @param version {string} - version string
 * @returns {boolean} - true if valid semver
 */
const isValidSemVer = (version = "") => {
  const raw = rawVersion(version);
  return (
    raw.version.split(".").length === 3 &&
    raw.version.split(".").every(isNumber)
  );
};

/**
 * fetchNPMPackageMeta - fetch package.json from npm
 *
 * @param name {string}
 * @param version {string}
 * @returns {Promise<{name:string; version: string; latest: string, latestOutOfRange: string, meta: import("package-json").FullMetadata}>}
 */
const fetchNPMPackageMeta = async (name, version = "latest") => {
  if (!isValidSemVer(version)) {
    return {
      name,
      version,
      latest: version,
    };
  }
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

module.exports = {
  GREENBOT_TAG,
  DEFAULT_PORT,
  REPOSITORY_URL,
  PACKAGE_LOCK_FILES,
  version,
  inferPackageManager,
  renderBox,
  pad,
  version,
  name,
  indexEntries,
  rawVersion,
  fetchNPMPackageMeta,
};

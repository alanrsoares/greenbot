const fs = require("fs/promises");
const replaceInFile = require("replace-in-file");
const { rawVersion } = require("./shared.cjs");

/**
 * readPackageJson - read package.json file
 *
 * @param {string} path - Path to package.json
 * @returns {Promise<PackageJsonContent>}
 */
async function readPackageJson(path) {
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
 * @param {PackageVersionInfo} package - Package version info
 * @param {string} path - Path to package.json
 */
async function upgradeVersion({ name, version, latest }, path) {
  const { qualifier } = rawVersion(version);

  await replaceInFile({
    files: path,
    from: `"${name}": "${version}"`,
    to: `"${name}": "${qualifier}${latest}"`,
  });

  return { name, version, latest: `${qualifier}${latest}` };
}

/**
 * upgradeVersions - upgrade versions in package.json
 *
 * @param {PackageVersionInfo[]} packages - Array of package version info
 * @param {string} path - Path to package.json
 */
async function upgradeVersions(packages = [], path) {
  const values = packages.map(({ name, version, latest }) => ({
    name,
    version,
    latest,
    qualifier: rawVersion(version).qualifier,
  }));

  const from = values.map(({ name, version }) => `"${name}": "${version}"`);
  const to = values.map(
    ({ name, qualifier, latest }) => `"${name}": "${qualifier}${latest}"`,
  );

  await replaceInFile({ files: path, from, to });

  return packages;
}

module.exports = {
  readPackageJson,
  upgradeVersion,
  upgradeVersions,
};

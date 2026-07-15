import fs from "fs/promises";
import replaceInFile from "replace-in-file";
import { rawVersion } from "./shared.mjs";

/** @typedef {import("./types").PackageJsonContent} PackageJsonContent */
/** @typedef {import("./types").PackageVersionInfo} PackageVersionInfo */

/**
 * readPackageJson - read package.json file
 *
 * @param {string} path - Path to package.json
 * @returns {Promise<PackageJsonContent>}
 */
export async function readPackageJson(path) {
  try {
    const raw = await fs.readFile(path, "utf8");
    return JSON.parse(raw);
  } catch (error) {
    return { dependencies: {}, devDependencies: {} };
  }
}

/**
 * upgradeVersions - upgrade versions in package.json (handling catalog redirects)
 *
 * @param {PackageVersionInfo[]} packages - Array of package version info
 * @param {string} workspacePath - Path to package.json
 * @param {string} [rootPackageJsonPath] - Path to root package.json
 */
export async function upgradeVersions(
  packages = [],
  workspacePath,
  rootPackageJsonPath,
) {
  const catalogPackages = packages.filter((pkg) => pkg.isCatalog);
  const localPackages = packages.filter((pkg) => !pkg.isCatalog);

  if (catalogPackages.length > 0 && rootPackageJsonPath) {
    const values = catalogPackages.map((pkg) => {
      // Use resolvedVer (the actual catalog range version, e.g. 0.2.3)
      const ver = pkg.resolvedVer || pkg.version || "";
      return {
        name: pkg.name,
        version: ver,
        latest: pkg.latest,
        qualifier: rawVersion(ver).qualifier || "",
      };
    });

    const from = values.map(({ name, version }) => `"${name}": "${version}"`);
    const to = values.map(
      ({ name, qualifier, latest }) => `"${name}": "${qualifier}${latest}"`,
    );

    await replaceInFile({ files: rootPackageJsonPath, from, to });
  }

  if (
    localPackages.length > 0 &&
    workspacePath &&
    workspacePath !== "catalog"
  ) {
    const values = localPackages.map(({ name, version, latest }) => ({
      name,
      version,
      latest,
      qualifier: rawVersion(version).qualifier || "",
    }));

    const from = values.map(({ name, version }) => `"${name}": "${version}"`);
    const to = values.map(
      ({ name, qualifier, latest }) => `"${name}": "${qualifier}${latest}"`,
    );

    await replaceInFile({ files: workspacePath, from, to });
  }

  return packages;
}

/**
 * upgradeVersion - upgrade version in package.json
 *
 * @param {PackageVersionInfo} pkg - Package version info
 * @param {string} path - Path to package.json
 */
export async function upgradeVersion({ name, version, latest }, path) {
  const { qualifier } = rawVersion(version);

  await replaceInFile({
    files: path,
    from: `"${name}": "${version}"`,
    to: `"${name}": "${qualifier}${latest}"`,
  });

  return { name, version, latest: `${qualifier}${latest}` };
}

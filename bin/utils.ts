import fs from "fs/promises";
import replaceInFile from "replace-in-file";
import { rawVersion } from "./shared";
import type { PackageJsonContent, PackageVersionInfo } from "./types";

/**
 * readPackageJson - read package.json file
 *
 * @param path - Path to package.json
 * @returns parsed PackageJsonContent
 */
export async function readPackageJson(
  path: string,
): Promise<PackageJsonContent> {
  try {
    const raw = await fs.readFile(path, "utf8");
    return JSON.parse(raw) as PackageJsonContent;
  } catch (error) {
    return { dependencies: {}, devDependencies: {} };
  }
}

/**
 * upgradeVersions - upgrade versions in package.json (handling catalog redirects)
 *
 * @param packages - Array of package version info
 * @param workspacePath - Path to package.json
 * @param rootPackageJsonPath - Path to root package.json
 */
export async function upgradeVersions(
  packages: PackageVersionInfo[] = [],
  workspacePath: string,
  rootPackageJsonPath?: string,
): Promise<PackageVersionInfo[]> {
  const catalogPackages = packages.filter((pkg) => pkg.isCatalog);
  const localPackages = packages.filter((pkg) => !pkg.isCatalog);

  if (catalogPackages.length > 0 && rootPackageJsonPath) {
    const values = catalogPackages.map((pkg) => {
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
 * @param pkg - Package version info
 * @param path - Path to package.json
 */
export async function upgradeVersion(
  { name, version, latest }: PackageVersionInfo,
  path: string,
): Promise<PackageVersionInfo> {
  const { qualifier } = rawVersion(version);

  await replaceInFile({
    files: path,
    from: `"${name}": "${version}"`,
    to: `"${name}": "${qualifier}${latest}"`,
  });

  return { name, version, latest: `${qualifier}${latest}` };
}

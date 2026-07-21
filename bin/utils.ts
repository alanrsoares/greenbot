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
    const packagesByWorkspace: Record<string, PackageVersionInfo[]> = {};
    for (const pkg of localPackages) {
      const targetPath = pkg.workspacePath || workspacePath;
      if (targetPath && targetPath !== "catalog" && targetPath !== "all") {
        if (!packagesByWorkspace[targetPath]) {
          packagesByWorkspace[targetPath] = [];
        }
        packagesByWorkspace[targetPath].push(pkg);
      }
    }

    for (const [pkgPath, pkgs] of Object.entries(packagesByWorkspace)) {
      const values = pkgs.map(({ name, version, latest }) => ({
        name,
        version,
        latest,
        qualifier: rawVersion(version).qualifier || "",
      }));

      const from = values.map(({ name, version }) => `"${name}": "${version}"`);
      const to = values.map(
        ({ name, qualifier, latest }) => `"${name}": "${qualifier}${latest}"`,
      );

      await replaceInFile({ files: pkgPath, from, to });
    }
  }

  return packages;
}

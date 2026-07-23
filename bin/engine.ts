import replaceInFile from "replace-in-file";
import { rawVersion } from "./shared";
import type { PackageVersionInfo } from "./types";
import type { PackageMetaResolved } from "./analysis";

export interface UpgradePlan {
  packagesToUpgrade: PackageVersionInfo[];
}

export function buildUpgradePlan(
  resolvedPackages: PackageMetaResolved[],
  selectedPackageNames?: string[],
  useMajor = false,
): UpgradePlan {
  const filtered = selectedPackageNames
    ? resolvedPackages.filter((pkg) => selectedPackageNames.includes(pkg.name))
    : resolvedPackages;

  const packagesToUpgrade: PackageVersionInfo[] = filtered.map((pkg) => ({
    name: pkg.name,
    version: pkg.ver,
    resolvedVer: pkg.resolvedVer,
    isCatalog: pkg.isCatalog,
    latest: useMajor ? pkg.latestOutOfRange || pkg.latest : pkg.latest,
    workspacePath: pkg.workspacePath,
  }));

  return { packagesToUpgrade };
}

export async function executeUpgradePlan(
  plan: UpgradePlan,
  workspacePath: string,
  rootPackageJsonPath?: string,
): Promise<PackageVersionInfo[]> {
  const packages = plan.packagesToUpgrade;
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

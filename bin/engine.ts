import replaceInFile from "replace-in-file";
import { formatUpdatedSpecifier } from "./shared";
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
    ? resolvedPackages.filter(
        (pkg) =>
          selectedPackageNames.includes(pkg.name) ||
          selectedPackageNames.includes(`${pkg.workspacePath}:${pkg.name}`),
      )
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
      const origVer = pkg.resolvedVer || pkg.version || "";
      const updatedVer = formatUpdatedSpecifier(origVer, pkg.latest);
      return {
        name: pkg.name,
        fromStr: `"${pkg.name}": "${origVer}"`,
        toStr: `"${pkg.name}": "${updatedVer}"`,
      };
    });

    const from = values.map((v) => v.fromStr);
    const to = values.map((v) => v.toStr);

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
      const values = pkgs.map((pkg) => {
        const origVer = pkg.version || "";
        const updatedVer = formatUpdatedSpecifier(origVer, pkg.latest);
        return {
          name: pkg.name,
          fromStr: `"${pkg.name}": "${origVer}"`,
          toStr: `"${pkg.name}": "${updatedVer}"`,
        };
      });

      const from = values.map((v) => v.fromStr);
      const to = values.map((v) => v.toStr);

      await replaceInFile({ files: pkgPath, from, to });
    }
  }

  return packages;
}

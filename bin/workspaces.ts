import fs from "fs/promises";
import path from "path";
import yaml from "js-yaml";
import { glob } from "tinyglobby";
import type { PackageJsonContent, WorkspaceInfo } from "./types";

/**
 * getWorkspaces - Retrieves the workspaces and their packages based on the package manager
 *
 * @param packageJson - The package.json content
 * @param packageManager - The package manager
 * @param basePath - Root directory of the repository/workspace
 *
 * @returns A promise that resolves to an array of workspace information
 */
export async function getWorkspaces(
  packageJson: PackageJsonContent,
  packageManager: "npm" | "pnpm" | "yarn" | "bun",
  basePath: string = ".",
): Promise<WorkspaceInfo[]> {
  let rawPatterns: string[] = [];

  switch (packageManager) {
    case "yarn":
    case "npm":
    case "bun":
      if (packageJson.workspaces) {
        rawPatterns = Array.isArray(packageJson.workspaces)
          ? packageJson.workspaces
          : (packageJson.workspaces.packages ?? []);
      }
      break;
    case "pnpm":
      const rawYaml = await fs
        .readFile(path.join(basePath, "pnpm-workspace.yaml"), "utf8")
        .catch(() => null);
      if (rawYaml) {
        const parsed = yaml.load(rawYaml) as { packages?: string[] };
        rawPatterns = parsed?.packages ?? [];
      } else if (packageJson.workspaces) {
        rawPatterns = Array.isArray(packageJson.workspaces)
          ? packageJson.workspaces
          : (packageJson.workspaces.packages ?? []);
      }
      break;
  }

  if (!rawPatterns.length) {
    return [];
  }

  const positivePatterns: string[] = [];
  const ignorePatterns: string[] = ["**/node_modules/**", "**/.git/**"];

  for (const raw of rawPatterns) {
    if (typeof raw !== "string") continue;
    const trimmed = raw.trim();
    if (!trimmed) continue;

    if (trimmed.startsWith("!")) {
      const cleanIgnore = trimmed
        .slice(1)
        .replace(/^\.\//, "")
        .replace(/\/+$/, "");
      if (cleanIgnore) {
        ignorePatterns.push(
          cleanIgnore,
          cleanIgnore.endsWith("/**") ? cleanIgnore : `${cleanIgnore}/**`,
        );
      }
    } else {
      const clean = trimmed.replace(/^\.\//, "").replace(/\/+$/, "");
      if (clean) {
        if (clean.endsWith("package.json")) {
          positivePatterns.push(clean);
        } else {
          positivePatterns.push(`${clean}/package.json`);
          // If the pattern has no wildcards, also support it matching directory children
          // in case a user specified e.g. "apps" instead of "apps/*"
          if (!clean.includes("*") && !clean.includes("?")) {
            positivePatterns.push(`${clean}/*/package.json`);
          }
        }
      }
    }
  }

  if (!positivePatterns.length) {
    return [];
  }

  const resolvedBasePath = path.resolve(basePath);

  const matchedFiles = await glob(positivePatterns, {
    cwd: resolvedBasePath,
    ignore: ignorePatterns,
    dot: false,
  }).catch(() => []);

  const rootPkgPath = path.join(resolvedBasePath, "package.json");
  const workspacesMap = new Map<string, WorkspaceInfo>();

  await Promise.all(
    matchedFiles.map(async (relFile) => {
      const fullPkgPath = path.resolve(resolvedBasePath, relFile);
      if (fullPkgPath === rootPkgPath) {
        return;
      }

      const workspaceDir = path.dirname(fullPkgPath);
      if (workspaceDir === resolvedBasePath) {
        return;
      }

      const pkgRaw = await fs.readFile(fullPkgPath, "utf8").catch(() => null);
      if (!pkgRaw) return;

      let pkg: PackageJsonContent | null = null;
      try {
        pkg = JSON.parse(pkgRaw);
      } catch {
        return;
      }
      if (!pkg) return;

      const name = (pkg as any).name || path.basename(workspaceDir);
      const version = (pkg as any).version || "";

      workspacesMap.set(workspaceDir, {
        path: workspaceDir,
        name,
        version,
      });
    }),
  );

  return Array.from(workspacesMap.values()).sort((a, b) =>
    a.path.localeCompare(b.path),
  );
}

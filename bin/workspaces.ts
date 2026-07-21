import fs from "fs/promises";
import path from "path";
import yaml from "js-yaml";
import type { PackageJsonContent, WorkspaceInfo } from "./types";

/**
 * getWorkspaces - Retrieves the workspaces and their packages based on the package manager
 *
 * @param packageJson - The package.json content
 * @param packageManager - The package manager
 *
 * @returns A promise that resolves to an array of workspace information
 */
export async function getWorkspaces(
  packageJson: PackageJsonContent,
  packageManager: "npm" | "pnpm" | "yarn" | "bun",
  basePath: string = ".",
): Promise<WorkspaceInfo[]> {
  let workspaces: string[] = [];

  switch (packageManager) {
    case "yarn":
    case "npm":
    case "bun":
      if (packageJson.workspaces) {
        workspaces = Array.isArray(packageJson.workspaces)
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
        workspaces = (parsed.packages ?? [])
          .filter((x) => !x.startsWith("!"))
          .map((x) => x.replace("/*", ""));
      }
      break;
  }

  const deepWorkspaces = await Promise.all(
    workspaces.map(async (workspace) => {
      const cleanWorkspace = workspace.replace(/\/\*$/, "");

      const workspacePath = path.resolve(basePath, cleanWorkspace);

      const subFolders = await fs
        .readdir(workspacePath, { withFileTypes: true })
        .catch(() => [])
        .then((entries) => entries.filter((entry) => entry.isDirectory()));

      const packageNames = await Promise.all(
        subFolders.map(async (dir) => {
          const packageJsonPath = path.resolve(
            workspacePath,
            dir.name,
            "package.json",
          );

          const pkg = (await fs
            .readFile(packageJsonPath, "utf8")
            .catch(() => null)
            .then((raw) =>
              raw ? JSON.parse(raw) : null,
            )) as PackageJsonContent | null;

          if (!pkg) {
            return null;
          }

          const { name, version } = pkg as any;

          return { name, version, dir: dir.name };
        }),
      );

      const validPackages = packageNames.filter(
        (p): p is { name: string; version: string; dir: string } => p !== null,
      );

      return [workspacePath, validPackages] as const;
    }),
  );

  const flatWorkspaces = deepWorkspaces
    .filter(([_, packages]) => packages.length)
    .flatMap(([workspace, packages]) =>
      packages.map((p) => ({
        path: `${workspace}/${p.dir}`,
        name: p.name,
        version: p.version,
      })),
    );

  return flatWorkspaces;
}

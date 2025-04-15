const fs = require("fs/promises");
const path = require("path");
const yaml = require("js-yaml");

/** @typedef {import("./types").PackageJsonContent} PackageJsonContent */
/** @typedef {import("./types").WorkspaceInfo} WorkspaceInfo */

/**
 * getWorkspaces - Retrieves the workspaces and their packages based on the package manager
 *
 * @param {PackageJsonContent} packageJson - The package.json content
 * @param {"npm" | "pnpm" | "yarn" | "bun"} packageManager - The package manager
 *
 * @returns {Promise<WorkspaceInfo[]>} - A promise that resolves to an array of workspace information
 */
async function getWorkspaces(packageJson, packageManager) {
  /**
   * @type {string[]}
   */
  let workspaces = [];

  switch (packageManager) {
    case "yarn":
    case "npm":
    case "bun":
      if (packageJson.workspaces) {
        workspaces = packageJson.workspaces;
      }
      break;
    case "pnpm":
      const rawYaml = await fs
        .readFile("pnpm-workspace.yaml", "utf8")
        .catch(() => null);
      if (rawYaml) {
        const parsed = yaml.load(rawYaml);
        workspaces = parsed.packages
          .filter((x) => !x.startsWith("!"))
          .map((x) => x.replace("/*", ""));
      }
      break;
  }

  const deepWorkspaces = await Promise.all(
    workspaces.map(async (workspace) => {
      const cleanWorkspace = workspace.replace(/\/\*$/, "");

      const workspacePath = path.resolve(cleanWorkspace);

      const validSubdirs = await fs
        .readdir(workspacePath, { withFileTypes: true })
        .catch(() => [])
        .then((entries) => entries.filter((entry) => entry.isDirectory()));

      const packageNames = await Promise.all(
        validSubdirs.map(async (dir) => {
          const packageJsonPath = path.resolve(
            workspacePath,
            dir.name,
            "package.json",
          );

          const pkg = await fs
            .readFile(packageJsonPath, "utf8")
            .catch(() => null)
            .then(JSON.parse);

          if (!pkg) {
            return null;
          }

          const { name, version } = pkg;

          return { name, version, dir: dir.name };
        }),
      );

      const validPackages = packageNames.filter(Boolean);

      return [cleanWorkspace, validPackages];
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

module.exports = {
  getWorkspaces,
};

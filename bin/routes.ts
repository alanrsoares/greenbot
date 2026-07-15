import {
  fetchNPMPackageMeta,
  indexEntries,
  indexLatestOutOfRangeEntries,
} from "./shared";
import { indexBy, prop } from "rambda";
import { readPackageJson, upgradeVersion, upgradeVersions } from "./utils";
import type { FastifyInstance } from "fastify";
import type { AppContext } from "./types";

interface PackageQueryParams {
  path?: string;
  tab?: string;
}

interface UpgradeBody {
  name: string;
  version: string;
  latest: string;
}

interface UpgradePackagesBody {
  packages: any[];
  path?: string;
}

/**
 * Get package.json path based on query parameters
 * @param query - Request query parameters
 * @param defaultPath - Default package.json path
 * @returns Resolved package.json path
 */
function getPackageJsonPath(
  { path = "" }: PackageQueryParams,
  defaultPath: string,
): string {
  return !path || path === defaultPath ? defaultPath : `${path}/package.json`;
}

/**
 * Register all routes
 * @param fastify
 * @param context - Application context
 */
export async function registerRoutes(
  fastify: FastifyInstance,
  context: AppContext,
): Promise<void> {
  // Info routes
  fastify.get<{ Params: { name: string; version?: string } }>(
    "/info/package/:name/:version?",
    async (request) => {
      const { name, version } = request.params;
      const result = await fetchNPMPackageMeta(name, version);
      return result;
    },
  );

  fastify.get<{
    Params: { namespace: string; name: string; version?: string };
  }>("/info/scoped/:namespace/:name/:version?", async (request) => {
    const { namespace, name, version } = request.params;
    const result = await fetchNPMPackageMeta(`${namespace}/${name}`, version);
    return result;
  });

  // Workspace routes
  fastify.get("/workspaces", async () => {
    return context.isMonorepo ? context.workspaces : null;
  });

  // Package routes
  fastify.get<{ Querystring: PackageQueryParams }>(
    "/package",
    async (request) => {
      const packageJsonPath = getPackageJsonPath(
        request.query,
        context.PACKAGE_JSON_PATH,
      );
      const selectedTab = String(request.query.tab);

      const response = await readPackageJson(packageJsonPath);

      const dependencyEntries = Object.entries(response.dependencies ?? {});
      const devDependencyEntries = Object.entries(
        response.devDependencies ?? {},
      );

      const allEntries =
        selectedTab === "dependencies"
          ? dependencyEntries
          : devDependencyEntries;

      const promises = allEntries.map(([packageName, version]) =>
        fetchNPMPackageMeta(packageName, version),
      );

      const resolved: any[] = await new Promise(async (resolve) => {
        const result: any[] = [];
        const chunkSize = 10;
        const chunks = Math.ceil(promises.length / chunkSize);

        if (!promises.length) {
          return resolve([]);
        }

        for (let i = 0; i < chunks; i++) {
          const chunk = promises.slice(i * chunkSize, (i + 1) * chunkSize);
          const chunkresult = await Promise.all(chunk);
          result.push(...chunkresult);

          if (result.length === promises.length) {
            resolve(result);
          }
        }
      });

      return {
        ...response,
        resolutions: indexEntries(resolved),
        latestOutOfRange: indexLatestOutOfRangeEntries(resolved),
        meta: indexBy(prop("name"), resolved.map(prop("meta"))),
        packageManager: context.packageManager,
        isMonorepo: context.isMonorepo,
        workspaces: context.isMonorepo ? context.workspaces : null,
      };
    },
  );

  fastify.post<{ Body: UpgradeBody; Querystring: PackageQueryParams }>(
    "/upgrade",
    async (request) => {
      const { name, version, latest } = request.body;
      const packageJsonPath = getPackageJsonPath(
        request.query,
        context.PACKAGE_JSON_PATH,
      );

      const result = await upgradeVersion(
        { name, version, latest },
        packageJsonPath,
      );

      return result;
    },
  );

  fastify.post<{ Body: UpgradePackagesBody }>(
    "/upgrade-packages",
    async (request) => {
      const { packages, path: workspacePath } = request.body;
      const packageJsonPath = getPackageJsonPath(
        { path: workspacePath },
        context.PACKAGE_JSON_PATH,
      );

      const result = await upgradeVersions(packages, packageJsonPath);

      return result;
    },
  );
}

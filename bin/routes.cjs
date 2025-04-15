const { fetchNPMPackageMeta, indexEntries } = require("./shared.cjs");
const { indexBy, prop } = require("rambda");
const {
  readPackageJson,
  upgradeVersion,
  upgradeVersions,
} = require("./utils.cjs");

/**
 * Get package.json path based on query parameters
 * @param {Object} query - Request query parameters
 * @param {string} defaultPath - Default package.json path
 * @returns {string} Resolved package.json path
 */
function getPackageJsonPath({ path = "" }, defaultPath) {
  return !path || path === defaultPath ? defaultPath : `${path}/package.json`;
}

/**
 * Register all routes
 * @param {import('fastify').FastifyInstance} fastify
 * @param {AppContext} context - Application context
 */
async function registerRoutes(fastify, context) {
  // Info routes
  fastify.get("/info/package/:name/:version?", async (request) => {
    const { name, version } = request.params;
    const result = await fetchNPMPackageMeta(name, version);
    return result;
  });

  fastify.get(
    "/info/scoped/:namespace/:name/:version?",
    async (request, reply) => {
      const { namespace, name, version } = request.params;
      const result = await fetchNPMPackageMeta(`${namespace}/${name}`, version);
      return result;
    },
  );

  // Workspace routes
  fastify.get("/workspaces", async () => {
    return context.isMonorepo ? context.workspaces : null;
  });

  // Package routes
  fastify.get("/package", async (request) => {
    const packageJsonPath = getPackageJsonPath(
      request.query,
      context.PACKAGE_JSON_PATH,
    );
    const selectedTab = String(request.query.tab);

    const response = await readPackageJson(packageJsonPath);

    const dependencyEntries = Object.entries(response.dependencies ?? {});
    const devDependencyEntries = Object.entries(response.devDependencies ?? {});

    const allEntries =
      selectedTab === "dependencies" ? dependencyEntries : devDependencyEntries;

    const promises = allEntries.map(([packageName, version]) =>
      fetchNPMPackageMeta(packageName, version),
    );

    const resolved = await new Promise(async (resolve) => {
      const result = [];
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
      meta: indexBy(prop("name"), resolved.map(prop("meta"))),
      packageManager: context.packageManager,
      isMonorepo: context.isMonorepo,
      workspaces: context.isMonorepo ? context.workspaces : null,
    };
  });

  fastify.post("/upgrade", async (request) => {
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
  });

  fastify.post("/upgrade-packages", async (request) => {
    const { packages, path } = request.body;
    const packageJsonPath = getPackageJsonPath(
      { path },
      context.PACKAGE_JSON_PATH,
    );

    const result = await upgradeVersions(packages, packageJsonPath);

    return result;
  });
}

module.exports = registerRoutes;

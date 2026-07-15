import { fetchNPMPackageMeta, rawVersion } from "./shared.mjs";
import { readPackageJson } from "./utils.mjs";
import { runSecurityAudit } from "./audit.mjs";

/**
 * Performs package analysis and security audits.
 * @param {string} selectedWorkspacePath - Path to package.json
 * @param {"both" | "dependencies" | "devDependencies"} depType
 * @param {(msg: string) => void} [onProgress] - Optional progress reporting callback
 */
export async function performAnalysis(
  selectedWorkspacePath,
  depType,
  onProgress,
) {
  if (onProgress) onProgress("Reading package.json...");

  const pkgJson = await readPackageJson(selectedWorkspacePath);
  const dependencyEntries = Object.entries(pkgJson.dependencies ?? {});
  const devDependencyEntries = Object.entries(pkgJson.devDependencies ?? {});

  let allEntries = [];
  if (depType === "dependencies" || depType === "both") {
    allEntries.push(
      ...dependencyEntries.map(([name, ver]) => ({
        name,
        ver,
        type: "dependencies",
      })),
    );
  }
  if (depType === "devDependencies" || depType === "both") {
    allEntries.push(
      ...devDependencyEntries.map(([name, ver]) => ({
        name,
        ver,
        type: "devDependencies",
      })),
    );
  }

  if (allEntries.length === 0) {
    return {
      packages: [],
      outdatedSafe: [],
      outdatedMajor: [],
      vulnerablePackages: [],
    };
  }

  if (onProgress)
    onProgress(
      `Found ${allEntries.length} packages. Scanning npm registry... (0/${allEntries.length})`,
    );

  const resolved = [];
  const chunkSize = 10;
  const chunks = Math.ceil(allEntries.length / chunkSize);

  for (let i = 0; i < chunks; i++) {
    const chunk = allEntries.slice(i * chunkSize, (i + 1) * chunkSize);
    const chunkResult = await Promise.all(
      chunk.map(async (pkg) => {
        const meta = await fetchNPMPackageMeta(pkg.name, pkg.ver);
        return {
          ...pkg,
          ...meta,
        };
      }),
    );
    resolved.push(...chunkResult);
    if (onProgress)
      onProgress(
        `Scanning npm registry... (${resolved.length}/${allEntries.length})`,
      );
  }

  if (onProgress)
    onProgress("Checking packages for security vulnerabilities...");
  const auditPackageMap = {};
  resolved.forEach((pkg) => {
    auditPackageMap[pkg.name] = pkg.ver;
  });

  const auditResult = await runSecurityAudit(auditPackageMap);

  // Attach vulnerabilities to package objects
  resolved.forEach((pkg) => {
    pkg.vulnerability = auditResult[pkg.name] || null;
  });

  // Classify packages
  const packages = resolved;
  const outdatedSafe = [];
  const outdatedMajor = [];
  const vulnerablePackages = [];

  for (const pkg of packages) {
    const raw = rawVersion(pkg.ver).version;
    const isSafeLatest = raw === pkg.latest;
    const isMajorLatest =
      !pkg.latestOutOfRange || pkg.latestOutOfRange === pkg.latest;

    if (!isSafeLatest) {
      outdatedSafe.push(pkg);
    }
    if (!isMajorLatest) {
      outdatedMajor.push(pkg);
    }
    if (pkg.vulnerability) {
      vulnerablePackages.push(pkg);
    }
  }

  return { packages, outdatedSafe, outdatedMajor, vulnerablePackages };
}

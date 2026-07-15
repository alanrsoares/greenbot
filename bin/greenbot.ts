#!/usr/bin/env node

import fastify from "fastify";
import path from "path";
import chalk from "chalk";
import open from "open";
import cors from "@fastify/cors";
import fastifyStatic from "@fastify/static";
import { fileURLToPath } from "url";
import { dirname } from "path";

import {
  GREENBOT_TAG,
  DEFAULT_PORT,
  inferPackageManager,
  renderBox,
  name,
  rawVersion,
} from "./shared";

import { registerRoutes } from "./routes";
import { readPackageJson, upgradeVersions } from "./utils";
import { getWorkspaces } from "./workspaces";
import { runTui } from "./tui";
import { performAnalysis as performAnalysisShared } from "./analysis";
import type { AppContext } from "./types";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Parse arguments
const args = process.argv.slice(2);
const runWebMode = args.includes("--web") || args.includes("-w");
const flags = [
  "--web",
  "-w",
  "--json",
  "-j",
  "--patch",
  "-p",
  "--audit",
  "-a",
  "--security",
  "--major",
];
const filteredArgs = args.filter((arg) => !flags.includes(arg));
const hasCatalogArg = filteredArgs.includes("catalog");
const rootArg = filteredArgs.find((arg) => arg !== "catalog") || "package.json";
const PACKAGE_JSON_PATH = rootArg;
const WORKSPACE_TO_ANALYZE = hasCatalogArg ? "catalog" : rootArg;

const isJson = args.includes("--json") || args.includes("-j");
const isPatch = args.includes("--patch") || args.includes("-p");
const isAudit =
  args.includes("--audit") ||
  args.includes("-a") ||
  args.includes("--security");
const isMajor = args.includes("--major");
const runNonInteractiveMode = isJson || isPatch || isAudit || isMajor;

const STATIC_PATH = path.resolve(__dirname, "..", "dist");

const CONTEXT: AppContext = {
  packageManager: "npm",
  isMonorepo: false,
  workspaces: [],
  PACKAGE_JSON_PATH,
};

const app = fastify({
  logger: false,
});

// Register plugins
app.register(cors, {
  origin: "*",
});

app.register(fastifyStatic, {
  root: STATIC_PATH,
});

// Register routes
registerRoutes(app, CONTEXT);

const MAX_TRIES = 5;

async function startWebServer(port = DEFAULT_PORT, tries = 0): Promise<void> {
  try {
    await app.listen({ port });
    const url = `http://localhost:${port}`;

    renderBox(
      [
        ...GREENBOT_TAG.map((x) => chalk.green(x)),
        "",
        (ctx) => ctx.center(chalk.bold.yellow(name)),
        "",
        (ctx) => ctx.center(`Started listening at ${chalk.blue(url)}`),
        "",
        (ctx) => ctx.center(`hit ${chalk.yellow("Ctrl+C")} to stop.`),
      ],
      {
        color: chalk.yellow,
        padding: 2,
      },
    );

    open(url).catch(() => {
      console.log(chalk.yellow(`[greenbot] Could not open browser at ${url}`));
    });
  } catch (err) {
    console.log(chalk.red("An error occurred:"), err);
    if (tries < MAX_TRIES) {
      return startWebServer(port + 1, tries + 1);
    }
  }
}

async function runNonInteractive(
  packageJsonPath: string,
  args: string[],
): Promise<void> {
  try {
    const analysis = await performAnalysisShared(
      packageJsonPath,
      "both",
      undefined,
      PACKAGE_JSON_PATH,
    );

    if (isPatch) {
      const packagesToUpgrade: any[] = [];

      // Safe upgrades (included by default)
      if (analysis.outdatedSafe.length > 0) {
        packagesToUpgrade.push(
          ...analysis.outdatedSafe.map((pkg) => ({
            name: pkg.name,
            version: pkg.ver,
            resolvedVer: pkg.resolvedVer,
            isCatalog: pkg.isCatalog,
            latest: pkg.latest,
          })),
        );
      }

      // Security patches (if requested)
      if (isAudit && analysis.vulnerablePackages.length > 0) {
        const upgradableVulnerable = analysis.vulnerablePackages.filter(
          (pkg) => {
            const raw = rawVersion(pkg.resolvedVer).version;
            const hasSafeUpgrade = raw !== pkg.latest;
            const hasMajorUpgrade =
              pkg.latestOutOfRange && pkg.latestOutOfRange !== raw;
            return hasSafeUpgrade || hasMajorUpgrade;
          },
        );

        upgradableVulnerable.forEach((pkg) => {
          if (!packagesToUpgrade.some((p) => p.name === pkg.name)) {
            packagesToUpgrade.push({
              name: pkg.name,
              version: pkg.ver,
              resolvedVer: pkg.resolvedVer,
              isCatalog: pkg.isCatalog,
              latest: pkg.latestOutOfRange || pkg.latest,
            });
          }
        });
      }

      // Major upgrades (if requested)
      if (isMajor && analysis.outdatedMajor.length > 0) {
        analysis.outdatedMajor.forEach((pkg) => {
          const existingIdx = packagesToUpgrade.findIndex(
            (p) => p.name === pkg.name,
          );
          if (existingIdx !== -1) {
            packagesToUpgrade[existingIdx].latest = pkg.latestOutOfRange;
          } else {
            packagesToUpgrade.push({
              name: pkg.name,
              version: pkg.ver,
              resolvedVer: pkg.resolvedVer,
              isCatalog: pkg.isCatalog,
              latest: pkg.latestOutOfRange,
            });
          }
        });
      }

      if (packagesToUpgrade.length > 0) {
        await upgradeVersions(
          packagesToUpgrade,
          packageJsonPath,
          PACKAGE_JSON_PATH,
        );
        if (!isJson) {
          console.log(
            chalk.green(
              `✔ Successfully upgraded ${packagesToUpgrade.length} packages.`,
            ),
          );
          packagesToUpgrade.forEach((pkg) => {
            console.log(
              `  ${pkg.name}: ${pkg.isCatalog ? `catalog:${pkg.resolvedVer}` : pkg.version} ➔ ${pkg.latest}`,
            );
          });
        }
      } else {
        if (!isJson) {
          console.log(
            chalk.green("✔ No upgrades to apply. Everything is up to date!"),
          );
        }
      }
    }

    if (isJson) {
      const jsonOutput = {
        packages: analysis.packages.map((pkg) => ({
          name: pkg.name,
          version: pkg.ver,
          resolvedVersion: pkg.resolvedVer,
          isCatalog: pkg.isCatalog,
          type: pkg.type,
          latest: pkg.latest,
          latestOutOfRange: pkg.latestOutOfRange,
          vulnerability: pkg.vulnerability,
        })),
        summary: {
          totalPackages: analysis.packages.length,
          safeUpdates: analysis.outdatedSafe.length,
          majorUpdates: analysis.outdatedMajor.length,
          vulnerabilities: analysis.vulnerablePackages.length,
        },
      };
      console.log(JSON.stringify(jsonOutput, null, 2));
    } else if (!isPatch) {
      console.log(chalk.bold.underline("\ngreenbot Analysis Results:\n"));

      const maxNameLen = Math.max(
        ...analysis.packages.map((p) => p.name.length),
        10,
      );
      analysis.packages.forEach((pkg) => {
        const raw = rawVersion(pkg.resolvedVer).version;
        const isSafeLatest = raw === pkg.latest;
        const isMajorLatest =
          !pkg.latestOutOfRange || pkg.latestOutOfRange === pkg.latest;
        const current = pkg.isCatalog ? `catalog:${pkg.resolvedVer}` : pkg.ver;

        let statusStr = "";
        if (isSafeLatest && isMajorLatest) {
          statusStr = chalk.green(`🟢 up to date (${current})`);
        } else if (!isSafeLatest && isMajorLatest) {
          statusStr = chalk.yellow(
            `🟡 safe update available (${current} ➔ ${pkg.latest})`,
          );
        } else if (isSafeLatest && !isMajorLatest) {
          statusStr = chalk.red(
            `🔴 major update available (${current} ➔ ${pkg.latestOutOfRange})`,
          );
        } else {
          statusStr = chalk.red(
            `🔴 major update available (${current} ➔ ${pkg.latestOutOfRange})`,
          );
        }

        if (pkg.vulnerability) {
          const sev = pkg.vulnerability.severity.toUpperCase();
          const color =
            sev === "CRITICAL" || sev === "HIGH" ? chalk.red : chalk.yellow;
          statusStr += ` | ${color(`🛡️  ${sev}: ${pkg.vulnerability.title}`)}`;
        }

        console.log(
          `  ${chalk.cyan(pkg.name.padEnd(maxNameLen + 2))} ${statusStr}`,
        );
      });
      console.log("");
    }
  } catch (error) {
    console.error(chalk.red("Error during non-interactive execution:"), error);
    process.exit(1);
  }
}

async function main(): Promise<void> {
  const packageManager = await inferPackageManager();
  const packageJson = await readPackageJson(PACKAGE_JSON_PATH);
  const workspaces = await getWorkspaces(packageJson, packageManager);

  CONTEXT.workspaces = workspaces;
  CONTEXT.isMonorepo = Boolean(workspaces?.length);
  CONTEXT.packageManager = packageManager;

  if (runNonInteractiveMode) {
    await runNonInteractive(WORKSPACE_TO_ANALYZE, args);
  } else if (runWebMode) {
    await startWebServer();
  } else {
    await runTui(CONTEXT);
  }
}

main();

import {
  intro,
  outro,
  select,
  multiselect,
  spinner,
  isCancel,
  cancel,
} from "@clack/prompts";
import chalk from "chalk";
import path from "path";
import {
  inferPackageManager,
  fetchNPMPackageMeta,
  rawVersion,
} from "./shared.mjs";
import { readPackageJson, upgradeVersions } from "./utils.mjs";
import { getWorkspaces } from "./workspaces.mjs";

/**
 * Runs the interactive TUI interface.
 * @param {import("./types").AppContext} context
 */
export async function runTui(context) {
  intro(chalk.bold.green("greenbot 🤖 - Interactive Package Updater"));

  const packageManager = await inferPackageManager();
  const mainPackageJson = await readPackageJson(context.PACKAGE_JSON_PATH);
  const workspaces = await getWorkspaces(mainPackageJson, packageManager);

  async function performAnalysis(selectedWorkspacePath, depType) {
    const s = spinner();
    s.start("Reading package.json...");

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
      s.stop("Package analysis complete.");
      return { packages: [], outdatedSafe: [], outdatedMajor: [] };
    }

    s.message(
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
      s.message(
        `Scanning npm registry... (${resolved.length}/${allEntries.length})`,
      );
    }

    s.stop("Registry scan complete.");

    // Classify packages
    const packages = resolved;
    const outdatedSafe = [];
    const outdatedMajor = [];

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
    }

    return { packages, outdatedSafe, outdatedMajor };
  }

  let currentStep =
    workspaces && workspaces.length > 0 ? "workspace" : "depType";
  let selectedWorkspacePath = context.PACKAGE_JSON_PATH;
  let depTypeVal = "both";
  let analysis = null;

  while (true) {
    if (currentStep === "workspace") {
      const workspaceOptions = [
        { value: "root", label: `Root (${context.PACKAGE_JSON_PATH})` },
        ...workspaces.map((w) => ({
          value: w.path,
          label: `${w.name} (${w.path})`,
        })),
      ];

      const selectedWorkspace = await select({
        message: "Monorepo detected. Select which package/workspace to check:",
        options: workspaceOptions,
      });

      if (isCancel(selectedWorkspace)) {
        cancel("Operation cancelled.");
        process.exit(0);
      }

      if (selectedWorkspace !== "root") {
        selectedWorkspacePath = path.join(selectedWorkspace, "package.json");
      } else {
        selectedWorkspacePath = context.PACKAGE_JSON_PATH;
      }

      currentStep = "depType";
      continue;
    }

    if (currentStep === "depType") {
      const depType = await select({
        message: "Select dependency type to check:",
        options: [
          { value: "both", label: "Both Dependencies & Dev Dependencies" },
          { value: "dependencies", label: "Dependencies (Production)" },
          { value: "devDependencies", label: "Dev Dependencies (Development)" },
        ],
      });

      if (isCancel(depType)) {
        if (workspaces && workspaces.length > 0) {
          currentStep = "workspace";
          continue;
        } else {
          cancel("Operation cancelled.");
          process.exit(0);
        }
      }

      depTypeVal = depType;
      analysis = await performAnalysis(selectedWorkspacePath, depTypeVal);

      if (analysis.packages.length === 0) {
        console.log(
          chalk.yellow("\nNo dependencies found for the selected type.\n"),
        );
        const goBack = await select({
          message: "Please choose another configuration.",
          options: [{ value: "continue", label: "Return to Menu Selection" }],
        });
        if (isCancel(goBack)) {
          // Go back to depType step
          continue;
        }
        continue;
      }

      currentStep = "menu";
      continue;
    }

    if (currentStep === "menu") {
      let resetRootMenu = false;
      while (true) {
        const totalOutdated =
          analysis.outdatedSafe.length + analysis.outdatedMajor.length;

        let statusHeader = "";
        if (totalOutdated === 0) {
          statusHeader = chalk.green("✔ All packages are up to date!");
        } else {
          statusHeader = chalk.yellow(
            `⚠ Found ${analysis.outdatedSafe.length} safe and ${analysis.outdatedMajor.length} major updates.`,
          );
        }

        const action = await select({
          message: `${statusHeader} What would you like to do?`,
          options: [
            { value: "status", label: "🔍 View all package status" },
            {
              value: "safe",
              label: `🚀 Run Safe Upgrades (In-Range) [${analysis.outdatedSafe.length} available]`,
            },
            {
              value: "major",
              label: `⚠️ Run Major/Out-of-Range Upgrades [${analysis.outdatedMajor.length} available]`,
            },
            { value: "recheck", label: "🔄 Re-scan npm registry" },
            { value: "exit", label: "🚪 Exit" },
          ],
        });

        if (isCancel(action)) {
          resetRootMenu = true;
          break;
        }

        if (action === "exit") {
          outro(chalk.green("So fresh, so healthy 🍃"));
          process.exit(0);
        }

        if (action === "status") {
          console.log("\n" + chalk.bold.underline("Package Status Summary:"));
          const maxNameLen = Math.max(
            ...analysis.packages.map((p) => p.name.length),
            10,
          );
          analysis.packages.forEach((pkg) => {
            const nameCol = pkg.name.padEnd(maxNameLen + 2);
            const typeCol =
              `(${pkg.type === "dependencies" ? "dep" : "dev"})`.padEnd(8);
            const current = pkg.ver;
            const raw = rawVersion(pkg.ver).version;
            const safe = pkg.latest;
            const major = pkg.latestOutOfRange;

            const isSafeLatest = raw === safe;
            const isMajorLatest = !major || major === safe;

            let statusStr = "";
            if (isSafeLatest && isMajorLatest) {
              statusStr = `${chalk.green("🟢 up to date")}  (${current})`;
            } else if (!isSafeLatest && isMajorLatest) {
              statusStr = `${chalk.yellow("🟡 safe update")} ${current} ➔ ${chalk.bold.yellow(safe)}`;
            } else if (isSafeLatest && !isMajorLatest) {
              statusStr = `${chalk.red("🔴 major update")} ${current} ➔ ${chalk.bold.red(major)}`;
            } else {
              statusStr = `${chalk.red("🔴 major update")} ${current} ➔ ${chalk.bold.yellow(safe)} (safe) | ${chalk.bold.red(major)} (major)`;
            }

            console.log(
              `  ${chalk.cyan(nameCol)} ${chalk.dim(typeCol)} ${statusStr}`,
            );
          });
          console.log("");

          const goBack = await select({
            message: "Status summary printed above.",
            options: [{ value: "back", label: "Return to Menu" }],
          });
          if (isCancel(goBack)) {
            // Cancel returns to menu loop, no exit
            continue;
          }
          continue;
        }

        if (action === "recheck") {
          analysis = await performAnalysis(selectedWorkspacePath, depTypeVal);
          continue;
        }

        if (action === "safe") {
          if (analysis.outdatedSafe.length === 0) {
            console.log(chalk.green("\nNo safe upgrades available.\n"));
            const goBack = await select({
              message: "No action needed.",
              options: [{ value: "back", label: "Return to Menu" }],
            });
            if (isCancel(goBack)) {
              continue;
            }
            continue;
          }

          const maxNameLen = Math.max(
            ...analysis.outdatedSafe.map((p) => p.name.length),
            10,
          );
          const choices = await multiselect({
            message:
              "Select safe packages to upgrade (Space to select, Enter to confirm):",
            options: [
              { value: "all", label: chalk.bold("All packages") },
              ...analysis.outdatedSafe.map((pkg) => ({
                value: pkg.name,
                label: `  ${pkg.name.padEnd(maxNameLen + 2)} ${pkg.ver} ➔ ${pkg.latest} (${chalk.yellow("safe update")})`,
              })),
            ],
          });

          if (isCancel(choices)) {
            continue;
          }

          if (choices.length === 0) {
            console.log(chalk.yellow("\nNo packages selected.\n"));
            continue;
          }

          const s = spinner();
          s.start("Upgrading package.json...");

          const selectedNames = choices.includes("all")
            ? analysis.outdatedSafe.map((pkg) => pkg.name)
            : choices;

          const packagesToUpgrade = analysis.outdatedSafe
            .filter((pkg) => selectedNames.includes(pkg.name))
            .map((pkg) => ({
              name: pkg.name,
              version: pkg.ver,
              latest: pkg.latest,
            }));

          await upgradeVersions(packagesToUpgrade, selectedWorkspacePath);

          s.stop("Upgraded successfully!");

          console.log(chalk.bold("\nPackages upgraded:"));
          packagesToUpgrade.forEach((pkg) => {
            console.log(
              `  ${chalk.green("✔")} ${chalk.cyan(pkg.name)}: ${pkg.version} ➔ ${pkg.latest}`,
            );
          });
          console.log("");

          analysis = await performAnalysis(selectedWorkspacePath, depTypeVal);
          continue;
        }

        if (action === "major") {
          if (analysis.outdatedMajor.length === 0) {
            console.log(chalk.green("\nNo major upgrades available.\n"));
            const goBack = await select({
              message: "No action needed.",
              options: [{ value: "back", label: "Return to Menu" }],
            });
            if (isCancel(goBack)) {
              continue;
            }
            continue;
          }

          const maxNameLen = Math.max(
            ...analysis.outdatedMajor.map((p) => p.name.length),
            10,
          );
          const choices = await multiselect({
            message:
              "Select major packages to upgrade (caution: breaking changes possible):",
            options: [
              { value: "all", label: chalk.bold("All packages") },
              ...analysis.outdatedMajor.map((pkg) => ({
                value: pkg.name,
                label: `  ${pkg.name.padEnd(maxNameLen + 2)} ${pkg.ver} ➔ ${pkg.latestOutOfRange} (${chalk.red("major update")})`,
              })),
            ],
          });

          if (isCancel(choices)) {
            continue;
          }

          if (choices.length === 0) {
            console.log(chalk.yellow("\nNo packages selected.\n"));
            continue;
          }

          const s = spinner();
          s.start("Upgrading package.json...");

          const selectedNames = choices.includes("all")
            ? analysis.outdatedMajor.map((pkg) => pkg.name)
            : choices;

          const packagesToUpgrade = analysis.outdatedMajor
            .filter((pkg) => selectedNames.includes(pkg.name))
            .map((pkg) => ({
              name: pkg.name,
              version: pkg.ver,
              latest: pkg.latestOutOfRange,
            }));

          await upgradeVersions(packagesToUpgrade, selectedWorkspacePath);

          s.stop("Upgraded successfully to absolute latest version!");

          console.log(chalk.bold("\nPackages upgraded:"));
          packagesToUpgrade.forEach((pkg) => {
            console.log(
              `  ${chalk.green("✔")} ${chalk.cyan(pkg.name)}: ${pkg.version} ➔ ${pkg.latest}`,
            );
          });
          console.log("");

          analysis = await performAnalysis(selectedWorkspacePath, depTypeVal);
          continue;
        }
      }

      if (resetRootMenu) {
        currentStep =
          workspaces && workspaces.length > 0 ? "workspace" : "depType";
        continue;
      }
    }
  }
}

import chalk from "chalk";

import {
  GREENBOT_TAG,
  inferPackageManager,
  REPOSITORY_URL,
  renderBox,
  packageVersion,
  packageName,
  fetchNPMPackageMeta,
} from "../bin/shared.mjs";

async function main() {
  // check for latest version on npm
  const { latest } = await fetchNPMPackageMeta(packageName);

  if (packageVersion == latest) {
    // nothing to see here
    return;
  }

  const releaseUrl = `${REPOSITORY_URL}/releases/tag/v${latest}`;

  const updateLine = chalk.bold(
    `📦 Update available! ${chalk.red(packageVersion)} → ${chalk.green(latest)}`
  );

  const packageManager = await inferPackageManager();

  const installCommands = {
    npm: `npm i ${packageName}@latest`,
    yarn: `yarn add ${packageName}@latest`,
    pnpm: `pnpm add ${packageName}@latest`,
  };

  renderBox(
    [
      ...GREENBOT_TAG.map((x) => chalk.bold.green(x)),
      "",
      (ctx) => ctx.center(chalk.bold.yellow(packageName)),
      "",
      (ctx) => ctx.center(updateLine),
      "",
      (ctx) =>
        ctx.center(
          `Run ${chalk.bgGray(installCommands[packageManager])} to update!`
        ),
      "",
      "Find out more about this release:",
      "",
      `${chalk.cyan(releaseUrl)}`,
      "",
    ],
    {
      color: chalk.bold.yellow,
      padding: 2,
    }
  );
}

main().catch(console.error);

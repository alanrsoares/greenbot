import chalk from "chalk";
import {
  GREENBOT_TAG,
  inferPackageManager,
  REPOSITORY_URL,
  renderBox,
  version,
  name,
  fetchNPMPackageMeta,
} from "../bin/shared.mjs";

async function main() {
  // check for latest version on npm
  const { latest } = await fetchNPMPackageMeta(name);

  if (version == latest) {
    // nothing to see here
    return;
  }

  const releaseUrl = `${REPOSITORY_URL}/releases/tag/v${latest}`;

  const updateLine = chalk.bold(
    `📦 Update available! ${chalk.red(version)} → ${chalk.green(latest)}`,
  );

  const packageManager = await inferPackageManager();

  const installCommands = {
    npm: `npm i ${name}@latest`,
    yarn: `yarn add ${name}@latest`,
    pnpm: `pnpm add ${name}@latest`,
  };

  renderBox(
    [
      ...GREENBOT_TAG.map((x) => chalk.bold.green(x)),
      "",
      (ctx) => ctx.center(chalk.bold.yellow(name)),
      "",
      (ctx) => ctx.center(updateLine),
      "",
      (ctx) =>
        ctx.center(
          `Run ${chalk.bgGray(installCommands[packageManager])} to update!`,
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
    },
  );
}

main().catch(console.error);

#!/usr/bin/env zx

import { path, fs } from "zx";

/**
 * Update version numbers in the README content.
 *
 * @param {string} readmeContent - Original README content.
 * @param {string} newVersion - New version string.
 * @returns {string} Updated README content.
 */
const updateVersionInReadme = (readmeContent, newVersion) =>
  readmeContent
    .replace(
      /(https:\/\/img\.shields\.io\/badge\/version-)([\d\.]+)(-blue)/g,
      `$1${newVersion}$3`
    )
    .replace(/(Current Version: `)([\d\.]+)(`)/g, `$1${newVersion}$3`);

// Example usage
(async () => {
  const readmePath = path.join(process.cwd(), "README.md");
  const packageJsonPath = path.join(process.cwd(), "package.json");

  try {
    const readmeContent = await fs.readFile(readmePath, "utf8");

    const { version: latestVersion } = await fs
      .readFile(packageJsonPath, "utf8")
      .then(JSON.parse);

    await fs.writeFile(
      readmePath,
      updateVersionInReadme(readmeContent, latestVersion),
      "utf8"
    );

    console.log(
      `Successfully updated version to ${latestVersion} in README.md`
    );
  } catch (err) {
    console.error(`Error: ${err}`);
  }
})();

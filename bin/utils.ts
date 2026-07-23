import fs from "fs/promises";
import type { PackageJsonContent } from "./types";

/**
 * readPackageJson - read package.json file
 *
 * @param path - Path to package.json
 * @returns parsed PackageJsonContent
 */
export async function readPackageJson(
  path: string,
): Promise<PackageJsonContent> {
  try {
    const raw = await fs.readFile(path, "utf8");
    return JSON.parse(raw) as PackageJsonContent;
  } catch (error) {
    return { dependencies: {}, devDependencies: {} };
  }
}

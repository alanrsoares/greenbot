import fs from "fs/promises";
import stripAnsi from "strip-ansi";
import chalk from "chalk";
import packageJson from "package-json";
import type {
  PackageLockFile,
  RawVersion,
  RenderBoxLine,
  RenderBoxOptions,
} from "./types";

export const version = process.env["GREENBOT_VERSION"] || "0.0.0";
export const name = process.env["GREENBOT_NAME"] || "greenbot";

const vTag = chalk.cyan(`v${version}`);

export const GREENBOT_TAG = `
░██████╗░██████╗░███████╗███████╗███╗░░██╗██████╗░░█████╗░████████╗
██╔════╝░██╔══██╗██╔════╝██╔════╝████╗░██║██╔══██╗██╔══██╗╚══██╔══╝
██║░░██╗░██████╔╝█████╗░░█████╗░░██╔██╗██║██████╦╝██║░░██║░░░██║░░░
██║░░╚██╗██╔══██╗██╔══╝░░██╔══╝░░██║╚████║██╔══██╗██║░░██║░░░██║░░░
╚██████╔╝██║░░██║███████╗███████╗██║░╚███║██████╦╝╚█████╔╝░░░██║░░░
░╚═════╝░╚═╝░░╚═╝╚══════╝╚══════╝╚═╝░░╚══╝╚═════╝░░╚════╝░░░░╚═╝░░░
═══════════════════════════════════════════════════════════ ${vTag}`
  .trim()
  .split("\n");

export const DEFAULT_PORT = 5001;

export const PACKAGE_LOCK_FILES: PackageLockFile[] = [
  { file: "yarn.lock", name: "yarn" },
  { file: "package-lock.json", name: "npm" },
  { file: "pnpm-lock.yaml", name: "pnpm" },
  { file: "bun.lock", name: "bun" },
];

export const REPOSITORY_URL = "https://github.com/alanrsoares/greenbot";

export const pad = (n = 0, char = " ") => char.repeat(n);

/**
 * inferPackageManager - infer package manager
 */
export async function inferPackageManager(): Promise<
  "yarn" | "npm" | "pnpm" | "bun"
> {
  const responses = await Promise.all(
    PACKAGE_LOCK_FILES.map(({ file, name }) =>
      fs
        .readFile(file, "utf8")
        .then(() => ({
          exists: true,
          name: name as "yarn" | "npm" | "pnpm" | "bun",
        }))
        .catch(() => ({
          exists: false,
          name: name as "yarn" | "npm" | "pnpm" | "bun",
        })),
    ),
  );

  const manager = responses.find((r) => r.exists);

  return manager?.name ?? "npm";
}

export function renderBox(
  lines: RenderBoxLine[] = [],
  { color = chalk.green, padding = 1 }: RenderBoxOptions = {},
) {
  const maxLineLength = lines.reduce((max: number, line) => {
    const lineStr = typeof line === "function" ? "" : line;
    return Math.max(max, stripAnsi(lineStr).length);
  }, 0);

  const maxLength = maxLineLength + padding * 2;

  const [tr, tl, br, bl, h, v] = [
    color("╗"),
    color("╔"),
    color("╝"),
    color("╚"),
    color("═"),
    color("║"),
  ];

  const border = h.repeat(maxLength);

  const py = `\n${v}${pad(maxLength)}${v}`.repeat(padding / 2);

  console.log(`
${tl}${border}${tr}${py}
${lines
  .map((line) => {
    if (typeof line === "function") {
      const center = (str = "") => {
        const len = stripAnsi(str).length;
        const raw = (maxLength - padding * 2 - len) / 2;
        const [padL, padR] = [Math.floor, Math.ceil].map((f) => pad(f(raw)));

        return `${padL}${str}${padR}`;
      };
      return `${v}${pad(padding)}${line({ center })}${pad(padding)}${v}`;
    }

    const lineStr = line;
    const lineLength = stripAnsi(lineStr).length;
    const short = Math.min(maxLength, lineLength);
    const long = Math.max(maxLength, lineLength);
    const rPad = long === short ? 0 : long - short - padding * 2;
    return `${v}${pad(padding)}${lineStr}${pad(padding)}${pad(Math.max(rPad, 0))}${v}`;
  })
  .join("\n")}${py}
${bl}${border}${br}`);
}

export const indexEntries = (xs: any[]) =>
  xs.reduce((acc, { name, latest }) => ({ ...acc, [name]: latest }), {});

export const indexLatestOutOfRangeEntries = (xs: any[]) =>
  xs.reduce(
    (acc, { name, latestOutOfRange }) =>
      latestOutOfRange ? { ...acc, [name]: latestOutOfRange } : acc,
    {},
  );

export const rawVersion = (version: string): RawVersion => {
  const result: RawVersion = {
    version: version.replace(/[\^~]/, ""),
  };
  const firstChar = version[0];
  if (firstChar && isNaN(Number(firstChar))) {
    result.qualifier = firstChar;
  }
  return result;
};

const isNumber = (n: any) => !isNaN(Number(n));

export const isValidSemVer = (version = "") => {
  const raw = rawVersion(version);
  return (
    raw.version.split(".").length === 3 &&
    raw.version.split(".").every(isNumber)
  );
};

export const fetchNPMPackageMeta = async (
  name: string,
  version = "latest",
): Promise<any> => {
  if (!isValidSemVer(version)) {
    return {
      name,
      version,
      latest: version,
    };
  }
  try {
    const options = { version, fullMetadata: true };

    const [latestInRange, absoluteLatest] = await Promise.all([
      packageJson(name, options).catch(() => null),
      packageJson(name, { version: "latest", fullMetadata: true }).catch(
        () => null,
      ),
    ]);

    const latest = latestInRange?.version ?? version;
    const latestOutOfRange = absoluteLatest?.version;

    const { version: _, ...meta } = (latestInRange ?? {}) as any;

    return {
      name,
      version,
      latest,
      meta: latestInRange ? meta : undefined,
      latestOutOfRange,
    };
  } catch (error) {
    console.log(
      chalk.red(`[greenbot] Could not fetch latest version for ${name}`),
    );

    try {
      const absoluteLatest = await packageJson(name, {
        version: "latest",
        fullMetadata: true,
      });
      return {
        name,
        version,
        latest: version,
        latestOutOfRange: absoluteLatest.version,
      };
    } catch (fallbackError) {
      return {
        name,
        version,
        latest: version,
      };
    }
  }
};

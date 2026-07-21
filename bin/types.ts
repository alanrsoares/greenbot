import type { FullMetadata } from "package-json";

interface Package {
  name: string;
  version: string;
  dependencies: Record<string, string>;
  devDependencies?: Record<string, string>;
  resolutions: Record<string, string>;
  latestOutOfRange?: Record<string, string>;
  meta: Record<string, FullMetadata>;
  packageManager: "npm" | "yarn" | "pnpm" | "bun";
  workspaces:
    | null
    | {
        path: string;
        name: string;
        version: string;
      }[];
}

export type WorkspaceInfo = NonNullable<Package["workspaces"]>[number];

export interface PackageVersionInfo {
  name: string;
  version: string;
  latest: string;
  isCatalog?: boolean;
  resolvedVer?: string;
  workspacePath?: string;
}

export interface AppContext {
  packageManager: string;
  isMonorepo: boolean;
  workspaces: WorkspaceInfo[];
  PACKAGE_JSON_PATH: string;
}

export interface PackageLockFile {
  file: string;
  name: string;
}

export interface RawVersion {
  version: string;
  qualifier?: string;
}

export interface RenderBoxOptions {
  color?: (text: string) => string;
  padding?: number;
}

interface CenterContext {
  center: (str: string) => string;
}

export interface PackageJsonContent {
  dependencies: Record<string, string>;
  devDependencies: Record<string, string>;
  workspaces?:
    string[] | { packages?: string[]; catalog?: Record<string, string> };
  catalog?: Record<string, string>;
}

export type RenderBoxLine = string | ((ctx: CenterContext) => string);

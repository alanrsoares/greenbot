import type { Package, PackageInfo } from "../src/domain/types";

// Re-export domain types
export type { Package, PackageInfo };
export type WorkspaceInfo = NonNullable<Package["workspaces"]>[number];

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

export interface CenterContext {
  center: (str: string) => string;
}

export type RenderBoxLine = string | ((ctx: CenterContext) => string);

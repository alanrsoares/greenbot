export interface PackageJsonContent {
  dependencies: Record<string, string>;
  devDependencies?: Record<string, string>;
  workspaces?: string[];
}

export interface WorkspaceInfo {
  path: string;
  name: string;
  version: string;
}

export interface PackageVersionInfo {
  name: string;
  version: string;
  latest: string;
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

export interface PackageMeta {
  name: string;
  version: string;
  latest: string;
  meta?: import("package-json").FullMetadata;
  latestOutOfRange?: string;
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

import type { FullMetadata } from "package-json";

export type TabKind = "dependencies" | "devDependencies";

export interface Package {
  name: string;
  version: string;
  dependencies: Record<string, string>;
  devDependencies?: Record<string, string>;
  resolutions: Record<string, string>;
  meta: Record<string, FullMetadata>;
  packageManager: "npm" | "yarn" | "pnpm";
}

export interface PackageInfo {
  name: string;
  version: string;
  latest: string | undefined;
  meta: FullMetadata | undefined;
}

/**
 * Result of a bundlephobia API call.
 */
export type BundlephobiaReport = {
  name: string;
  description: string;
  version: string;
  size: number;
  gzip: number;
  repository: string;
  scoped: boolean;
  hasJSModule: boolean;
  hasJSNext: boolean;
  isModuleType: boolean;
  hasSideEffects: boolean;
  assets: {
    gzip: number;
    name: string;
    size: number;
    type: string;
  }[];
  dependencyCount: number;
  dependencySizes: {
    approximateSize: number;
    name: string;
  }[];
};

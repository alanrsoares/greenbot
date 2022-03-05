import type { FullMetadata } from "package-json";

export type TabKind = "dependencies" | "devDependencies";

export interface Package {
  name: string;
  version: string;
  dependencies: Record<string, string>;
  devDependencies?: Record<string, string>;
  resolutions: Record<string, string>;
  meta: Record<string, FullMetadata>;
}

export interface PackageInfo {
  name: string;
  version: string;
  latest: string;
  meta: FullMetadata;
}

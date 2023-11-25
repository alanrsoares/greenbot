import { GetPackagesInput } from "~/lib/api";

export const PAGE_SIZE = 10;

export const QUERY_KEYS = {
  workspaces: ["workspaces"] as const,
  package: (input: GetPackagesInput) =>
    ["package", ...Object.values(input)] as const,
  bundlephobiaReport: (name: string) => ["bundlephobiaReport", name] as const,
};

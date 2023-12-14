import { GetPackageInput } from "~/lib/api";

export const PAGE_SIZE = 10;

export const QUERY_KEYS = {
  workspaces: ["workspaces"] as const,
  package: (input: GetPackageInput) =>
    ["package", input.path, input.tab] as const,
  bundlephobiaReport: (name: string) => ["bundlephobiaReport", name] as const,
};

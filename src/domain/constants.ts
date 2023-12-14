export const PAGE_SIZE = 10;

export const QUERY_KEYS = {
  workspaces: ["workspaces"] as const,
  package: (path: string) => ["package", path] as const,
  bundlephobiaReport: (name: string) => ["bundlephobiaReport", name] as const,
};

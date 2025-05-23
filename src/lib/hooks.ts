import {
  createMutation,
  createQuery,
  type CreateMutationOptions,
  type QueryObserverResult,
  type Updater,
} from "@tanstack/svelte-query";
import { onDestroy, onMount } from "svelte";

import { QUERY_KEYS } from "~/domain/constants";
import type { Package, PackageInfo, TabKind } from "~/domain/types";

import * as api from "./api";
import { getFilteredEntries, isLatestVersion, rawVersion } from "./helpers";
import type { Mood } from "~/ui/components/Bot.svelte";

export const useUpgradePackagesMutation = (
  options?: CreateMutationOptions<
    PackageInfo[],
    unknown,
    api.UpgradePackagesInput,
    void
  >,
) =>
  createMutation({
    ...options,
    mutationFn: api.upgradePackages,
  });

export const updatePackageQueryCache =
  (updated: PackageInfo[]): Updater<Package | undefined, Package> =>
  (prev) => {
    const next = structuredClone(prev ?? {}) as Package;

    for (let item of updated) {
      const { qualifier } = rawVersion(item.version);
      const latestVersion = `${qualifier}${item.latest}`;

      if (next.dependencies && item.name in next.dependencies) {
        console.log("updating dependency", item.name, "to", latestVersion);
        next.dependencies[item.name] = latestVersion;
      }
      if (next.devDependencies && item.name in next.devDependencies) {
        console.log("updating devDependency", item.name, "to", latestVersion);
        next.devDependencies[item.name] = latestVersion;
      }
    }

    return next;
  };

export const useWorkspacesQuery = () =>
  createQuery({
    queryKey: QUERY_KEYS.workspaces,
    queryFn: api.getWorkspaces,
  });

export const usePackageQuery = (input: api.GetPackageInput) =>
  createQuery({
    queryKey: QUERY_KEYS.package(input),
    queryFn: api.getPackage.bind(null, input),
  });

export const useBundlephobiaReportQuery = (name: string) =>
  createQuery({
    queryKey: QUERY_KEYS.bundlephobiaReport(name),
    queryFn: () => api.getBundlephobiaReport(name),
    enabled: Boolean(name),
  });

export function useKeyDown(onKeyDown: (e: KeyboardEvent) => void) {
  onMount(() => {
    window.addEventListener("keydown", onKeyDown);
  });

  onDestroy(() => {
    window.removeEventListener("keydown", onKeyDown);
  });
}

export function useCurrentMood(
  result?: QueryObserverResult<Package, unknown>,
  selectedTab?: TabKind,
): Mood {
  if (!result || result.isLoading) {
    return "asleep";
  }
  if (result.error) {
    return "dead";
  }
  if (result.data) {
    const { dependencies, devDependencies, resolutions } = result.data;

    const allEntries = Object.entries(
      (selectedTab === "dependencies" ? dependencies : devDependencies) ?? {},
    );

    const outdatedPackagesCount = getFilteredEntries(
      allEntries,
      result.data.resolutions,
    ).filter(
      ([name, version]) => !isLatestVersion(version, resolutions[name]),
    ).length;

    return outdatedPackagesCount > 0 ? "angry" : "happy";
  }

  return "awake";
}

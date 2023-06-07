import {
  createMutation,
  createQuery,
  type CreateMutationOptions,
  Updater,
} from "@tanstack/svelte-query";
import { onDestroy, onMount } from "svelte";

import { QUERY_KEYS } from "~/domain/constants";
import type { Package, PackageInfo } from "~/domain/types";

import * as api from "./api";
import { rawVersion } from "./helpers";

export const useUpgradePackagesMutation = (
  options?: CreateMutationOptions<PackageInfo[], unknown, PackageInfo[], void>
) => createMutation(api.upgradePackages, options);

export const updatePackageQueryCache =
  (updated: PackageInfo[]): Updater<Package | undefined, Package> =>
  (prev) => {
    const next = structuredClone(prev) as Package;

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

export const usePackageQuery = () =>
  createQuery(QUERY_KEYS.package, api.getPackage);

export const useBundlephobiaReportQuery = (name: string) =>
  createQuery(
    QUERY_KEYS.bundlephobiaReport(name),
    () => api.getBundlephobiaReport(name),
    {
      enabled: Boolean(name),
    }
  );

export function useKeyDown(onKeyDown: (e: KeyboardEvent) => void) {
  onMount(() => {
    window.addEventListener("keydown", onKeyDown);
  });

  onDestroy(() => {
    window.removeEventListener("keydown", onKeyDown);
  });
}

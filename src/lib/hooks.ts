import {
  createMutation,
  createQuery,
  type CreateMutationOptions,
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
  (updated: PackageInfo[]) => (current: Package) => {
    for (let item of updated) {
      const { qualifier } = rawVersion(item.version);
      const latestVersion = `${qualifier}${item.latest}`;
      if (current.dependencies && item.name in current.dependencies) {
        current.dependencies[item.name] = latestVersion;
      }
      if (current.devDependencies && item.name in current.devDependencies) {
        current.devDependencies[item.name] = latestVersion;
      }
    }

    return current;
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

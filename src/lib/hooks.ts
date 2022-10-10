import {
  useMutation,
  useQuery,
  type UseMutationOptions,
} from "@sveltestack/svelte-query";
import { onDestroy, onMount } from "svelte";

import { QUERIES } from "~/domain/constants";
import type { Package, PackageInfo } from "~/domain/types";

import * as api from "./api";
import { rawVersion } from "./helpers";

export const useUpgradePackagesMutation = (
  options?: UseMutationOptions<PackageInfo[], unknown, PackageInfo[], void>
) => useMutation(api.upgradePackages, options);

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

export const usePackageQuery = () => useQuery(QUERIES.package, api.getPackage);

export function useKeyDown(onKeyDown: (e: KeyboardEvent) => void) {
  onMount(() => {
    window.addEventListener("keydown", onKeyDown);
  });

  onDestroy(() => {
    window.removeEventListener("keydown", onKeyDown);
  });
}

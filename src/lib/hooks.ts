import {
  useMutation,
  useQuery,
  type UseMutationOptions,
} from "@sveltestack/svelte-query";

import { QUERIES } from "domain/constants";
import type { PackageInfo } from "domain/types";
import { onDestroy, onMount } from "svelte";

import * as api from "./api";

export const useUpgradePackagesMutation = (
  options?: UseMutationOptions<PackageInfo[], unknown, PackageInfo[], void>
) => useMutation(api.upgradePackages, options);

export const usePackageQuery = () => useQuery(QUERIES.package, api.getPackage);

export function useKeyDown(onKeyDown: (e: KeyboardEvent) => void) {
  onMount(() => {
    window.addEventListener("keydown", onKeyDown);
  });

  onDestroy(() => {
    window.removeEventListener("keydown", onKeyDown);
  });
}

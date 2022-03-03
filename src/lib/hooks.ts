import {
  useMutation,
  useQuery,
  type UseMutationOptions,
} from "@sveltestack/svelte-query";

import { QUERIES } from "../domain/constants";
import type { PackageInfo } from "../domain/types";
import * as api from "./api";

export const useUpgradePackagesMutation = (
  options?: UseMutationOptions<PackageInfo[], unknown, PackageInfo[], void>
) => useMutation(api.upgradePackages, options);

export const usePackageQuery = () => useQuery(QUERIES.package, api.getPackage);

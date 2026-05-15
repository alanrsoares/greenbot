import type { QueryClient } from "@tanstack/svelte-query";

import { QUERY_KEYS } from "~/domain/constants";
import type { Package, PackageInfo, TabKind } from "~/domain/types";

import * as api from "./api";
import { updatePackageQueryCache } from "./hooks";

/**
 * Runs the upgrade mutation, merges results into the package query cache, and
 * optionally refetches that query (list view uses refetch; single-row does not).
 */
export async function applyPackageUpgrades(options: {
  queryClient: QueryClient;
  mutateAsync: (input: api.UpgradePackagesInput) => Promise<PackageInfo[]>;
  packages: PackageInfo[];
  path: string;
  tab: TabKind;
  refetchAfter?: boolean;
}): Promise<void> {
  const { queryClient, mutateAsync, packages, path, tab, refetchAfter } =
    options;

  try {
    const updated = await mutateAsync({ packages, path });

    queryClient.setQueryData<Package>(
      QUERY_KEYS.package({ path, tab }),
      updatePackageQueryCache(updated),
    );

    if (refetchAfter) {
      await queryClient.refetchQueries({
        queryKey: QUERY_KEYS.package({ path, tab }),
      });
    }
  } catch (error) {
    console.log("Failed to upgrade packages:", { originalError: error });
  }
}

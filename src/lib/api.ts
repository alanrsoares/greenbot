import ky from "ky";
import { PAGE_SIZE } from "~/domain/constants";
import type {
  BundlephobiaReport,
  Package,
  PackageInfo,
  TabKind,
} from "~/domain/types";

const greenbotClient = ky.create({
  prefixUrl: "http://localhost:5001/",
});

const bundlephobiaClient = ky.create({
  prefixUrl: "https://bundlephobia.com/",
});

export type GetPackagesInput = {
  pageIndex: number;
  selectedTab: TabKind;
  path?: string;
};

export function getPackage(input: GetPackagesInput) {
  const searchParams = new URLSearchParams({
    pageIndex: String(input.pageIndex),
    pageSize: String(PAGE_SIZE),
    selectedTab: input.selectedTab,
    path: input.path ?? "",
  });

  return greenbotClient.get("package", { searchParams }).json<Package>();
}

export function getWorkspaces() {
  return greenbotClient.get("workspaces").json<Package["workspaces"]>();
}

export type UpgradePackagesInput = {
  packages: PackageInfo[];
  path?: string;
};

export function upgradePackages(
  input: UpgradePackagesInput
): Promise<PackageInfo[]> {
  return greenbotClient
    .post("upgrade-packages", { json: input })
    .json<PackageInfo[]>();
}

export function getBundlephobiaReport(name: string) {
  return bundlephobiaClient
    .get(`api/size?package=${name}`)
    .json<BundlephobiaReport>();
}

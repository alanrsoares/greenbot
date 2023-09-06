import ky from "ky";
import type { BundlephobiaReport, Package, PackageInfo } from "~/domain/types";

const greenbotClient = ky.create({
  prefixUrl: "http://localhost:5001/",
});

const bundlephobiaClient = ky.create({
  prefixUrl: "https://bundlephobia.com/",
});

export function getPackage(path?: string) {
  const searchParams = path ? { path } : undefined;

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

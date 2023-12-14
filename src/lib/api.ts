import ky from "ky";
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

export type GetPackageInput = {
  path?: string;
  tab?: TabKind;
};

export function getPackage(input: GetPackageInput) {
  const searchParams = new URLSearchParams();

  if (input.path) {
    searchParams.set("path", input.path);
  }

  if (input.tab) {
    searchParams.set("tab", input.tab);
  }

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

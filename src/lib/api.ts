import ky from "ky";
import type { BundlephobiaReport, Package, PackageInfo } from "~/domain/types";

const greenbotClient = ky.create({
  prefixUrl: "http://localhost:5001/",
});

const bundlephobiaClient = ky.create({
  prefixUrl: "https://bundlephobia.com/",
});

export function getPackage() {
  return greenbotClient.get("package").json<Package>();
}

export function upgradePackages(input: PackageInfo[]): Promise<PackageInfo[]> {
  return greenbotClient
    .post("upgrade-packages", {
      json: input,
    })
    .json<PackageInfo[]>();
}

export function getBundlephobiaReport(name: string) {
  return bundlephobiaClient
    .get(`api/size?package=${name}`)
    .json<BundlephobiaReport>();
}

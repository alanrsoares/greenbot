import ky from "ky";
import type { Package, PackageInfo } from "domain/types";

const client = ky.create({
  prefixUrl: "http://localhost:5001/",
});

export async function getPackage() {
  const result = await client.get("package").json<Package>();

  return result;
}

export async function upgradePackages(
  input: PackageInfo[]
): Promise<PackageInfo[]> {
  const result = await client
    .post("upgrade-packages", {
      json: input,
    })
    .json<PackageInfo[]>();

  return result;
}

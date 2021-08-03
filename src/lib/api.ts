import axios from "axios";

import type { Package, PackageInfo } from "domain/types";

const client = axios.create({
  baseURL: "http://localhost:5001",
});

export async function getPackage() {
  const result = await client.get<Package>("/package");

  return result.data;
}

export async function upgradePackage(input: PackageInfo) {
  const result = await client.post("/upgrade", input);

  return result.data;
}

export async function upgradePackages(input: PackageInfo[]) {
  const result = await client.post("/upgrade-packages", input);

  return result.data;
}

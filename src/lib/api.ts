import axios from "axios";

import type { Package, PackageInfo } from "domain/types";

const client = axios.create({
  baseURL: "http://localhost:5001",
});

const delay = (timeout: number) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(timeout), timeout);
  });

export async function getPackage() {
  const result = await client.get<Package>("/package");

  return result.data;
}

export async function upgradePackages(
  input: PackageInfo[]
): Promise<PackageInfo[]> {
  const result = await client.post("/upgrade-packages", input);
  await delay(1000 * Math.random());
  return result.data;
}

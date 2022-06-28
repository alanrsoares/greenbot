import axios from "ky";

import type { Package, PackageInfo } from "domain/types";

const client = axios.create({
  prefixUrl: "http://localhost:5001",
});

const delay = (timeout: number) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(timeout), timeout);
  });

export async function getPackage() {
  const result = await client.get("/package").json<Package>();

  return result;
}

export async function upgradePackages(
  input: PackageInfo[]
): Promise<PackageInfo[]> {
  const result = await client
    .post("/upgrade-packages", {
      body: JSON.stringify(input),
    })
    .json<PackageInfo[]>();
  if (process.env.NODE_ENV === "development") {
    await delay(1000 * Math.random());
  }

  return result;
}

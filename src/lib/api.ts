import axios from "axios";
import type { Package, PackageInfo } from "./types";

const client = axios.create({
  baseURL: "http://localhost:5001",
});

export async function getPackage() {
  const result = await client.get<Package>("/package");

  return result.data;
}

export async function getPackageInfo(
  name: string,
  version: string,
  namespace?: string
) {
  const result = namespace
    ? await client.get<PackageInfo>(`/info/${namespace}/${name}/${version}`)
    : await client.get<PackageInfo>(`/info/${name}/${version}`);

  return result.data;
}

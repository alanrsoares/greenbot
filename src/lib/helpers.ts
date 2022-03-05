export const rawVersion = (version: string) => ({
  version: version.replace(/[\^~]/, ""),
  qualifier: isNaN(Number(version[0])) ? version[0] : undefined,
});

export const isLatestVersion = (version: string, latest: string) =>
  rawVersion(version).version === latest;

export const ellipsis = (max: number, str: string) =>
  str.length <= max ? str : str.slice(0, max).concat("…");

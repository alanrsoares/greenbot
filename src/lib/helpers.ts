export const rawVersion = (version: string) => ({
  version: version.replace(/[\^~]/, ""),
  qualifier: isNaN(Number(version[0])) ? version[0] : undefined,
});

export const isLatestVersion = (version: string, latest: string) =>
  rawVersion(version).version === latest;

export const ellipsis = (max: number, str: string) =>
  str.length <= max ? str : str.slice(0, max).concat("…");

/*
 * broofa's uuidv4 implementation
 * https://stackoverflow.com/a/2117523/104380
 */
export const uuidv4 = () => {
  const pattern = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
  return pattern.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

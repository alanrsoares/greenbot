import { describe, it, expect } from "bun:test";
import {
  parseSpecifier,
  formatUpdatedSpecifier,
  getDisplaySpecifiers,
  rawVersion,
  isValidSemVer,
} from "./shared";

describe("specifier parser and formatter", () => {
  describe("parseSpecifier", () => {
    it("parses standard semver versions with caret", () => {
      const res = parseSpecifier("^6.0.3", "typescript");
      expect(res.isWorkspace).toBe(false);
      expect(res.isCatalog).toBe(false);
      expect(res.isNpmAlias).toBe(false);
      expect(res.qualifier).toBe("^");
      expect(res.version).toBe("6.0.3");
      expect(res.realName).toBe("typescript");
    });

    it("parses standard semver versions with tilde", () => {
      const res = parseSpecifier("~1.2.3", "foo");
      expect(res.qualifier).toBe("~");
      expect(res.version).toBe("1.2.3");
    });

    it("parses exact semver versions", () => {
      const res = parseSpecifier("1.2.3", "foo");
      expect(res.qualifier).toBe("");
      expect(res.version).toBe("1.2.3");
    });

    it("parses npm alias specifiers", () => {
      const res = parseSpecifier("npm:typescript@^6.0.3", "typescript6");
      expect(res.isNpmAlias).toBe(true);
      expect(res.realName).toBe("typescript");
      expect(res.aliasPrefix).toBe("npm:typescript@");
      expect(res.qualifier).toBe("^");
      expect(res.version).toBe("6.0.3");
    });

    it("parses scoped npm alias specifiers", () => {
      const res = parseSpecifier("npm:@types/node@~20.1.0", "types-node");
      expect(res.isNpmAlias).toBe(true);
      expect(res.realName).toBe("@types/node");
      expect(res.aliasPrefix).toBe("npm:@types/node@");
      expect(res.qualifier).toBe("~");
      expect(res.version).toBe("20.1.0");
    });

    it("parses catalog specifiers containing npm alias", () => {
      const res = parseSpecifier(
        "catalog:npm:typescript@^6.0.3",
        "typescript6",
      );
      expect(res.isCatalog).toBe(true);
      expect(res.isNpmAlias).toBe(true);
      expect(res.realName).toBe("typescript");
      expect(res.aliasPrefix).toBe("npm:typescript@");
      expect(res.qualifier).toBe("^");
      expect(res.version).toBe("6.0.3");
    });

    it("parses workspace protocol specifiers", () => {
      const res = parseSpecifier("workspace:^", "@onrails/maybe");
      expect(res.isWorkspace).toBe(true);
      expect(res.version).toBe("workspace:^");
    });
  });

  describe("formatUpdatedSpecifier", () => {
    it("formats standard caret updates", () => {
      expect(formatUpdatedSpecifier("^6.0.3", "6.0.4")).toBe("^6.0.4");
    });

    it("formats standard tilde updates", () => {
      expect(formatUpdatedSpecifier("~1.2.0", "1.2.5")).toBe("~1.2.5");
    });

    it("formats exact version updates", () => {
      expect(formatUpdatedSpecifier("1.2.0", "1.2.5")).toBe("1.2.5");
    });

    it("formats npm alias updates", () => {
      expect(formatUpdatedSpecifier("npm:typescript@^6.0.3", "6.0.4")).toBe(
        "npm:typescript@^6.0.4",
      );
    });

    it("formats catalog npm alias updates", () => {
      expect(
        formatUpdatedSpecifier("catalog:npm:typescript@^6.0.3", "6.0.4"),
      ).toBe("catalog:npm:typescript@^6.0.4");
    });

    it("preserves workspace specifiers unchanged", () => {
      expect(formatUpdatedSpecifier("workspace:^", "1.0.0")).toBe(
        "workspace:^",
      );
    });

    it("preserves catalog protocol references without version unchanged", () => {
      expect(formatUpdatedSpecifier("catalog:", "1.4.0")).toBe("catalog:");
      expect(formatUpdatedSpecifier("catalog:default", "1.4.0")).toBe(
        "catalog:default",
      );
    });
  });

  describe("getDisplaySpecifiers", () => {
    it("formats display specifiers for catalog packages", () => {
      const res = getDisplaySpecifiers(
        {
          ver: "catalog:",
          resolvedVer: "^1.3.5",
          isCatalog: true,
        },
        "1.4.0",
      );
      expect(res.currentSpec).toBe("catalog:^1.3.5");
      expect(res.targetSpec).toBe("catalog:^1.4.0");
    });

    it("formats display specifiers for non-catalog packages", () => {
      const res = getDisplaySpecifiers(
        {
          ver: "^6.20.0",
          isCatalog: false,
        },
        "6.24.0",
      );
      expect(res.currentSpec).toBe("^6.20.0");
      expect(res.targetSpec).toBe("^6.24.0");
    });
  });

  describe("rawVersion and isValidSemVer", () => {
    it("extracts raw version correctly", () => {
      expect(rawVersion("^6.0.3")).toEqual({
        version: "6.0.3",
        qualifier: "^",
      });
      expect(rawVersion("npm:typescript@^6.0.3")).toEqual({
        version: "6.0.3",
        qualifier: "^",
      });
    });

    it("validates semver correctness", () => {
      expect(isValidSemVer("^6.0.3")).toBe(true);
      expect(isValidSemVer("npm:typescript@^6.0.3")).toBe(true);
      expect(isValidSemVer("workspace:^")).toBe(false);
    });
  });
});

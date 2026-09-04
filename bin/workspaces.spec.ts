import { describe, it, expect, beforeEach, afterEach } from "bun:test";
import fs from "fs/promises";
import path from "path";
import os from "os";
import { getWorkspaces } from "./workspaces";

describe("getWorkspaces", () => {
  let tmpDir: string;

  beforeEach(async () => {
    tmpDir = await fs.mkdtemp(
      path.join(os.tmpdir(), "greenbot-workspaces-test-"),
    );
  });

  afterEach(async () => {
    await fs.rm(tmpDir, { recursive: true, force: true }).catch(() => {});
  });

  async function createPackage(
    relPath: string,
    pkgJson: Record<string, unknown>,
  ) {
    const pkgDir = path.join(tmpDir, relPath);
    await fs.mkdir(pkgDir, { recursive: true });
    await fs.writeFile(
      path.join(pkgDir, "package.json"),
      JSON.stringify(pkgJson, null, 2),
      "utf8",
    );
  }

  it("discovers packages under both packages/* and apps/*", async () => {
    await createPackage("apps/web", {
      name: "@monorepo/web",
      version: "1.0.0",
    });
    await createPackage("apps/api", {
      name: "@monorepo/api",
      version: "0.2.0",
    });
    await createPackage("packages/ui", {
      name: "@monorepo/ui",
      version: "0.1.0",
    });
    await createPackage("packages/utils", {
      name: "@monorepo/utils",
      version: "0.1.0",
    });

    const rootPkg = {
      name: "root",
      dependencies: {},
      devDependencies: {},
      workspaces: ["apps/*", "packages/*"],
    };

    const res = await getWorkspaces(rootPkg, "bun", tmpDir);

    expect(res).toHaveLength(4);
    const names = res.map((w) => w.name);
    expect(names).toContain("@monorepo/web");
    expect(names).toContain("@monorepo/api");
    expect(names).toContain("@monorepo/ui");
    expect(names).toContain("@monorepo/utils");
  });

  it("discovers packages when workspaces mix direct paths and globs (e.g. apps/api, apps/web, packages/*)", async () => {
    await createPackage("apps/api", {
      name: "@monorepo/api",
      version: "0.1.0",
    });
    await createPackage("apps/web", {
      name: "@monorepo/web",
      version: "0.1.0",
    });
    await createPackage("packages/connectors", {
      name: "@monorepo/connectors",
      version: "0.1.0",
    });

    const rootPkg = {
      name: "root",
      dependencies: {},
      devDependencies: {},
      workspaces: {
        packages: ["apps/api", "apps/web", "packages/*"],
      },
    };

    const res = await getWorkspaces(rootPkg, "bun", tmpDir);

    expect(res).toHaveLength(3);
    const names = res.map((w) => w.name);
    expect(names).toContain("@monorepo/api");
    expect(names).toContain("@monorepo/web");
    expect(names).toContain("@monorepo/connectors");
  });

  it("discovers nested packages with patterns like packages/*/* and apps/*/*", async () => {
    await createPackage("packages/domain/auth", {
      name: "@monorepo/auth",
      version: "1.0.0",
    });
    await createPackage("packages/domain/billing", {
      name: "@monorepo/billing",
      version: "1.0.0",
    });
    await createPackage("apps/client/mobile", {
      name: "@monorepo/mobile",
      version: "2.0.0",
    });

    const rootPkg = {
      name: "root",
      dependencies: {},
      devDependencies: {},
      workspaces: ["packages/*/*", "apps/*/*"],
    };

    const res = await getWorkspaces(rootPkg, "npm", tmpDir);

    expect(res).toHaveLength(3);
    const names = res.map((w) => w.name);
    expect(names).toContain("@monorepo/auth");
    expect(names).toContain("@monorepo/billing");
    expect(names).toContain("@monorepo/mobile");
  });

  it("handles pnpm-workspace.yaml with exclusions", async () => {
    await createPackage("packages/core", {
      name: "@monorepo/core",
      version: "1.0.0",
    });
    await createPackage("packages/test/fixture", {
      name: "@monorepo/fixture",
      version: "0.0.1",
    });
    await createPackage("apps/dashboard", {
      name: "@monorepo/dashboard",
      version: "1.0.0",
    });

    const pnpmWorkspaceYaml = `
packages:
  - 'packages/*'
  - 'apps/*'
  - '!packages/test/*'
`;
    await fs.writeFile(
      path.join(tmpDir, "pnpm-workspace.yaml"),
      pnpmWorkspaceYaml,
      "utf8",
    );

    const rootPkg = {
      name: "root",
      dependencies: {},
      devDependencies: {},
    };

    const res = await getWorkspaces(rootPkg, "pnpm", tmpDir);

    const names = res.map((w) => w.name);
    expect(names).toContain("@monorepo/core");
    expect(names).toContain("@monorepo/dashboard");
    expect(names).not.toContain("@monorepo/fixture");
  });

  it("ignores node_modules and root package.json", async () => {
    await fs.writeFile(
      path.join(tmpDir, "package.json"),
      JSON.stringify({ name: "root", workspaces: ["packages/**"] }),
      "utf8",
    );
    await createPackage("packages/lib", {
      name: "@monorepo/lib",
      version: "1.0.0",
    });
    await createPackage("packages/lib/node_modules/dep", {
      name: "dep",
      version: "1.0.0",
    });

    const rootPkg = {
      name: "root",
      dependencies: {},
      devDependencies: {},
      workspaces: ["packages/**"],
    };

    const res = await getWorkspaces(rootPkg, "yarn", tmpDir);

    expect(res).toHaveLength(1);
    expect(res[0]?.name).toBe("@monorepo/lib");
  });

  it("falls back to directory basename if package name is missing", async () => {
    await createPackage("apps/docs", { version: "0.1.0" });

    const rootPkg = {
      name: "root",
      dependencies: {},
      devDependencies: {},
      workspaces: ["apps/*"],
    };

    const res = await getWorkspaces(rootPkg, "bun", tmpDir);

    expect(res).toHaveLength(1);
    expect(res[0]?.name).toBe("docs");
    expect(res[0]?.version).toBe("0.1.0");
  });

  it("returns empty array if no workspaces configured", async () => {
    const rootPkg = {
      name: "root",
      dependencies: {},
      devDependencies: {},
    };

    const res = await getWorkspaces(rootPkg, "npm", tmpDir);
    expect(res).toEqual([]);
  });
});

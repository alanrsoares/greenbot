import { describe, it, expect } from "bun:test";
import { PassThrough } from "node:stream";
import { nestedMultiselect } from "./prompt";

describe("nestedMultiselect prompt", () => {
  it("renders with instructions and guide without throwing", async () => {
    const input = new PassThrough();
    const output = new PassThrough();
    let rendered = "";
    output.on("data", (chunk) => {
      rendered += chunk.toString();
    });

    const promise = nestedMultiselect({
      message: "Select packages to upgrade",
      options: [
        { value: "pkg-a", label: "pkg-a" },
        { value: "pkg-b", label: "pkg-b" },
      ],
      showInstructions: true,
      withGuide: true,
      input,
      output,
    });

    input.write("\r");
    const result = await promise;

    expect(result).toEqual([]);
    expect(rendered).toContain("Select packages to upgrade");
  });

  it("selects options correctly", async () => {
    const input = new PassThrough();
    const output = new PassThrough();

    const promise = nestedMultiselect({
      message: "Select packages",
      options: [
        { value: "pkg-a", label: "pkg-a" },
        { value: "pkg-b", label: "pkg-b" },
      ],
      initialValues: ["pkg-a"],
      input,
      output,
    });

    input.write("\r");
    const result = await promise;

    expect(result).toEqual(["pkg-a"]);
  });
});

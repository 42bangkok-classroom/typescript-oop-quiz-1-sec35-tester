// mirrored-rhombus.test.ts
import { spawnSync } from "child_process";
import path from "path";

function runStarPatternCli(input?: string) {
  const scriptPath = path.join(__dirname, "mirrored-rhombus.ts");

  const args = ["-r", "ts-node/register", scriptPath];
  if (typeof input !== "undefined") args.push(input);

  return spawnSync(process.execPath, args, {
    encoding: "utf8",
    env: {
      ...process.env,
      TS_NODE_TRANSPILE_ONLY: "1",
    },
    timeout: 5000,
  });
}

describe("Right Shifted Star Pattern (N-based) CLI", () => {
  // ✅ Valid patterns
  test("N = 1", () => {
    const res = runStarPatternCli("1");
    expect(res.stdout?.trim()).toBe(
`*`
    );
  });

  test("N = 3", () => {
    const res = runStarPatternCli("3");
    expect(res.stdout?.trim()).toBe(
`***
 ***
  ***`
    );
  });

  test("N = 5", () => {
    const res = runStarPatternCli("5");
    expect(res.stdout?.trim()).toBe(
`*****
 *****
  *****
   *****
    *****`
    );
  });

  // ❌ Invalid inputs
  test.each([
    ["0"],
    ["-1"],
    ["-10"],
    ["ABC"],
    ["1.5"],
    [""],
  ])("invalid input %s → Invalid Input", (input) => {
    const res = runStarPatternCli(input);
    expect(res.stdout?.trim()).toBe("Invalid Input");
  });

  // ❌ Missing argument
  test("missing argument → Invalid Input", () => {
    const res = runStarPatternCli();
    expect(res.stdout?.trim()).toBe("Invalid Input");
  });
});

// number-pattern.test.ts
import { spawnSync } from "child_process";
import path from "path";

function runDescendingPatternCli(input?: string) {
  const scriptPath = path.join(__dirname, "number-pattern.ts");

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

describe("Number Pattern (Descending) CLI", () => {
  // ✅ Valid patterns
  test("prints correct descending pattern for 5", () => {
    const res = runDescendingPatternCli("5");
    expect(res.stdout?.trim()).toBe(
`54321
4321
321
21
1`
    );
  });

  test("prints correct descending pattern for 3", () => {
    const res = runDescendingPatternCli("3");
    expect(res.stdout?.trim()).toBe(
`321
21
1`
    );
  });

  test("prints correct descending pattern for 1", () => {
    const res = runDescendingPatternCli("1");
    expect(res.stdout?.trim()).toBe("1");
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
    const res = runDescendingPatternCli(input);
    expect(res.stdout?.trim()).toBe("Invalid Input");
  });

  // ❌ Missing argument
  test("missing argument → Invalid Input", () => {
    const res = runDescendingPatternCli();
    expect(res.stdout?.trim()).toBe("Invalid Input");
  });
});

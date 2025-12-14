// sum.test.ts
import { spawnSync } from "child_process";
import path from "path";

function runSumCli(input?: string) {
  const scriptPath = path.join(__dirname, "sum.ts");

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

describe("Sum of Numbers 1 to N CLI (integration)", () => {
  // ✅ Valid inputs
  test.each([
    ["1", "Sum: 1"],
    ["2", "Sum: 3"],
    ["3", "Sum: 6"],
    ["5", "Sum: 15"],
    ["10", "Sum: 55"],
    ["100", "Sum: 5050"],
  ])("N=%s → %s", (input, expected) => {
    const res = runSumCli(input);
    expect(res.stdout?.trim()).toBe(expected);
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
    const res = runSumCli(input);
    expect(res.stdout?.trim()).toBe("Invalid Input");
  });

  // ❌ Missing argument
  test("missing argument → Invalid Input", () => {
    const res = runSumCli();
    expect(res.stdout?.trim()).toBe("Invalid Input");
  });
});

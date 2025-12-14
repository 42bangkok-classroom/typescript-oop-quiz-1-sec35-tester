// factorial.cli.test.ts
import { spawnSync } from "child_process";
import path from "path";

function runFactorialCli(input?: string) {
  const scriptPath = path.join(__dirname, "factorial.ts");

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

describe("Factorial Calculator CLI (integration)", () => {
  // ✅ Valid inputs
  test.each([
    ["0", "1"],
    ["1", "1"],
    ["2", "2"],
    ["3", "6"],
    ["4", "24"],
    ["5", "120"],
    ["6", "720"],
  ])("N=%s → %s", (input, expected) => {
    const res = runFactorialCli(input);
    expect(res.stdout?.trim()).toBe(expected);
  });

  // ❌ Invalid inputs
  test.each([
    ["-1"],
    ["-10"],
    ["1.5"],
    ["ABC"],
    [""],
  ])("invalid input %s → Invalid Input", (input) => {
    const res = runFactorialCli(input);
    expect(res.stdout?.trim()).toBe("Invalid Input");
  });

  // ❌ Missing argument
  test("missing argument → Invalid Input", () => {
    const res = runFactorialCli();
    expect(res.stdout?.trim()).toBe("Invalid Input");
  });
});

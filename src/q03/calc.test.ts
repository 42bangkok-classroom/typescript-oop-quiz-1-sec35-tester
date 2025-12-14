// calc.test.ts
import { spawnSync } from "child_process";
import path from "path";

function runCalcCli(op?: string, a?: string, b?: string) {
  const scriptPath = path.join(__dirname, "calc.ts");

  const args = ["-r", "ts-node/register", scriptPath];
  if (typeof op !== "undefined") args.push(op);
  if (typeof a !== "undefined") args.push(a);
  if (typeof b !== "undefined") args.push(b);

  return spawnSync(process.execPath, args, {
    encoding: "utf8",
    env: {
      ...process.env,
      TS_NODE_TRANSPILE_ONLY: "1",
    },
    timeout: 5000,
  });
}

describe("Calculator CLI (integration)", () => {
  // ✅ Valid calculations
  test.each([
    ["add", "4", "5", "9"],
    ["add", "0", "0", "0"],
    ["sub", "10", "3", "7"],
    ["sub", "3", "10", "-7"],
    ["mul", "6", "4", "24"],
    ["mul", "0", "5", "0"],
    ["div", "8", "2", "4"],
    ["div", "9", "3", "3"],
  ])("op=%s a=%s b=%s → %s", (op, a, b, expected) => {
    const res = runCalcCli(op, a, b);
    expect(res.stdout?.trim()).toBe(expected);
  });

  // ❌ Divide by zero
  test.each([
    ["div", "8", "0"],
    ["div", "0", "0"],
  ])("divide by zero op=%s a=%s b=%s → Invalid input", (op, a, b) => {
    const res = runCalcCli(op, a, b);
    expect(res.stdout?.trim()).toBe("Invalid input");
  });

  // ❌ Invalid operator
  test.each([
    ["mod", "5", "2"],
    ["plus", "1", "2"],
    ["", "1", "2"],
  ])("invalid operator %s", (op, a, b) => {
    const res = runCalcCli(op, a, b);
    expect(res.stdout?.trim()).toBe("Invalid operator");
  });

  // ❌ Invalid numeric inputs
  test.each([
    ["add", "A", "1"],
    ["add", "1", "B"],
    ["add", "A", "B"],
    ["div", "A", "0"],
    ["mul", "", "5"],
    ["sub", "5", ""],
  ])("invalid input op=%s a=%s b=%s", (op, a, b) => {
    const res = runCalcCli(op, a, b);
    expect(res.stdout?.trim()).toBe("Invalid input");
  });

  // ❌ Missing arguments
  test("missing all arguments → Invalid input", () => {
    const res = runCalcCli();
    expect(res.stdout?.trim()).toBe("Invalid input");
  });

  test("missing numbers → Invalid input", () => {
    const res = runCalcCli("add", "5");
    expect(res.stdout?.trim()).toBe("Invalid input");
  });
});

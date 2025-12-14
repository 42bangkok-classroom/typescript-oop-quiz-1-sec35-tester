// atm.test.ts
import { spawnSync } from "child_process";
import path from "path";

function runAtmCli(balance?: string, amount?: string) {
  const scriptPath = path.join(__dirname, "atm.ts");

  const args = ["-r", "ts-node/register", scriptPath];
  if (typeof balance !== "undefined") args.push(balance);
  if (typeof amount !== "undefined") args.push(amount);

  return spawnSync(process.execPath, args, {
    encoding: "utf8",
    env: {
      ...process.env,
      TS_NODE_TRANSPILE_ONLY: "1",
    },
    timeout: 5000,
  });
}

describe("ATM Withdrawal CLI (integration)", () => {
  // ✅ Approved withdrawals
  test.each([
    ["5000", "3000", "Withdrawal approved"],
    ["10000", "5000", "Withdrawal approved"],
    ["5000", "0", "Withdrawal approved"],
  ])("balance %s, amount %s → approved", (balance, amount, expected) => {
    const res = runAtmCli(balance, amount);
    expect(res.stdout?.trim()).toBe(expected);
  });

  // ❌ Insufficient balance (must be checked FIRST)
  test.each([
    ["3000", "4000"],
    ["0", "100"],
    ["100", "500"],
  ])("balance %s, amount %s → Insufficient balance", (balance, amount) => {
    const res = runAtmCli(balance, amount);
    expect(res.stdout?.trim()).toBe("Insufficient balance");
  });

  // ❌ Exceeds per-withdrawal limit
  test.each([
    ["10000", "6000"],
    ["6000", "5001"],
    ["9999", "7000"],
  ])("balance %s, amount %s → Exceeds limit", (balance, amount) => {
    const res = runAtmCli(balance, amount);
    expect(res.stdout?.trim()).toBe("Exceeds per-withdrawal limit");
  });

  // ❌ Invalid inputs
  test.each([
    ["ABC", "1000"],
    ["1000", "ABC"],
    ["ABC", "XYZ"],
    ["", "1000"],
    ["1000", ""],
  ])("invalid input balance=%s amount=%s", (balance, amount) => {
    const res = runAtmCli(balance, amount);
    expect(res.stdout?.trim()).toBe("Invalid Input");
  });

  // ❌ Missing arguments
  test("missing both arguments → Invalid Input", () => {
    const res = runAtmCli();
    expect(res.stdout?.trim()).toBe("Invalid Input");
  });

  test("missing withdrawal amount → Invalid Input", () => {
    const res = runAtmCli("1000");
    expect(res.stdout?.trim()).toBe("Invalid Input");
  });
});

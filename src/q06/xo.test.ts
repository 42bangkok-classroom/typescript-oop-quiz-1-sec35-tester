// xo.test.ts
import { spawnSync } from "child_process";
import path from "path";

function runXoCli(input?: string) {
  const scriptPath = path.join(__dirname, "xo.ts");

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

describe("XO Pattern CLI (integration)", () => {
  // ✅ Small sizes
  test("N = 1", () => {
    const res = runXoCli("1");
    expect(res.stdout?.trim()).toBe("x");
  });

  test("N = 2", () => {
    const res = runXoCli("2");
    expect(res.stdout?.trim()).toBe(
`xx
xx`
    );
  });

  test("N = 3", () => {
    const res = runXoCli("3");
    expect(res.stdout?.trim()).toBe(
`xxx
xox
xxx`
    );
  });

  // ✅ Normal size
  test("N = 5", () => {
    const res = runXoCli("5");
    expect(res.stdout?.trim()).toBe(
`xxxxx
xooox
xooox
xooox
xxxxx`
    );
  });

  // ❌ Invalid inputs
  test.each([
    ["0"],
    ["-1"],
    ["-5"],
    ["ABC"],
    ["1.5"],
    [""],
  ])("invalid input %s → Invalid Input", (input) => {
    const res = runXoCli(input);
    expect(res.stdout?.trim()).toBe("Invalid Input");
  });

  // ❌ Missing argument
  test("missing argument → Invalid Input", () => {
    const res = runXoCli();
    expect(res.stdout?.trim()).toBe("Invalid Input");
  });
});

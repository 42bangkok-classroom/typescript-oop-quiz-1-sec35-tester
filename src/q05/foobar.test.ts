// foobar.test.ts
import { spawnSync } from "child_process";
import path from "path";

function runFooBarCli(input?: string) {
  const scriptPath = path.join(__dirname, "foobar.ts");

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

describe("Quiz 2 — FooBar (correct output)", () => {
  // ✅ Order-sensitive test (21 must be FooBar)
  test("prints correct FooBar sequence for 21", () => {
    const res = runFooBarCli("21");
    expect(res.stdout?.trim()).toBe(
`1
2
Foo
4
5
Foo
Bar
8
Foo
10
11
Foo
13
Bar
Foo
16
17
Foo
19
20
FooBar`
    );
  });

  // ✅ Smaller sequences
  test("prints correct FooBar sequence for 7", () => {
    const res = runFooBarCli("7");
    expect(res.stdout?.trim()).toBe(
`1
2
Foo
4
5
Foo
Bar`
    );
  });

  test("prints correct FooBar sequence for 3", () => {
    const res = runFooBarCli("3");
    expect(res.stdout?.trim()).toBe(
`1
2
Foo`
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
    const res = runFooBarCli(input);
    expect(res.stdout?.trim()).toBe("Invalid Input");
  });

  // ❌ Missing argument
  test("missing argument → Invalid Input", () => {
    const res = runFooBarCli();
    expect(res.stdout?.trim()).toBe("Invalid Input");
  });
});

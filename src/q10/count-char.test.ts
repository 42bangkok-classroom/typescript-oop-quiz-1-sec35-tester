// count-char.cli.test.ts
import { spawnSync } from "child_process";
import path from "path";

function runCountCharCli(input?: string) {
  const scriptPath = path.join(__dirname, "count-char.ts");

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

describe("Count Letters and Digits CLI (integration)", () => {
  // ✅ Valid inputs
  test("counts letters, digits, and others correctly", () => {
    const res = runCountCharCli("a1b2c3!");
    expect(res.stdout?.trim()).toBe(
`Letters: 3
Digits: 3
Others: 1`
    );
  });

  test("counts only letters", () => {
    const res = runCountCharCli("abcXYZ");
    expect(res.stdout?.trim()).toBe(
`Letters: 6
Digits: 0
Others: 0`
    );
  });

  test("counts only digits", () => {
    const res = runCountCharCli("12345");
    expect(res.stdout?.trim()).toBe(
`Letters: 0
Digits: 5
Others: 0`
    );
  });

  test("counts spaces and symbols as Others", () => {
    const res = runCountCharCli("a 1!");
    expect(res.stdout?.trim()).toBe(
`Letters: 1
Digits: 1
Others: 2`
    );
  });

  // ⚠️ Empty string → no output
  test("empty string produces no output", () => {
    const res = runCountCharCli("");
    expect(res.stdout?.trim()).toBe("");
  });

  // ⚠️ Missing argument → no output
  test("missing argument produces no output", () => {
    const res = runCountCharCli();
    expect(res.stdout?.trim()).toBe("");
  });
});

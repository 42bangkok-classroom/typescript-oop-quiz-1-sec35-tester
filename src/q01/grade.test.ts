// grade.test.ts
import { spawnSync } from "child_process";
import path from "path";

function runGradeCli(input: string | undefined) {
  const scriptPath = path.join(__dirname, "grade.ts");

  const args = ["-r", "ts-node/register", scriptPath];
  if (typeof input !== "undefined") args.push(String(input));

  return spawnSync(process.execPath, args, {
    encoding: "utf8",
    env: {
      ...process.env,
      TS_NODE_TRANSPILE_ONLY: "1",
    },
    timeout: 5000,
  });
}

describe("Grade CLI (integration) — run grade.ts with ts-node", () => {
  // ✅ Valid grade cases (boundaries + normal values)
  test.each([
    ["100", "Grade is A"],
    ["95", "Grade is A"],
    ["89", "Grade is A"],
    ["80", "Grade is A"],

    ["79", "Grade is B"],
    ["75", "Grade is B"],
    ["70", "Grade is B"],

    ["69", "Grade is C"],
    ["65", "Grade is C"],
    ["60", "Grade is C"],

    ["59", "Grade is D"],
    ["55", "Grade is D"],
    ["50", "Grade is D"],

    ["49", "Grade is F"],
    ["41", "Grade is F"],
    ["0", "Grade is F"],
  ])("input %s → %s", (input, expected) => {
    const res = runGradeCli(input);
    expect(res.stdout?.trim()).toBe(expected);
  });

  // ❌ Invalid input cases
  test.each([
    ["101"],
    ["-1"],
    ["-50"],
    ["ABC"],
    ["12A"],
    [""],
  ])("invalid input %s → Invalid Input", (input) => {
    const res = runGradeCli(input);
    expect(res.stdout?.trim()).toBe("Invalid Input");
  });

  test("missing argument → Invalid Input", () => {
    const res = runGradeCli(undefined);
    expect(res.stdout?.trim()).toBe("Invalid Input");
  });
});

# Quiz 9 — Factorial Calculator

Create a TypeScript program that calculates the factorial of a given number **N**. The program must read the input from the command line, validate it, and print the factorial result.

## File Submit
`factorial.ts`

## Instructions
1. Read one numeric value from the command line.
2. Convert the input to a number.
3. Validate the input:
   - Empty argument is **Invalid Input**
   - Must be a non-negative integer (`>= 0`)
   - If invalid, print `"Invalid Input"`
4. Calculate the factorial of **N** using a loop.
5. Print the result.

## Example
```bash
$ ts-node factorial.ts 1
1
$ ts-node factorial.ts 2
2
$ ts-node factorial.ts 3
6
$ ts-node factorial.ts 4
24
$ ts-node factorial.ts 5
120
$ ts-node factorial.ts 0
1
$ ts-node factorial.ts
Invalid Input
$ ts-node factorial.ts -3
Invalid Input
$ ts-node factorial.ts ABC
Invalid Input
```

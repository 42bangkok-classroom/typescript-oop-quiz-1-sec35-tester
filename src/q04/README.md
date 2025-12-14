# Quiz 4 — Sum of Numbers 1 to N

Create a TypeScript program that calculates the sum of all integers from **1** to a given number **N**. The program must read the input from the command line and display the total sum.

## File Submit
`sum.ts`

## Instructions
1. Read one numeric value from the command line.
2. Convert the input to a number.
3. Validate the input:
   - Must be a positive integer (`>= 0`)
   - If invalid, return `Invalid Input`
4. Calculate the sum of numbers from **1** to **N** using a loop.
5. Print the result in the specified format.

## Example
```bash
$ ts-node sum.ts 10
Sum: 55
$ ts-node sum.ts
Invalid Input
$ ts-node sum.ts -3
Invalid Input
$ ts-node sum.ts ABC
Invalid Input
```
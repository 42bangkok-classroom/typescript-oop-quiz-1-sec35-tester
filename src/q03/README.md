# Quiz 3 — Calculator

Create a TypeScript program that performs a basic arithmetic calculation based on an operator and two numbers provided from the command line. The program must validate the operator and inputs and return appropriate error messages when necessary.

## File Submit
`calc.ts`

## Instructions
1. Read an operator and two numeric values from the command line.
2. Supported operators:
   - `add` → addition
   - `sub` → subtraction
   - `mul` → multiplication
   - `div` → division
3. Validate the inputs:
   - Both values must be valid numbers
   - If invalid, return `Invalid input`
4. Validate the operator:
   - If the operator is not supported, return `Invalid operator`
5. Special rule:
   - If the operator is `div` and the second number is `0`, return `Invalid input`
6. Return the calculation result as a string.

## Example
```bash
$ ts-node calc.ts add 4 5
9
$ ts-node calc.ts sub 10 3
7
$ ts-node calc.ts mul 6 4
24
$ ts-node calc.ts div 8 2
4
$ ts-node calc.ts
Invalid input
$ ts-node calc.ts div a
Invalid input
$ ts-node calc.ts div 8 0
Invalid input
$ ts-node calc.ts mod 5 2
Invalid operator
```
# Quiz 6 — XO Pattern

Create a TypeScript program that prints a square pattern using characters `x` and `o`. The program must generate a border of `x` characters and fill the inside area with `o` characters.

## File Submit
`xo.ts`

## Instructions
1. Read one argument from the command line.
2. Convert the input to a number.
3. Validate the input:
   - Must be a positive integer (`>= 1`)
   - If invalid, return `"Invalid Input"`.
4. Generate a square pattern of size **N × N**:
   - The first and last rows contain only `x`
   - The first and last characters of each middle row are `x`
   - All inner characters are `o` not zero
5. Return the full pattern as a single string, with each row on a new line.

## Example
```sh
$ ts-node xo.ts 1
x
$ ts-node xo.ts 2
xx
xx
$ ts-node xo.ts 3
xxx
xox
xxx
$ ts-node xo.ts 5
xxxxx
xooox
xooox
xooox
xxxxx
$ ts-node xo.ts
Invalid Input
$ ts-node xo.ts ABC
Invalid Input
```
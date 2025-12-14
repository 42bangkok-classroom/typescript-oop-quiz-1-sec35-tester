# Quiz — Mirrored Rhombus Pattern

## Description
Create a TypeScript program that prints a right-shifted star (`*`) pattern.  
The program uses the input number **N** to determine both the number of rows and the number of stars per row.

## File Submit
`mirrored-rhombus.ts`

## Instructions
1. Read one argument from the command line.
2. Convert the input to a number.
3. Validate the input:
   - Must be a positive integer (`>= 1`)
   - If invalid, return `"Invalid Input"`.
4. Generate the star pattern:
   - The number of rows equals **N**.
   - Each row contains exactly **N stars (`*`)**.
   - Each next row starts with **one more space** than the previous row.

---

## Example
```sh
$ ts-node mirrored-rhombus.ts 3
***
 ***
  ***
$ ts-node mirrored-rhombus.ts 5
*****
 *****
  *****
   *****
    *****
$ ts-node mirrored-rhombus.ts
Invalid Input
$ ts-node mirrored-rhombus.ts -1
Invalid Input
$ ts-node mirrored-rhombus.ts ABC
Invalid Input

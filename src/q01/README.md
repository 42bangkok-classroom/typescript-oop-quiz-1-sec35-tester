# Quiz 1 - Grade Calculator
Create a TypeScript program that reads a score from the command line and prints the correct letter grade. The program must validate the input and show an error message when the value is invalid.

## 📄 File to Submit
`grade.ts`

## 📘 Instructions
Write a program that:
1. Accepts one argument from the command line.
2. Converts the input into a number.
3. Validates the score:
    - Must be a number
    - Must be between 0 and 100
4. Prints the correct grade based on the scoring table:

### Grade Rules
| Score Range | Grade |
| ----------- | ----- |
| ≥ 80        | A     |
| ≥ 70        | B     |
| ≥ 60        | C     |
| ≥ 50        | D     |
| < 50        | F     |
If the input is invalid, output: `Invalid Input`

## Example:
```sh
$ ts-node grade.ts 87
Grade is A
$ ts-node grade.ts
Invalid Input
$ ts-node grade.ts 101
Invalid Input
$ ts-node grade.ts -1
Invalid Input
$ ts-node grade.ts ABC
Invalid Input
```
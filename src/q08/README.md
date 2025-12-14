# Quiz 8 — Number Pattern (Descending)

## Description
Create a TypeScript program that generates a descending number pattern using loops.  
The program reads a number from the command line and prints a decreasing number pattern.

## File Submit:
`number-pattern.ts`

## Instructions:
1. Read one argument from the command line.
2. Convert the input to a number.
3. Validate the input:
   - Must be a positive integer
   - If invalid, return `Invalid Input`.
4. Generate the pattern:
   - The first line starts from the input number down to `1`.
   - Each next line removes the first number.
5. Print the returned value when running from the command line.

## Example:
```sh
$ ts-node number-pattern.ts 5
54321
4321
321
21
1
$ ts-node number-pattern.ts
Invalid Input
$ ts-node number-pattern.ts -2
Invalid Input
$ ts-node number-pattern.ts ABC
Invalid Input
```
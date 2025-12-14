# Quiz 2 - FooBar

Create a TypeScript program that reads a number from the command line and prints a sequence from 1 to the given number. The program must replace numbers divisible by 3 with "Foo", numbers divisible by 7 with "Bar", and numbers divisible by both with "FooBar".

## File Submit
`foobar.ts`

## Instructions
1. Read one argument from the command line.
2. Convert the input to a number.
3. Validate the input:
   - Must be a positive integer (`>= 1`)
   - If invalid, return `"Invalid Input"`.
4. Generate a sequence from **1** up to the input number.
5. Apply the following rules for each number:
   - Divisible by **3 and 7** → `FooBar`
   - Divisible by **3** → `Foo`
   - Divisible by **7** → `Bar`
   - Otherwise → output the number
6. Return the result as a single string with each value separated by a new line.

## Example
```sh
$ ts-node foobar.ts 21
1
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
FooBar
$ ts-node foobar-sequence.ts
Invalid Input
$ ts-node foobar-sequence.ts 0
Invalid Input
$ ts-node foobar-sequence.ts ABC
Invalid Input
```
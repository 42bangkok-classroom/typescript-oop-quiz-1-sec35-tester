# Quiz 10 — Count Letters and Digits in String

Create a TypeScript program that analyzes a string and counts how many characters are **letters**, **digits**, and **other characters**. The program must classify each character and print the result clearly.

## File Submit
`count-char.ts`

## Instructions
1. Read one string value from the command line.
2. Analyze each character in the string.
3. Count:
   - Letters (a–z, A–Z)
   - Digits (0–9)
   - Other characters (symbols, spaces, punctuation, etc.)
4. If the input is an empty string, do not display any output.
4. Print the total count for each category in the specified format.

---

## Example
```bash
$ ts-node count-char.ts "a1b2c3!"
Letters: 3
Digits: 3
Others: 1
$ ts-node count-char.ts
```
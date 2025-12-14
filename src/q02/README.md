# Quiz 2 — ATM Withdrawal

Create a TypeScript program that simulates an ATM withdrawal process by checking the account balance, withdrawal amount, and a per-withdrawal limit. The program must validate the input and return an appropriate message based on the conditions.

## File Submit
`atm.ts`

## Instructions
1. Read two arguments from the command line:
   - Account balance
   - Withdrawal amount
2. Convert both inputs to numbers.
3. Validate the inputs:
   - Both values must be valid numbers
   - If invalid, return `Invalid Input`
4. Apply the following checks **in order**:
   - If the withdrawal amount is greater than the balance, return `Insufficient balance`
   - If the withdrawal amount exceeds **5,000**, return `Exceeds per-withdrawal limit`
   - Otherwise, return `Withdrawal approved`
5. Return the result as a string.

## Example
```bash
$ ts-node atm.ts 10000 6000
Exceeds per-withdrawal limit
$ ts-node atm.ts 3000 4000
Insufficient balance
$ ts-node atm.ts 5000 3000
Withdrawal approved
$ ts-node atm.ts
Invalid Input
$ ts-node atm.ts 1000
Invalid Input
$ ts-node atm.ts ABC 1000
Invalid Input

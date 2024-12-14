# TypeScript Type Error: Combining Arrays of Different Types

This repository demonstrates a common TypeScript type error that occurs when combining arrays of different types using the spread syntax.  The error arises because TypeScript's type system enforces type safety, preventing the combination of arrays with differing element types.

The `bug.ts` file shows the original code with the type error. The `bugSolution.ts` file provides a solution using type assertion. 

## How to Reproduce

1. Clone this repository.
2. Open `bug.ts` in a TypeScript compiler.
3. You should see the type error.

## Solution

The solution involves using type assertion to tell TypeScript to trust that all elements in `array2` are numbers, or by using generics for more robust type safety.
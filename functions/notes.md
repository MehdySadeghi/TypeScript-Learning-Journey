# TypeScript Functions — Notes

## 1. Parameter annotations

A parameter annotation tells TypeScript what type a function expects.

\`\`\`ts
function square(num: number): number {
  return num * num;
}
\`\`\`

For multiple parameters, annotate each one:

\`\`\`ts
function introduce(name: string, age: number, isStudent: boolean): string {
  return \`\${name} is \${age} years old. Student: \${isStudent}\`;
}
\`\`\`

Arrow functions use the same idea:

\`\`\`ts
const add = (a: number, b: number): number => a + b;
\`\`\`

## 2. Return type annotations

A return type describes what a function returns.

\`\`\`ts
function greet(name: string): string {
  return \`Hello, \${name}\`;
}

function isAdult(age: number): boolean {
  return age >= 18;
}
\`\`\`

Syntax:

\`\`\`ts
(parameter: Type): ReturnType
\`\`\`

TypeScript can often infer return types, so explicit return annotations are mainly about clarity and enforcing the function contract.

## 3. Default parameters

A default parameter supplies a value when the caller omits the argument.

\`\`\`ts
function greet(person: string = "stranger"): string {
  return \`Hi, welcome \${person}\`;
}

greet();
greet("Mehdy");
\`\`\`

The default value must be compatible with the parameter type. A default parameter makes the argument optional for the caller.

## 4. Contextual typing

Contextual typing means TypeScript determines a type from the surrounding context.

\`\`\`ts
const names = ["Mehdy", "Mahan", "Mehrsam"];

names.map((name) => {
  return name.toUpperCase();
});
\`\`\`

You did not write \`name: string\`, but TypeScript knows \`name\` is a string because \`names\` is a \`string[]\` and \`map\` provides each element to the callback.

Think:

> Explicit annotation = I tell TypeScript the type.
> Contextual typing = TypeScript gets the type from the surrounding context.

## 5. Function types

A function type describes the **shape of a function**: its parameter types and return type.

\`\`\`ts
type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (a, b) => {
  return a + b;
};
\`\`\`

This means a \`MathOperation\` must be a function that accepts two numbers and returns a number.

Important: a function type is **not** just the type of the result.

Common syntax:

\`\`\`ts
type SomeFunction = (param1: Type1, param2: Type2) => ReturnType;
\`\`\`

## 6. void

\`void\` is mainly used for functions whose return value is not intended to be used.

\`\`\`ts
function logMessage(message: string): void {
  console.log(message);
}
\`\`\`

The function can finish normally, but there is no useful return value for the caller.

A useful mental model:

> \`void\` = this function is not meant to provide a return value.

Do not treat \`void\` and \`undefined\` as identical concepts.

## 7. never

\`never\` represents a value that can never occur.

A function can have a \`never\` return type when it cannot successfully finish and return a value.

Always throws:

\`\`\`ts
function makeError(message: string): never {
  throw new Error(message);
}
\`\`\`

Never-ending loop:

\`\`\`ts
function gameLoop(): never {
  while (true) {
    console.log("GAME LOOP RUNNING");
  }
}
\`\`\`

### void vs never

- \`void\` → the function can finish without a useful return value.
- \`never\` → the function cannot successfully return a value because the path never completes normally.

## 8. Anonymous functions

An anonymous function has no function name.

\`\`\`ts
const greet = function (name: string): string {
  return \`Hello, \${name}\`;
};
\`\`\`

Anonymous functions are common as callbacks:

\`\`\`ts
names.map((name) => name.toUpperCase());
\`\`\`

Contextual typing often means callback parameters do not need explicit annotations.

## 9. Callback functions

A callback is a function passed to another function.

\`\`\`ts
function processUser(
  name: string,
  callback: (name: string) => string
): string {
  return callback(name);
}
\`\`\`

The callback's function type describes what it accepts and returns.

## 10. Functions as parameters

Functions can receive other functions.

\`\`\`ts
function calculate(
  a: number,
  b: number,
  operation: (x: number, y: number) => number
): number {
  return operation(a, b);
}

calculate(10, 5, (x, y) => x + y);
calculate(10, 5, (x, y) => x * y);
\`\`\`

This pattern becomes important in JavaScript, React, and later TypeScript work.

## 11. Optional parameters

Use \`?\` when a parameter may be omitted.

\`\`\`ts
function greet(name?: string): string {
  return name ? \`Hello \${name}\` : "Hello stranger";
}
\`\`\`

An optional parameter may be \`undefined\`.

Compare that with a default parameter:

\`\`\`ts
function greet(name: string = "stranger"): string {
  return \`Hello \${name}\`;
}
\`\`\`

A default parameter gives a fallback value; an optional parameter may remain \`undefined\`.

## 12. Unions in function parameters

Functions can accept union types:

\`\`\`ts
function printId(id: string | number): string {
  return String(id);
}
\`\`\`

The implementation must safely handle every member of the union.

## 13. Async functions

An async function returns a Promise.

\`\`\`ts
async function getUser(): Promise<string> {
  return "Mehdy";
}
\`\`\`

The return type is \`Promise<string>\`, not plain \`string\`.

## 14. Overloads — know the idea

TypeScript supports multiple call signatures for one function.

\`\`\`ts
function format(value: string): string;
function format(value: number): string;

function format(value: string | number): string {
  return String(value);
}
\`\`\`

You do not need to master overloads yet, but recognize the concept.

## 15. Important mental models

\`\`\`text
Parameter annotation → what the function accepts
Return type → what the function returns
Default parameter → fallback when an argument is omitted
Contextual typing → type comes from surrounding context
Function type → shape of a function (parameters + return type)
void → function finishes without a useful return value
never → a value can never occur / function never successfully returns
\`\`\`

## 16. Common mistakes

### Mistake: function type = return type

Wrong:
> "A function type is the type of the function result."

Correct:
> A function type describes the function's parameters and return type.

### Mistake: contextual typing is random guessing

It is not. The type comes from surrounding context.

### Mistake: void and never are the same

They are not.

- \`void\` → normal completion without a useful return value
- \`never\` → no normal completion that produces a value

### Mistake: annotate everything

TypeScript has inference. Use explicit annotations when they improve clarity, enforce a contract, or are otherwise useful.

## 17. Code you should be able to write from memory

\`\`\`ts
function square(num: number): number {
  return num * num;
}
\`\`\`

\`\`\`ts
function greet(name: string = "stranger"): string {
  return \`Hello \${name}\`;
}
\`\`\`

\`\`\`ts
type Operation = (a: number, b: number) => number;
\`\`\`

\`\`\`ts
const names = ["Mehdy", "Mahan"];
names.map((name) => name.toUpperCase());
\`\`\`

\`\`\`ts
function log(message: string): void {
  console.log(message);
}
\`\`\`

\`\`\`ts
function fail(message: string): never {
  throw new Error(message);
}
\`\`\`

## 18. Interview-ready definitions

**Parameter annotation:** tells TypeScript what type a function parameter should accept.

**Return type annotation:** tells TypeScript what type a function is expected to return.

**Default parameter:** provides a fallback value when the caller does not provide an argument.

**Contextual typing:** TypeScript determines a value's type from its surrounding context.

**Function type:** describes the shape of a function, including parameter types and return type.

**void:** commonly used for functions whose return value is not intended to be used.

**never:** represents a value that can never occur; functions that always throw or never finish can return \`never\`.

**void vs never:** a \`void\` function can finish without a useful value; a \`never\` function cannot successfully finish by returning a value.

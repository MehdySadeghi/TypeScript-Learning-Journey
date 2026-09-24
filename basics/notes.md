# TypeScript Basics — Notes

## 1. What TypeScript is

TypeScript is a superset of JavaScript that adds a static type system.

It lets us describe the kinds of values our code is expected to work with and checks many mistakes during development, before the code runs.

A useful mental model:

\`\`\`text
JavaScript
    +
Static type system
    +
TypeScript tooling
    ↓
TypeScript
\`\`\`

TypeScript does not replace JavaScript at runtime. TypeScript code is normally transformed into JavaScript so a JavaScript runtime such as a browser or Node.js can execute it.

## 2. What problem TypeScript helps solve

JavaScript is dynamically typed, so many incorrect assumptions about values are only discovered when code runs.

TypeScript can catch many type-related mistakes earlier.

Example:

\`\`\`ts
let movieTitle: string = "Mahan";

// movieTitle = 54; // Type error
movieTitle.toUpperCase();
\`\`\`

The important point is not that TypeScript catches every possible bug. It helps catch a large class of mistakes involving types and makes code contracts clearer.

### Important distinction

Do not say:

> TypeScript prevents all bugs.

A better statement is:

> TypeScript provides static type checking that catches many mistakes during development before runtime.

## 3. Type annotations

A type annotation explicitly tells TypeScript the type of a variable.

Syntax:

\`\`\`ts
let variableName: Type = value;
\`\`\`

Examples:

\`\`\`ts
let movieTitle: string = "Mahan";
let catNumbers: number = 9;
let gameOver: boolean = false;
\`\`\`

The annotation comes after the variable name and before the assignment.

## 4. Primitive types

The main primitive types introduced in this section are:

### string

Represents text.

\`\`\`ts
let name: string = "Mehdy";
\`\`\`

String methods are therefore available:

\`\`\`ts
name.toUpperCase();
\`\`\`

### number

Represents numeric values.

\`\`\`ts
let score: number = 95;
let price: number = 19.99;
\`\`\`

TypeScript's \`number\` covers integers and floating-point numbers.

### boolean

Represents \`true\` or \`false\`.

\`\`\`ts
let gameOver: boolean = false;
gameOver = true;
\`\`\`

A boolean cannot be replaced with a string:

\`\`\`ts
// gameOver = "true"; // Error
\`\`\`

## 5. Type inference

TypeScript often knows a variable's type without an explicit annotation.

\`\`\`ts
let score = 95;
let movieTitle = "Mahan";
let gameOver = false;
\`\`\`

TypeScript infers:

\`\`\`text
score      → number
movieTitle → string
gameOver   → boolean
\`\`\`

This is called **type inference**.

### Annotation vs inference

Explicit annotation:

\`\`\`ts
let score: number = 95;
\`\`\`

Inference:

\`\`\`ts
let score = 95;
\`\`\`

Both give \`score\` a useful numeric type.

### When explicit annotations are useful

Use an explicit annotation when:

- it improves clarity
- the type cannot be inferred well
- you want to enforce a particular contract
- a variable is declared before its value is assigned

Example:

\`\`\`ts
let foundMovie: string;

for (const movie of movies) {
  if (movie === "Prestige") {
    foundMovie = "Prestige";
  }
}
\`\`\`

## 6. Arrays and inferred element types

TypeScript can infer the element type of an array.

\`\`\`ts
const movies = ["Prestige", "Aliens", "Notebook", "Oppenheimer"];
\`\`\`

The inferred type is effectively:

\`\`\`text
string[]
\`\`\`

That means values taken from this array are known to be strings.

\`\`\`ts
for (const movie of movies) {
  movie.toUpperCase();
}
\`\`\`

You can also annotate an array explicitly:

\`\`\`ts
const scores: number[] = [10, 20, 30];
\`\`\`

Another common syntax is:

\`\`\`ts
const scores: Array<number> = [10, 20, 30];
\`\`\`

You do not need both styles at the same time; understand that both describe an array of numbers.

## 7. Array values and type safety

Once TypeScript knows the element type, it can reject incompatible values.

\`\`\`ts
const scores: number[] = [10, 20, 30];

// scores.push("40"); // Error
scores.push(40);
\`\`\`

This is one of the practical benefits of static typing.

## 8. The any type

\`any\` disables most of TypeScript's type checking for a value.

\`\`\`ts
let thing: any = "hello";

thing = 1;
thing = false;
thing = "bye";
\`\`\`

All of those assignments are allowed because \`thing\` is \`any\`.

### Why any is useful

\`any\` can be useful when:

- migrating old JavaScript code
- dealing temporarily with unknown external data
- experimenting while learning

### Why any is dangerous

Using \`any\` too often removes the safety TypeScript is giving you.

For example:

\`\`\`ts
let thing: any = "hello";

thing.nonExistentMethod();
\`\`\`

TypeScript may not protect you from this because \`thing\` is \`any\`.

Mental model:

> \`any\` means "turn off most type checking for this value."

Prefer more precise types when possible.

## 9. Type compatibility and invalid assignments

A variable with a specific type can only receive compatible values.

\`\`\`ts
let movieTitle: string = "Mahan";

// movieTitle = 54; // Error
\`\`\`

Similarly:

\`\`\`ts
let gameOver: boolean = false;

// gameOver = "true"; // Error
\`\`\`

When you deliberately write an invalid assignment while learning, read the compiler error and ask:

> What type did TypeScript expect?
> What type did I provide?

## 10. Methods available through the inferred type

Once TypeScript knows a value's type, it can provide type-aware tooling and check whether methods make sense.

Example:

\`\`\`ts
let movieTitle: string = "Mahan";

movieTitle.toUpperCase(); // valid
// movieTitle.toFixed();  // Error
\`\`\`

The editor can also use the type information for autocomplete and diagnostics.

## 11. Variable declaration before assignment

A variable can be declared with a type before receiving its value.

\`\`\`ts
let foundMovie: string;

for (const movie of movies) {
  if (movie === "Prestige") {
    foundMovie = "Prestige";
  }
}
\`\`\`

The annotation tells TypeScript what type the variable is expected to hold.

Be aware that in real applications, you also need to reason about whether a variable has definitely been assigned before you use it.

## 12. Compilation / transformation workflow

A typical TypeScript workflow looks like:

\`\`\`text
.ts source
   ↓
TypeScript compiler / build tool
   ↓
JavaScript
   ↓
JavaScript runtime
(browser, Node.js, etc.)
\`\`\`

The browser normally executes JavaScript, not raw TypeScript syntax.

During development, TypeScript tooling can also report type errors as part of the editing/building workflow.

### Important nuance

"TypeScript is compiled to JavaScript" is a useful beginner model.

The exact transformation can be handled by different tools and build pipelines, but the key idea is:

> The JavaScript runtime ultimately executes JavaScript.

## 13. Type errors are development-time feedback

When TypeScript's checker finds a type problem, the toolchain reports an error.

For example:

\`\`\`ts
let age: number = 21;

// age = "twenty-one"; // Type error
\`\`\`

The important concept is not the terminal specifically.

TypeScript may report the problem through:

- the editor
- the TypeScript language service
- the compiler
- a build tool
- the terminal

The useful mental model is:

> TypeScript analyzes the program and reports type problems during development/building.

## 14. Math and normal JavaScript APIs

TypeScript still uses normal JavaScript functionality.

For example:

\`\`\`ts
Math.round(3.14);
\`\`\`

TypeScript understands the types of standard JavaScript APIs and can check how you use them.

TypeScript adds type information; it does not remove JavaScript's standard language features.

## 15. Block scope and redeclaration

One of the compiler lessons from Day 1 was that you cannot generally redeclare the same block-scoped variable in the same scope.

Example:

\`\`\`ts
let name = "Mehdy";

// let name = "Mahan"; // Error in the same block
\`\`\`

The same applies to other block-scoped declarations such as \`const\`.

### Important distinction

The issue is not:

> "You cannot use the same name with different types."

The deeper rule is:

> You cannot redeclare the same block-scoped variable in the same scope.

Different scopes can contain variables with the same name:

\`\`\`ts
let name = "Mehdy";

{
  let name = "Mahan";
  console.log(name);
}
\`\`\`

The inner and outer \`name\` variables are different bindings because they belong to different scopes.

## 16. Type annotations do not change runtime JavaScript

This:

\`\`\`ts
let score: number = 95;
\`\`\`

becomes JavaScript without the TypeScript type annotation:

\`\`\`js
let score = 95;
\`\`\`

The annotation is part of TypeScript's static analysis. It is not a runtime value.

## 17. Object types — the next step from the basics

An object can also have a type describing its properties.

Example:

\`\`\`ts
const product: {
  productName: string;
  productId: number;
  productPrice: number;
  productAvailability: boolean;
} = {
  productName: "Headphone",
  productId: 1450,
  productPrice: 1450,
  productAvailability: false,
};
\`\`\`

This says:

- \`productName\` must be a string
- \`productId\` must be a number
- \`productPrice\` must be a number
- \`productAvailability\` must be a boolean

You used this idea in the Day 1 product exercise.

For larger programs, we will later learn better ways to represent reusable object types.

## 18. What you should be able to write from memory

You should be comfortable writing these without looking at notes:

### Primitive annotations

\`\`\`ts
let name: string = "Mehdy";
let age: number = 21;
let isStudent: boolean = true;
\`\`\`

### Inference

\`\`\`ts
let score = 95;
let title = "Veyro";
let online = true;
\`\`\`

### Array

\`\`\`ts
const movies: string[] = ["Prestige", "Aliens"];
\`\`\`

### Explicit declaration before assignment

\`\`\`ts
let foundMovie: string;
foundMovie = "Prestige";
\`\`\`

### Object typing

\`\`\`ts
const product: {
  name: string;
  price: number;
} = {
  name: "Headphone",
  price: 1450,
};
\`\`\`

## 19. Interview-ready definitions

**What is TypeScript?**  
TypeScript is a superset of JavaScript that adds static type checking and other developer tooling. Its code is transformed into JavaScript for execution.

**What problem does TypeScript solve?**  
It catches many type-related mistakes during development, before they become runtime problems.

**What is a type annotation?**  
A type annotation explicitly tells TypeScript the expected type of a value, variable, parameter, property, or other typed construct.

**What is type inference?**  
Type inference is when TypeScript determines a value's type automatically from the code and surrounding information.

**What is the difference between annotation and inference?**  
With an annotation, the programmer explicitly writes the type. With inference, TypeScript determines the type automatically.

**Does the browser normally execute TypeScript directly?**  
The browser's JavaScript runtime executes JavaScript. TypeScript source is normally transformed into JavaScript before execution.

**What happens when TypeScript finds a type error?**  
Its type checker/tooling reports the error during development or the build process so it can be fixed before relying on the code at runtime.

**What is \`any\`?**  
\`any\` disables most type checking for a value. It is flexible but reduces TypeScript's safety.

**Why is type inference useful?**  
It gives you type safety without requiring explicit annotations everywhere, keeping code concise while preserving useful type information.

**Why couldn't I redeclare the same variable in my Day 1 example?**  
Because block-scoped declarations such as \`let\` and \`const\` cannot be redeclared with the same name in the same scope.

## 20. Day 1 mental model

Keep this model in mind:

\`\`\`text
JavaScript
   ↓
TypeScript adds static type information
   ↓
annotations + inference
   ↓
TypeScript checks how values are used
   ↓
compiler/tooling reports type problems
   ↓
TypeScript source is transformed to JavaScript
   ↓
JavaScript runtime executes the result
\`\`\`

The goal is not to memorize every syntax example.

The goal is to understand:

> **What type is this value?**
> **How did TypeScript know that?**
> **What does that type allow me to do?**
> **What happens if I use the wrong type?**

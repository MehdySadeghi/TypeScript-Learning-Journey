const greet = function (person: string = "stranger"): string {
  return `hi, welcome ${person}`;
};

console.log(greet());
console.log(greet("Mehdi"));

function examMark(num: number = 100): string {
  return `this exam is out of ${num} `;
}

console.log(examMark());
console.log(examMark(20));
// console.log(examMark('20'));

export {};

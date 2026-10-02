function PrintName(person: { first: string; last: string }): string {
  return `this person's full name is ${person.first} ${person.last}`;
}

console.log(PrintName({ first: "Arman", last: "Zarghi" }));
// PrintName({ first: "Arman", last: "Zarghi", age: 22 });
const guy = {
  first: "Mahdi",
  last: "Sadeghi",
  age: 21,
  isAlive: true,
};
console.log(PrintName(guy));

export {};

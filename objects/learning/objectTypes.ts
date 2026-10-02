const me: {
  age: number;
  name: string;
  nationality: string;
} = {
  age: 21,
  name: "Mehdi",
  nationality: "Persian",
};

let coordinate: { x: number; y: number } = { x: 34, y: 20 };

function randomCoordinate(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}

console.log(randomCoordinate());

function PrintName(person: { first: string; last: string }): void {}

PrintName({ first: "Mehrsam", last: "Sadeghi" });

function ageInfo(birthYear: number): { age: number; birthYear: number } {
  return { age: new Date().getFullYear() - birthYear, birthYear: birthYear };
}

console.log(ageInfo(2005));

export {};

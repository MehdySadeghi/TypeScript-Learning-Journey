function square(num: number): number {
  return num * num;
}

square(3);
// square('Ali')

const doSomething = (person: string, age: number, isFunny: boolean): string => {
  return `${person} is ${age} years old and he/she ${isFunny ? "is very" : "isn't very"} funny`;
};

console.log(doSomething("Mahan", 18, true));

const greet = function (person: string): string {
  return `hi, welcome ${person}`;
};

greet("Arman");
// greet(54);

function agedetect(birthYear: number): string {
  return `you are ${new Date().getFullYear() - birthYear} yaers old`;
}

console.log(agedetect(2005));

export {};

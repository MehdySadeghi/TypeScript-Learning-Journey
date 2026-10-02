function printAge(age: number | string): void {
  console.log(`You are ${age} years old`);
}

printAge(21);
printAge("21");

function calcaulateTax(price: number | string, tax: number) {
  if (typeof price === "string") {
    price = parseFloat(price.replace("$", ""));
  }
  return price * tax;
}

export {};

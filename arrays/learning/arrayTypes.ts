const activeUsres: string[] = ["Mehdi"];
activeUsres.push("Ali");
// activeUsres.push(20);
console.log(activeUsres);

const ageList: number[] = [21, 20, 18];
ageList[0] = 8;
// ageList[0] = false
console.log(ageList);

// an alternate way of specifying array types

const bools: Array<boolean> = [];
const number: Array<number> = [];

type Point = {
  x: number;
  y: number;
};

const coords: Point[] = [];
coords.push({ x: 25, y: 5 });
// coords.push({ x: 25, y: "5" });
// coords.push({ y: 5 });

export {};

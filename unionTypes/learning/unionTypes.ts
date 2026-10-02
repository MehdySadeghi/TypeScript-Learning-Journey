let age: number | string = 21;
age = 23;
age = "45";

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  lng: number;
};

let cordinates: Point | Loc = { x: 1, y: 34 };
cordinates = { lat: 22.24, lng: 24.25 };
// cordinates = { x: 22.24, lng: 24.25 };

export {};

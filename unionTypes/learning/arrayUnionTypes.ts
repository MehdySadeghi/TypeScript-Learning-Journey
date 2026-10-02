// const stuff: any[] = [1, 2, 3, true, "boy"];

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  lng: number;
};

const stuff: (number | string)[] = [12, 34, 56, "boy"];

const coords: (Point | Loc)[] = [];
coords.push({ lat: 15.4, lng: 45 });
coords.push({ x: 15.4, y: 45 });

export {};

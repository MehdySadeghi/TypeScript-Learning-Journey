type Point = {
  x: number;
  y: number;
};

let coordinate: Point = { x: 34, y: 20 };

function randomCoordinate(): Point {
  return { x: Math.random(), y: Math.random() };
}

function doublePoint(point: Point): Point {
  return { x: point.x * 2, y: point.y * 2 };
}

doublePoint({ x: 25, y: 22 });

export {};

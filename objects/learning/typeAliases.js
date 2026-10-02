let coordinate = { x: 34, y: 20 };
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
doublePoint({ x: 25, y: 22 });
export {};

const me = {
    age: 21,
    name: "Mehdi",
    nationality: "Persian",
};
let coordinate = { x: 34, y: 20 };
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
console.log(randomCoordinate());
function PrintName(person) { }
PrintName({ first: "Mehrsam", last: "Sadeghi" });
function ageInfo(birthYear) {
    return { x: new Date().getFullYear() - birthYear, y: birthYear };
}
console.log(ageInfo(2005));
export {};

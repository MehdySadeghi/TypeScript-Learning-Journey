const greet = function (person = "stranger") {
    return `hi, welcome ${person}`;
};
console.log(greet());
console.log(greet("Mehdi"));
function examMark(num = 100) {
    return `this exam is out of ${num} `;
}
console.log(examMark());
console.log(examMark(20));
export {};

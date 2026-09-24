function square(num) {
    return num * num;
}
square(3);
// square('Ali')
const doSomething = (person, age, isFunny) => {
    return `${person} is ${age} years old and he/she ${isFunny ? "is very" : "isn't very"} funny`;
};
console.log(doSomething("Mahan", 18, true));
const greet = function (person) {
    return `hi, welcome ${person}`;
};
greet("Arman");
// greet(54);
function agedetect(birthYear) {
    return `you are ${new Date().getFullYear() - birthYear} yaers old`;
}
console.log(agedetect(2005));
export {};

function twoFer(name = "you") {
    return `one for ${name} one for me`;
}
console.log(twoFer());
console.log(twoFer("Arman"));
const isLeapyear = function (year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};
console.log(isLeapyear(2005));
console.log(isLeapyear(2004));
export {};

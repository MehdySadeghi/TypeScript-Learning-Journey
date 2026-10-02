function printAge(age) {
    console.log(`You are ${age} years old`);
}
printAge(21);
printAge("21");
function calcaulateTax(price, tax) {
    if (typeof price === "string") {
        price = parseFloat(price.replace("$", ""));
    }
    return price * tax;
}
export {};

// Create an empty array of numbers called "ages":
const ages = [];
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
const gameBoard = [[]];
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
function getTotal(products) {
    let total = 0;
    for (let product of products) {
        total += product.price;
    }
    return total;
}
export {};

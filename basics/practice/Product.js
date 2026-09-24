"use strict";
const product = {
    productName: "Headphone",
    productId: 1450,
    productPrice: 1450,
    productAvailability: false,
};
function productFunction(products) {
    return `Product: ${products.productName} — ${products.productPrice} — ${products.productAvailability ? "Available" : "Unavailable"}`;
}
console.log(productFunction(product));

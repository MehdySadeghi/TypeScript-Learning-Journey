const product: {
  productName: string;
  productId: number;
  productPrice: number;
  productAvailability: boolean;
} = {
  productName: "Headphone",
  productId: 1450,
  productPrice: 1450,
  productAvailability: false,
};

function productFunction(products: {
  productName: string;
  productId: number;
  productPrice: number;
  productAvailability: boolean;
}): string {
  return `Product: ${products.productName} — ${products.productPrice} — ${
    products.productAvailability ? "Available" : "Unavailable"
  }`;
}

console.log(productFunction(product));

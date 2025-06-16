import { calculateTotalPrice, Product } from "../cart";

it("should calculate the total price of products in the cart", () => {
  const products: Product[] = [
    { id: 1, name: "Product 1", price: 10.0, quantity: 2 },
    { id: 2, name: "Product 2", price: 15.0, quantity: 1 },
    { id: 3, name: "Product 3", price: 5.0, quantity: 3 },
  ];

  const totalPrice = calculateTotalPrice(products);

  expect(totalPrice).toBe(55.0);
});

it("should return 0 for an empty cart", () => {
  const products: Product[] = [];

  const totalPrice = calculateTotalPrice(products);

  expect(totalPrice).toBe(0);
});

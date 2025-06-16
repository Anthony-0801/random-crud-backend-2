import { calculateTotalPrice, Product } from "./cart";

const cart: Product[] = [
  { id: 1, name: "Apple", price: 10.0, quantity: 2 },
  { id: 2, name: "Banana", price: 15.0, quantity: 1 },
  { id: 3, name: "Cherry", price: 5.0, quantity: 3 },
];

console.log("Total Price:", calculateTotalPrice(cart));

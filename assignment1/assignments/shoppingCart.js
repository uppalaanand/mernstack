// ASSIGNMENT 1:
// -------------
// You are building a shopping cart summary for an e-commerce website.

// Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

// Tasks:
    
// Use filter() to get only inStock products
let answer1 = cart.filter((c) => c.inStock === true);
console.log(answer1);
// Use map() to create a new array with:  { name, totalPrice }
let totalPrice = cart.reduce((acc,ele) => acc+ele.price,0);
let answer2 = cart.map((c) => {return {name: c.name, totalPrice: c.quantity*c.price}});
console.log(answer2);
// Use reduce() to calculate grand total cart value
let grandTotal = cart.reduce((acc,ele) => acc+ele.price,0);
console.log(grandTotal);
// Use find() to get details of "Mouse"
let answer4 = cart.find((ele) => ele.name === "Mouse");
console.log(answer4);
// Use findIndex() to find the position of "Keyboard"
let answer5 = cart.findIndex((ele) => ele.name === "Keyboard");
console.log(answer5);
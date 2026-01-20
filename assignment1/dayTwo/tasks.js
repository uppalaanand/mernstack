// Assignment 1: User Profile Manager
// ----------------------------------
// Scenario : You are managing a logged-in user’s profile in a web application.

// Test data:
const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};

// Tasks:
    
// Read and print the user’s name and email
let {name, email} = user;
console.log("Name:",name,"Email:",email);
// Add a new property lastLogin: "2026-01-01"
user.lastLogin = "2026-01-01";
// Update role from "student" to "admin"
user.role = "admin";
// Delete the isActive property
delete user.isActive;
// Use Object.keys() to list all remaining fields
console.log("list all remaining fields:", Object.keys(user));

// Assignment 2: Exam Result Summary
// ---------------------------------
// Scenario : Marks are stored subject-wise for a student.

// Test data:
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

// Tasks:
    
// Calculate total marks
let total = 0;
let cou = 0;
for(let i in marks) {
    total+=marks[i];
    cou++;
}
console.log("Total marks:", total);
// Calculate average marks
console.log("Average of marks:", total/cou);
// Find the highest scoring subject
let high = 0;
for(let i in marks) {
    if(high < marks[i]) {
        high = marks[i];
    }
}
for(let i in marks) {
  if(marks[i] == high) {
    console.log(i);
  }
}
// Add a new subject computer: 90
marks.computer = 90;
console.log(marks);


// Assignment 1: Daily Temperature Analyzer
// ----------------------------------------
// Scenario : You are analyzing daily temperatures recorded by a weather app.

// Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

// Tasks:
//     1. filter() temperatures above 35
let result1 = temperatures.filter((temp) => temp>35);
console.log(result1);
//     2. map() to convert all temperatures from Celsius → Fahrenheit
let result2 = temperatures.map((temp) => [(temp*9)/5] + 32);
console.log(result2);
//     3. reduce() to calculate average temperature
let result3 = temperatures.reduce((acc,temp) => acc+temp)/temperatures.length;
console.log(result3);
//     4. find() first temperature above 40
let result4 = temperatures.find((temp) => temp > 40);
console.log(result4);
//     5. findIndex() of temperature 28
let result5 = temperatures.findIndex(temp => temp === 28);
console.log(result5);

// Assignment 2: Online Course Name Processor
// ------------------------------------------
// Scenario : You are preparing a course list for display on a website.

// Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];


// Tasks:
//     1. filter() courses with name length > 5
let result6 = courses.filter((ele) => ele.length > 5);
console.log(result6);
//     2. map() to convert course names to uppercase
let result7 = courses.map((ele) => ele.toUpperCase());
console.log(result7);
//     3. reduce() to generate a single string:
//               "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
let result8 = courses.reduce((acc,ele) => acc.toUpperCase() + " | " + ele.toUpperCase());
console.log(result8);
//     4. find() the course "react"
let result9 = courses.find((ele) => ele === "react");
console.log(result9);
//     5. findIndex() of "node"
let result10 = courses.findIndex((ele) => ele === "node");
console.log(result10);


// Assignment 3: Student Marks List
// --------------------------------
// Scenario : You receive marks from an exam system.

// Test data:
const marks1 = [78, 92, 35, 88, 40, 67];
console.log("hi");
// Tasks:
//     1. filter() marks ≥ 40 (pass marks)
let answer6 = marks1.filter((ele) => ele >= 40);
console.log(answer6);
//     2. map() to add 5 grace marks to each student
let answer7 = marks1.map((ele) => ele+5);
console.log(answer7);
//     3. reduce() to find highest mark
// let answer8 = marks1.reduce((acc, ))
//     4. find() first mark below 40
//     5. findIndex() of mark 92

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
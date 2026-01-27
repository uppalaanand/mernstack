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
// Assignment 3: Age Calculator (Intermediate)
// -------------------------------------------
// Input:
let dob = "2000-05-15";
let input = new Date(dob);

// Tasks:
//         1. Calculate exact age in years
let today = new Date();
let age = today.getFullYear() - input.getFullYear();
console.log("Age:",age);

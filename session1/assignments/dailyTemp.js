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
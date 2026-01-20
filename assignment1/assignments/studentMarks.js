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
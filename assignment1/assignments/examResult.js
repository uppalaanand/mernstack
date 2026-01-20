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
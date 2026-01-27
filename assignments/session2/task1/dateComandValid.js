// Assignment 2: Date Comparison & Validation (Beginner → Intermediate)
// --------------------------------------------------------------------

//  Given:
let enrollmentDeadline = new Date("2026-01-20");

// Tasks:
//   1.Check if:
//       * Today is before deadline → "Enrollment Open"
let today = new Date();
if(enrollmentDeadline > today) {
    console.log("Enrollment Open");
}else{
//       * Today is after deadline → "Enrollment Closed"
    console.log("Enrollment Close");
}

//   2. Validate user input date:
//       * Input: "2026-02-30"
let date = "2026-02-30";
//       * Detect whether the date is valid or invalid

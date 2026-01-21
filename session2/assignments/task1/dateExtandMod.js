// Assignment 1: Date Creation & Extraction (Beginner)
// ---------------------------------------------------
// Tasks:
//        1. Create a Date object for current date & time.
let today = new Date();
// console.log(today)
//        2. Extract and display:
//                     * Year
console.log("Year:", today.getFullYear());
//                     * Month (human readable)
console.log("Month:", today.getMonth()+1)
//                     * Date
console.log("Date: ", today);
//                     * Day of week
console.log("Day:", today.getDay());
//                     * Hours, minutes, seconds
console.log(`Hours:${today.getHours()}, Minutes:${today.getMinutes()}:, Seconds: ${today.getSeconds()}`);
//       3. Display the date in this format:
//                     DD-MM-YYYY HH:mm:ss
console.log(`${today.getDate()}-${today.getMonth()}-${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}:${today.getFullYear()}`);
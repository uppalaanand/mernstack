console.log("Hello World")

//Comments 

/* hi */ 

//Variables
// let a = '&';
// console.log(typeof a);
// 1. dynamically typed langueage

// a = 10;
// let userName = "John Doe";
// let status = true;
// let marks = [90, 89, 78];
// let student = {
//     sno:1,
//     name:'hello'
// }
// console.log(typeof a);
// console.log(typeof userName);
// console.log(typeof status);
// console.log(typeof marks);
// console.log(typeof student);
// console.log(student['sno']);

// Functions

let marks = [1,2,3];

//Filter
console.log("Filter Function:");
let hi = marks.filter((e) => e%2 == 0);
console.log(hi);
//Map
console.log("Map Function:");
marks.map((e) => {
    console.log(e);
});
//Reduce
console.log("Reduce Function:");
let sum = marks.reduce((acc, l) => acc = acc + l);
console.log(sum);
//Arrow Function
console.log("Arrow Function:");
let fun = (a, b) => {
    return a-b;
}
//normal Function
function hel(a,b) {
    return fun(a,b);
}
console.log(hel(10, 20));

console.log("Biggest of 3 numbers:");
function big(a, b, c) {
    if(a > b && a>c) {
        return a;
    }else if(b > a && b > c) {
        return b;
    }else if(c > a && c > b){
        return c;
    }else{
        if(a == b) {
            return b > c?b:c;
        }else if(b == c) {
            return b > a?b:a;
        }else{
            return a > b?a:c;
        }
    }
}

console.log(big(1, 1, 2));

//Tasks
console.log("Transaction Processing Engine:");
let totalAmount = 0;
totalAmount+=500;
totalAmount+=1200;
totalAmount-=200;
totalAmount = totalAmount - (totalAmount/18);
console.log(totalAmount);



let isLoggedIn = true;
let isProfileComplete = false;

//1
console.log("User Greeting Message:");
let message;
if(isLoggedIn == false) {
    message = "Please login";
}
if(isLoggedIn && !isProfileComplete) {
    message = "Complete your Profile";
}
if(isLoggedIn && isProfileComplete) {
    message = "Welcome back";
}
console.log(message);

//2
console.log("Course Price Labeling:");
let price = 1299;
let label;
if(price < 500) {
    label = "Budget Course";
}
if(price >= 500 && price <= 1000) {
    label = "Standard Course";
}
if(price > 1000) {
    label = "Premium Course";
}
console.log(label);

//3
console.log("Sum of marks array using for..of loop:");
let marks1 = [90, 87, 89, 67, 56];
let sum1 = 0;
for(let v of marks1) {
    sum1+=v;
}
console.log("Sum of marks1:", sum1);

// write a function that receives marks array as a argument and returns small element
function small(m) {
    let smallest = m[0];
    for(let i of m) {
        if(i < smallest) {
            smallest = i;
        }
    }
    return smallest;
}
console.log("Smallest element in marks1:", small(marks1));

// write a function that receives "skills" array and skillName as arguments and return the index if skillName existed else skill name not found?
let skills = ["react", "angular", "nodejs", "java"];
function findSkill(skills, skillName) {
    for(let i=0;i<skills.length;i++) {
        if(skillName == skills[i]) {
            return i;
        }
    }
    return "skill name not found";
}
console.log("Find the skill in skills array:", findSkill(skills, "nodejs"));


//Objects 
// Create Student Object with properties name, age, city
let Student = {
    name : "Anand",
    age : 20,
    city : "hyderabad"
}
console.log(Student);
//Create a product object with properties productName, brand, price
let Product = {
    productName : "milk",
    brand : "amul",
    price : 120
}

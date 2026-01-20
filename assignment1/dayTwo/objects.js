//packing the Objects
let Student = {
    name : "anand",
    rno : 53,
    role : "admin"
}
console.log(Student.rno);
// All premitives are immutable we cannot be modify once it is created
//Immutable
let a = 10;
a = a + 1;
a = a * 10;
console.log(a);

let emp = {
    eno : 1,
    name : "mani"
}

// Accessing props
console.log(emp.eno);

//Adding new property(dynamic)
emp.city = "hyd";

//Update a property
emp.eno = 123;

//Delete a prop
delete emp.city;

//freeze an object (so that no one can edit)
Object.freeze(emp);

//Updation wont happen
emp.eno = 1234;

console.log(emp);

//read keys
console.log(Object.keys(emp));

//read vales
console.log(Object.values(emp));

//Unpacking the Objects
let test = {
    x : 10,
    b : 20,
    c : 30
}
//destructuring
let {b, c, x} = test;
console.log("destructuring:", c, x);

//using spread ...
let test1 = {
    d : 40
}
let mike = {...test, ...test1};
console.log("spread operator:", mike);

//complex object
let student = {
    sno : 100,
    name : "anand",
    marks : [90, 98, 80],
    address : {
        city : "hyd",
        pincode : 500068
    },
    getData : function() { // Method
        //object processing business logic
        console.log("hello");
        console.log(this.marks[0]);
    }
}
console.log(student.sno);
console.log(student.address.pincode);
console.log(student.getData())

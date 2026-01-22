//callback function is function that can be sent to argument to another function

function test1(a) {
    console.log(a());
}

test1(function() {
    return 123;
})

//write a function that can extract the marks greater than 70, packed then into an array and retuen it
let marks = [90,70,40,89,56]
function fun(mar) {
    let l = []
    for(let i of mar) {
        if(i > 70) {
            l.push(i);
        }
    }
    return l;
}
console.log(fun(marks));

//Arrow function filter
let fil = marks.filter((e) => e > 70);
//Normal way
let f = marks.filter(function(e) {
    if(e > 70) {
        return e;
    }
})
console.log(fil);
console.log(f);

//find all marks between 30 and 90
let bet = marks.filter((e) => e>30 && e<90);
console.log(bet);


//Map
let salaries = [100, 200, 300]
//add 50 for each salary [150, 250, 350]
let n = salaries.map((e) => e+50);
console.log(n);


//Reduce(aggregation)
//Ternary Operation (expression?true:false)
//get marks < 70
let result1 = salaries.reduce((acc,ele) => acc<ele?acc:ele);
console.log(result1);

//Find Element
//find 23
let result2 = salaries.find((ele) => ele === 200);
console.log(result2);

//FindIndex
let result3 = salaries.findIndex((ele) => ele === 200);
console.log(result3);

//Student'
let students = [
    { sno : 1, name : "ravi", age : 21},
    { sno : 2, name : "mani", age : 19},
    { sno : 3, name : "manoj", age : 15},
    { sno : 4, name : "madhu", age : 30},
];

//find students age less than 20
let result4 = students.filter((stu) => stu.age<20);
console.log(result4);

//add or increment age by 2 years for manoj
let result5 = students.map((stu) => {
    if(stu.name === "manoj") {
        stu.age+=2;
    }
    return stu;
});
console.log(result5);

//find sum of ages of all the students
let sum = students.reduce((acc,stu) => acc+stu.age,0);
console.log(sum);
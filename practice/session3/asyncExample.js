console.log("Person-1 ordered biryani");

setTimeout(() => {
    console.log("Person-1 received biryani");
}, 5000);

console.log("Person-2 ordered curd rice");

setTimeout(() => {
    console.log("Person-2 received curd rice");
}, 2000);

console.log("Person-3 ordered juice");

function h() {
    console.log("Person-3 receievd juice");
}

setTimeout(h, 1000);

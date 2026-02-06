// setInterval(() => {
//     let date = new Date();
//     console.log(date.getSeconds());
// }, 1000);


//Promise  -> pending, fulfilled, reject  - 3 States

//Producer creates Promises
const hi = new Promise((fulfilled, reject)=>{
    fulfilled();
    // reject();
}).then(() => {
    console.log("fulfilled");
}).catch(() => {
    console.log("Rejected");
});


//Ravi made promise to Kiran that the will call him after 10 min

let futureavailability = true;

//Create promise(Kiran)
let promiseObj = new Promise((fulfilled, reject) => {
    setTimeout(() => {
        if(futureavailability === true) {
            fulfilled("Hello frd, how are you");
        }else{
            reject("Sorry...");
        }
    }, 5000);
})


//consume promise(Ravi)
promiseObj.then((message) => {
    console.log(message);
}).catch((e) => {
    console.log(e);
});

//Latest version of Promise(async, await)

// async function consumePromise() {
//     let res = await promiseObj();
//     console.log(res);
// }

// consumePromise();


let marks = 100;

let favourite = new Promise((fulfilled, reject) => {
    if(marks === 100) {
        fulfilled("Hey success, You acheived");
    }else{
        reject("Better lick next time");
    }
})

favourite.then((msg) => {
    console.log(msg);
}).catch((err) => {
    console.log(err);
});

let data = fetch("https://jsonplaceholder.typicode.com/posts");
data.then(msg => console.log(msg));
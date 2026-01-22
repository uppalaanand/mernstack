// async function name() {
//     await fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((pro) => pro.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }

// name()

async function name() {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await res.json();
    console.log(data);
}

name()
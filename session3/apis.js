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


{
    userId: 1;
    id: 7;
    title: 'magnam facilis autem';
    body: 'dolore placeat quibusdam ea quo vitae\n' +
      'magni quis enim qui quis quo nemo aut saepe\n' +
      'quidem repellat excepturi ut quia\n' +
      'sunt ut sequi eos ea sed quas'
}
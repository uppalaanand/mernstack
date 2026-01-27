// Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
// -------------------------------------------------------
// 🧪 Given Data:
const user = {
    id: 101,
    name: "Ravi",
    preferences: {
        theme: "dark",
        language: "en"
    }
};

const discount = {...user};

// 🎯 Task
//     1. Create a shallow copy of user
let ShallowCopy = {...user};
//     2. Change:
//           i. name in the copied object
ShallowCopy.name = "Anand";
//           ii. preferences.theme in the copied object
ShallowCopy.preferences.theme = "light";
//           iii .Log both original and copied objects
console.log(user);
console.log(ShallowCopy);
//           iv. Observe what changes and what doesn’t



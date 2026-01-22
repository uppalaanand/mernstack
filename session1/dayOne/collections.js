// MODULE-1 :USER PROCESSING ENGINE
const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];
//   -> Get only active users
let activeUsers = users.filter((e) => e.active === true);
console.log(activeUsers);
//   -> Extract names of active users
let namesOfactive = activeUsers.map((e) => e.name);
console.log(namesOfactive);
//   -> Check if any admin exists
let exists = activeUsers.map((e) => {
    if(e.role === 'admin') {
        return true;
    }
});
console.log(exists);
//   -> Find user by id
let findById = users.filter((e) => e.id === 1);
console.log(findById);
//   -> Deactivate a user immutably

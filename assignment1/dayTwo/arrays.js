//Arrays

let skills = ['html', 'css', 'javascript'];

//Accessing elements(destructurs)
let [a,b,c] = skills;
console.log(a);

//Inserting 
//insert begin
skills.unshift('angular');
console.log(skills);
//insert end
skills.push("mani");
console.log(skills);
//insert middle
//skills.splice(index, delete, element)
skills.splice(2, 0, 'phone');
console.log(skills);

//Delete
//delete begin
skills.shift();
console.log(skills);
//delete end
skills.pop();
console.log(skills);
//delete in between
skills.splice(1,1);
console.log(skills);
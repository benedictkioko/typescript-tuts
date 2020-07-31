// special array with exact elements
//  role: [number, string]

const person = {
  name: "Benedict",
  age: 28,
  role: [2, "author"], // tuple type
};

person.role.push("admin");
person.role[1] = 10;

console.log(person.name);

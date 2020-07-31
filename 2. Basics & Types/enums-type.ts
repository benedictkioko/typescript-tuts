//  Enums assign labels to numbers

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Benedict",
  age: 28,
  role: Role.ADMIN,
};

// check if role is admin
if (person.role === Role.ADMIN) {
  console.log("is admin");
}

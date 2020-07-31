//  Enums assign labels to numbers
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Benedict",
    age: 28,
    role: Role.ADMIN
};
// check if role is admin
if (person.role === Role.ADMIN) {
    console.log("is admin");
}

const nations = ["Nepal", "USA", "Japan", "Australia"];

//const newList= nations; //shallow copy
const newList = [...nations];
//spread operator, still wouldn't work on a nested objects
//solution: structured clone
console.log(newList);

const userList = [{ name: "A" }, { name: "B" }];
//const newUserList=[...userList];
//shallow copy, since the reference of object is copied and not the object itself

const newUserList = structuredClone(userList);
newUserList[0].name = "Z";
console.log(newUserList);
console.log(userList);

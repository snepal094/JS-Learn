//? find
//finds the first item in the array which satisfies the condition
//~filter
//returns a value, not array
//if any item does not satisfy the condition, it returns undefined

const numList = [-15, 25, 10, 55, -95, 63, 75];

//!EXAMPLE 1
//? find item greater than 20

const value = numList.find((item, index, self) => {
  if (item > 20) {
    return item;
  }
});

// const value = numList.find((item) => item > 20);

console.log(value);
//loop stops after finding one item

//!EXAMPLE2
//?find the user whose email is "sam@gmail.com"
const userList = [
  {
    id: 1,
    name: 'Smriti',
    email: 'smriti@gmail.com',
  },
  {
    id: 2,
    name: 'Shubham',
    email: 'suv@gmail.com',
  },
  {
    id: 3,
    name: 'Samundra',
    email: 'sam@gmail.com',
  },
  {
    id: 4,
    name: 'Utsarga',
    email: 'uts@gmail.com',
  },
  {
    id: 5,
    name: 'Smarika',
    email: 'smk@gmail.com',
  },
];

const requiredUser = userList.find((item) => {
  return item.email === 'sam@gmail.com';
});

/*
const requiredUser = userList.find((item) => item.email === "sam@gmail.com");
*/

// console.log(requiredUser);

//?same question, but find index of that item
const requiredUserIndex = userList.findIndex(
  (item) => item.email === 'sam@gmail.com'
);
// console.log(requiredUserIndex);

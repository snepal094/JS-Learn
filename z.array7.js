//? every, some
//always gives a boolean value

const ageList = [11, 18, 38, 49, 9, 8];
//?every

//check if all users are adults or not
/*
let allAdult = true;
ageList.forEach((item) => {
  if (item >= 18) {
    allAdult = false;
  }
});
console.log(allAdult);
*/

//same thing using every:
//if every value satisfies the condition: true, else: false
//loop stops if one element gives false result
const allAdult = ageList.every((item) => item >= 18);
console.log(allAdult);

//check if any user is adult
//some: if any one element satisfies the condition: true. else, false
//loop stops when one element gives true result
const anyAdult = ageList.some((item) => item >= 18);
console.log(anyAdult);

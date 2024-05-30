//look up sir's github: log of codes done in class

/*Data Types:
string: "", '', ``
number
boolean
undefined
null
object
bigInt: large decimal numbers
symbol
*/

//STRING
let userName = "";
console.log("userName= ", userName, typeof userName);

let user = "apple321";
console.log("user= ", user, typeof user);

//NUMBER
//float, int not specified in Number data type
//can specify a number to be float
let x = 1;
console.log("x= ", x, typeof x);

y = 5 / 0;
console.log("y= ", y, typeof y);

z = Infinity;
console.log("z= ", z, typeof z);

a = "abc" / 2; //NaN= Not a Number
console.log("a= ", a, typeof a);
//typeof a= Number, because NaN is considered a numeric value in JS

//BOOLEAN
let isSunnyDay = false;
console.log("isSunnyDay= ", isSunnyDay, typeof isSunnyDay);

//UNDEFINED: js cannot guess the datatype
let g; //can do just declaration as well
console.log("g= ", g, typeof g);

//NULL
let h = null;
console.log("h= ", h, typeof h);
//shows datatype to be object, which is not essentially correct, (correct ans: null) it is a historical bug

//undefined: guessed by JS, null: empty value secured by a developer

//datatypes covered= PRIMARY

//OBJECT: datatypes grouped to form a datatype (object)
const studentDetail = {
  firstName: "Suyasha",
  lastName: "Nepal",
  address: "Chabahil",
};
console.log("studentDetail= ", studentDetail, typeof studentDetail);

//ARRAY: not a separate datatype, also an object
//can contain mixed datatypes
const numList = [1, 2, 3, 4, 5, 6];
console.log("numList= ", numList, typeof numList);

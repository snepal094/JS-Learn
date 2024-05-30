//OPERATOR: symbol which has a certain meaning

//Arithmetic Operators: +, -, *, /, **, %
//Assignment Operator
//Logical Operator
//Comparison Operator

console.log(Math.floor(25 / 2));
//ceil, round, pow, etc:Math library

//ASSIGNMENT OPERATOR: =, +=, -=, *=, %=, /=, **=

//COMPARISON OPERATOR: ==, ===, !=, !==, <, <=, >, >=
/*
=== : strictly equal, eg. 5(int) and '5' not equal, checks value + datatype
==: checks only value. 5(int) and '5' are equal, type conversion is done before comparison
*/
x = 5;
y = "5";
console.log("x==y ", x == y);
console.log("x===y ", x === y);

let m = "A"; //ASCII= 67
let n = "a"; //ASCII= 96
console.log("m===n ", m === n); //uses ASCII code for string-string comparison
console.log(
  "m.toLowerCase === n.toLowerCase ",
  m.toLowerCase === n.toLowerCase
);

//LOGICAL OPERATOR: AND(&&), OR(||), NOT(!)
//AND ko short circuit: 0 dekhne bitikai baki check garnu parena, result=0
//OR ko short circuit: 1 dekhne bitikai result=1

console.log(true && false);
console.log(true || false);
console.log(!true);

//syntax: let variableName= value
//? to change the color of comment
//look up better comments extension doc for other colors, highlights, etc.

let studentName = 'Suyasha Nepal';
console.log(studentName);

/*
naming convention:
1. variable name cannot be reserved keyword such as let, for, while, if, switch, etc.
2. variable name cannot start with numbers
3. variable name cannot contain special characters except _ and $
4. variable name should be descriptive
5. variable name should be camel case, eg: studentRollNo, camelCase
*/

let _ = 5;
let $ = 'abcd';
console.log(_);
console.log($);

/*constants:
similar naming conventions, except universal constants
universal constants are written in upper case
eg: const x= 7;
eg: const PI= 3.14; (or extract value from a built-in object: Math)
can't modify the value of a constant
*/

const PI = Math.PI;
console.log(PI);

/*official site of js: MDN
look it up for info on libraries*/

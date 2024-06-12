//? in JS, as soon as a function is detected, it is placed at the top of the code
//? only then does execution start
//? this dosen't work on C, C++ n all

// sayHello();

// function sayHello() {
//   console.log("Hello");
// }

//? BUT this dosen't work on arrow functions
//? i.e. no hoisting for functions defined using arrow function
//? dosen't pull up
// sayHi();

// let sayHi = () => {
//   console.log("Hi");
// };

//? only definition is hoisted up

//? var ma ni hoisting huncha, but undefined huncha
//? tei bhayera var use gardainau
// var x;
// console.log(x);
// x = 5;

//? let ma error aucha
// console.log(y);
// let y = 10;

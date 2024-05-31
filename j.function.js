//function follows DRY principle: Don't Repeat Yourself
//must be called in order to be executed

/*objectives: 
code reusability
to reduce code redundancy
modularity
*/

//syntax
/*
function functionName(arguments){
    code
}
*/

//function name must start with a verb: isTrue, isPrime, etc.

function sayHello(userName) {
  //(userName) is the receiver
  console.log(`Hello ${userName}.`);
}

sayHello("Suyasha"); //("value") is like a doorway to the function

function getSum(x, y) {
  sum = x + y;
  return sum;
}

//bhitra chirna lai door (), baira niskina lai return

//?arrow function
//treats a function like a variable
//typeof functionName= function
//same meaning as the prev. syntax, but shorter

const sayHi = (studentName = "user") => {
  //default value
  console.log(`hi ${studentName}!`);
};
sayHi();
sayHi("Suyasha");

const sayHii = (studentName) => {
  studentName = "Ram"; //overwrite garna milcha, output= hi Ram.
  console.log(`hii ${studentName}.`);
};
sayHii("Suyasha");

//advantage of arrow function= one liner (although prettify makes it look otherwise)

const doProduct = (num1, num2) => num1 * num2;
console.log(doProduct(5, 6));

//?WAF that checks whether a given number is odd or even
const isOddEven = (num) => (num % 2 === 0 ? "Even" : "Odd");
console.log(isOddEven(9));

//?WAF to check polarity of a number
//?function should return "positive"/"negative"/"zero"
const checkPolarity = (p) => (p > 0 ? "positive" : p < 0 ? "negative" : "zero");
console.log(checkPolarity(10));

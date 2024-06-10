//? Use default value for a function which divides two numbers.
const divide = (a = 24, b = 2) => a / b;

console.log(divide(10, 5)); // 10/5= 2
console.log(divide(10)); // 10/2= 5, first default argument is replaced
console.log(divide()); // 24/2= 12

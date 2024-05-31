// iteration
// loop
//  to execute the same code multiple times

//? for
//? while
//? do..while

//? for loop
//syntax:
/*
for(initial value; condition; increment/decrement){
    code
}
*/

//*example: to print numbers from 100 to 50
/*for (let i = 100; i >= 50; i--) {
  console.log(i);
}
*/

//*example: if a number is prime or not
//take a number greater than 1

let num = 37;
let isPrime = true;

for (let i = 2; i < num; i++) {
  let remainder = num % i;

  if (remainder === 0) {
    isPrime = false;
    break;
  }
}

console.log(isPrime ? "Prime Number" : "Composite Number"); //truthy falsy

//? while loop
//syntax:
/*
initial value
while(condition){
  code
  increment/decrement
}
*/

// let x = 1;
// while (x <= 10) {
//   console.log(x);
//   x = x + 1;
// }

//? do...while
//unlike for and while loops, it runs at least once, irrespective of the condition
//syntax:
/* 
do{
  code
  increment/decrement
}while(condition);
*/

let i = 6;
do {
  console.log(i);
  i++;
} while (i <= 5);
//i<=5 is false, but runs once nevertheless

//? synchronous: existing or occurring at the same time (similar time)
//? asynchronous: not existing or occurring at the same time

//node: single-threaded, i.e. uses a single thread of the CPU
//node: non-blocking, does not block code execution
//real world scenario of code blocking (time consuming tasks):
//for loop for a billion times, image processing, API request, db operation

//u: ultra power saving
//k: unlocked (general frequency bhanda badhi ma chalauna parey)
//H: high performance

//!EXAMPLE 1

// console.log('hi');

// setTimeout(() => {
//   console.log('Timeout');
// }, 2000); //2000=2 seconds

// console.log('hello');

//to understand how this works, look up: console(screen), call stack, event loop (between call stack and queue), queue
//if stack is empty, event queue pushes its contents (this time, setTimeout) to the stack to execute

// Call stack: The place where JavaScript keeps track of what function is currently running. Functions are added ("pushed") to the stack when called and removed ("popped") when they finish.
// Event loop: A mechanism that constantly checks if the call stack is empty. If it is, it takes the first task from the event queue and pushes it onto the call stack to run.
// Queue (event/task queue): Where asynchronous tasks (like setTimeout, user events, or promises) wait until the call stack is empty.

//!EXAMPLE 2

console.log('Nepal');

setTimeout(() => {
  console.log('Timeout 1');
}, 5000);

setTimeout(() => {
  console.log('Timeout 2');
}, 0);

console.log('South Africa');

//!EXAMPLE 3
/*
const multiply = (num1, num2) => {
  return num1 * num2;
};

const square = (n) => {
  const squaredNumber = multiply(n, n);
  return squaredNumber;
};

const printNumber = () => {
  const result = square(4);
  console.log(result);
};

printNumber();
*/

//!EXAMPLE 4
//?recursive function
/*
const sayHi = () => {
  sayHi();
};

sayHi();
*/
//the error this gives: maximum call stack size exceeded. meaning: as it sounds

//? synchronous: existing or occurring at the same time (similar time)
//? asynchronous: not existing or occurring at the same time

//node: single-threaded, i.e. uses a single thread of the CPU
//node: non-blocking, does not block code execution
//real world scenario of code blocking (time consuming tasks):
//for loop for a billion times, image processing, API request, db operation

//u: ultra power saving
//k: unlocked (general frequency bhanda badhi ma chalauna parey)
//H: high performance

console.log("hi");

setTimeout(() => {
  console.log("Timeout");
}, 2000); //2000=2 seconds

console.log("hello");

//to understand how this works, look up: console(screen), call stack, event loop (between call stack and queue), queue
//if stack is empty, event queue pushes its contents (this time, setTimeout) to the stack to execute

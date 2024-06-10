//? Why do we use spread and rest operators?
//Convenience: They provide concise and readable syntax for common tasks like copying arrays/objects, passing multiple arguments to functions, etc.
//Immutability: They help in creating new arrays/objects without mutating the original ones.
//Flexibility: They offer flexibility in working with arrays/objects by simplifying complex operations like concatenation, spreading, and gathering elements.
//Compatibility: They enhance compatibility with functions and APIs that expect arrays or objects to be passed in a specific format.

//!Spread Operator
//1. Array Spreading: It allows you to expand an iterable (like an array) into individual elements.
const numbers1 = [1, 2, 3];
const expandedNumbers = [...numbers1, 4, 5];
console.log(expandedNumbers); // Output: [1, 2, 3, 4, 5]

//2. Object Spreading: It can be used to pass an array or object as individual arguments to a function.
const person = { name: "Alice", age: 30 };
const updatedPerson = { ...person, age: 31 };
console.log(updatedPerson); // Output: { name: "Alice", age: 31 }

//3. Function Arguments: It can be used to pass an array or object as individual arguments to a function.
const numbers3 = [1, 2, 3];
console.log(Math.max(...numbers3)); // Output: 3

//4. Array/Object Concatenation: It can be used to concatenate arrays or merge objects.
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const mergedArray = [...arr1, ...arr2];
console.log(mergedArray); // Output: [1, 2, 3, 4, 5]

//! Rest Parameter (...)
//1. Function Parameters: It allows functions to accept an indefinite number of arguments as an array.

//2. Destructuring: It can be used to capture multiple elements of an array or object into a single variable.
const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // Output: 1
console.log(rest); // Output: [2, 3, 4, 5]

//3. Object Destructuring: It can be used to capture the remaining properties of an object into a single variable.
/*
const { name3, ...rest } = { name3: "Alice", age3: 30, city: "New York" };
console.log(name3); // Output: "Alice"
console.log(rest); // Output: { age: 30, city: "New York" }
*/

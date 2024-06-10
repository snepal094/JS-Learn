//object properties
//Assignment (one.js) (explained in class)
//? 1. structured data: key-value pair ==> group of primary data types ===

//?2. encapsulation: hide data, controlled access

const obj = {};

Object.defineProperty(obj, "name", {
  value: "Shubham",
  enumerable: true, //default: false
  writable: true, //default: false
  configurable: true, //default: false
});

console.log(obj.name);

//Object.defineProperty is a method used to define or modify a property on an object with specific characteristics.
//It allows for fine-grained control over the behavior of properties.

//?enumerable: Determines if the property shows up during enumeration of the properties on the object (e.g., in for...in loops or Object.keys).
//? writeable: Determines if the property’s value can be changed.
//? configurable: Determines if the property can be deleted from the object and if its attributes (enumerable, writable, configurable) can be modified.

//shortcut to select (all of) a specific word in a file and edit: select+ctrlD

//?3. dynamic structure
//we can add, edit, update and delete property easily

const laptopDetails = {
  name: "F15",
  brand: "Asus",
  ram: 16, //GB,
  ssd: 512, //GB
};

let key = "ram";
console.log(laptopDetails[key]); //only square brackets can be used here to access members

//Bracket notation allows you to use variables to dynamically access properties of an object.
//This is not possible with dot notation.

//Dot notation is used for static property access where the property name is known and hardcoded.
//You cannot use a variable to access a property with dot notation.
//For example, laptopDetails.key would look for a property named key, not the value stored in the variable key.

//? 4. abstraction: hide process

//?5. modular, better organization of data

//GK: use the lowest unit of measurement when storing values
//Try adding 0.1 and 0.2
/*Reason: every number is converted to binary for calculation
Precision and Accuracy: Avoids issues with floating-point precision.
Avoiding Rounding Errors: Ensures exact arithmetic operations.
Simplifying Calculations: Simplifies arithmetic by using integer operations.
*/

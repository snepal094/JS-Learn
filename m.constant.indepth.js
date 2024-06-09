//in js, constant is that entity which cannot be reassigned

const x = 7;
//x= 10 gives error (Assignment to constant variable)

//?mutation: process of change
//?to mutate: to change
//?mutable: changeable
//?immutable: unchangeable

//in the scope of constants:
//? primary data type(string, number, boolean, undefined, null): can't be reassigned, thus immutable
//whatever is understood of constants, is true for primary data types

//? non-primary data type(object): can't be reassigned, but mutable
//can change the value of fields within an object

const isDeveloped = false;
//isDeveloped= true gives error

const phoneDetails = {
  brand: "Samsung",
};

//dosen't throw error
phoneDetails.brand = "Apple";
console.log(phoneDetails);

//throws error:
//phoneDetails = true; //can't be reassigned
//can't directly assign value to phoneDetails (which is const)

//Object.freeze makes even objects immutable
const obj1 = Object.freeze({
  name: "Rohan",
});

//can't perform the following when we use Object.freeze
//obj1.name="Ram";
//or
/*
obj1 = {
  name: "A",
};
*/

const objA = {
  name: "A",
};

const objB = {
  name: "A",
};

console.log(objA);
console.log(Object.entries(objA));
console.log(Object.keys(objA));

const objAKeys = Object.keys(objA);
const objBKeys = Object.keys(objB);

console.log(objAKeys, objBKeys);

console.log(Object.values(objA));

//to search in this file: Ctrl+F
//to search in the whole project: Ctrl+Shift+F

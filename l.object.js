//objects can be created directly or by using classes
//direct creation is explored here

//object= key-value pair
//key==property==field
//organized collection of primary data types
//key-value pairs of one object are stored close to each other
//uniquely stores key-value pairs in different memory units, even if they might have the same value
//if an object isn't used throughout the program, the space occupied by it is discarded due to its garbage collection mechanism.

//typeof object= object

const studentDetails = {};
console.log(studentDetails, typeof studentDetails);

const obj1 = {};
const obj2 = {};
console.log(obj1 === obj2);
//false (even though they might have the same values)
//because obj1 is in one part of the memory space, obj2 in another

let student1 = {
  //student1= main object
  firstName: "Rohan",
  lastName: "Nepal",
  isGraduated: true,
  address: {
    permanentAddress: "Baneshwor", //address= nested object
    temporaryAddress: "Sydney",
  },
};

console.log(student1.address); //displays address which is an object

//js is runtime based, tries its best not to throw errors
//might return incorrect values because of this reason
console.log(`My name is ${student1}.`);

//to access values in objects:
//dot operator
//square bracket operator

//dot
console.log(`My name is ${student1.firstName}.`);
console.log(student1.lastName);
console.log(student1.address.permanentAddress);

//square bracket
//must convert key to string
console.log(student1["isGraduated"]);
console.log(student1["address"]["temporaryAddress"]);
//can also do:
console.log(student1["address"].temporaryAddress);
console.log(student1.address["temporaryAddress"]);

//?CRUD
//C: Create/Add
//R: Read/Retrieve: dot, square, and/or hybrid of both for nested objects
//U: Update/Edit
//D: Delete/Remove

//?Upsert (Update or Insert)
//existing field (eg: firstName) is updated
//non-existing field (eg: age) is inserted
//order of key-value pairs dosen't matter
//update firstName of student1 from Rohan to Roshna
//use = (assignment operator) and not :
student1.firstName = "Suyasha";
console.log(student1.firstName);

student1.age = 22;
console.log(student1);

student1["address"]["permanentAddress"] = "Chabahil";
console.log(student1["address"]["permanentAddress"]);
console.log(student1);

let nationDetail = {
  name: "Nepal",
  population: "3 crore",
  perCapita: 1400,
};

//Delete:
console.log(nationDetail);
delete nationDetail.name; //frees the memory unit occupied by name: "Nepal"
//delete nationalDetail["name"]
console.log(nationDetail);
//nationDetail.name= undefined ==> memory space is also occupied and value is not inserted

const cupDetails = {
  name: "Water Cup",
  brand: "Serve Well",
  color: "Pink",
  color: "Green",
  name: "Tea Cup",
};

console.log(cupDetails);
//if there are two fields with the same name, the latest value replaces the value assigned first
//overwrites the value used previously

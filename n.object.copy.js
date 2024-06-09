const print = (valuesarg) => {
  console.log(valuesarg);
};

const student1 = {
  name: "Sandhya",
  college: "KEC",
  isGraduated: false,
  image: null,
  address: {
    permanentAddress: "X",
    temporaryAddress: "Y",
  },
};

print(student1);

const student2 = student1; //shallow copy (reason below)
student2.name = "Ram";
print(student2);
print(student1); //displays the same output as print(student2), which is not expected since we have made no changes to student1
//? why?
//const student2 = student1; put the address of student1 to student2, i.e. memory space of student2 is assigned with &student1
//saves memory, since student2 is only equipped with one data (address of student1), instead of each and every field of student1
//RAM only has one object, which is being referred to by both student1 and student2

//? spread operator(...)

//Example 1
const studentA = { ...student1 }; //syntax= 3 dots
//const studentA= {studentA}; cause an objects to insert into an object
//new curly bracket= new object has been created
//spreads the contents of student1 to studentA
console.log(studentA);
studentA.name = "Harry";
console.log(student1);
//dosen't change the value in student1, when we changed the value in studentA
//why? cuz we used spread operator, the contents are copied (or spread) and not the memory location of student1

//Example 2: shallow copy WHILST using spread operator
//copies value of a primary data type, but not that of non-primary
const studentB = { ...student1 };
studentB.address.permanentAddress = "A";
console.log(studentB);
console.log(student1); //changes the value of student1  cuz of nested object

//?deep copy
//structuredClone

const studentC = structuredClone(student1);
studentC.address.permanentAddress = "Q";
console.log(studentC);
console.log(student1); //change in studentC dosen't affect the original object(student1)

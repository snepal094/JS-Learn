//? Give an example of a spread operator to copy objects and arrays.

//To copy objects:
const myBook = {
  name: "The Book Thief",
  author: "Markus Zusak",
  language: "English",
  dateOfPublication: "2005",
  noOfChapters: 88,
};

const myCopy = { ...myBook };

console.log(myCopy);

//To copy arrays:
let myArray = [94, "KEC", "Dhapakhel"];
const myArrayCopy = [...myArray];
console.log(myArrayCopy);

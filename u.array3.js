//? map, filter, find, findIndex, reduce
//map, filter: VI
//loop based

let studentList = ["Saugat", "Shubham", "Suyasha", "Smriti", "Utsarga", "Unik"];

//? map
//returns new array
//use: to alter the values of array
//takes callback function as argument
//original array length===returned array length

/*
const newStudentList = studentList.map((item, index, array) => {
  //3 parameters in order
  //console.log(item, index, array);
  return "a";
});
console.log(newStudentList);
*/

//!EXAMPLE 1
const newStudentList = studentList.map((item, index, array) => {
  let upperCaseName = item.toUpperCase();
  return upperCaseName;
});

console.log(newStudentList);

//!EXAMPLE 2
const priceList = [25, 35, 11, 9, 5, 99];
//increase price of every item by 3 dollars
let newPriceList = priceList.map((item) => {
  newPrice = item + 3;
  return newPrice;
});

/*same code but shorter(aesthetic alternative):
let newPriceList= priceList.map((item)=> {item+3});
*/

console.log(newPriceList);

//? array of object
const productList = [
  {
    id: 1,
    name: "Night Vision Glasses",
    price: 5,
  },
  {
    id: 2,
    name: "Gloves",
    price: 7,
  },
  {
    id: 3,
    name: "Helmet",
    price: 25,
  },
];

//increase price of each item by 10% due to recent raise in taxes
//change in original array= map must be used
let newProductList = productList.map((item) => {
  const newPrice = item.price + (10 / 100) * item.price;
  //return newPrice; //don't wanna lose name and id, so return the entire object and not just price
  return {
    ...item, //purano object jasta ko tastai
    price: newPrice, //replaces old price in item
  };
});

console.log(newProductList);

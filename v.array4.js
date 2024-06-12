//? filter (there is some condition satisfied)
// filters out unwanted values of an array
//returns new array
//returned array length is usually not equal to original array length
//it selects/deselects value
//it does not change the contents of the array

//!EXAMPLE 1
const numList = [1, 10, 33, -6, -99, 97, -100];
//extract only positive numbers from numList
const newNumList = numList.filter((item, index, array) => {
  //console.log(item); //simply a loop
  //returned nabhetesi map kei value audaina(empty)
  return item > 0; //return pachi ko value: boolean
  /* if (item>0) return smth; jastai */
});

/* equivalent code:
const newNumList= numList.filter((item)=>item>0);
*/
console.log(newNumList);

//!EXAMPLE 2
//find all items whose price is less than 10 dollars
//select: filter
//new array length !== original array length : filter (not always)

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

/*
const newProductList = productList.filter((item, index, self) => {
  return item.price < 10;
});
console.log(newProductList);
*/

//aesthetic alternative
const newProductList = productList.filter((item) => item.price < 10);
console.log(newProductList);

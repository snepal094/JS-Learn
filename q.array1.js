//collection of data

//?in statically typed language: C, C++, java
//array: a collection of the same data type

//?in dynamic languages: js, python
//array: a collection of data of any type

const x = [1, "hello", null, undefined, { name: "Nepal" }];
console.log(x, typeof x);

//?real world use case: we mostly use array with the same data type

const temperatureList = [10, 20, 28, 30];
const nations = [
  "Nepal",
  "Sri Lanka",
  "Netherlands",
  "South Africa",
  "Bangladesh",
];

//values in an array can be accessed using index
//index always starts from 0
const laptopBrands = ["Asus", "MSI", "Apple", "Acer", "Dell"];
console.log(`First brand: ${laptopBrands[0]}.`);

console.log(laptopBrands.length);
//length= not a function, but a property

//LOOPING
const bakeryItems = ["black forest", "white forest", "red velvet", "blueberry"];
for (let i = 0; i <= bakeryItems.length - 1; i++) {
  console.log(bakeryItems[i]);
}

//key of an array= index

const obj = {
  0: "Apple",
  1: "Banana",
  2: "Orange",
  3: "Mango",
};

//? is equivalent to:
//const obj=["Apple", "Banana", "Orange", "Mango"];
//which is why the data type of an array= object

console.log(typeof obj);
console.log(obj[0]);

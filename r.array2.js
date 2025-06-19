//Methods in array
//method: function of a class

//push, pop, shift, unshift, reverse, includes, slice, splice, sort

//?push: to add element(s) to the end of array
//?pop: to remove last element from the array

// const numList = [10, 11, 12];
// numList.push(13, 14, 15);
// console.log(numList);

// numList.pop();
// console.log(numList);

//? shift: to remove first item from array
//? unshift: to add item(s) at the starting of the array

// let studentList = ['Saugat', 'Shubham', 'Samundra', 'Smriti'];

// studentList.shift();
// console.log(studentList);

// studentList.unshift('Suyasha', 'Utsarga', 'Unik');
// console.log(studentList);

//?reverse: reverses order of items in array
// const priceList = [15, 25, 35, 45];
// priceList.reverse();
// console.log(priceList);

//toReversed(): returns new priceList, dosen't affect priceList:
// const newPriceList = priceList.toReversed();
// console.log(newPriceList);

//?includes: checks whether array contains a specific value or not
//results in boolean(true or false)

// const laptops = ['Macbook M3', 'TUF F15', 'Nitro 5', 'A15'];
// const result = laptops.includes('A15'); //===
// console.log(result);

//?real world use case example:
// const currentRoute = '/user/edit/1'; //string is an array in itself
// const result1 = currentRoute.includes('edit');
// console.log(result1);

//?slice: to get a portion of an array from the original array
//returns a new array (hence no method like toSlice() exists) with a portion of the original array
//?syntax: slice(), slice(start,end), slice(start)

//slice(): shallow copy (spread wala, i.e. address of the object inside the array is copied):
// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant', { name: 'A' }];
//animals isn't affected
// const newList = animals.slice();
// console.log(newList);
// newList[5].name = 'Z'; //shallow copy
// console.log(animals); //name: "Z"

//slice(start, end)
// const newList1 = animals.slice(1, 4); //includes [1] but not [4]
// console.log(newList1);

//slice(start)
// const newList2 = animals.slice(2); //includes [2] and above
// console.log(newList2);

//?splice: remove or replace existing items
//changes original array
//syntax: splice(start), splice(start,end), splice(startIndex, deleteItemsNumber, items)

//splice(start)
// const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
// console.log(months);
// months.splice(3); //[3] and above are removed
// console.log(months);

//splice(start, end)
// months.splice(2, 2); //first param: startIndex, second param: noOfItems
//starting from [2] (startIndex), 2 (noOfItems) items are removed
// console.log(months);

// months.splice(4, 0, 'Jul', 'Aug', 'Sept'); //start from 4, delete nothing(0), add said contents
//adds contents from the point it is at after deletion
// console.log(months);

// months.splice(1, 3, 'hehe', 'huhu');
// console.log(months);

//? sort
//!STRING DATA TYPE
//ascending sort:
// const studentList1 = ['Deepak', 'Abhishek', 'Yashika', 'Bishal', 'Saugat'];
//studentList.sort();
// sortedStudentList = studentList1.toSorted(); //method, dosen't change original studentList1
// console.log(sortedStudentList);

//descending sort:
// studentList1.sort().reverse();
// console.log(studentList1);

//!NUMBER DATA TYPE
//numbers are sorted based on their numeric values rather than their string representations.

let numList1 = [1, 29, 36, 98, 100, 7];
// numList1.sort();
// console.log(numList1); //these methods sort numbers acc. to string representations

//need a different way than string sort

//callback function: function sent as a parameter to another function (sort)

//ascending numeric sort: a-b
ascendingSortNumber = numList1.sort((a, b) => a - b);
console.log(ascendingSortNumber);

//descending numeric sort: b-a or reverse ascending sort
// descendingSortNumber = numList1.sort((a, b) => a - b).reverse();
//or: numList1.sort((a, b) => b - a);
// console.log(descendingSortNumber);

//? reduce

const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//forEach: dosen't return anything, just loop

/*
let sum = 0;
numList.forEach((item, index, self) => {
  sum = sum + item;
});

console.log(sum);
*/

//same thing using reduce:
const total = numList.reduce((sum, item, index, array) => {
  sum = sum + item;
  return sum;
}, 0 /*0: initial value of sum */);
console.log(total);

const Total = numList.reduce((product, item, index, array) => {
  product = product * item;
  return product;
}, 1);
console.log(Total);

/*
const Total = numList.reduce((product, item) => product * item, 1);
console.log(Total);
*/

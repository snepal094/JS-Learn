//? array destructure

const numList = [11, 45, 47];

// console.log(numList[0]);
// console.log(numList[1]);
// console.log(numList[2]);

const [a, b, c] = numList;

//inclusion: a->b->c
//if you aren't c, simply don't include it
//if you are using c but not b, [a,_,c] garna milcha
//and so on

let sum = a + b + c;
console.log(sum);

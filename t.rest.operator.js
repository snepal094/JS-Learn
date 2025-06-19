//? rest operator: ...rest
//both are represented by ...
//?BUT
//spread: spreads contents
//rest: collects contents

//getSum has at least 2 arguments
const getSum = (a, b, ...otherValues) => {
  //console.log(otherValues);
  const total = otherValues.reduce((total, item) => {
    // see x.array6.js for reduce
    total = total + item;
    return total;
  }, 0);
  return total + a + b;
};

const result = getSum(1, 2, 3, 4, 5);
console.log(result);

const getProduct = (...otherValues) => {
  //otherValues= array
  let product = otherValues.reduce((total, item) => {
    total = total * item;
    return total;
  }, 1);
  return product;
};

const result1 = getProduct(1, 2, 3, 4, 5, 6);
console.log(result1);

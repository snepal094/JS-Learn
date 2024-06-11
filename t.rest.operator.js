//? rest operator: ...rest
//spread: spreads contents
//rest: collects contents

//getSum has at least 2 arguments
const getSum = (a, b, ...otherValues) => {
  //console.log(otherValues);
  const total = otherValues.reduce((total, item) => {
    total = total + item;
    return total;
  }, 0);
  return total + a + b;
};

const result = getSum(1, 2, 3, 4, 5);
console.log(result);

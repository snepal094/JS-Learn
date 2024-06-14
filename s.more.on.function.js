//?Higher Order Function
//1. callback function: function as an argument to another function
//2. closure: function returning function

//?Callback Function
//function which is passed as an argument to another function

const getSum = (x, y, callbackfunc) => {
  let sum = x + y;
  callbackfunc(sum); //function call inside a function
};

getSum(5, 7, (value) => {
  console.log("Sum= ", value);
});

//? function returning function
//closure: function+lexical environment (surrounding environment)

const makeAdder = (x) => {
  const doSum = (y) => {
    let sum = x + y;
    return sum;
  };

  return doSum;
};

//EQUIVALENT TO: (aesthetic equivalent) (try step by step)
//const makeAdder = (x) => (y) => x + y;

const doSum5 = makeAdder(5); //doSum5 keeps the value of 5 alive
const doSum10 = makeAdder(10); //doSum10 keeps the value of 10 alive
const sum = doSum10(10);
console.log(sum);

//makeAdder is like a function making factory
//function returning function= closure

const sum1 = makeAdder(25)(5); //makeAdder(25) returns doSum()==> doSum(5)
console.log(sum1);

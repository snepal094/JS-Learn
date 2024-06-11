//?Callback Function
//function which is passed as an argument to another function

const getSum = (x, y, callbackfunc) => {
  let sum = x + y;
  callbackfunc(sum); //function call inside a function
};

getSum(5, 7, (value) => {
  console.log("Sum= ", value);
});

// TODO: function returning function
